const EXPO_PUSH_URL = "https://exp.host/--/api/v2/push/send";

type PushPayload = {
    to: string; // token do destinatário
    title: string;
    body: string;
    data?: Record<string, unknown>;
};

export async function sendPushNotification(payload: PushPayload) {
    console.log("Enviando notificação para token:", payload);
    await fetch(EXPO_PUSH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...payload,
            sound: "default",
            channelId: "default",
        }),
    });
}
