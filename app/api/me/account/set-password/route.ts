import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { auth } from "@/auth";


export async function POST(
    request: Request,
) {

    const { new_password, confirm_password } = await request.json();
    
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (!session?.user?.id) {
        return NextResponse.json(
            { error: "Parece que não está autenticado" },
            { status: 401 }
        );
    }

    if (new_password !== confirm_password) {
        return NextResponse.json(
            { error: "As senhas não coincidem" },
            { status: 400 }
        );
    }

    try {
        const pass = await auth.api.setPassword({
            body: {
                newPassword: "new-password",
            },
            headers: await headers() // headers containing the user's session token
        });

        if (!pass) {
            return NextResponse.json(
                { error: "Failed to set password" },
                { status: 400 }
            );
        }

        return NextResponse.json(pass, { status: 200 });
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch account" },
            { status: 500 }
        );
    }
}
