import { z } from "zod";

export const referenceSchema = z.object({
  name: z.string().trim().min(2, "Zadejte prosím jméno."),
  company: z.string().trim().optional().or(z.literal("")),
  quote: z.string().trim().min(20, "Napište prosím alespoň pár vět (min. 20 znaků)."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Je nutné souhlasit se zveřejněním reference." }),
  }),
  // Honeypot — musí zůstat prázdné, lidský návštěvník ho nevidí a nevyplní.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ReferenceFormValues = z.infer<typeof referenceSchema>;

// 4 MB — bezpečně pod ~4.5MB limitem těla requestu u Vercel serverless funkcí.
export const REFERENCE_PHOTO_MAX_BYTES = 4 * 1024 * 1024;
export const REFERENCE_PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];
