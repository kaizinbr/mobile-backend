import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers"

import { auth } from "@/auth"

export async function GET(
        request: NextRequest,
    {
        params,
    }: {
        params: Promise<{ shorten: string }>;
    }
) {
    const { shorten } = await params;

    try {
        if (!shorten) {
            return NextResponse.json(
                { error: "shorten is required" },
                { status: 400 }
            );
        }

        const reviews = await prisma.rating.findMany({
            where: { shorten: shorten },
            include: {
                Profile: true,
            },
        });

        if (reviews.length === 0) {
            return NextResponse.json(
                { error: "Review not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(reviews, { status: 200 });
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
            { status: 500 }
        );
    }
}

export async function DELETE(
        request: NextRequest,
    {
        params,
    }: {
        params: Promise<{ shorten: string }>;
    }
) {
    const { shorten } = await params;
    const session = await auth.api.getSession({
        headers: await headers()
    })





    console.log("Deleting ratings for user:", shorten);
    try {
        if (!shorten) {
            return NextResponse.json(
                { error: "shorten is required" },
                { status: 400 }
            );
        }

        const rating = await prisma.rating.findFirst({
            where: { shorten: shorten },
        });
        if (!rating) {
            return NextResponse.json(
                { error: "Rating not found" },
                { status: 404 }
            );
        }

        if (rating.user_id !== session?.user?.id) {
            return NextResponse.json(
                { error: "Unauthorized to delete this rating" },
                { status: 403 }
            );
        }



        const deletedRating = await prisma.rating.deleteMany({
            where: { shorten: shorten },
        });

        return NextResponse.json(deletedRating, { status: 200 });
    } catch (err) {
        console.error("delete error", err);
        return NextResponse.json(
            { error: "Failed to delete rating" },
            { status: 500 }
        );
    }

}