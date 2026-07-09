import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ username: string }> },
) {
    const { username } = await params;
    const currentYearStart = new Date();
    currentYearStart.setUTCMonth(0, 1);
    currentYearStart.setUTCHours(0, 0, 0, 0);

    try {
        const [reviews, totalReviews, currentYearReviews] = await Promise.all([
            prisma.rating.findMany({
                select: {
                    total: true,
                },
                where: {
                    published: true,
                    Profile: {
                        lowername: username.toLowerCase(),
                    },
                },
            }),
            prisma.rating.count({
                where: {
                    published: true,
                    Profile: {
                        lowername: username.toLowerCase(),
                    },
                },
            }),
            prisma.rating.count({
                where: {
                    published: true,
                    created_at: {
                        gte: currentYearStart,
                    },
                    Profile: {
                        lowername: username.toLowerCase(),
                    },
                },
            }),
        ]);

        const buckets = Array.from({ length: 11 }, (_, index) => ({
            rate: index * 10,
            count: 0,
        }));

        reviews.forEach((review) => {
            const total = Number(review.total);

            if (Number.isNaN(total)) {
                return;
            }

            const normalizedRate = Math.min(
                100,
                Math.max(0, Math.floor(total / 10) * 10),
            );
            const bucket = buckets[normalizedRate / 10];

            if (bucket) {
                bucket.count += 1;
            }
        });

        return NextResponse.json(
            {
                buckets,
                totalReviews,
                currentYearReviews,
            },
            { status: 200 },
        );
    } catch (err) {
        console.error("fetch error", err);
        return NextResponse.json(
            { error: "Failed to fetch reviews" },
            { status: 500 },
        );
    }
}
