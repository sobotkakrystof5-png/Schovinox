import { NextResponse } from "next/server";
import { getFromAddress, getTransporter, isMailConfigured } from "@/lib/mailer";
import {
  referenceSchema,
  REFERENCE_PHOTO_MAX_BYTES,
  REFERENCE_PHOTO_TYPES,
} from "@/lib/validations/reference";
import { SITE } from "@/lib/constants";

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Neplatná data formuláře." }, { status: 400 });
  }

  const parsed = referenceSchema.safeParse({
    name: formData.get("name")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    quote: formData.get("quote")?.toString() ?? "",
    consent: formData.get("consent")?.toString() === "true",
    website: formData.get("website")?.toString() ?? "",
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Neplatná data formuláře." }, { status: 400 });
  }

  const { name, company, quote, website } = parsed.data;

  // Honeypot vyplněný = pravděpodobně bot; tváříme se, že vše proběhlo v pořádku.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const photo = formData.get("photo");
  let attachments: { filename: string; content: Buffer }[] | undefined;

  if (photo instanceof File && photo.size > 0) {
    if (!REFERENCE_PHOTO_TYPES.includes(photo.type)) {
      return NextResponse.json({ error: "Nepodporovaný formát fotky." }, { status: 400 });
    }
    if (photo.size > REFERENCE_PHOTO_MAX_BYTES) {
      return NextResponse.json({ error: "Fotka je příliš velká, max. 4 MB." }, { status: 400 });
    }
    const buffer = Buffer.from(await photo.arrayBuffer());
    attachments = [{ filename: photo.name || "fotka.jpg", content: buffer }];
  }

  if (!isMailConfigured()) {
    console.error("SMTP_USER / SMTP_PASS nejsou nastaveny — e-mail nebyl odeslán.");
    return NextResponse.json(
      { error: "Formulář je dočasně nedostupný, zkuste to prosím telefonicky." },
      { status: 500 },
    );
  }

  try {
    const transporter = getTransporter();
    const fromAddress = getFromAddress();
    const toAddress = process.env.CONTACT_EMAIL ?? SITE.email;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject: `Nová reference k posouzení: ${name}`,
      text: [
        `Jméno: ${name}`,
        `Firma: ${company || "neuvedeno"}`,
        "",
        "Text reference:",
        quote,
        "",
        attachments ? "Fotka přiložena." : "Bez fotky.",
      ].join("\n"),
      attachments,
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
