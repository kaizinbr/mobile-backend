/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";
import axios from "axios";
import { cookies } from "next/headers";

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

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("p");
        const pageNumber = page ? parseInt(page, 10) : 1;
        const pageSize = 10;
        const skip = (pageNumber - 1) * pageSize;

        const id = (await params).id; // 'a', 'b', or 'c'
        console.log(id);

        const url = new URL(request.url);
        const offset = url.searchParams.get("offset") || "0"; // Pega o valor de offset ou usa "0" como padrão
        console.log(offset);

        const cookieStore = await cookies();
        const hasCookie = cookieStore.has("spotify_token");
        const token = hasCookie
            ? cookieStore.get("spotify_token")!.value
            : await getAccessToken();

        const response = await axios.get(
            `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&limit=50&offset=${offset}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );


        return NextResponse.json(response.data);
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
            { status: 500 },
        );
    }
}
