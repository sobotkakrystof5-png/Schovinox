"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

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
    setExpanded(null);
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
              const active =
                pathname === item.href ||
                (item.children?.some((child) => pathname === child.href) ?? false);
              const hasChildren = Boolean(item.children?.length);
              const isExpanded = expanded === item.href;

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 * i }}
                  className="border-b border-offwhite/10"
                >
                  <div className="flex items-baseline gap-3 py-4">
                    <span className="text-sm text-offwhite/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Link
                      href={item.href}
                      className={`font-display text-3xl ${active ? "text-red" : "text-offwhite"}`}
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setExpanded(isExpanded ? null : item.href)}
                        aria-label={`${isExpanded ? "Skrýt" : "Zobrazit"} podstránky ${item.label}`}
                        aria-expanded={isExpanded}
                        className="ml-auto flex h-8 w-8 items-center justify-center text-offwhite/60"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && (
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-9"
                        >
                          {item.children?.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`flex items-center justify-between gap-3 py-3 text-lg ${
                                  pathname === child.href ? "text-red" : "text-offwhite/70"
                                }`}
                              >
                                {child.label}
                                {child.comingSoon && (
                                  <span className="text-[10px] uppercase tracking-[0.15em] text-offwhite/40">
                                    Připravujeme
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
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
