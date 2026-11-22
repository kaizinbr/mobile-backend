/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import axios from "axios";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ username: string }> },
) {
    const { username } = await params;

    try {

        const profile = await prisma.profile.findFirst({
            where: { lowername: username.toLowerCase()},
            select: { lastfm_username: true },
        });


        if (!profile || !profile.lastfm_username) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 },
            );
        }
        console.log("lastfm_username", profile.lastfm_username);

        const lastfmResponse = await axios.get(
            `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${profile.lastfm_username}&api_key=${process.env.LASTFM_API_KEY}&format=json`,
        );

        return NextResponse.json(
            // {
            //     reviews: reviewsWithAlbumData,
            //     albunsData,
            //     totalReviews,
            //     page: pageNumber,
            //     next:
            //         pageNumber * pageSize < totalReviews
            //             ? pageNumber + 1
            //             : null,
            // },
            lastfmResponse.data,
        );
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
            { status: 500 },
        );
    }
}
