// import { put } from "@vercel/blob";
// import { NextResponse, NextRequest } from "next/server";
// import { auth } from "@/auth";
// import { prisma } from "@/lib/prisma";

// export async function PUT(request: NextRequest) {
//     const { searchParams } = new URL(request.url);
//     const filename = searchParams.get("filename");
//     const session = await auth();

//     if (!session?.user) {
//         return NextResponse.json(
//             { error: "User is not authenticated" },
//             { status: 401 }
//         );
//     }
    
//     if (!filename) {
//         return NextResponse.json(
//             { error: "Filename is required" },
//             { status: 400 }
//         );
//     }

//     if (!request.body) {
//         return NextResponse.json(
//             { error: "File body is required" },
//             { status: 400 }
//         );
//     }

//     const name = 
//     `${filename}-${Date.now()}`

//     const blob = await put(`avatar/${session.user.id}_${Date.now()}.webp`, request.body, {
//         access: "public",
//     });

//     await prisma.profile.update({
//         where: { id: session.user.id },
//         data: { avatarUrl: blob.url },
//     });

//     return NextResponse.json(blob);
// }

// // import { put } from "@vercel/blob";
// // import { NextResponse } from "next/server";

// // export async function POST(request: Request): Promise<NextResponse> {
// //     const { searchParams } = new URL(request.url);
// //     const filename = searchParams.get("filename");

// //     // ⚠️ The below code is for App Router Route Handlers only
// //     const blob = await put(filename, request.body, {
// //         access: "public",
// //     });

// //     // Here's the code for Pages API Routes:
// //     // const blob = await put(filename, request, {
// //     //   access: 'public',
// //     // });

// //     return NextResponse.json(blob);
// // }

// // // The next lines are required for Pages API Routes only
// // // export const config = {
// // //   api: {
// // //     bodyParser: false,
// // //   },
// // // };
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
