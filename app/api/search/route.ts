/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import fetchMultipleAlbuns from "@/lib/fetchMultipleAlbuns";

const getAccessToken = async () => {
    const authorization = Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID ?? ""}:${
            process.env.SPOTIFY_CLIENT_SECRET ?? ""
        }`,
    ).toString("base64");
    const data = new URLSearchParams();
    data.append("grant_type", "client_credentials");

    const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        data,
        {
            headers: {
                Authorization: `Basic ${authorization}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        },
    );
    // console.log(response.data);

    (await cookies()).set("spotify_token", response.data.access_token, {
        path: "/",
        maxAge: 3600,
        sameSite: "lax",
    });

    return response.data.access_token;
};

export async function GET(req: Request) {
    const queryParams = new URL(req.url).searchParams;
    const query = queryParams.get("q") || "";
    const type = queryParams.get("type") || "album";
    console.log(query, type);

    const cookieStore = await cookies();
    const hasCookie = cookieStore.has("spotify_token");
    const token = hasCookie
        ? cookieStore.get("spotify_token")!.value
        : await getAccessToken();

    const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${query}&type=album%2Ctrack%2Cartist&limit=20`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    const usersResponse = await prisma.profile.findMany({
        where: {
            OR: [
                { name: { contains: query, mode: "insensitive" } },
                {
                    lowername: {
                        contains: query.toLowerCase(),
                        mode: "insensitive",
                    },
                },
            ],
        },
    });

    const reviews = await prisma.rating.findMany({
        where: {
            OR: [
                { review: { contains: query, mode: "insensitive" } },
                {
                    Profile: {
                        is: {
                            name: { contains: query, mode: "insensitive" },
                            lowername: {
                                contains: query.toLowerCase(),
                                mode: "insensitive",
                            },
                        },
                    },
                },
            ],
        },
        include: {
            Profile: true,
        },
        take: 20,
        orderBy: {
            created_at: "desc",
        },
    });

    if (reviews.length === 0) {
        return NextResponse.json({
            reviews: [],
            ...response.data,
            users: usersResponse,
        });
    }

    const reviewsAlbunsIDs = reviews.map((review) => review.album_id);

    const albuns = await fetchMultipleAlbuns(reviewsAlbunsIDs.join(","));
    const albunsMap: Record<string, any> = {};
    if (!("error" in albuns)) {
        albuns.albums.forEach((album: any) => {
            albunsMap[album.id] = album;
        });
    }
    const reviewsResponse = reviews.map((review) => ({
        ...review,
        album: albunsMap[review.album_id!] || null,
    }));

    return NextResponse.json({
        reviews: reviewsResponse,
        ...response.data,
        users: usersResponse,
    });
}
