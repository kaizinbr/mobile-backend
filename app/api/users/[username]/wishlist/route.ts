import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { auth } from "@/auth";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ username: string }> },
) {
    const { username } = await params;

    if (!username) {
        return NextResponse.json(
            { error: "Username is required" },
            { status: 400 },
        );
    }

    try {
        const profile = await prisma.profile.findFirst({
            where: { username: username },
        });

        if (!profile) {
            return NextResponse.json(
                { error: "Profile not found" },
                { status: 404 },
            );
        }
        
        const wishlistedAlbums = await prisma.wishlist.findMany({
            where: {
                profileId: profile.id,
            },
            orderBy: {
                addedAt: "desc",
            },
        });

        return NextResponse.json(wishlistedAlbums, { status: 200 });
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch wishlisted albums" },
            { status: 500 },
        );
    }
}
