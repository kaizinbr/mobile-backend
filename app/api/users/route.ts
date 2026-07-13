import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth"; // ajuste o caminho se for diferente
import { headers } from "next/headers"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const q = searchParams.get("q") ?? "";
        const limit = Math.min(Number(searchParams.get("limit") ?? 10), 10);

            const session = await auth.api.getSession({
                headers: await headers()
            })
        const currentUserId = session?.user?.id;

        const profiles = await prisma.profile.findMany({
            where: {
                ...(currentUserId ? { id: { not: currentUserId } } : {}),
                ...(q.length >= 1
                    ? {
                          OR: [
                              { name: { contains: q, mode: "insensitive" } },
                              {
                                  lowername: {
                                      contains: q.toLowerCase(),
                                      mode: "insensitive",
                                  },
                              },
                          ],
                      }
                    : {}),
            },
            select: {
                id: true,
                username: true,
                name: true,
                avatar_url: true,
            },
            orderBy: {
                created_at: "desc", 
            },
        });

        const followedIds = currentUserId
            ? new Set(
                  (
                      await prisma.follow.findMany({
                          where: {
                              follower_id: currentUserId,
                              followed_id: { in: profiles.map((p) => p.id) },
                          },
                          select: {
                              followed_id: true,
                          },
                      })
                  ).map((follow) => follow.followed_id),
              )
            : new Set<string>();

        const profilesWithFollow = profiles.map((profile) => ({
            ...profile,
            isFollowing: followedIds.has(profile.id),
        }));

        return NextResponse.json({ profiles: profilesWithFollow }, { status: 200 });
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch users" },
            { status: 500 },
        );
    }
}