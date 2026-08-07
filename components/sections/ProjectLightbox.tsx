"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectLightboxProps = {
  projects: Project[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function ProjectLightbox({
  projects,
  index,
  onClose,
  onNavigate,
}: ProjectLightboxProps) {
  const open = index !== null;
  const current = open ? projects[index!] : null;
  const canNavigate = projects.length > 1;

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % projects.length);
  }, [index, projects.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + projects.length) % projects.length);
  }, [index, projects.length, onNavigate]);

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
              aria-label="Předchozí projekt"
              className="absolute left-3 text-offwhite/70 hover:text-offwhite md:left-8"
            >
              <ChevronLeft className="h-8 w-8" strokeWidth={1.25} />
            </button>
          )}

          <motion.div
            key={current.slug}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="grid max-h-[85vh] w-full max-w-4xl gap-6 overflow-y-auto md:grid-cols-5 md:gap-10"
          >
            <div
              className="relative w-full border border-offwhite/15 md:col-span-3"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center md:col-span-2">
              <span className="text-xs uppercase tracking-[0.25em] text-red">
                {current.category}
              </span>
              <h3 className="mt-3 font-display text-2xl tracking-tight text-offwhite">
                {current.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-offwhite/60">
                {current.description}
              </p>
              {canNavigate && (
                <p className="mt-6 text-xs text-offwhite/40">
                  {index! + 1} / {projects.length}
                </p>
              )}
            </div>
          </motion.div>

          {canNavigate && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Další projekt"
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
