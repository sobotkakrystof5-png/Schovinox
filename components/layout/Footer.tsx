import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import WeldSeam from "@/components/ui/WeldSeam";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-offwhite">
      <WeldSeam className="opacity-70" />
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="font-display text-2xl font-semibold tracking-tight">
            SCHOVINOX
          </span>
          <p className="mt-4 max-w-xs text-sm text-offwhite/60">
            Zámečnictví, kovovýroba a svářečské řemeslo postavené na
            generacích zkušeností.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-offwhite/40">
            Mapa webu
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-offwhite/75 hover:text-red">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-offwhite/40">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-offwhite/75">
            <li>
              <a href={SITE.phoneHref} className="hover:text-red">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-red">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.address.full}</li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm">
            <a href={SITE.social.facebook} className="text-offwhite/50 hover:text-red">
              Facebook
            </a>
            <a href={SITE.social.instagram} className="text-offwhite/50 hover:text-red">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-offwhite/10 py-6 text-xs text-offwhite/40 md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} Schovinox. Všechna práva vyhrazena.</span>
        <span>IČO: ...... · ......</span>
      </div>
    </footer>
  );
}
