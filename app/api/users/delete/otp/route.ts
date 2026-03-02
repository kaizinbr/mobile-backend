// import { NextResponse, NextRequest } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { cookies } from "next/headers";
// import bcrypt from "bcryptjs";
// import { Resend } from "resend";
// const resend = new Resend(process.env.AUTH_RESEND_KEY);
// import { DeleteEmail } from "@/components/mail/email-template";


// import { auth } from "@/auth";

// export async function POST(request: NextRequest) {
//     // const { email } = await request.json();
//     const session = await auth();

//     try {

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

//         const otpToken = Math.floor(100000 + Math.random() * 900000).toString();

//         const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutos

//         const existingToken = await prisma.tokenOTP.findUnique({
//             where: { identifier: session.user.email },
//         });

//         if (existingToken) {
//             // se já existe, sobrescrever e enviar o novo
//             await prisma.tokenOTP.update({
//                 where: { identifier: session.user.email },
//                 data: {
//                     token: otpToken,
//                     expires,
//                 },
//             });
//         } else {
//             await prisma.tokenOTP.create({
//                 data: {
//                     token: otpToken,
//                     identifier: session.user.email,
//                     expires,
//                 },
//             });
//         }

//         const { data, error } = await resend.emails.send({
//                     from: "Whistle <onboarding@kaizin.com.br>",
//                     to: session.user.email,
//                     subject: "Confirme seu e-mail para continuar",
//                     react: DeleteEmail({ token: otpToken }),
//                 });
        
//                 if (error) {
//                     return NextResponse.json({ error }, { status: 500 });
//                 }

//         return NextResponse.json(
//             { message: "Token enviado com sucesso" },
//             { status: 200 },
//         );
//     } catch (err) {
//         console.error("fetch error", err);
//         return NextResponse.json(
//             { error: "Failed to update password" },
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
