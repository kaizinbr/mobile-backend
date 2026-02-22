import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { defaultMarkdownSerializer } from "prosemirror-markdown";
import StarterKit from "@tiptap/starter-kit";
import { generateJSON } from "@tiptap/core";

import { tiptapJsonToMarkdown, tiptapJsonToHTML } from "@/lib/tiptapJson";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ shorten: string }> },
) {
    const { shorten } = await params;

    try {
        const review = await prisma.rating.findFirst({
            where: { shorten: shorten },
        });

        if (!review) {
            return NextResponse.json(
                { error: "Review not found" },
                { status: 404 },
            );
        }

        if (!review.content) {
            return NextResponse.json(
                { error: "Review not published" },
                { status: 403 },
            );
        }

        // const markdown = tiptapJsonToMarkdown(review.content);
        console.log("shorten", shorten);
        const html = tiptapJsonToHTML(review.content);

        return NextResponse.json(
            { jsonContent: review.content, html },
            { status: 200 },
        );
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch review" },
            { status: 500 },
        );
    }
}
