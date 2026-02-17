import { betterAuth } from "better-auth";
import { expo } from "@better-auth/expo";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";

// const prisma = new prisma();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
    },
    account: {
        modelName: "BA_Account",
    },
    session: {
        modelName: "Session",
    },
    advanced: {
        database: {
            generateId: "uuid", // or "cuid", "ulid", ...etc
        },
    },
    plugins: [expo(), nextCookies()],
    trustedOrigins: [
        // "*",
        "myapp://",
        // Development mode - Expo's exp:// scheme with local IP ranges
        ...(process.env.NODE_ENV === "development"
            ? [
                  "exp://", // Trust all Expo URLs (prefix matching)
                  "exp://**", // Trust all Expo URLs (wildcard matching)
                  "exp://192.168.*.*:*/**", // Trust 192.168.x.x IP range with any port and path
              ]
            : []),
    ],
    databaseHooks: {
        user: {
            create: {
                // before: null,
                after: async (user) => {
                    //perform additional actions, like creating a stripe customer
                    console.log("User created:", user);

                    const tempUsername = `user_${Math.random()
                        .toString(36)
                        .slice(2, 10)}`;

                    await prisma.profile.create({
                        data: {
                            id: user.id, // mesmo id do User
                            avatar_url: user.image || null,
                            username: tempUsername,
                            lowername: tempUsername.toLowerCase(),
                            name: user.name || user.email || "Usuário",
                            bio: "",
                        },
                    });
                },
            },
        },
    },
});
