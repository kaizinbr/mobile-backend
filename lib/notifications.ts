import { prisma } from "@/lib/prisma";
import { sendPushNotification } from "@/lib/pushNotification";

type NotificationType =
    | "like"
    | "comment"
    | "comment_like"
    | "mention"
    | "follow";

interface NotificationPayload {
    type: NotificationType;
    senderId: string;
    recipientId: string;
    ratingId?: string;
    commentId?: string;
    username?: string;
}

const NOTIFICATION_TEMPLATES: Record<
    NotificationType,
    (username: string) => { title: string; body: string }
> = {
    like: (username) => ({
        title: "Nova curtida",
        body: `${username} curtiu sua review`,
    }),
    comment: (username) => ({
        title: "Novo comentário",
        body: `${username} comentou na sua review`,
    }),
    comment_like: (username) => ({
        title: "Nova curtida",
        body: `${username} curtiu seu comentário`,
    }),
    mention: (username) => ({
        title: "Você foi mencionado",
        body: `${username} mencionou você em uma review`,
    }),
    follow: (username) => ({
        title: "Novo seguidor",
        body: `${username} começou a te seguir`,
    }),
};

export async function createNotification(payload: NotificationPayload) {
    const { type, senderId, recipientId, ratingId, commentId, username } = payload;

    // Não notifica a si mesmo
    if (senderId === recipientId) return;

    const [sender, recipient] = await Promise.all([
        prisma.profile.findUnique({
            where: { id: senderId },
            select: { username: true },
        }),
        prisma.profile.findUnique({
            where: { id: recipientId },
            select: { pushToken: true },
        }),
    ]);

    if (!sender?.username) return;

    // Persiste no banco
    await prisma.notification.create({
        data: {
            type,
            sender_id: senderId,
            user_id: recipientId,
            ...(ratingId ? { ratingId } : {}),
        },
    });

    // Envia push se tiver token
    if (recipient?.pushToken) {
        const { title, body } = NOTIFICATION_TEMPLATES[type](username || sender.username);
        await sendPushNotification({
            to: recipient.pushToken,
            title,
            body,
            data: {
                type,
                ...(ratingId ? { reviewId: ratingId } : {}),
                ...(commentId ? { commentId } : {}),
                ...(type === "follow" ? { username: sender.username } : {}),
            },
        });
    }
}
