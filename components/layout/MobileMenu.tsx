"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { NAV_ITEMS } from "@/lib/constants";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-offwhite lg:hidden"
        >
          <div className="container-page flex h-20 items-center justify-between">
            <span className="font-display text-xl font-semibold tracking-tight">
              SCHOVINOX
            </span>
            <button type="button" onClick={onClose} aria-label="Zavřít menu">
              <X className="text-offwhite" />
            </button>
          </div>

          <nav className="container-page flex flex-1 flex-col justify-center gap-1 pb-20">
            {NAV_ITEMS.map((item, i) => {
              const active = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-baseline gap-3 border-b border-offwhite/10 py-4 font-display text-3xl ${
                      active ? "text-red" : "text-offwhite"
                    }`}
                  >
                    <span className="text-sm text-offwhite/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
            <Link
              href="/kontakt"
              className="mt-8 inline-flex w-fit items-center border border-red bg-red px-6 py-3 text-sm font-medium text-offwhite"
            >
              Nezávazná poptávka
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
