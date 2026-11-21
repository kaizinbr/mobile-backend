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
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${profile.lastfm_username}&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=1`,
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

// export async function POST(request: Request) {
//     try {
//         const { shorten, content, title, tags, raw, published, color, image } =
//             await request.json();

//         const session = await auth();

//         if (!session?.user?.id) {
//             return NextResponse.json(
//                 { error: "Parece que não está autenticado" },
//                 { status: 401 }
//             );
//         }

//         const post = await prisma.post.upsert({
//             where: { shorten },
//             update: {
//                 content,
//                 title,
//                 tags: {
//                     connectOrCreate: tags.map((name: string) => ({
//                         where: { name },
//                         create: { name },
//                     })),
//                 },
//                 raw,
//                 published,
//                 color,
//                 image,
//             },
//             create: {
//                 shorten,
//                 content,
//                 title,
//                 tags: {
//                     connectOrCreate: tags.map((name: string) => ({
//                         where: { name },
//                         create: { name },
//                     })),
//                 },
//                 raw,
//                 published,
//                 color,
//                 image,
//                 authorId: session.user.id,
//             },
//         });

//         console.log("post created");

//         return NextResponse.json({ post }, { status: 201 });
//     } catch (err) {
//         console.error("upload error", err);

//         return NextResponse.json({ error: "Upload failed" }, { status: 500 });
//     }
// }
