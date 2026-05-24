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

        const comment = await prisma.comment.findMany({
            where: { id: id },
            include: {
                Profile: true,
                _count: { select: { CommentLike: true } },
            },
        });

        if (comment.length === 0) {
            return NextResponse.json(
                { error: "Comment not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(comment, { status: 200 });
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch comments" },
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






    console.log("Deleting comments for user:", id);
    try {
        if (!id) {
            return NextResponse.json(
                { error: "id is required" },
                { status: 400 }
            );
        }

        const comment = await prisma.comment.findFirst({
            where: { id: id },
        });
        if (!comment) {
            return NextResponse.json(
                { error: "Comment not found" },
                { status: 404 }
            );
        }

        if (comment.authorId !== session?.user?.id) {
            return NextResponse.json(
                { error: "Unauthorized to delete this comment" },
                { status: 403 }
            );
        }

        const deletedComment = await prisma.comment.deleteMany({
            where: { id: id },
        });

        return NextResponse.json(deletedComment, { status: 200 });
    } catch (err) {
        console.error("delete error", err);
        return NextResponse.json(
            { error: "Failed to delete comment" },
            { status: 500 }
        );
    }

}