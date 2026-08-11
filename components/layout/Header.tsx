"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          transparent
            ? "bg-transparent text-offwhite"
            : "border-b border-ink/10 bg-offwhite/95 text-ink backdrop-blur-sm"
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
            SCHOVINOX
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                pathname === item.href ||
                (item.children?.some((child) => pathname === child.href) ?? false);
              const hasChildren = Boolean(item.children?.length);

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenDropdown(item.href)}
                  onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative py-1 text-sm transition-colors ${
                      active
                        ? "text-red"
                        : transparent
                          ? "text-offwhite/90 hover:text-offwhite"
                          : "text-ink/80 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-red" />
                    )}
                  </Link>

                  {hasChildren && (
                    <AnimatePresence>
                      {openDropdown === item.href && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full min-w-[220px] border border-ink/10 bg-offwhite pt-2 text-ink shadow-[0_16px_32px_-16px_rgba(0,0,0,0.25)]"
                        >
                          <span className="block h-[2px] w-8 bg-red" aria-hidden="true" />
                          <ul className="py-2">
                            {item.children?.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-ink/80 transition-colors hover:bg-ink/[0.04] hover:text-red"
                                >
                                  {child.label}
                                  {child.comingSoon && (
                                    <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500">
                                      Připravujeme
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/kontakt"
              className="hidden items-center border border-red bg-red px-5 py-2.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark md:inline-flex"
            >
              Nezávazná poptávka
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Otevřít menu"
              className="lg:hidden"
            >
              <Menu className={transparent ? "text-offwhite" : "text-ink"} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
