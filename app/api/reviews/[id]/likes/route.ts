import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: NextRequest,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    const { id } = await params;
    console.log("Fetching ratings for user:", id);

    try {
        if (!id) {
            return NextResponse.json(
                { error: "id is required" },
                { status: 400 }
            );
        }

        const ratingsWithLikes = await prisma.rating.findFirst({
            where: { id: id, published: true },
            include: { Like: true },
        });

        if (!ratingsWithLikes) {
            return NextResponse.json(
                { error: "Rating not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(ratingsWithLikes, { status: 200 });
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch profile" },
            { status: 500 }
        );
    }
}
