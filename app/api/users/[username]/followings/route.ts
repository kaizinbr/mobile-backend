import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers"

import { auth } from "@/auth";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ username: string }> }
) {
    const { username } = await params;
    
    const user = await prisma.profile.findFirst({
        where: {
            lowername: username.toLowerCase(),
        },
    });

    try {
        const userFollowings = await prisma.follow.findMany({
            where: {
                follower_id: user?.id,
            },
            include: {
                Profile_Follow_followed_idToProfile: {
                    select: {
                        id: true,
                        name: true,
                        username: true,
                        avatar_url: true,
                    },
                },
            },
            orderBy: {
                created_at: "desc",
            },
        });



        if (!user?.id) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                followings: userFollowings.map((follow) => ({
                    id: follow.Profile_Follow_followed_idToProfile.id,
                    name: follow.Profile_Follow_followed_idToProfile.name,
                    username: follow.Profile_Follow_followed_idToProfile.username,
                    avatar_url: follow.Profile_Follow_followed_idToProfile.avatar_url,
                })),
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch profile" },
            { status: 500 }
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
