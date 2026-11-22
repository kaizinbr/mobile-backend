/* eslint-disable @typescript-eslint/no-explicit-any */
// Transforma o JSON cru do Last.fm (`#text`, `@attr`, números em texto) no formato limpo do app.

import type { LastfmTag, LastfmTopItem, LastfmTopType } from "@/lib/lastfm/types";

/** Um item só pode vir como objeto em vez de lista; ausente vira lista vazia. */
function toArray(value: any): any[] {
    if (Array.isArray(value)) return value;
    if (value === undefined || value === null || value === "") return [];
    return [value];
}

function num(value: any): number {
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
}

/** Maior imagem da lista. Texto vazio ou a estrela genérica do Last.fm viram null. */
function pickImage(images: any): string | null {
    const url = toArray(images)
        .map((image) => String(image?.["#text"] ?? ""))
        .filter(Boolean)
        .at(-1);
    if (!url || url.includes("2a96cbd8b46e442fc41c2b86b821562f")) return null;
    return url;
}

/** O artista vem como objeto ({ name }) ou como texto ({ "#text" }) conforme o método. */
function artistName(value: any): string {
    if (typeof value === "string") return value;
    return String(value?.name ?? value?.["#text"] ?? "");
}

function normalizeItem(type: LastfmTopType, item: any, index: number): LastfmTopItem {
    return {
        rank: num(item?.["@attr"]?.rank) || index + 1,
        name: String(item?.name ?? ""),
        artist: type === "artists" ? null : artistName(item?.artist),
        playcount: num(item?.playcount),
        url: String(item?.url ?? ""),
        imageUrl: type === "albums" ? pickImage(item?.image) : null,
    };
}

/** user.getTopArtists / getTopAlbums / getTopTracks */
export function normalizeTop(type: LastfmTopType, raw: any) {
    const root = raw?.[type === "artists" ? "topartists" : type === "albums" ? "topalbums" : "toptracks"];
    const list = toArray(root?.[type === "artists" ? "artist" : type === "albums" ? "album" : "track"]);
    return {
        total: num(root?.["@attr"]?.total),
        items: list.map((item, i) => normalizeItem(type, item, i)),
    };
}

/** user.getWeeklyArtistChart / AlbumChart / TrackChart (vêm até 1000 itens; cortamos em `limit`). */
export function normalizeChart(type: LastfmTopType, raw: any, limit: number) {
    const root =
        raw?.[type === "artists" ? "weeklyartistchart" : type === "albums" ? "weeklyalbumchart" : "weeklytrackchart"];
    const list = toArray(root?.[type === "artists" ? "artist" : type === "albums" ? "album" : "track"]);
    return {
        total: list.length,
        items: list.slice(0, limit).map((item, i) => normalizeItem(type, item, i)),
    };
}

/** Total de scrobbles do intervalo, de user.getRecentTracks com limit=1. */
export function normalizeRecentTotal(raw: any): number {
    return num(raw?.recenttracks?.["@attr"]?.total);
}

export function normalizeUserPlaycount(raw: any): number {
    return num(raw?.user?.playcount);
}

/** artist.getTopTags (até 10 tags, `count` de 0 a 100). */
export function normalizeArtistTags(raw: any): LastfmTag[] {
    return toArray(raw?.toptags?.tag)
        .map((tag) => ({ name: String(tag?.name ?? "").trim(), count: num(tag?.count) }))
        .filter((tag) => tag.name !== "");
}

/**
 * tag.getInfo. Tag sem descrição vem só com o link "Read more on Last.fm":
 * tirando o HTML e esse link, não sobra texto.
 */
export function normalizeTagInfo(raw: any): { reach: number; hasWiki: boolean } {
    const summary = String(raw?.tag?.wiki?.summary ?? "")
        .replace(/<[^>]*>/g, " ")
        .replace(/read more on last\.fm/gi, "");
    return { reach: num(raw?.tag?.reach), hasWiki: /\p{L}/u.test(summary) };
}

/** Capa do álbum da música (track.getInfo). */
export function normalizeTrackCover(raw: any): string | null {
    return pickImage(raw?.track?.album?.image);
}

/** Capa do álbum mais popular do artista que tiver imagem de verdade (artist.getTopAlbums). */
export function normalizeArtistCover(raw: any): string | null {
    for (const album of toArray(raw?.topalbums?.album)) {
        const url = pickImage(album?.image);
        if (url) return url;
    }
    return null;
}
