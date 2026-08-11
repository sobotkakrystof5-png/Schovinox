/**
 * Kulatý gril se zadním topeništěm — obsah produktové stránky.
 *
 * Jediné místo, kde se mění cena, technické parametry a fotky. Stránka
 * (app/grilovaci-lavice/kulate-grily/page.tsx) čte odsud, galerii vykresluje
 * sdílená komponenta components/sections/ProductGallery.tsx.
 *
 * Gril se prodává v jediném provedení — proto jedna cena za kompletní set,
 * ne ceník variant jako u Loren.
 */

import type { ProductPhoto, SpecRow } from "@/lib/grily";

/** Cena kompletního setu v Kč včetně DPH. */
export const GRIL_PRICE = 27000;

/** Hodnota do URL poptávky — /kontakt?typ=grilovaci-lavice&produkt=… */
export const GRIL_SLUG = "kulaty-gril";

/** Co zákazník dostane v ceně — vypisuje se u ceny na stránce. */
export const GRIL_INCLUDED: string[] = [
  "Gril s topeništěm",
  "Nerezový motorek s nosností 50 kg",
  "Otočná jehla z kulatiny Ø 12 mm",
  "4 napichováky",
  "Odkapový plech 600 × 300 mm",
  "Odkládací stoleček s dřevěnou spárovkou",
];

/** Technická specifikace — pořadí odpovídá tomu, jak se gril skládá. */
export const GRIL_SPECS: SpecRow[] = [
  { label: "Rozměr grilu", value: "Ø 475 × 750 mm" },
  { label: "Plášť grilu", value: "Nerezový plech 2,5 mm" },
  { label: "Plášť topeniště", value: "Nerezový plech 3 mm" },
  { label: "Vsádka do topeniště", value: "Kulatina Ø 8 mm" },
  { label: "Odkapový plech", value: "600 × 300 mm, plech 1,2 mm, ouška z kulatiny Ø 5 mm" },
  { label: "Odkládací stoleček", value: "750 × 300 mm, buková nebo dubová spárovka (cinkovaná)" },
  { label: "Jehla", value: "Kulatina Ø 12 mm, 4 napichováky" },
  { label: "Motorek", value: "Nerezový, nosnost 50 kg" },
];

/** Hlavní fotka vlevo v sekci „Co je kulatý gril“. */
export const GRIL_INTRO_PHOTO: ProductPhoto = {
  id: "kulaty-gril-intro",
  alt: "Nerezový kulatý gril se zadním topeništěm",
};

export const GRIL_PHOTOS: ProductPhoto[] = [
  { id: "kulaty-gril-1", alt: "Nerezový kulatý gril se zadním topeništěm — celkový pohled" },
  { id: "kulaty-gril-2", alt: "Detail topeniště a vsádky z nerezové kulatiny" },
  { id: "kulaty-gril-3", alt: "Otočná jehla s napichováky a nerezový motorek" },
  { id: "kulaty-gril-4", alt: "Odkládací stoleček s dřevěnou spárovkou" },
  { id: "kulaty-gril-5", alt: "Kulatý gril při rožnění" },
  { id: "kulaty-gril-6", alt: "Broušený nerezový povrch kulatého grilu" },
];
