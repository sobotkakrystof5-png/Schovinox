import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import WeldSeam from "@/components/ui/WeldSeam";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-offwhite">
      <WeldSeam className="opacity-70" />
      <div className="container-page grid gap-14 py-20 md:grid-cols-[1.2fr_1fr_1fr] md:py-24">
        <div>
          <span className="font-display text-3xl font-semibold tracking-tight">
            SCHOVINOX
          </span>
          <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-offwhite/60">
            Zakázková kovovýroba, kooperace a svářečské řemeslo postavené
            na generacích zkušeností.
          </p>
        </div>

        <div>
          <h3 className="text-[0.7rem] uppercase tracking-[0.18em] text-offwhite/40">
            Mapa webu
          </h3>
          <ul className="mt-5 space-y-3 text-[0.95rem]">
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
          <h3 className="text-[0.7rem] uppercase tracking-[0.18em] text-offwhite/40">
            Kontakt
          </h3>
          <ul className="mt-5 space-y-3 text-[0.95rem] text-offwhite/75">
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
          <div className="mt-5 flex gap-5 text-[0.95rem]">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite/50 hover:text-red"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-offwhite/10 py-8 text-[0.8rem] text-offwhite/40 md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} Schovinox. Všechna práva vyhrazena.</span>
        <div className="flex flex-col gap-1 md:items-end">
          <span>IČO: {SITE.ico}</span>
          <span>
            Vyrobeno{" "}
            <a
              href="https://www.vizeon.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite/60 hover:text-red"
            >
              Vizeon
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
