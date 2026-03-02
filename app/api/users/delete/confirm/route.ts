// import { NextResponse, NextRequest } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { cookies } from "next/headers";
// import bcrypt from "bcryptjs";
// import { Resend } from "resend";
// const resend = new Resend(process.env.AUTH_RESEND_KEY);


// import { auth } from "@/auth";

// export async function POST(request: NextRequest) {
//     const { token } = await request.json();
//     // const session = await auth();

//     try {
//         if (!token) {
//             return NextResponse.json(
//                 { error: "OTP is required" },
//                 { status: 400 },
//             );
//         }

//         if (!session?.user) {
//             return NextResponse.json(
//                 { error: "Unauthorized" },
//                 { status: 401 },
//             );
//         }

//         if (!session.user.email) {
//             return NextResponse.json(
//                 { error: "User email not found" },
//                 { status: 400 },
//             );
//         }

//         const existingToken = await prisma.verificationToken.findFirst({
//             where: {
//                 identifier: session.user.email,
//                 action: "DELETE_ACCOUNT",
//             },
//         });

//         if (!existingToken || existingToken.token !== token) {
//             return NextResponse.json(
//                 { error: "O código OTP é inválido" },
//                 { status: 400 },
//             );
//         }

//         if (existingToken.expires < new Date()) {
//             return NextResponse.json(
//                 { error: "O código OTP expirou" },
//                 { status: 400 },
//             );
//         }

//         if (token === existingToken.token) {
//             // deletar usuario
//             await prisma.user.delete({
//                 where: { email: session.user.email },
//             });

//             console.log("Deleting user account for:", session.user.email);

//             // Deletar o token OTP após o uso
//             await prisma.verificationToken.deleteMany({
//                 where: { identifier: session.user.email, action: "DELETE_ACCOUNT" },
//             });


//             return NextResponse.json(
//                 { message: "Conta deletada com sucesso" },
//                 { status: 200 },
//             );
//         }


//     } catch (err) {
//         console.error("fetch error", err);
//         return NextResponse.json(
//             { error: "Falha ao atualizar o e-mail" },
//             { status: 500 },
//         );
//     }
// }


import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from 'next/headers'
import { prisma } from "@/lib/prisma";

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

    (await cookies()).set('spotify_token', response.data.access_token, { path: '/', maxAge: 3600, sameSite: 'lax'})

    return response.data.access_token;
};


export async function GET(req: Request) {
    const queryParams = new URL(req.url).searchParams;
    const query = queryParams.get("q") || "";
    const type = queryParams.get("type") || "album";
    console.log(query, type);


    const cookieStore = await cookies();
    const hasCookie = cookieStore.has('spotify_token');
    const token = hasCookie ? cookieStore.get('spotify_token')!.value : await getAccessToken();

    const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${query}&type=album%2Ctrack%2Cartist&limit=20`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const usersResponse = await prisma.profile.findMany({
        where: {
            OR: [
                { name: { contains: query, mode: "insensitive" } },
                { lowername: { contains: query.toLowerCase(), mode: "insensitive" } },
            ],
        },
    });

    const reviewsResponse = await prisma.rating.findMany({
        where: {
            OR: [
                { review: { contains: query, mode: "insensitive" } },
                { Profile: { is: { name: { contains: query, mode: "insensitive" }, lowername: { contains: query.toLowerCase(), mode: "insensitive" } } } },
            
            
            ]

        },
        include: {
            Profile: true,
        },
    });

    return NextResponse.json({
        reviews: reviewsResponse,
        ...response.data,
        users: usersResponse,
    });
}
