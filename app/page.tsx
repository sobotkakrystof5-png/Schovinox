import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import WeldSeam from "@/components/ui/WeldSeam";
import StatNumber from "@/components/ui/StatNumber";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  description:
    "Kov, přesnost a čtyřicet let rodinné zkušenosti: zakázková kovovýroba, kooperace pro firmy a vlastní produkty na grilování.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      "Kov, přesnost a čtyřicet let rodinné zkušenosti: zakázková kovovýroba, kooperace pro firmy a vlastní produkty na grilování.",
    url: "/",
    type: "website",
    images: [{ url: "/homepage-hero.jpeg" }],
  },
};

const STATS = [
  { value: 16, suffix: "", label: "let praxe v oboru" },
  { value: 100, suffix: "+", label: "dokončených realizací" },
  { value: 100, suffix: " %", label: "spokojených zákazníků" },
  { value: 2, suffix: "", label: "roky pod značkou Schovinox" },
];

const TEASERS = [
  {
    title: "Náš příběh",
    text: "Od brigády u dědy zámečníka po profesionální svařování: řemeslo, které rodina drží přes tři generace.",
    href: "/o-nas",
    span: "md:col-span-7",
    ratio: "16 / 10",
    image: "/o-nas-portret.jpeg",
    alt: "Pan Schovánek při TIG svařování nerezové nádrže v dílně",
  },
  {
    title: "Služby",
    text: "Zakázková kovovýroba, kooperace pro firmy i výroba produktů na grilování pod jednou střechou.",
    href: "/sluzby",
    span: "md:col-span-5",
    ratio: "4 / 5",
    image: "/sluzby/zakazkova-vyroba.jpeg",
    alt: "Zakázkově vyrobený nerezový díl v dílně Schovinox",
  },
  {
    title: "Grilování",
    text: "Vlastní produktová řada: ruční výroba z broušeného potravinářského nerezu 1.4301, design na míru vaší zahradě.",
    href: "/grilovaci-lavice/grilovaci-lorny",
    span: "md:col-span-5",
    ratio: "4 / 5",
    image: "/lorny/lorna-5.jpeg",
    alt: "Grilovací Lorna z potravinářského nerezu 1.4301 na stojanu s odklopeným plochým krytem",
  },
  {
    title: "Projekty",
    text: "Šest realizací, na kterých je vidět, proč se zákazníci vrací s další zakázkou.",
    href: "/projekty",
    span: "md:col-span-7",
    ratio: "16 / 10",
    image: "/projekty/projekt-1.jpeg",
    alt: "Mycí stůl na míru pro hasičskou zbrojnici",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — asymmetric: content anchored bottom-left over a full-bleed photo, not centered */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src="/homepage-hero.jpeg"
            alt="Detailní záběr na svařovaný nerezový profil s navrtanými otvory v dílně Schovinox"
            fill
            sizes="100vw"
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        </div>

        <div className="container-page relative z-10 grid gap-8 pb-20 pt-40 md:grid-cols-12">
          <div className="md:col-span-8 lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-red">
              Zámečnictví · Kovovýroba · Svařování · Broušení
            </span>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[0.98] tracking-tight text-offwhite sm:text-6xl md:text-7xl">
              Řemeslo, které drží desetiletí.
            </h1>
            <p className="mt-6 max-w-md text-base text-offwhite/70">
              Kov, přesnost a čtyřicet let rodinné zkušenosti: zakázková
              kovovýroba, kooperace pro firmy a vlastní produkty na grilování.
            </p>
          </div>

          <div className="flex items-end gap-4 md:col-span-4 lg:col-span-5 lg:justify-end">
            <div className="flex flex-col gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark"
              >
                Nezávazná poptávka
              </Link>
              <Link
                href="/projekty"
                className="inline-flex items-center gap-1.5 border border-offwhite/25 px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:border-offwhite/60"
              >
                Prohlédnout projekty
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-b border-ink/10 bg-offwhite">
        <WeldSeam className="text-ink/15" />
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-16 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatNumber
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* Mission — asymmetric text block with a large lead number */}
      <section className="border-b border-ink/10 bg-offwhite py-24">
        <div className="container-page grid gap-8 md:grid-cols-12">
          <div className="md:col-span-2">
            <span className="font-display text-6xl text-ink/10">01</span>
          </div>
          <Reveal className="md:col-span-8 md:col-start-4">
            <p className="font-display text-2xl leading-snug tracking-tight text-ink md:text-3xl">
              Nejsme velká firma s katalogem. Jsme dílna, kde se každá
              zakázka dělá tak, jako by šla do vlastního domu, s
              přesností, kterou dá jedině desítky let za svářečkou a bruskou.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Teasers — bento-style asymmetric grid, not identical cards */}
      <section className="py-24">
        <div className="container-page">
          <Reveal>
            <div className="mb-10">
              <h2 className="font-display text-3xl tracking-tight text-ink">
                Přehled Schovinox
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-12">
            {TEASERS.map((teaser, i) => (
              <Reveal
                key={teaser.href}
                delay={i * 0.06}
                className={`group ${teaser.span}`}
              >
                <Link href={teaser.href} className="block">
                  <div
                    className="relative overflow-hidden border border-ink/10"
                    style={{ aspectRatio: teaser.ratio }}
                  >
                    <Image
                      src={teaser.image}
                      alt={teaser.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-opacity group-hover:opacity-90"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4 border-t border-ink/10 pt-4">
                    <div>
                      <h3 className="font-display text-lg tracking-tight text-ink">
                        {teaser.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm text-gray-500">
                        {teaser.text}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-red transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.5}
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
