import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { generateJSON } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import { auth } from "@/auth";
import getShorten from "@/lib/getShorten";

import { marked } from "marked";

export async function POST(request: NextRequest) {
    const { token } = await request.json();

    console.log("received data:", {
        token,
    });

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    try {
        if (!token) {
            return NextResponse.json(
                { error: "Token is required", saved: false },
                { status: 400 },
            );
        }

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: "Unauthorized", saved: false },
                { status: 401 },
            );
        }

        const response = await prisma.profile.update({
            where: { id: session?.user.id },
            data: {
                pushToken: token,
            },
        });
        return NextResponse.json(
            {
                message: "Token atualizado com sucesso",
                saved: true,
                data: response,
            },
            { status: 200 },
        );


    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch profile", saved: false },
            { status: 500 },
        );
    }
}
