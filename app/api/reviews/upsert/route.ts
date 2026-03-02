import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { generateJSON } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import { auth } from "@/auth";
import getShorten from "@/lib/getShorten";

// export async function GET(
//     request: NextRequest,
//     {
//         params,
//     }: {
//         params: Promise<{ id: string }>;
//     }
// ) {
//     const { id } = await params;
//     const session = await auth.api.getSession({
//         headers: await headers()
//     })
//     console.log("checking ratings for user:", id);
    
//     try {
//         if (!id) {
//             return NextResponse.json(
//                 { error: "id is required" },
//                 { status: 400 }
//             );
//         }

//         const rating = await prisma.rating.findFirst({
//             where: { album_id: id },
//         });

//         if (!rating) {
//             return NextResponse.json(
//                 { message: "Avaliação não existe", avaliou: false },
//                 { status: 200 }
//             );
//         }

//         if (rating.user_id !== session?.user?.id) {
//             return NextResponse.json(
//                 { error: "Unauthorized to delete this rating" },
//                 { status: 403 }
//             );
//         }

//         return NextResponse.json(rating, { status: 200 });
//     } catch (err) {
//         console.error("delete error", err);
//         return NextResponse.json(
//             { error: "Failed to delete rating" },
//             { status: 500 }
//         );
//     }
// }

export async function POST(
    request: NextRequest,
) {
    const { albumId, ratings, review, html, total, published } =
        await request.json();

    console.log("received data:", { albumId, ratings, review, html, total, published });

    const session = await auth.api.getSession({
        headers: await headers()
    })

    try {
        if (!albumId) {
            return NextResponse.json(
                { error: "albumId is required", saved: false },
                { status: 400 }
            );
        }

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: "Unauthorized", saved: false },
                { status: 401 }
            );
        }

        const existsingRating = await prisma.rating.findFirst({
            where: { album_id: albumId, user_id: session?.user?.id },
        });

        if (existsingRating) {

            const content = generateJSON(html, [StarterKit]);
            const rawText = html.replace(/<[^>]+>/g, '');
            // console.log("Updating existing rating with data:", { ratings, review, html, content, total, published });

            const updatedRating = await prisma.rating.update({
                where: { id: existsingRating.id },
                data: {
                    ratings,
                    review:  rawText,
                    html,
                    content,
                    total,
                    published,
                },
            });
            return NextResponse.json(
                {
                    message: "Atualizado com sucesso",
                    saved: true,
                    data: updatedRating,
                },
                { status: 200 }
            );
        } else {
            const shorten = getShorten();
            const content = generateJSON(html, [StarterKit]);
            const rawText = html.replace(/<[^>]+>/g, '');
            
            const newRating = await prisma.rating.create({
                data: {
                    user_id: session?.user?.id || "",
                    album_id: albumId,
                    shorten,
                    ratings,
                    review: rawText,
                    html,
                    content,
                    published,
                },
            });
            return NextResponse.json({
                    message: "Salvo com sucesso",
                    saved: true,
                    data: newRating,
                }, { status: 201 });
        }
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch profile", saved: false },
            { status: 500 }
        );
    }
}
