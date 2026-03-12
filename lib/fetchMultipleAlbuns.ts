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

export default async function fetchMultipleAlbuns(ids: string) {

    if (!ids) {
        return []
    
    }

    console.log("Fetching albums with IDs:", ids);

    const cookieStore = await cookies();
    const hasCookie = cookieStore.has("spotify_token");
    let token = hasCookie
        ? cookieStore.get("spotify_token")!.value
        : await getAccessToken();

    try {
        const response = await axios.get(
            `https://api.spotify.com/v1/albums?ids=${ids}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.status === 429) {
            console.error("Too many requests, retrying after 1 second...");
            await new Promise((resolve) => setTimeout(resolve, 1000));
            token = await getAccessToken();
            return fetchMultipleAlbuns(ids);
        }

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar álbum do Spotify:", error);
        // console.error(error.response)
        return {
            error: "Erro ao buscar álbum do Spotify"
        };
    }
}
