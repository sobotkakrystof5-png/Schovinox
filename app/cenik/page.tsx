import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";

export const metadata: Metadata = {
  title: "Ceník",
  description:
    "Orientační ceník služeb Schovinox — zámečnictví, kovovýroba, kooperace a grilovací lavice.",
};

const PRICE_GROUPS = [
  {
    category: "Zámečnictví",
    items: [
      { label: "Výměna zámkové vložky", price: "......" },
      { label: "Servis a seřízení kování", price: "......" },
      { label: "Bezpečnostní dveře na míru", price: "......" },
    ],
  },
  {
    category: "Kovovýroba",
    items: [
      { label: "Zakázková výroba dle výkresu", price: "......" },
      { label: "Schodiště a zábradlí na míru", price: "......" },
      { label: "Drobné opravy a úpravy", price: "......" },
    ],
  },
  {
    category: "Kooperace",
    items: [
      { label: "Subdodávky dle dokumentace", price: "......" },
      { label: "Sériová výroba", price: "......" },
    ],
  },
  {
    category: "Grilovací lavice",
    items: [
      { label: "Základní model", price: "......" },
      { label: "S integrovaným stolem", price: "......" },
      { label: "Rozšířený set s policemi", price: "......" },
    ],
  },
];

export default function CenikPage() {
  return (
    <>
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red">
            Ceník
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            Orientační ceny, přesná kalkulace na míru.
          </h1>
          <p className="mt-5 max-w-lg text-sm text-gray-500">
            Ceny níže jsou orientační — konečná nabídka vždy vychází z
            konkrétní poptávky, rozsahu práce a materiálu.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          {PRICE_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="border-b border-ink/10 py-10 first:pt-0">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-display text-2xl text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-xl tracking-tight text-ink">
                    {group.category}
                  </h2>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex flex-col gap-1 border-t border-ink/5 py-3.5 first:border-t-0 sm:flex-row sm:items-baseline sm:justify-between"
                    >
                      <span className="text-sm text-ink/80">{item.label}</span>
                      <span className="text-sm font-medium text-ink">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-offwhite">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <WeldSeam className="mb-6 w-14 text-red" />
            <h2 className="font-display text-2xl tracking-tight md:text-3xl">
              Chcete přesnou cenu na vaši zakázku?
            </h2>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-1.5 border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark"
          >
            Nezávazně poptat
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
