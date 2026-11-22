import { prisma } from "@/lib/prisma";
import { LastfmError } from "@/lib/lastfm/errors";
import type { LastfmErrorCode } from "@/lib/lastfm/types";

/** Username do Last.fm da pessoa, a partir do username do app. Null se não existir ou não tiver Last.fm. */
export async function findLastfmUsername(username: string): Promise<string | null> {
    const profile = await prisma.profile.findFirst({
        where: { lowername: username.toLowerCase() },
        select: { lastfm_username: true },
    });
    return profile?.lastfm_username ?? null;
}

/** JSON com cache na CDN (`s-maxage`) e, vencido, serve o antigo enquanto renova (`stale-while-revalidate`). */
export function lastfmJson(data: unknown, cacheSeconds: number): Response {
    return Response.json(data, {
        headers: {
            "Cache-Control": `public, s-maxage=${cacheSeconds}, stale-while-revalidate=${cacheSeconds * 2}`,
        },
    });
}

/** Erros nunca ficam em cache, para o "tentar de novo" do app funcionar. */
export function lastfmError(code: LastfmErrorCode): Response {
    const status =
        code === "BAD_REQUEST" ? 400
        : code === "PRIVATE_PROFILE" ? 403
        : code === "USER_NOT_FOUND" ? 404
        : code === "RATE_LIMITED" ? 429
        : 502;
    const message =
        code === "BAD_REQUEST" ? "Pedido inválido."
        : code === "PRIVATE_PROFILE" ? "Este perfil deixa o histórico privado."
        : code === "USER_NOT_FOUND" ? "Usuário não encontrado no Last.fm."
        : code === "RATE_LIMITED" ? "Muitas consultas ao Last.fm. Tente de novo em instantes."
        : "O Last.fm não respondeu. Tente de novo em instantes.";
    return Response.json({ error: { code, message } }, { status, headers: { "Cache-Control": "no-store" } });
}

/** Converte qualquer erro em resposta, sem vazar detalhes internos. */
export function handleLastfmError(err: unknown): Response {
    if (err instanceof LastfmError) return lastfmError(err.code);
    console.error("[api/lastfm] erro inesperado:", err instanceof Error ? err.name : "desconhecido");
    return lastfmError("LASTFM_DOWN");
}
