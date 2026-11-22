/* eslint-disable @typescript-eslint/no-explicit-any */

import { LastfmError, mapLastfmError } from "@/lib/lastfm/errors";
import { computeCheckedGenres, looksLikeGenre, mapWithLimit } from "@/lib/lastfm/genres";
import {
    normalizeArtistCover,
    normalizeArtistTags,
    normalizeChart,
    normalizeRecentTotal,
    normalizeTagInfo,
    normalizeTop,
    normalizeTrackCover,
    normalizeUserPlaycount,
} from "@/lib/lastfm/normalize";
import { isClosedRange, toTimestamps } from "@/lib/lastfm/range";
import type {
    LastfmGenre,
    LastfmRange,
    LastfmTag,
    LastfmTopResponse,
    LastfmTopType,
} from "@/lib/lastfm/types";

/** Só métodos de leitura que não exigem login da pessoa. */
type Method =
    | "user.getInfo"
    | "user.getTopArtists"
    | "user.getTopAlbums"
    | "user.getTopTracks"
    | "user.getWeeklyArtistChart"
    | "user.getWeeklyAlbumChart"
    | "user.getWeeklyTrackChart"
    | "user.getRecentTracks"
    | "artist.getTopTags"
    | "artist.getTopAlbums"
    | "tag.getInfo"
    | "track.getInfo";


async function callLastfm(method: Method, params: Record<string, string>, revalidate: number): Promise<any> {
    const apiKey = process.env.LASTFM_API_KEY;
    if (!apiKey) {
        console.error("[lastfm] LASTFM_API_KEY não configurada");
        throw new LastfmError("LASTFM_DOWN");
    }

    const url = new URL("https://ws.audioscrobbler.com/2.0/");
    url.search = new URLSearchParams({ ...params, method, api_key: apiKey, format: "json" }).toString();

    for (let attempt = 0; attempt < 2; attempt++) {
        let body: any;
        try {
            const response = await fetch(url, {
                headers: { "User-Agent": "whistle/1.0" },
                signal: AbortSignal.timeout(8000),
                ...(attempt === 0 ? { next: { revalidate } } : { cache: "no-store" as const }),
            });
            body = await response.json();
        } catch {
            console.error(`[lastfm] ${method}: sem resposta ou resposta inválida`);
            throw new LastfmError("LASTFM_DOWN");
        }

        const errorNumber = Number(body?.error);
        if (!errorNumber) return body;

        if ([8, 11, 16].includes(errorNumber) && attempt === 0) {
            await new Promise((resolve) => setTimeout(resolve, 500));
            continue;
        }
        if (errorNumber !== 6) console.error(`[lastfm] ${method}: erro ${errorNumber}`);
        throw new LastfmError(mapLastfmError(errorNumber));
    }

    throw new LastfmError("LASTFM_DOWN");
}


export async function getTop(
    user: string,
    type: LastfmTopType,
    range: LastfmRange,
    limit: number,
): Promise<LastfmTopResponse> {
    if ("period" in range) {
        const method =
            type === "artists" ? "user.getTopArtists" : type === "albums" ? "user.getTopAlbums" : "user.getTopTracks";
        const raw = await callLastfm(method, { user, period: range.period, limit: String(limit) }, 600);
        const { total, items } = normalizeTop(type, raw);
        // O Last.fm às vezes devolve mais itens que o limit pedido.
        return { type, total, items: items.slice(0, limit) };
    }

    const method =
        type === "artists"
            ? "user.getWeeklyArtistChart"
            : type === "albums"
              ? "user.getWeeklyAlbumChart"
              : "user.getWeeklyTrackChart";
    const raw = await callLastfm(
        method,
        { user, from: String(range.from), to: String(range.to) },
        isClosedRange(range) ? 86_400 : 600,
    );
    const { total, items } = normalizeChart(type, raw, limit);
    return { type, total, items };
}


export async function getScrobbles(user: string, range: LastfmRange): Promise<number> {
    if ("period" in range && range.period === "overall") {
        return normalizeUserPlaycount(await callLastfm("user.getInfo", { user }, 600));
    }
    const { from, to } = toTimestamps(range, Date.now() / 1000);
    const raw = await callLastfm(
        "user.getRecentTracks",
        { user, from: String(from), to: String(to), limit: "1" },
        isClosedRange(range) ? 86_400 : 600,
    );
    return normalizeRecentTotal(raw);
}

async function getArtistTags(artist: string): Promise<LastfmTag[]> {
    try {
        return normalizeArtistTags(await callLastfm("artist.getTopTags", { artist }, 604_800));
    } catch (err) {
        if (err instanceof LastfmError && err.code === "USER_NOT_FOUND") return [];
        throw err;
    }
}


async function isGenreTag(tag: string): Promise<boolean> {
    try {
        return looksLikeGenre(normalizeTagInfo(await callLastfm("tag.getInfo", { tag: tag.toLowerCase() }, 2_592_000)));
    } catch (err) {
        return !(err instanceof LastfmError && err.code === "USER_NOT_FOUND");
    }
}


export async function getGenres(user: string, range: LastfmRange): Promise<LastfmGenre[]> {
    const { items } = await getTop(user, "artists", range, 20);
    const tags = await mapWithLimit(items, 3, async (artist) => {
        try {
            return await getArtistTags(artist.name);
        } catch {
            return null;
        }
    });
    if (items.length > 0 && tags.every((t) => t === null)) throw new LastfmError("LASTFM_DOWN");

    return computeCheckedGenres(
        items.map((artist, i) => ({ name: artist.name, playcount: artist.playcount, tags: tags[i] ?? [] })),
        isGenreTag,
    );
}

export async function getTrackCover(artist: string, track: string): Promise<string | null> {
    try {
        return normalizeTrackCover(await callLastfm("track.getInfo", { artist, track, autocorrect: "1" }, 2_592_000));
    } catch (err) {
        if (err instanceof LastfmError && err.code === "USER_NOT_FOUND") return null;
        throw err;
    }
}

export async function getArtistCover(artist: string): Promise<string | null> {
    try {
        return normalizeArtistCover(
            await callLastfm("artist.getTopAlbums", { artist, limit: "5", autocorrect: "1" }, 2_592_000),
        );
    } catch (err) {
        if (err instanceof LastfmError && err.code === "USER_NOT_FOUND") return null;
        throw err;
    }
}
