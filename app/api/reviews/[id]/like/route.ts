import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendPushNotification } from "@/lib/pushNotification";
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

    const existing = await prisma.like.findUnique({
        where: {
            user_profile_ratingId: {
                user_profile: userId,
                ratingId: id,
            },
        },
    });

    if (existing) {
        await prisma.like.delete({ where: { id: existing.id } });
        const likesCount = await prisma.like.count({ where: { ratingId: id } });
        return Response.json({ liked: !existing, likesCount });
    }

    await prisma.like.create({
        data: {
            user_profile: userId,
            ratingId: id,
        },
    });

    const currentUser = await prisma.profile.findUnique({
        where: { id: userId },
        select: { username: true },
    });

    const rating = await prisma.rating.findUnique({
        where: { id },
        select: { Profile: true },
    });

    if (rating?.Profile?.id !== userId && rating?.Profile?.id && currentUser?.username) {
        const reviewOwner = await prisma.profile.findUnique({
            where: { id: rating?.Profile.id },
            select: { pushToken: true, username: true },
        });

        if (reviewOwner?.pushToken) {
            await sendPushNotification({
                to: reviewOwner.pushToken,
                title: "Nova curtida",
                body: `${currentUser.username} curtiu sua review`,
                data: { reviewId: id, type: "like" },
            });
        }
    }

    const likesCount = await prisma.like.count({ where: { ratingId: id } });
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

    const like = await prisma.like.findUnique({
        where: {
            user_profile_ratingId: {
                user_profile: userId,
                ratingId: id,
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
