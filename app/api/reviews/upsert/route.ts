import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { generateJSON } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import { auth } from "@/auth";
import getShorten from "@/lib/getShorten";

import { marked } from "marked";

// Dentro do POST, substitui a lógica de content e rawText

// O resto do código continua igual

export async function POST(request: NextRequest) {
    const { albumId, ratings, review, markdown, total, published } =
        await request.json();

    console.log("received data:", {
        albumId,
        ratings,
        review,
        markdown,
        total,
        published,
    });

    // console.log(markdown);

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    try {
        if (!albumId) {
            return NextResponse.json(
                { error: "albumId is required", saved: false },
                { status: 400 },
            );
        }

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: "Unauthorized", saved: false },
                { status: 401 },
            );
        }

        const existsingRating = await prisma.rating.findFirst({
            where: { album_id: albumId, user_id: session?.user?.id },
        });

        if (existsingRating) {
            const html = await marked(markdown); // Markdown → HTML
            const content = generateJSON(html, [StarterKit]); // HTML → JSON Tiptap
            const rawText = markdown.replace(/[#*_~`>]/g, "").trim(); // remove sintaxe markdown

            const updatedRating = await prisma.rating.update({
                where: { id: existsingRating.id },
                data: {
                    ratings,
                    review: markdown,
                    content,
                    total,
                    published,
                },
            });

            const isWishlisted = await prisma.wishlist.findFirst({
                where: {
                    profileId: session?.user?.id,
                    albumId: albumId,
                },
            });

            if (isWishlisted) {
                await prisma.wishlist.delete({
                    where: {
                        id: isWishlisted.id,
                    },
                });
            }



            return NextResponse.json(
                {
                    message: "Atualizado com sucesso",
                    saved: true,
                    data: updatedRating,
                },
                { status: 200 },
            );
        } else {
            const shorten = getShorten();
            const html = await marked(markdown); // Markdown → HTML
            const content = generateJSON(html, [StarterKit]); // HTML → JSON Tiptap
            const rawText = markdown.replace(/[#*_~`>]/g, "").trim(); // remove sintaxe markdown

            const newRating = await prisma.rating.create({
                data: {
                    user_id: session?.user?.id || "",
                    album_id: albumId,
                    shorten,
                    ratings,
                    review: markdown,
                    html,
                    content,
                    published,
                    total,
                },
            });

            
            const isWishlisted = await prisma.wishlist.findFirst({
                where: {
                    profileId: session?.user?.id,
                    albumId: albumId,
                },
            });

            if (isWishlisted) {
                await prisma.wishlist.delete({
                    where: {
                        id: isWishlisted.id,
                    },
                });
            }

            return NextResponse.json(
                {
                    message: "Salvo com sucesso",
                    saved: true,
                    data: newRating,
                },
                { status: 201 },
            );
        }
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch profile", saved: false },
            { status: 500 },
        );
    }
}
