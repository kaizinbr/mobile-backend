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

        const existingEntry = await prisma.wishlist.findFirst({
            where: {
                profileId: session.user.id,
                albumId: id,
            },
        });

        return NextResponse.json(
            { isWishlisted: !!existingEntry },
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
    const { albumID, albumName, artistName, coverUrl } = await request.json();
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

        const existingEntry = await prisma.wishlist.findFirst({
            where: {
                profileId: session.user.id,
                albumId: albumID,
            },
        });

        if (existingEntry) {
            return NextResponse.json(
                { error: "Album is already in wishlist" },
                { status: 400 },
            );
        }

        await prisma.wishlist.create({
            data: {
                profileId: session.user.id,
                albumId: albumID,
                albumName: albumName,
                artistName: artistName,
                coverUrl: coverUrl,
            }

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


export async function DELETE(request: NextRequest) {
    const { albumID } = await request.json();
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    console.log("delete request", { albumID });

    try {
        if (!session?.user) {
            return NextResponse.json(
                { error: "User is not authenticated" },
                { status: 400 },
            );
        }
        
        await prisma.wishlist.deleteMany({
            where: {
                profileId: session.user.id,
                albumId: albumID,
            }
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