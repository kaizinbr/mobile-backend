import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";
import { getAccessToken } from "@/app/api/artists/[id]/infos/route";


export async function getAlbumLastfmInfo(artistName: string, albumName: string) {
    try {
        const lastfmResponse = await axios.get(
            `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${artistName}&album=${albumName}&api_key=${process.env.LASTFM_API_KEY}&lang=pt&format=json`,
        );
        return {
            lastfmData: lastfmResponse.data.album || null,
        };
    } catch (error) {
        console.error("Error fetching Last.fm info:", error);
        return null;
    }
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id; // 'a', 'b', or 'c'
    console.log(id);

    const cookieStore = await cookies();
    const hasCookie = cookieStore.has("spotify_token");
    let token = hasCookie
        ? cookieStore.get("spotify_token")!.value
        : await getAccessToken();

    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/albums/${id}?market=BR`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const infos = await getAlbumLastfmInfo(response.data.artists[0].name, response.data.name);


        console.log(infos);

        if (response.data.status === 429) {
            console.error("Too many requests, retrying after 2 seconds...");
            await new Promise((resolve) => setTimeout(resolve, 2000));
            token = await getAccessToken(); // Atualiza o token
            return GET(request, { params });
            

        }

        return NextResponse.json({...response.data, ...infos});
    } catch (error) {
        console.error("Erro ao buscar álbum do Spotify:", error);
        return NextResponse.json(
            { error: "Erro ao buscar álbum do Spotify" },
            { status: 500 }
        );
    }
}
