import { betterAuth } from "better-auth";
import { expo } from "@better-auth/expo";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { oneTimeTokenClient } from "better-auth/client/plugins";
import { emailOTP } from "better-auth/plugins";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";
import { sendVerificationRequest, sendResetPasswordEmail } from "@/lib/emails";

const resend = new Resend(process.env.AUTH_RESEND_KEY);

// const prisma = new prisma();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
        // sendResetPassword: async ({ user, url, token }, request) => {
        //     await sendVerificationRequest({
        //                     otp: token,
        //                     identifier: user.email,
        //                     from: "Acme <onboarding@kaizin.work>",
        //                     to: user.email,
        //                     subject: "Redefinir senha para sua conta",
        //                 });
        //                 console.log(`E-mail enviado com sucesso para ${user.email}`);
        // },
        // onPasswordReset: async ({ user }, request) => {
        //     // your logic here
        //     console.log(`Password for user ${user.email} has been reset.`);
        // },
    },
    oneTimeToken: {
        enabled: true,
        tokenLength: 6, // default is 32
        tokenCharset: "numeric", // default is "alphanumeric"
        tokenExpiration: 10 * 60, // 10 minutes in seconds, default is 15 minutes
    },
    baseURL: "https://api.kaizin.work",
    socialProviders: {
        google: {
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        },
    },
    session: {
        modelName: "Session",
    },
    advanced: {
        database: {
            generateId: "uuid", // or "cuid", "ulid", ...etc
        },
    },
    plugins: [
        expo(),
        nextCookies(),
        emailOTP({
            async sendVerificationOTP({ email, otp, type }) {
                if (type === "sign-in") {
                    try {
                        // 3. Aqui você dispara o e-mail usando o Resend
                        await sendVerificationRequest({
                            otp,
                            identifier: email,
                            from: "Acme <onboarding@kaizin.work>",
                            to: email,
                        });
                        console.log(`E-mail enviado com sucesso para ${email}`);
                    } catch (error) {
                        console.error(
                            "Erro ao enviar o e-mail pelo Resend:",
                            error,
                        );
                        // Opcional: você pode jogar um erro aqui para o frontend saber que falhou
                    }
                } else if (type === "email-verification") {
                    try {
                         await sendVerificationRequest({
                            otp,
                            identifier: email,
                            from: "Acme <onboarding@kaizin.work>",
                            to: email,
                            subject: "Verifique seu e-mail para continuar",
                        });
                        console.log(`E-mail enviado com sucesso para ${email}`);
                    } catch (error) {
                        console.error(
                            "Erro ao enviar o e-mail pelo Resend:",
                            error,
                        );
                        // Opcional: você pode jogar um erro aqui para o frontend saber que falhou
                    }
                } else {
                    try {
                         await sendVerificationRequest({
                            otp,
                            identifier: email,
                            from: "Acme <onboarding@kaizin.work>",
                            to: email,
                            subject: "Redefinir senha para sua conta",
                        });
                        console.log(`E-mail enviado com sucesso para ${email}`);
                    } catch (error) {
                        console.error(
                            "Erro ao enviar o e-mail pelo Resend:",
                            error,
                        );
                        // Opcional: você pode jogar um erro aqui para o frontend saber que falhou
                    }
                }
            },
        }),
    ],
    trustedOrigins: [
        // "*",
        "myapp://",
        "firstapp://",
        "https://api.kaizin.work",
        "http://localhost:3000",
        // Development mode - Expo's exp:// scheme with local IP ranges
        ...(process.env.NODE_ENV === "development"
            ? [
                  "exp://", // Trust all Expo URLs (prefix matching)
                  "exp://**", // Trust all Expo URLs (wildcard matching)
                  "exp://192.168.*.*:*/**", // Trust 192.168.x.x IP range with any port and path

                  "firstapp://",
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
                            avatar_url:
                                user.image ||
                                "https://zf4goehfa7fevldb.public.blob.vercel-storage.com/default.jpg",
                            username: tempUsername,
                            lowername: tempUsername.toLowerCase(),
                            name: user.name || user.email || "Usuário",
                            bio: "",
                            public: false,
                        },
                    });
                },
            },
        },
    },
});
