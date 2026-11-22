import type { NextRequest } from "next/server";
import { getArtistCover, getTrackCover } from "@/lib/lastfm/client";
import { handleLastfmError, lastfmError, lastfmJson } from "@/lib/lastfm/route-helpers";

export async function GET(request: NextRequest) {
    const search = request.nextUrl.searchParams;
    const type = search.get("type");
    const artist = (search.get("artist") ?? "").trim();
    const track = (search.get("track") ?? "").trim();

    const invalid = (value: string) => value.length > 200 || /[\u0000-\u001f\u007f]/.test(value);
    if (artist === "" || invalid(artist) || invalid(track)) return lastfmError("BAD_REQUEST");
    if (type !== "artist" && !(type === "track" && track !== "")) return lastfmError("BAD_REQUEST");

    try {
        const imageUrl = type === "track" ? await getTrackCover(artist, track) : await getArtistCover(artist);
        return lastfmJson({ imageUrl }, 2_592_000);
    } catch (err) {
        return handleLastfmError(err);
    }
}
