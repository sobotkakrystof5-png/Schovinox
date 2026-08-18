import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";

export const metadata: Metadata = {
  title: "Ceník",
  description:
    "Ceník služeb Schovinox: jednotná hodinová sazba na zakázkovou kovovýrobu, zámečnické práce a kooperaci, u větších zakázek cena předem.",
};

const PRICE_ITEMS = [
  {
    title: "Zakázková kovovýroba a kooperace",
    text: "Jednotná sazba bez ohledu na to, jde-li o vlastní výrobu, nebo kooperaci pro jinou firmu.",
    price: "550 Kč",
    unit: "/ hod",
  },
  {
    title: "Větší zakázky a projekty",
    text: "Cenu stanovíme individuálně před zahájením prací, podle rozsahu, náročnosti a materiálu.",
    price: "Předem",
    unit: "",
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
            Jasná sazba. Velké zakázky na míru.
          </h1>
          <p className="mt-5 max-w-lg text-sm text-gray-500">
            Zakázkovou kovovýrobu i kooperaci účtujeme jednotnou
            hodinovou sazbou. U větších zakázek stanovíme cenu předem, podle
            rozsahu a náročnosti.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl divide-y divide-ink/10 border-y border-ink/10">
            {PRICE_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                  <div>
                    <h2 className="font-display text-base tracking-tight text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                      {item.text}
                    </p>
                  </div>
                  <div className="shrink-0 sm:text-right">
                    <span className="font-display text-2xl tracking-tight text-ink">
                      {item.price}
                    </span>
                    {item.unit && (
                      <span className="ml-1.5 text-sm text-gray-500">
                        {item.unit}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
