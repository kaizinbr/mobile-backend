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

export async function getMusicBrainzArtist(name: string) {
    const response = await fetch(
        `https://musicbrainz.org/ws/2/artist/?query=artist:${encodeURIComponent(name)}&fmt=json`,
        { headers: { "User-Agent": "seuapp/1.0 (kaizin@kaizin.work)" } },
    );
    const data = await response.json();
    const mbid = data.artists?.[0]?.id;
    if (!mbid) return null;

    // Depois busca os detalhes completos com os links externos
    const detailResponse = await fetch(
        `https://musicbrainz.org/ws/2/artist/${mbid}?inc=url-rels&fmt=json`,
        { headers: { "User-Agent": "seuapp/1.0 (seuemail@email.com)" } },
    );
    const detailData = await detailResponse.json();
    // console.log("MusicBrainz data:", detailData);
    return detailData || null;
}

// 2. Busca descrição na Wikipedia pelo nome
export async function getWikipediaSummary(name: string) {
    const response = await fetch(
        `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`,
    );
    if (!response.ok) return null;
    const data = await response.json();
    return {
        summary: data.extract,
        thumbnail: data.thumbnail?.source,
        url: data.content_urls?.mobile?.page,
    };
}

export async function getArtistExtra(spotifyArtist: {
    name: string;
    id: string;
}) {
    const [mbArtist, wiki] = await Promise.all([
        getMusicBrainzArtist(spotifyArtist.name),
        getWikipediaSummary(spotifyArtist.name),
    ]);

    return {
        description: wiki?.summary || null,
        wikipediaUrl: wiki?.url || null,
        wikipediaThumbnail: wiki?.thumbnail || null,
        origin: mbArtist?.area?.name || null, // cidade/país de origem
        type: mbArtist?.type || null, // Group, Person, etc
        gender: mbArtist?.gender || null,
        beginDate: mbArtist?.["life-span"]?.begin || null, // data de formação/nascimento
        endDate: mbArtist?.["life-span"]?.end || null,
        tags: mbArtist?.tags?.slice(0, 5).map((t: any) => t.name) || [], // gêneros/tags
        disambiguation: mbArtist?.disambiguation || null,
    };
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
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
        `https://api.spotify.com/v1/artists/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    const infos = await getArtistExtra({
        name: response.data.name,
        id: response.data.id,
    });

    return NextResponse.json({ ...response.data, ...infos });
}
