import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { auth } from "@/auth";

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
    const id = (await params).id;
    console.log(id);

    const cookieStore = await cookies();
    const hasCookie = cookieStore.has("spotify_token");
    let token = hasCookie
        ? cookieStore.get("spotify_token")!.value
        : await getAccessToken();

    try {
        // pegando dados do album no spotify
        const response = await axios.get(
            `https://api.spotify.com/v1/albums/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        // console.log(response.data);

        if (response.status === 429) {
            // Lógica para lidar com o erro 429 (Too Many Requests)
            console.error("Too many requests, retrying after 2 seconds...");
            await new Promise((resolve) => setTimeout(resolve, 2000));
            token = await getAccessToken(); // Atualiza o token
            return GET(request, { params });
        }

        // Verificando se o usuário já avaliou o álbum
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: "Parece que não está autenticado" },
                { status: 401 },
            );
        }

        console.log("avaliando se user já avaliou o álbum");

        const reviewed = await prisma.rating.findFirst({
            where: {
                user_id: session.user.id,
                album_id: id,
            },
        });

        console.log("reviewed", reviewed);

        if (reviewed) {
            return NextResponse.json({
                reviewed: true,
                rating: reviewed,
                albumData: response.data,
            });
        } else {
            return NextResponse.json({
                reviewed: false,
                rating: null,
                albumData: response.data,
            });
        }
    } catch (error) {
        console.error("Erro ao buscar álbum do Spotify:", error);
        return NextResponse.json(
            { error: "Erro ao buscar álbum do Spotify" },
            { status: 500 },
        );
    }
}
