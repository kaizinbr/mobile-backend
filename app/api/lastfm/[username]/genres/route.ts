import type { NextRequest } from "next/server";
import { getGenres } from "@/lib/lastfm/client";
import { isClosedRange, parseRange } from "@/lib/lastfm/range";
import { findLastfmUsername, handleLastfmError, lastfmError, lastfmJson } from "@/lib/lastfm/route-helpers";

export const maxDuration = 30;

export async function GET(request: NextRequest, { params }: { params: Promise<{ username: string }> }) {
    const { username } = await params;

    const range = parseRange(request.nextUrl.searchParams);
    if (!range) return lastfmError("BAD_REQUEST");

    try {
        const lastfmUsername = await findLastfmUsername(username);
        if (!lastfmUsername) return lastfmError("USER_NOT_FOUND");

        const genres = await getGenres(lastfmUsername, range);
        return lastfmJson({ genres }, isClosedRange(range) ? 86_400 : 600);
    } catch (err) {
        return handleLastfmError(err);
    }
}
