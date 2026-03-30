/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

import { auth } from "@/auth";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const id = (await params).id;
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    try {
        if (!session?.user) {
            return NextResponse.json(
                { error: "User is not authenticated" },
                { status: 400 }
            );
        }

        const favorites = await prisma.profile.findFirst({
            where: { id: session?.user!.id },
            select: {
                artists: true,
            },
        });

        if (!favorites || !favorites.artists) {
            return NextResponse.json(
                { error: "User profile not found" },
                { status: 404 },
            );
        }
        
        const isFavorite = Array.isArray(favorites.artists) && favorites.artists.some((artist: any) => artist.id === id);

        return NextResponse.json(
            { isFavorite },
            { status: 200 },
        );
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to update profile" },
            { status: 500 },
        );
    }
}

export async function POST(request: NextRequest) {
    const { artists } = await request.json();
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    try {
        if (!session?.user) {
            return NextResponse.json(
                { error: "User is not authenticated" },
                { status: 400 },
            );
        }

        const prevArtists = await prisma.profile.findFirst({
            where: { id: session?.user!.id },
            select: {
                artists: true,
            },
        });

        const favoritesArray = Array.isArray(prevArtists?.artists)
            ? prevArtists.artists
            : [];

        await prisma.profile.update({
            where: { id: session?.user!.id },
            data: {
                artists: [...favoritesArray, artists].filter(
                    (value, index, self) => self.indexOf(value) === index,
                ),
            },
        });

        return NextResponse.json(
            { message: "Profile updated successfully" },
            { status: 200 },
        );
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to update profile" },
            { status: 500 },
        );
    }
}
