import { NextResponse } from "next/server";
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
        const user = await prisma.user.findFirst({
            where: { id: session?.user?.id },
        });

        if (!user) {
            return NextResponse.json(
                { error: "user not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(user, { status: 200 });
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch user" },
            { status: 500 }
        );
    }
}
