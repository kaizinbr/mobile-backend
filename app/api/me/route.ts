import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { auth } from "@/auth";


export async function GET(
    request: Request,
) {

    
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session?.user?.id) {
        return NextResponse.json(
            { error: "Parece que não está autenticado" },
            { status: 401 }
        );
    }

    try {
        const profile = await prisma.profile.findFirst({
            where: { id: session?.user?.id },
        });

        if (!profile) {
            return NextResponse.json(
                { error: "Profile not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(profile, { status: 200 });
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch profile" },
            { status: 500 }
        );
    }
}

export async function POST(
    request: NextRequest,
) {

    const { username, lowername, site, name, bio, pronouns } = await request.json();
    const session = await auth.api.getSession({
        headers: await headers()
    }) 
    

    try {
        if (!username) {
            return NextResponse.json(
                { error: "Username is required" },
                { status: 400 }
            );
        }

        await prisma.profile.update({
            where: { id: session?.user!.id },
            data: {
                username: username,
                lowername: username.toLowerCase(),
                site: site || null, 
                // avatarUrl: avatar_url || null,
                name: name || null,
                bio: bio || null,
                pronouns: pronouns || null,
            },
        });


        return NextResponse.json(
            { message: "Profile updated successfully" },
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
