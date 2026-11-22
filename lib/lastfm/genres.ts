// Cálculo dos gêneros a partir das tags dos artistas. Tudo aqui é puro: recebe dados, devolve dados.
// As listas de descarte ficam em genre-data.ts.

import { genreAliases, genreDisplayNames, notGenreTags, wrongTagsByArtist } from "@/lib/lastfm/genre-data";
import type { LastfmGenre, LastfmTag } from "@/lib/lastfm/types";

type GenreInput = { name: string; playcount: number; tags: LastfmTag[] };

/** Chave de comparação: minúsculas, hífen e "_" viram espaço, e apelidos viram a forma única ("Hip-Hop" -> "hip hop"). */
export function genreKey(tag: string): string {
    const base = tag.trim().toLowerCase().replace(/[-_]/g, " ").replace(/\s+/g, " ");
    return genreAliases[base] ?? genreAliases[base.replace(/ /g, "")] ?? base;
}

function genreLabel(key: string, original: string): string {
    return genreDisplayNames[key] ?? original.trim().toLowerCase().replace(/\s+/g, " ");
}

/** A tag não é gênero? (lista de descarte, ano/década, "vocalists", piada ou nome do próprio artista) */
function isNotGenre(key: string, artistKey: string): boolean {
    if (key === "" || notGenreTags.has(key) || /^(\d{2}s|\d{4}s|\d+)$/.test(key)) return true;
    if (/vocalist/.test(key) || /^better than /.test(key)) return true;
    if (key === artistKey || wrongTagsByArtist[artistKey]?.includes(key)) return true;
    // Pedaço do nome do artista com 2+ palavras. Com 1 palavra não: "pop" não some só porque o artista é "Pop Smoke".
    return key.includes(" ") && artistKey.includes(key);
}

/** Gênero de verdade tem descrição no Last.fm ou é usado por muita gente (apelido de fã não tem nenhum dos dois). */
export function looksLikeGenre(info: { reach: number; hasWiki: boolean }): boolean {
    return info.hasWiki || info.reach >= 1000;
}

/** Roda `fn` em cada item com no máximo `limit` execuções ao mesmo tempo, mantendo a ordem. */
export async function mapWithLimit<T, R>(
    items: readonly T[],
    limit: number,
    fn: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
    const results = new Array<R>(items.length);
    let next = 0;
    async function worker() {
        while (next < items.length) {
            const i = next++;
            results[i] = await fn(items[i], i);
        }
    }
    await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
    return results;
}

/**
 * Para cada artista: descarta o que não é gênero, pega as 5 tags mais fortes que sobraram
 * e soma plays x (força da tag / 100) em cada gênero.
 */
export function computeTopGenres(
    artists: GenreInput[],
    limit = 5,
    exclude: ReadonlySet<string> = new Set(),
): LastfmGenre[] {
    const totals = new Map<string, number>();
    const labels = new Map<string, string>();
    const contributors = new Map<string, { name: string; amount: number }[]>();

    for (const artist of artists) {
        const artistKey = genreKey(artist.name);
        // A mesma tag pode vir com grafias diferentes no mesmo artista: fica a mais forte.
        const strongest = new Map<string, number>();
        for (const tag of artist.tags) {
            const key = genreKey(tag.name);
            if (tag.count <= 0 || exclude.has(key) || isNotGenre(key, artistKey)) continue;
            if (!labels.has(key)) labels.set(key, tag.name);
            strongest.set(key, Math.max(strongest.get(key) ?? 0, tag.count));
        }

        const top = [...strongest].sort((a, b) => b[1] - a[1]).slice(0, 5);
        for (const [key, count] of top) {
            const amount = artist.playcount * (count / 100);
            totals.set(key, (totals.get(key) ?? 0) + amount);
            if (amount > 0) {
                const list = contributors.get(key) ?? [];
                list.push({ name: artist.name, amount });
                contributors.set(key, list);
            }
        }
    }

    return [...totals]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, limit)
        .map(([key, weight]) => ({
            name: genreLabel(key, labels.get(key) ?? key),
            weight,
            artists: (contributors.get(key) ?? [])
                .sort((a, b) => b.amount - a.amount)
                .slice(0, 3)
                .map((a) => a.name),
        }));
}

/**
 * Top conferido: pergunta a `isGenre` só pelas tags que chegaram ao top (as outras não aparecem,
 * então não gastam chamada), tira as recusadas e refaz o top. Até 3 rodadas.
 */
export async function computeCheckedGenres(
    artists: GenreInput[],
    isGenre: (tag: string) => Promise<boolean>,
    limit = 5,
): Promise<LastfmGenre[]> {
    const checked = new Map<string, boolean>();
    const exclude = new Set<string>();
    let top = computeTopGenres(artists, limit);

    for (let round = 0; round < 3; round++) {
        const pending = top.filter((genre) => !checked.has(genre.name));
        if (pending.length === 0) break;
        const answers = await mapWithLimit(pending, 3, (genre) => isGenre(genre.name));
        pending.forEach((genre, i) => {
            checked.set(genre.name, answers[i]);
            if (!answers[i]) exclude.add(genreKey(genre.name));
        });
        top = computeTopGenres(artists, limit, exclude);
    }

    return top.filter((genre) => checked.get(genre.name) !== false);
}
