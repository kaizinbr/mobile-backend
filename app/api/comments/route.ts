/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import fetchMultipleAlbuns from "@/lib/fetchMultipleAlbuns";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("p");
        const pageNumber = page ? parseInt(page, 10) : 1;
        const pageSize = 20;
        const skip = (pageNumber - 1) * pageSize;

        const reviews = await prisma.rating.findMany({
            where: {
                published: true,
            },
            include: {
                _count: { select: { Like: true } },
                Profile: true,
                Like: true,
            },
            orderBy: {
                created_at: "desc",
            },
            skip,
            take: pageSize,
        });

        const totalReviews = await prisma.rating.count({
            where: {
                published: true,
            },
        });

        const reviewsAlbunsIDs = reviews.map((review) => review.album_id);
        const albunsData = await fetchMultipleAlbuns(
            reviewsAlbunsIDs.join(","),
        );

        const albunsMap: Record<string, any> = {};
        if (!("error" in albunsData)) {
            albunsData.albums.forEach((album: any) => {
                albunsMap[album.id] = album;
            });
        }

        const reviewsWithAlbumData = reviews.map((review) => ({
            ...review,            
            likesCount: review._count.Like,
            album: albunsMap[review.album_id!] || null,
        }));

        return NextResponse.json(
            {
                reviews: reviewsWithAlbumData,
                totalReviews,
                page: pageNumber,
                next:
                    pageNumber * pageSize < totalReviews
                        ? pageNumber + 1
                        : null,
            },
            { status: 200 },
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
