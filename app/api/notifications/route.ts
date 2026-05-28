import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { createNotification } from "@/lib/notifications";
import { auth } from "@/auth";
import { headers } from "next/headers";

export async function GET(
    request: Request,
) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const notifications = await prisma.notification.findMany({
        where: { user_id: userId },
        orderBy: { created_at: "desc" },
        include: {
            Profile_Notification_sender_idToProfile: 
            {
                select: {
                    id: true,
                    username: true,
                    name: true,
                    avatar_url: true,
                    verified: true,
                }
            }
            
        },
    });

    return Response.json({ notifications });
}
