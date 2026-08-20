"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Expand, Camera, Mail } from "lucide-react";
import type { ProductPhoto } from "@/lib/grily";

const ProductLightbox = dynamic(() => import("@/components/sections/ProductLightbox"), {
  ssr: false,
});

/**
 * Mozaika produktových fotek s lightboxem — sdílená všemi stránkami sekce
 * Grilování (Lorny, kulaté grily), aby měly identické chování i vzhled.
 *
 * Rozvržení je spočítané na šest fotek: šest dlaždic plus CTA přesně vyplní
 * 3 řádky po 4 sloupcích (na mobilu 6 řádků po 2). Když produkt dodá jiný
 * počet fotek, mřížka dojede na FALLBACK a v poslední řadě může zůstat
 * prázdné místo — pak je nutné upravit LAYOUT.
 */
const LAYOUT = [
  { span: "col-span-2 row-span-2", sizes: "(min-width: 768px) 50vw, 100vw" },
  { span: "col-span-1 row-span-1", sizes: "(min-width: 768px) 25vw, 50vw" },
  { span: "col-span-1 row-span-1", sizes: "(min-width: 768px) 25vw, 50vw" },
  { span: "col-span-1 row-span-1", sizes: "(min-width: 768px) 25vw, 50vw" },
  { span: "col-span-1 row-span-1", sizes: "(min-width: 768px) 25vw, 50vw" },
  { span: "col-span-2 row-span-1", sizes: "(min-width: 768px) 50vw, 100vw" },
];

const FALLBACK = { span: "col-span-1 row-span-1", sizes: "(min-width: 768px) 25vw, 50vw" };

type ProductGalleryProps = {
  /** Fotky produktu; položky bez `src` se vykreslí jako placeholder. */
  photos: ProductPhoto[];
  /** Odkaz na předvyplněný objednávkový e-mail. */
  orderHref: string;
  /** Popisek CTA dlaždice v mozaice. */
  ctaLabel?: string;
};

export default function ProductGallery({
  photos,
  orderHref,
  ctaLabel = "Chci objednat",
}: ProductGalleryProps) {
  const filled = photos.filter((photo): photo is Required<ProductPhoto> =>
    Boolean(photo.src),
  );
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid auto-rows-[150px] grid-cols-2 gap-2 md:auto-rows-[190px] md:grid-cols-4 md:gap-2.5">
        {photos.map((photo, i) => {
          const { span, sizes } = LAYOUT[i] ?? FALLBACK;
          const number = String(i + 1).padStart(2, "0");

          if (!photo.src) {
            return (
              <div
                key={photo.id}
                className={`relative flex items-center justify-center overflow-hidden border border-ink/10 bg-gray-100 ${span}`}
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(22,22,22,0.06) 0px, rgba(22,22,22,0.06) 1px, transparent 1px, transparent 14px)",
                }}
              >
                <Camera className="h-5 w-5 text-gray-500/60" strokeWidth={1.5} />
                <span className="absolute left-3 top-2.5 font-display text-xs text-gray-500/70">
                  {number}
                </span>
              </div>
            );
          }

          const openIndex = filled.findIndex((f) => f.id === photo.id);

          return (
            <button
              key={photo.id}
              type="button"
              onClick={() => setIndex(openIndex)}
              aria-label={`Zvětšit fotku: ${photo.alt}`}
              className={`group relative overflow-hidden border border-ink/10 bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 ${span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
              />

              {/* ztmavení + značky se objeví až na hover — v klidu je vidět jen fotka */}
              <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/25" />
              <span className="absolute left-3 top-2.5 font-display text-xs text-offwhite opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {number}
              </span>
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-red text-offwhite opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
            </button>
          );
        })}

        {/* Poslední buňka mozaiky je vyhrazená CTA — na mobilu ji tlačítko
            vyplní celou, na desktopu sedí uprostřed s rovnoměrnou mezerou. */}
        <div className="col-span-2 row-span-1 flex items-center justify-center md:px-6">
          <a
            href={orderHref}
            className="inline-flex h-full w-full items-center justify-center gap-2.5 border border-red bg-red px-8 py-4 font-display text-lg tracking-tight text-offwhite transition-colors hover:bg-red-dark md:h-auto md:px-10 md:py-5 md:text-xl"
          >
            <Mail className="h-5 w-5 shrink-0" strokeWidth={1.5} />
            {ctaLabel}
          </a>
        </div>
      </div>

      <ProductLightbox
        photos={filled}
        index={index}
        onClose={() => setIndex(null)}
        onNavigate={setIndex}
      />
    </>
  );
}
