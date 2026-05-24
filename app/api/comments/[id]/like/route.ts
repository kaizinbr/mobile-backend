import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

import { auth } from "@/auth";
import { headers } from "next/headers";

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session)
        return Response.json({ error: "Unauthorized" }, { status: 401 });

    const userId = session.user.id;
    const { id } = await params;

    const existing = await prisma.commentLike.findUnique({
        where: {
            userId_commentId: {
                userId: userId,
                commentId: id,
            },
        },
    });

    if (existing) {
        await prisma.commentLike.delete({ where: { id: existing.id } });
        const likesCount = await prisma.commentLike.count({ where: { commentId: id } });
        return Response.json({ liked: !existing, likesCount });
    }

    await prisma.commentLike.create({
        data: {
            userId: userId,
            commentId: id,
        },
    });
    const likesCount = await prisma.commentLike.count({ where: { commentId: id } });
    return Response.json({ liked: !existing, likesCount });
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
     const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return Response.json({ liked: false, authenticated: false });
    }

    const userId = session.user.id;
    const { id } = await params;

    const like = await prisma.commentLike.findUnique({
        where: {
            userId_commentId: {
                userId: userId,
                commentId: id,
            },
        },
        select: { id: true },
    });

    return Response.json({ liked: !!like, authenticated: true });
}

// export async function GET(
//     request: NextRequest,
//     {
//         params,
//     }: {
//         params: Promise<{ id: string }>;
//     }
// ) {
//     const { id } = await params;
//     console.log("Fetching ratings for user:", id);

//     try {
//         if (!id) {
//             return NextResponse.json(
//                 { error: "id is required" },
//                 { status: 400 }
//             );
//         }

//         const ratingsWithLikes = await prisma.rating.findFirst({
//             where: { id: id, published: true },
//             include: { Like: true },
//         });

//         if (!ratingsWithLikes) {
//             return NextResponse.json(
//                 { error: "Rating not found" },
//                 { status: 404 }
//             );
//         }
//         return NextResponse.json(ratingsWithLikes, { status: 200 });
//     } catch (err) {
//         console.error("fetch error", err);
//         return NextResponse.json(
//             { error: "Failed to fetch profile" },
//             { status: 500 }
//         );
//     }
// }
