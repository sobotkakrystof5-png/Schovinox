/**
 * Sdílené základy produktových stránek sekce Grilování.
 *
 * Grilovací Lorny (lib/lorny.ts) i kulaté grily (lib/kulate-grily.ts) staví
 * na stejném typu fotky a stejném formátu ceny, aby obě stránky vypadaly
 * a chovaly se identicky. Nový grilovací produkt zakládej stejným způsobem.
 */

import { SITE } from "@/lib/constants";

export type ProductPhoto = {
  id: string;
  /**
   * Cesta k fotce v /public — např. "/lorny/lorna-1.jpeg".
   * Dokud je prázdná, dlaždice se vykreslí jako placeholder a nejde otevřít.
   */
  src?: string;
  alt: string;
};

/** Řádek technické specifikace — levý popisek, pravá hodnota. */
export type SpecRow = {
  label: string;
  value: string;
};

type OrderMail = {
  /** Předmět e-mailu — ať pan Schovánek pozná poptávku už ze schránky. */
  subject: string;
  /** První věta zprávy, navazuje na oslovení. Např. „mám zájem o …“. */
  intro: string;
  /** Prázdné kolonky, které zákazník doplní (rozměr, počet kusů apod.). */
  fields?: string[];
};

/**
 * Odkaz na předvyplněný e-mail panu Schovánkovi.
 *
 * Používají ho všechna CTA v sekci Grilování — zákazníka nechceme posílat
 * do formuláře, stačí, když v mailu doplní kolonky a odešle. Oslovení,
 * kontaktní údaje i závěr jsou společné, aby poptávky z webu chodily
 * pokaždé ve stejném tvaru.
 */
export function orderMailHref({ subject, intro, fields = [] }: OrderMail): string {
  const body = [
    "Dobrý den, pane Schovánku,",
    "",
    intro,
    "",
    ...(fields.length > 0 ? [...fields, ""] : []),
    "Jméno:",
    "Telefon:",
    "",
    "Děkuji za odpověď.",
  ].join("\n");

  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

/** Cena bez měny, s pevnou mezerou po tisících — deterministicky, bez Intl. */
export function formatPrice(value: number): string {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
