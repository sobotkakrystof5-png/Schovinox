import { Resend } from "resend";

let client: Resend | null = null;

export function isMailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

export function getResendClient(): Resend {
  if (!isMailConfigured()) {
    throw new Error("RESEND_API_KEY není nastaven — e-mail nelze odeslat.");
  }

  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY);
  }

  return client;
}

export function getFromAddress(): string {
  return process.env.CONTACT_FROM_EMAIL ?? "Schovinox web <onboarding@resend.dev>";
}
