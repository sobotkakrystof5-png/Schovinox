import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionMark from "@/components/ui/SectionMark";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";
import { GRILL_PAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Zakázková kovovýroba a zámečnické práce, kooperace pro výrobní firmy a výroba produktů na grilování. Tři obory, jedna dílna.",
};

const SERVICES = [
  {
    title: "Zakázková kovovýroba",
    text: "Výroba na míru podle vašeho návrhu, výkresu nebo jen popisu: konstrukce, zábradlí, schodiště, nerezové díly i atypické zámečnické práce. Od zaměření na místě přes výrobu v dílně až po montáž.",
    href: "/kontakt?typ=kovovyroba",
    ratio: "4 / 3",
    image: "/sluzby/zakazkova-vyroba.jpeg",
    alt: "Zakázkově vyrobený nerezový díl s přivařenými výztuhami zavěšený na jeřábovém háku v dílně",
  },
  {
    title: "Kooperace",
    text: "Spolupráce s výrobními a strojírenskými firmami: subdodávky dílů, sériová výroba dle dokumentace, dlouhodobé partnerství s garantovanou kvalitou a termíny.",
    href: "/kontakt?typ=kooperace",
    ratio: "4 / 3",
    image: "/sluzby/kooperace.jpeg",
    alt: "Série stejných ohýbaných nerezových trubkových dílů vyrobených v rámci subdodávky",
  },
  {
    title: "Výroba produktů na grilování",
    text: "Vlastní produktová řada: grilovací Lorny, kulaté grily a grilovací rošty. Ruční výroba z broušeného potravinářského nerezu 1.4301, bez nátěrů a laků, design na míru vaší zahradě. Rozměry i uspořádání přizpůsobíme konkrétní poptávce.",
    href: GRILL_PAGES[0].href,
    ratio: "4 / 3",
    image: "/sluzby/vyroba-grilovacich-produktu.jpeg",
    alt: "Otevřený nerezový kulatý gril zepředu — otočná jehla s napichováky nad odkapovým plechem",
    /** Místo jednoho odkazu vypíše všechny podstránky sekce Grilování (GRILL_PAGES). */
    grillLinks: true,
  },
];

export default function SluzbyPage() {
  return (
    <>
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red">
            Služby
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            Tři obory. Jedna dílna, jeden standard.
          </h1>
        </div>
      </section>

      <div>
        {SERVICES.map((service, i) => {
          const reversed = i % 2 === 1;
          return (
            <section key={service.title} className="border-b border-ink/10">
              <div
                className={`container-page grid gap-10 py-16 md:grid-cols-12 md:items-center ${
                  reversed ? "" : ""
                }`}
              >
                <div
                  className={`md:col-span-5 ${
                    reversed ? "md:order-2 md:col-start-8" : "md:col-start-1"
                  }`}
                >
                  <div
                    className="relative overflow-hidden border border-ink/10"
                    style={{ aspectRatio: service.ratio }}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <Reveal
                  className={`md:col-span-6 ${
                    reversed ? "md:order-1 md:col-start-1" : "md:col-start-7"
                  }`}
                >
                  <SectionMark index={i + 1} total={SERVICES.length} label="Služba" />
                  <h2 className="mt-5 font-display text-3xl tracking-tight text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
                    {service.text}
                  </p>
                  {service.grillLinks ? (
                    <ul className="mt-6 flex flex-col items-start gap-3">
                      {GRILL_PAGES.map((page) => (
                        <li key={page.href}>
                          <Link
                            href={page.href}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-red"
                          >
                            {page.cta ?? `Prohlédnout ${page.label}`}
                            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                            {page.comingSoon && (
                              <span className="ml-1 text-[10px] uppercase tracking-[0.15em] text-gray-500">
                                Připravujeme
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-red"
                    >
                      Zjistit více
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </Link>
                  )}
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      <section className="bg-ink py-20 text-offwhite">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <WeldSeam className="mb-6 w-14 text-red" />
            <h2 className="font-display text-2xl tracking-tight md:text-3xl">
              Nevíte přesně, kam vaše zakázka patří?
            </h2>
            <p className="mt-2 max-w-md text-sm text-offwhite/60">
              Popište nám, co potřebujete, a my navrhneme řešení.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark"
          >
            Nezávazná poptávka
          </Link>
        </div>
      </section>
    </>
  );
}
