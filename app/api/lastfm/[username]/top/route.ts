import type { NextRequest } from "next/server";
import { getTop } from "@/lib/lastfm/client";
import { isClosedRange, parseRange } from "@/lib/lastfm/range";
import { findLastfmUsername, handleLastfmError, lastfmError, lastfmJson } from "@/lib/lastfm/route-helpers";

export async function GET(request: NextRequest, { params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;
    const search = request.nextUrl.searchParams;

    const type = search.get("type");
    if (type !== "artists" && type !== "albums" && type !== "tracks") return lastfmError("BAD_REQUEST");

    const range = parseRange(search);
    if (!range) return lastfmError("BAD_REQUEST");

    const limit = Number(search.get("limit") ?? 10);
    if (!Number.isInteger(limit) || limit < 1 || limit > 50) return lastfmError("BAD_REQUEST");

    try {
        const lastfmUsername = await findLastfmUsername(username);
        if (!lastfmUsername) return lastfmError("USER_NOT_FOUND");

        const data = await getTop(lastfmUsername, type, range, limit);
        return lastfmJson(data, isClosedRange(range) ? 86_400 : 600);
    } catch (err) {
        return handleLastfmError(err);
    }
}
