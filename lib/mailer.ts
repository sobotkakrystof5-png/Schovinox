import nodemailer from "nodemailer";

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

export function isMailConfigured(): boolean {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

export function getTransporter() {
  if (!isMailConfigured()) {
    throw new Error("SMTP_USER / SMTP_PASS nejsou nastaveny — e-mail nelze odeslat.");
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.seznam.cz",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: (process.env.SMTP_PORT ?? "465") === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return transporter;
}

export function getFromAddress(): string {
  return process.env.CONTACT_FROM_EMAIL ?? (process.env.SMTP_USER as string);
}
