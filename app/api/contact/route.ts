import { NextResponse } from "next/server";
import { Resend } from "resend";
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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY není nastaven — e-mail nebyl odeslán.");
    return NextResponse.json(
      { error: "Formulář je dočasně nedostupný, zkuste to prosím telefonicky." },
      { status: 500 },
    );
  }

  const inquiryLabel =
    INQUIRY_TYPES.find((type) => type.value === inquiryType)?.label ?? inquiryType;

  try {
    const resend = new Resend(apiKey);
    const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "Schovinox web <onboarding@resend.dev>";
    const toAddress = process.env.CONTACT_EMAIL ?? SITE.email;

    await resend.emails.send({
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

    await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "Děkujeme za poptávku - Schovinox",
      text: `Dobrý den ${name},\n\nděkujeme za poptávku (${inquiryLabel}). Ozveme se vám do 24 hodin.\n\nSchovinox`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Odeslání e-mailu přes Resend selhalo:", err);
    return NextResponse.json(
      { error: "Odeslání se nezdařilo, zkuste to prosím znovu." },
      { status: 500 },
    );
  }
}
