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

    const notifications = await prisma.notification.findUnique({
        where: {
            id: id,
        },
    });

    if (notifications) {
        await prisma.notification.update({
            where: { id: notifications.id },
            data: { seen: true },
        });
        return Response.json({ seen: true });
    }
    return Response.json({ error: "Notification not found" }, { status: 404 });
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
