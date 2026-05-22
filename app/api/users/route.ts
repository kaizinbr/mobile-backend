import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const q = searchParams.get("q") ?? "";
        const limit = Math.min(Number(searchParams.get("limit") ?? 5), 10);

        if (q.length < 1) return Response.json({ profiles: [] });

        const profiles = await prisma.profile.findMany({
            where: {
                lowername: { contains: q.toLowerCase() },
                public: true,
            },
            select: { id: true, username: true, avatar_url: true },
            take: limit,
        });

        return NextResponse.json({ profiles }, { status: 200 });
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
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
