/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

import { getAccessToken } from "@/app/api/artists/[id]/infos/route";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;

    try {
        const cookieStore = await cookies();
        const hasCookie = cookieStore.has("spotify_token");
        const token = hasCookie
            ? cookieStore.get("spotify_token")!.value
            : await getAccessToken();

        const artistsSpData = await axios.get(
            `https://api.spotify.com/v1/artists/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        console.log("Spotify data:", artistsSpData.data.name);

        const lastfmResponse = await axios.get(
            `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistsSpData.data.name}&api_key=${process.env.LASTFM_API_KEY}&lang=pt&format=json`,
        );

        return NextResponse.json(lastfmResponse.data);
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
            { status: 500 },
        );
    }
}
