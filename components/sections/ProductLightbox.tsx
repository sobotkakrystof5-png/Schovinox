"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductPhoto } from "@/lib/grily";

/**
 * Lightbox produktové mozaiky (ProductGallery) — vyčleněný do vlastního
 * souboru a načítaný přes next/dynamic, protože framer-motion animace
 * potřebuje jen uživatel, který na fotku klikne, ne první vykreslení stránky.
 */
type ProductLightboxProps = {
  photos: Required<ProductPhoto>[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function ProductLightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: ProductLightboxProps) {
  const open = index !== null && index >= 0 && index < photos.length;
  const current = open ? photos[index] : null;
  const canNavigate = photos.length > 1;

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % photos.length);
  }, [index, photos.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (canNavigate && e.key === "ArrowRight") goNext();
      if (canNavigate && e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, goNext, goPrev, canNavigate]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 px-4 py-10"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Zavřít"
            className="absolute right-5 top-5 text-offwhite/70 hover:text-offwhite"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>

          {canNavigate && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Předchozí fotka"
              className="absolute left-3 text-offwhite/70 hover:text-offwhite md:left-8"
            >
              <ChevronLeft className="h-8 w-8" strokeWidth={1.25} />
            </button>
          )}

          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-4xl flex-col items-center"
          >
            <div className="relative h-[70vh] w-full border border-offwhite/15">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 768px) 80vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-offwhite/50">
              {current.alt}
              {canNavigate && (
                <span className="ml-2 text-offwhite/35">
                  {index + 1} / {photos.length}
                </span>
              )}
            </p>
          </motion.div>

          {canNavigate && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Další fotka"
              className="absolute right-3 text-offwhite/70 hover:text-offwhite md:right-8"
            >
              <ChevronRight className="h-8 w-8" strokeWidth={1.25} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
