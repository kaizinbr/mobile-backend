import type { LastfmErrorCode } from "@/lib/lastfm/types";

export class LastfmError extends Error {
    constructor(public readonly code: LastfmErrorCode) {
        super(code);
        this.name = "LastfmError";
    }
}

/** Número de erro do Last.fm -> nosso código. Qualquer número desconhecido vira LASTFM_DOWN. */
export function mapLastfmError(errorNumber: number): LastfmErrorCode {
    if (errorNumber === 6) return "USER_NOT_FOUND";
    if (errorNumber === 17) return "PRIVATE_PROFILE";
    if (errorNumber === 29) return "RATE_LIMITED";
    return "LASTFM_DOWN";
}
