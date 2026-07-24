"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link href="/" className="font-display text-xl font-semibold tracking-tight">
            SCHOVINOX
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
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
