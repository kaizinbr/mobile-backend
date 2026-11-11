import { Vibrant } from "node-vibrant/node";

export async function POST(req: Request) {
    const { imageUrl } = await req.json();

    const palette = await Vibrant.from(imageUrl).getPalette();

    return response.data.json({
        Vibrant: palette.Vibrant?.hex,
        Muted: palette.Muted?.hex,
        DarkVibrant: palette.DarkVibrant?.hex,
        LightVibrant: palette.LightVibrant?.hex,
    });
}
