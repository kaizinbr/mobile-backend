import { put } from "@vercel/blob";
import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/auth"; // Ajuste o caminho se necessário
import { prisma } from "@/lib/prisma"; // Ajuste o caminho se necessário

export async function PUT(request: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session?.user) {
            return NextResponse.json(
                { error: "Parece que não está autenticado" },
                { status: 401 },
            );
        }

        const formData = await request.formData();
        const file = formData.get("file") as File; 

        if (!file) {
            return NextResponse.json(
                { error: "Nenhum arquivo encontrado no formulário" },
                { status: 400 },
            );
        }

        const fileExtension = file.name.split(".").pop() || "jpeg";

        const finalFileName = `usuarios/${session.user.id}/avatar_${Date.now()}.${fileExtension}`;

        const blob = await put(finalFileName, file, {
            access: "public",
        });

        await prisma.profile.update({
            where: { id: session.user.id },
            data: { avatar_url: blob.url },
        });

        return NextResponse.json(blob);
    } catch (error) {
        console.error("Erro no upload:", error);
        return NextResponse.json(
            { error: "Falha interna no servidor" },
            { status: 500 },
        );
    }
}
