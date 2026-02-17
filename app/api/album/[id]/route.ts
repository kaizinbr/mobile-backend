import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

const getAccessToken = async () => {
    const authorization = Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID ?? ""}:${
            process.env.SPOTIFY_CLIENT_SECRET ?? ""
        }`
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
        }
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
            `https://api.spotify.com/v1/albums/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        // console.log(response.data);

        if (response.status === 429) {
            // Lógica para lidar com o erro 429 (Too Many Requests)
            console.error("Too many requests, retrying after 2 seconds...");
            await new Promise((resolve) => setTimeout(resolve, 2000));
            token = await getAccessToken(); // Atualiza o token
            return GET(request, { params });
            

        }

        return NextResponse.json(response.data);
    } catch (error) {
        console.error("Erro ao buscar álbum do Spotify:", error);
        return NextResponse.json(
            { error: "Erro ao buscar álbum do Spotify" },
            { status: 500 }
        );
    }
}
