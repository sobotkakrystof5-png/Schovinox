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
  src: "/kulate-grily/kulaty-gril-intro.jpeg",
  alt: "Kulatý nerezový gril z boku — komínek, samostatné topeniště, motorek a sklopný dřevěný stoleček",
};

export const GRIL_PHOTOS: ProductPhoto[] = [
  {
    id: "kulaty-gril-1",
    src: "/kulate-grily/kulaty-gril-1.jpeg",
    alt: "Zavřený kulatý gril zepředu — komínek, teploměr na víku a sklopný dřevěný stoleček",
  },
  {
    id: "kulaty-gril-2",
    src: "/kulate-grily/kulaty-gril-2.jpeg",
    alt: "Otevřený gril zepředu — otočná jehla s napichováky nad odkapovým plechem, v pozadí mřížovaná stěna topeniště",
  },
  {
    id: "kulaty-gril-3",
    src: "/kulate-grily/kulaty-gril-3.jpeg",
    alt: "Detail otočné jehly se čtyřmi napichováky a křídlovými maticemi nad odkapovým plechem",
  },
  {
    id: "kulaty-gril-4",
    src: "/kulate-grily/kulaty-gril-4.jpeg",
    alt: "Pohled do otevřeného grilu — jehla nad odkapovým plechem, mřížovaná stěna topeniště a dřevěný stoleček v popředí",
  },
  {
    id: "kulaty-gril-5",
    src: "/kulate-grily/kulaty-gril-5.jpeg",
    alt: "Detail otevřeného topeniště s roštem z nerezové kulatiny, v pozadí komínek a madlo víka",
  },
  {
    id: "kulaty-gril-6",
    src: "/kulate-grily/kulaty-gril-6.jpeg",
    alt: "Kulatý gril z boku — komínek, samostatné topeniště, nerezový motorek a sklopný stoleček",
  },
];
