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
      { size: "500 × 300", slug: "500x300", price: 3300 },
      { size: "500 × 400", slug: "500x400", price: 3400 },
      { size: "500 × 500", slug: "500x500", price: 3700 },
    ],
  },
];

export const LORNA_VARIANTS: LornaVariant[] = LORNA_SERIES.flatMap(
  (series) => series.variants,
);

/** Hlavní fotka vlevo v sekci „Co je grilovací Lorna“. */
export const LORNA_INTRO_PHOTO: ProductPhoto = {
  id: "lorna-intro",
  alt: "Grilovací Lorna z potravinářského nerezu 1.4301",
};

export const LORNA_PHOTOS: ProductPhoto[] = [
  { id: "lorna-1", alt: "Grilovací Lorna z potravinářského nerezu 1.4301 — celkový pohled" },
  { id: "lorna-2", alt: "Detail svaru a broušení nerezové Lorny" },
  { id: "lorna-3", alt: "Grilovací Lorna — provedení na míru" },
  { id: "lorna-4", alt: "Grilovací Lorna při grilování" },
  { id: "lorna-5", alt: "Nerezový povrch grilovací Lorny" },
  { id: "lorna-6", alt: "Grilovací Lorna — rozměrová varianta" },
];
