"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { GALLERY_CATEGORIES, GALLERY_IMAGES, type GalleryCategory } from "@/lib/gallery";

const Lightbox = dynamic(() => import("@/components/sections/Lightbox"), { ssr: false });

export default function GalleryGrid() {
  const [filter, setFilter] = useState<"Vše" | GalleryCategory>("Vše");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "Vše"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === filter),
    [filter],
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setFilter(category);
              setActiveIndex(null);
            }}
            className={`border px-4 py-2 text-sm transition-colors ${
              filter === category
                ? "border-red bg-red text-offwhite"
                : "border-ink/15 text-ink/70 hover:border-ink/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="block w-full text-left"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="w-full h-auto transition-opacity hover:opacity-80"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={filtered}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
