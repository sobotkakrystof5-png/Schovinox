import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";
import { orderMailHref } from "@/lib/grily";
import { GRILL_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grilovací rošty",
  description:
    "Grilovací rošty z potravinářského nerezu 1.4301 připravujeme. Rozměr i provedení vyrobíme na míru — napište nám a domluvíme se.",
  // Stránka zatím nemá obsah — do vyhledávače ji pouštět nechceme.
  robots: { index: false, follow: true },
};

// Ostatní produkty sekce Grilování — na tuhle stránku patří jako rozcestník,
// aby návštěvník neskončil ve slepé uličce.
const OTHER_PAGES = GRILL_PAGES.filter((page) => !page.comingSoon);

// Předvyplněný e-mail panu Schovánkovi — zákazník jen doplní údaje a odešle.
const ORDER_MAIL = orderMailHref({
  subject: "Poptávka grilovacího roštu",
  intro: "mám zájem o grilovací rošt na míru.",
  fields: [
    "Rozměr (mm):",
    "Pro jaký gril nebo ohniště:",
    "Počet kusů:",
  ],
});

export default function GrilovaciRostyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page grid gap-8 pb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-red">
              Připravujeme
            </span>
            <h1 className="mt-5 font-display text-4xl tracking-tight text-ink md:text-5xl">
              Grilovací rošty.
            </h1>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-gray-500">
              Na téhle stránce pracujeme — fotky, rozměry a ceny sem doplníme,
              jakmile budou hotové.
            </p>
          </div>
        </div>
      </section>

      {/* Stav rozpracovanosti */}
      <section className="border-b border-ink/10 py-20 md:py-24">
        <div className="container-page grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <WeldSeam className="mb-6 w-14 text-red" />
            <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
              Zatím se na tom dělá
            </h2>
          </div>

          <Reveal className="md:col-span-7">
            <p className="text-base leading-relaxed text-ink">
              Grilovací rošty vyrábíme ze stejného materiálu jako zbytek naší
              produktové řady — z broušeného potravinářského nerezu 1.4301, bez
              nátěrů a laků.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              Než sem doplníme fotky a ceník, platí jednoduchá věc: rošt umíme
              udělat na míru vašemu grilu nebo ohništi. Napište nám rozměr
              a představu, ozveme se s cenou a termínem.
            </p>

            <a
              href={ORDER_MAIL}
              className="mt-8 inline-flex items-center gap-2 border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              Poptat grilovací rošt
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              Tlačítko otevře e-mail s předvyplněnou poptávkou — stačí doplnit
              rozměr a odeslat.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Rozcestník na hotové produkty */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="container-page">
          <span className="text-xs uppercase tracking-[0.25em] text-red">
            Mezitím
          </span>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-ink md:text-3xl">
            Podívejte se na to, co už vyrábíme
          </h2>

          <ul className="mt-8 border-t border-ink/10">
            {OTHER_PAGES.map((page) => (
              <li key={page.href} className="border-b border-ink/10">
                <Link
                  href={page.href}
                  className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-red"
                >
                  <span className="font-display text-xl tracking-tight text-ink transition-colors group-hover:text-red">
                    {page.label}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-gray-500 transition-colors group-hover:text-red"
                    strokeWidth={1.5}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
