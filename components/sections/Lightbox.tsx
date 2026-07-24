"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";

type LightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  const current = open ? images[index!] : null;

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, goNext, goPrev]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 px-4"
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

          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[80vh] w-full max-w-2xl flex-col items-center"
          >
            <div
              className="flex w-full max-h-[70vh] items-center justify-center border border-offwhite/15 bg-ink/40"
              style={{ aspectRatio: current.ratio }}
            >
              <Camera className="h-10 w-10 text-offwhite/25" strokeWidth={1.25} />
            </div>
            <p className="mt-4 text-sm text-offwhite/50">
              [FOTO {current.id}] — {current.category} · {index! + 1} /{" "}
              {images.length}
            </p>
          </motion.div>

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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
