import { z } from "zod";

export const inquiryTypeValues = [
  "zamecnictvi",
  "kovovyroba",
  "kooperace",
  "grilovaci-lavice",
  "jine",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Zadejte prosím jméno."),
  email: z.string().trim().email("Zadejte platný e-mail."),
  phone: z.string().trim().optional().or(z.literal("")),
  inquiryType: z.enum(inquiryTypeValues, {
    errorMap: () => ({ message: "Vyberte typ poptávky." }),
  }),
  message: z.string().trim().min(10, "Zpráva musí mít alespoň 10 znaků."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Je nutné souhlasit se zpracováním údajů." }),
  }),
  // Honeypot — musí zůstat prázdné, lidský návštěvník ho nevidí a nevyplní.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
