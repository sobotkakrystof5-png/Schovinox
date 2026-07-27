import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import SectionMark from "@/components/ui/SectionMark";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Zámečnictví, zakázková kovovýroba, kooperace pro firmy a výroba grilovacích Loren — čtyři obory, jedna dílna.",
};

const SERVICES = [
  {
    title: "Zámečnictví",
    text: "Výroba a opravy zámků, kování a bezpečnostních prvků — od jednoho vadného zámku po kompletní zabezpečení provozovny. Řešíme i urgentní zásahy, kdy se dovnitř nelze dostat.",
    href: "/kontakt",
    ratio: "4 / 3",
  },
  {
    title: "Kovovýroba",
    text: "Zakázková výroba podle vašeho návrhu nebo výkresu — schodiště, zábradlí, konstrukce i atypické díly. Od zaměření na místě přes výrobu v dílně až po montáž.",
    href: "/kontakt",
    ratio: "4 / 3",
  },
  {
    title: "Kooperace",
    text: "Spolupráce s výrobními a strojírenskými firmami — subdodávky dílů, sériová výroba dle dokumentace, dlouhodobé partnerství s garantovanou kvalitou a termíny.",
    href: "/kontakt",
    ratio: "4 / 3",
  },
  {
    title: "Grilovací Lorny",
    text: "Vlastní produktová řada — grilovací Lorny a sety vyráběné ručně na míru zahradě. Ocel odolná vůči teplu a povětrnosti, kombinovaná se dřevem.",
    href: "/grilovaci-lavice",
    ratio: "4 / 3",
    featured: true,
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
            Čtyři obory. Jedna dílna, jeden standard.
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
                  <PlaceholderImage
                    label={`[FOTO: ${service.title}]`}
                    aspectRatio={service.ratio}
                  />
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
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-red"
                  >
                    {service.featured ? "Prohlédnout grilovací Lorny" : "Zjistit více"}
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
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
