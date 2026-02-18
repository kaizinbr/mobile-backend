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

        const markdown = tiptapJsonToMarkdown(review.content);
        // console.log("markdown generated", markdown);
        const html = tiptapJsonToHTML(review.content);

        return NextResponse.json(
            { jsonContent: review.content, markdown, html },
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

// export async function POST(request: Request) {
//     try {
//         const { shorten, content, title, tags, raw, published, color, image } =
//             await request.json();

//         const session = await auth();

//         if (!session?.user?.id) {
//             return NextResponse.json(
//                 { error: "Parece que não está autenticado" },
//                 { status: 401 }
//             );
//         }

//         const post = await prisma.post.upsert({
//             where: { shorten },
//             update: {
//                 content,
//                 title,
//                 tags: {
//                     connectOrCreate: tags.map((name: string) => ({
//                         where: { name },
//                         create: { name },
//                     })),
//                 },
//                 raw,
//                 published,
//                 color,
//                 image,
//             },
//             create: {
//                 shorten,
//                 content,
//                 title,
//                 tags: {
//                     connectOrCreate: tags.map((name: string) => ({
//                         where: { name },
//                         create: { name },
//                     })),
//                 },
//                 raw,
//                 published,
//                 color,
//                 image,
//                 authorId: session.user.id,
//             },
//         });

//         console.log("post created");

//         return NextResponse.json({ post }, { status: 201 });
//     } catch (err) {
//         console.error("upload error", err);

//         return NextResponse.json({ error: "Upload failed" }, { status: 500 });
//     }
// }
