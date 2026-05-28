import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

import { createNotification } from "@/lib/notifications";
import { auth } from "@/auth";
import { headers } from "next/headers";

export async function POST(request: Request) {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session)
        return Response.json({ error: "Unauthorized" }, { status: 401 });

    const userId = session.user.id;

    const notifications = await prisma.notification.findMany({
        where: {
            user_id: userId,
        },
    });

    if (notifications) {
        await prisma.notification.updateMany({
            where: { user_id: userId },
            data: { seen: true },
        });
        return Response.json({ seen: true });
    }
    return Response.json({ error: "Notification not found" }, { status: 404 });
}

export async function DELETE(request: Request) {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session)
        return Response.json({ error: "Unauthorized" }, { status: 401 });

    const userId = session.user.id;

    await prisma.notification.deleteMany({
        where: {
            user_id: userId,
        },
    });

    return Response.json({ deleted: true });
}
