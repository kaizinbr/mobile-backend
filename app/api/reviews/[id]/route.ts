import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers"
import fetchAlbum from "@/lib/fetchAlbum";
import { auth } from "@/auth"

export async function GET(
        request: NextRequest,
    {
        params,
    }: {
        params: Promise<{ id: string }>;
    }
) {
    const { id } = await params;

    try {
        if (!id) {
            return NextResponse.json(
                { error: "id is required" },
                { status: 400 }
            );
        }

        const reviews = await prisma.rating.findMany({
            where: { id: id },
            include: {
                Profile: true,
                _count: { select: { Like: true } },
                Like: true,
            },
        });

        if (reviews.length === 0) {
            return NextResponse.json(
                { error: "Review not found" },
                { status: 404 }
            );
        }


        const albumData = await fetchAlbum(reviews[0].album_id!);

        const reviewWithAlbumData = reviews.map((review) => ({
            ...review,
            likesCount: review._count.Like,
            album: albumData,
        }));




        return NextResponse.json(reviewWithAlbumData, { status: 200 });
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
        params: Promise<{ id: string }>;
    }
) {
    const { id } = await params;
    const session = await auth.api.getSession({
        headers: await headers()
    })





    console.log("Deleting ratings for user:", id);
    try {
        if (!id) {
            return NextResponse.json(
                { error: "id is required" },
                { status: 400 }
            );
        }

        const rating = await prisma.rating.findFirst({
            where: { id: id },
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
            where: { id: id },
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