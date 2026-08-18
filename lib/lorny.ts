/**
 * Grilovací Lorny — obsah produktové stránky.
 *
 * Jediné místo, kde se mění ceny, rozměry a fotky. Stránka
 * (app/grilovaci-lavice/grilovaci-lorny/page.tsx) čte odsud, galerii
 * vykresluje sdílená komponenta components/sections/ProductGallery.tsx.
 * Typ fotky a formát ceny jsou společné se zbytkem sekce — viz lib/grily.ts.
 */

import type { ProductPhoto } from "@/lib/grily";

export type LornaVariant = {
  /** Rozměr v milimetrech, tak jak se vypíše na stránce. */
  size: string;
  /** Hodnota do URL poptávky — /kontakt?typ=grilovaci-lavice&rozmer=… */
  slug: string;
  /** Cena v Kč za kus ve standardním provedení. */
  price: number;
};

export type LornaSeries = {
  label: string;
  variants: LornaVariant[];
};

export const LORNA_SERIES: LornaSeries[] = [
  {
    label: "Řada 400",
    variants: [
      { size: "400 × 250", slug: "400x250", price: 2200 },
      { size: "400 × 350", slug: "400x350", price: 2700 },
      { size: "400 × 400", slug: "400x400", price: 3000 },
    ],
  },
  {
    label: "Řada 500",
    variants: [
      { size: "500 × 300", slug: "500x300", price: 3000 },
      { size: "500 × 400", slug: "500x400", price: 3400 },
      { size: "500 × 500", slug: "500x500", price: 3700 },
    ],
  },
];

export const LORNA_VARIANTS: LornaVariant[] = LORNA_SERIES.flatMap(
  (series) => series.variants,
);

/**
 * Hlavní fotka vlevo v sekci „Co je grilovací Lorna“.
 *
 * Nová sada (červenec 2026) obsahuje záběry z reálného grilování (vana plná
 * marinovaného nebo hotového jídla), ne čisté produktové fotky prázdného
 * výrobku. Žádná z fotek nemá vypálený rozměrový štítek, takže není možné
 * bezpečně přiřadit konkrétní fotku ke konkrétnímu rozměru — viz komentář
 * u LORNA_PHOTOS. Samostatná intro fotka k dispozici není, proto tu vědomě
 * opakujeme stejný soubor jako u lorna-5 (nejlepší celkový záběr na výrobek
 * — vanu, odklopený kryt, stojan) — jde o jednu fotku použitou na dvou
 * místech stránky, ne o duplicitní zdroj.
 */
export const LORNA_INTRO_PHOTO: ProductPhoto = {
  id: "lorna-intro",
  src: "/lorny/lorna-5.jpeg",
  alt: "Grilovací Lorna z potravinářského nerezu 1.4301, obdélníková vana se dvěma kulatými trubkami uprostřed, naplněná marinovaným masem s bylinkami, na stojanu s odklopeným plochým krytem v pozadí",
};

/**
 * Fotky nemají vypálený rozměrový štítek (na rozdíl od staré sady), takže
 * přiřazení konkrétní fotky ke konkrétnímu rozměru (400×250 … 500×500) není
 * možné určit spolehlivě — proto tu žádný rozměr u jednotlivých fotek
 * netvrdíme a pořadí lorna-1..6 odpovídá jen pořadí souborů od klienta.
 * Jedna fotka z původní sedmičky (watermark fotoaparátu v rohu) byla na
 * žádost klienta vyřazena. Alt texty popisují jen to, co je na fotce
 * skutečně vidět.
 */
export const LORNA_PHOTOS: ProductPhoto[] = [
  {
    id: "lorna-1",
    src: "/lorny/lorna-1.jpeg",
    alt: "Grilovací Lorna z potravinářského nerezu 1.4301, obdélníková vana se dvěma kulatými trubkami uprostřed, naplněná syrovým kořeněným masem, na stojanu venku na trávě",
  },
  {
    id: "lorna-2",
    src: "/lorny/lorna-2.jpeg",
    alt: "Grilovací Lorna z potravinářského nerezu 1.4301, obdélníková vana s jednou kulatou trubkou uprostřed, zasazená do těla grilu, naplněná syrovým kuřecím masem s paprikou a cibulí",
  },
  {
    id: "lorna-3",
    src: "/lorny/lorna-3.jpeg",
    alt: "Grilovací Lorna z potravinářského nerezu 1.4301, obdélníková vana s jednou kulatou trubkou uprostřed, naplněná marinovaným masem s cibulí v omáčce, na dřevěném stole",
  },
  {
    id: "lorna-4",
    src: "/lorny/lorna-4.jpeg",
    alt: "Grilovací Lorna z potravinářského nerezu 1.4301, obdélníková vana s jednou kulatou trubkou uprostřed na stojanu nad žhavými uhlíky, s naběračkou, obsahuje propečenou směs masa a zeleniny",
  },
  {
    id: "lorna-5",
    src: "/lorny/lorna-5.jpeg",
    alt: "Grilovací Lorna z potravinářského nerezu 1.4301, obdélníková vana se dvěma kulatými trubkami uprostřed, naplněná marinovaným masem s bylinkami, na stojanu s odklopeným plochým krytem v pozadí",
  },
  {
    id: "lorna-6",
    src: "/lorny/lorna-6.jpeg",
    alt: "Grilovací Lorna z potravinářského nerezu 1.4301, obdélníková vana se dvěma kulatými trubkami uprostřed, detail shora na propečený pokrm s brambory v omáčce, stoupá pára",
  },
];
