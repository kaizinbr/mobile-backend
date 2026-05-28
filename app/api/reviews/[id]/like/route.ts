import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { createNotification } from "@/lib/notifications";
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

    // if (
    //     rating?.Profile?.id !== userId &&
    //     rating?.Profile?.id &&
    //     currentUser?.username
    // ) {
    //     const reviewOwner = await prisma.profile.findUnique({
    //         where: { id: rating?.Profile.id },
    //         select: { pushToken: true, username: true },
    //     });
    //     console.log(rating);

    //     if (reviewOwner?.pushToken) {
    //         await sendPushNotification({
    //             to: reviewOwner.pushToken,
    //             title: "Você teve uma nova curtida!",
    //             body: `${currentUser.username} curtiu sua review`,
    //             data: { reviewId: id, type: "like" },
    //         });
    //     }
    // }

    if (rating?.Profile?.id) {
        await createNotification({
            type: "like",
            senderId: userId,
            recipientId: rating.Profile.id,
            ratingId: id,
        });
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
