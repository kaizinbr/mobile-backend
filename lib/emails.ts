/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import Email, { ResetPasswordEmail } from "@/components/mail/email-template";
import { Resend } from 'resend';

const RESEND_KEY = process.env.AUTH_RESEND_KEY || '';
const resend = new Resend(RESEND_KEY);

export async function sendVerificationRequest(params: any) {
    const { identifier: to, otp, url, expires, from, theme, subject } = params;

    // await saveotpOTP(otp, to);
    console.log("Sending verification email to", to, "with OTP:", otp);
// 
    const { data, error } = await resend.emails.send({
            from,
            to,
            subject: subject || `${otp} – Seu código de acesso`,
            react: Email({ otp }),
            // text: text({ token, expires }),
        
    });

    if (error) {
        console.error("Error sending verification email:", error);
    }
    else {
        console.log("Verification email sent to", to);
    }
}

export async function sendResetPasswordEmail(params: any) {
    const { identifier: to, token, url, expires, provider, theme } = params;

    await saveTokenOTP(token, to);

    const { data, error } = await resend.emails.send({
            from: provider.from,
            to,
            subject: `Redefinir senha para sua conta`,
            react: ResetPasswordEmail({ url }),
            // text: text({ token, expires }),
        
    });

    if (error) {
        console.error("Error sending reset password email:", error);
    }
    else {
        console.log("Reset password email sent to", to);
    }
}

async function saveTokenOTP(token: string, identifier: string) {
    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutos

    const existingToken = await prisma.tokenOTP.findUnique({
        where: { identifier },
    });

    if (existingToken) {
        // se já existe, sobrescrever e enviar o novo
        return await prisma.tokenOTP.update({
            where: { identifier },
            data: {
                token,
                expires,
            },
        });
    }

    return await prisma.tokenOTP.create({
        data: {
            token,
            identifier,
            expires,
        },
    });
}

function html(params: { token: string; expires: Date; theme: any }) {
    const { token, expires, theme } = params;

    const brandColor = theme.brandColor || "#346df1";
    const color = {
        background: "#f9f9f9",
        text: "#444",
        mainBackground: "#fff",
        codeBackground: brandColor,
        codeText: theme.buttonText || "#fff",
    };

    return `
        <body style="background: ${color.background}; padding: 20px;">
        <table width="100%" cellpadding="0" cellspacing="0"
            style="max-width: 600px; margin: auto; background: ${color.mainBackground}; border-radius: 10px; font-family: Helvetica, Arial, sans-serif;">
            <tr>
            <td align="center" style="padding: 20px; font-size: 20px; color: ${color.text};">
                Seu código de login
            </td>
            </tr>

            <tr>
            <td align="center" style="padding: 10px;">
                <div
                style="
                    display: inline-block;
                    background: ${color.codeBackground};
                    color: ${color.codeText};
                    font-size: 28px;
                    letter-spacing: 6px;
                    padding: 14px 24px;
                    border-radius: 8px;
                    font-weight: bold;
                ">
                ${token}
                </div>
            </td>
            </tr>

            <tr>
            <td align="center" style="padding: 10px; font-size: 14px; color: ${color.text};">
                Este código expira em <strong>10 minutos</strong>.
            </td>
            </tr>

            <tr>
            <td align="center" style="padding: 10px 20px 20px; font-size: 14px; color: ${color.text};">
                Se você não solicitou este código, pode ignorar este email com segurança.
            </td>
            </tr>
        </table>
        </body>
`;
}

function text(params: { token: string; expires: Date }) {
    const { token, expires } = params;

    return `
Seu código de acesso é:

${token}

Este código expira em <strong>10 minutos</strong>.

Se você não solicitou este código, ignore este email.
`;
}
