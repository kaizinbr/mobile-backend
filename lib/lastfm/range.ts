import type { LastfmPeriod, LastfmRange } from "@/lib/lastfm/types";

/**
 * Lê `?period=` ou `?from=&to=` da URL. Devolve null se for inválido.
 * O Last.fm não reclama de período inválido (devolve "overall" sem avisar),
 * por isso a validação aqui é obrigatória.
 */
export function parseRange(params: URLSearchParams): LastfmRange | null {
    const rawFrom = params.get("from");
    const rawTo = params.get("to");

    if (rawFrom !== null || rawTo !== null) {
        if (!/^\d{1,12}$/.test(rawFrom ?? "") || !/^\d{1,12}$/.test(rawTo ?? "")) return null;
        const from = Number(rawFrom);
        const to = Number(rawTo);
        // 1/1/2002 (antes do Last.fm existir) e no máximo 367 dias (único tamanho testado nos gráficos livres)
        if (from < 1_009_843_200 || to <= from || to - from > 367 * 86_400) return null;
        return { from, to };
    }

    const period = params.get("period") || "1month";
    if (!["overall", "7day", "1month", "3month", "6month", "12month"].includes(period)) return null;
    return { period: period as LastfmPeriod };
}

/**
 * Intervalo em timestamps. Os períodos do Last.fm contam dias corridos para trás a partir de
 * agora (1month = 30 dias). O fim é arredondado em blocos de 10 min: chamadas no mesmo bloco
 * usam a mesma URL e aproveitam o cache.
 */
export function toTimestamps(range: LastfmRange, nowSeconds: number): { from: number; to: number } {
    if ("from" in range) return range;
    const to = Math.floor(nowSeconds / 600) * 600;
    const days =
        range.period === "7day" ? 7
        : range.period === "1month" ? 30
        : range.period === "3month" ? 90
        : range.period === "6month" ? 180
        : range.period === "12month" ? 365
        : 0;
    return { from: days === 0 ? 0 : to - days * 86_400, to };
}

/** Intervalo livre que terminou há mais de 1 dia (dá folga para scrobbles atrasados chegarem). */
export function isClosedRange(range: LastfmRange): boolean {
    return "from" in range && range.to < Date.now() / 1000 - 86_400;
}
