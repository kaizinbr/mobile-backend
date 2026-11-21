import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { headers } from "next/headers";

export async function GET() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const unreadNotification = await prisma.notification.findFirst({
        where: { user_id: userId, seen: false },
        select: { id: true },
    });
    
    const hasUnread = Boolean(unreadNotification);

    return NextResponse.json({ hasUnread });
}
