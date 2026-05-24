// app/api/ratings/[id]/comments/route.ts
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { headers } from "next/headers";

const COMMENTS_PER_PAGE = 20;

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const cursor = searchParams.get("cursor");

    const comments = await prisma.comment.findMany({
        where: { ratingId: id, parentId: null },
        orderBy: { created_at: "desc" },
        take: COMMENTS_PER_PAGE,
        ...(cursor && { skip: 1, cursor: { id: cursor } }),
        include: {
            Profile: {
                select: {
                    id: true,
                    username: true,
                    name: true,
                    avatar_url: true,
                    verified: true,
                },
            },

            _count: {
                select: { other_Comment: true, CommentLike: true },
            },
        },
    });

    const nextCursor =
        comments.length === COMMENTS_PER_PAGE
            ? comments[comments.length - 1].id
            : null;

    return Response.json({ comments, nextCursor });
}

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session)
        return Response.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await params;
    const { body } = await request.json();

    console.log("Received comment body:", body, id);

    if (!body || typeof body !== "string" || body.trim().length === 0)
        return Response.json({ error: "body is required" }, { status: 400 });

    if (body.trim().length > 1000)
        return Response.json({ error: "body too long" }, { status: 400 });

    const rating = await prisma.rating.findUnique({
        where: { id },
        select: { id: true },
    });

    if (!rating)
        return Response.json({ error: "Rating not found" }, { status: 404 });

    const comment = await prisma.comment.create({
        data: {
            body: body.trim(),
            authorId: session.user.id,
            ratingId: id,
        },
        include: {
            Profile: {
                select: {
                    id: true,
                    username: true,
                    name: true,
                    avatar_url: true,
                    verified: true,
                },
            },

            _count: {
                select: { other_Comment: true, CommentLike: true },
            },
        },
    });

    return Response.json({ comment }, { status: 201 });
}
