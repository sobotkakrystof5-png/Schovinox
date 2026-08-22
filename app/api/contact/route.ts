import { NextResponse } from "next/server";
import { getFromAddress, getTransporter, isMailConfigured } from "@/lib/mailer";
import { contactSchema } from "@/lib/validations/contact";
import { INQUIRY_TYPES, SITE } from "@/lib/constants";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatná data formuláře." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Neplatná data formuláře." }, { status: 400 });
  }

  const { name, email, phone, inquiryType, message, website } = parsed.data;

  // Honeypot vyplněný = pravděpodobně bot; tváříme se, že vše proběhlo v pořádku.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!isMailConfigured()) {
    console.error("SMTP_USER / SMTP_PASS nejsou nastaveny — e-mail nebyl odeslán.");
    return NextResponse.json(
      { error: "Formulář je dočasně nedostupný, zkuste to prosím telefonicky." },
      { status: 500 },
    );
  }

  const inquiryLabel =
    INQUIRY_TYPES.find((type) => type.value === inquiryType)?.label ?? inquiryType;

  try {
    const transporter = getTransporter();
    const fromAddress = getFromAddress();
    const toAddress = process.env.CONTACT_EMAIL ?? SITE.email;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `Nová poptávka: ${inquiryLabel}`,
      text: [
        `Jméno: ${name}`,
        `E-mail: ${email}`,
        `Telefon: ${phone || "neuvedeno"}`,
        `Typ poptávky: ${inquiryLabel}`,
        "",
        "Zpráva:",
        message,
      ].join("\n"),
    });

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: "Děkujeme za poptávku - Schovinox",
      text: `Dobrý den ${name},\n\nděkujeme za poptávku (${inquiryLabel}). Ozveme se vám do 24 hodin.\n\nSchovinox`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Odeslání e-mailu přes SMTP selhalo:", err);
    return NextResponse.json(
      { error: "Odeslání se nezdařilo, zkuste to prosím znovu." },
      { status: 500 },
    );
  }
}
