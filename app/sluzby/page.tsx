import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionMark from "@/components/ui/SectionMark";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import FaqJsonLd, { type FaqEntry } from "@/components/seo/FaqJsonLd";
import { GRILL_PAGES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Služby",
  description:
    "Zakázková kovovýroba a zámečnické práce, kooperace pro výrobní firmy a výroba produktů na grilování. Tři obory, jedna dílna.",
  alternates: {
    canonical: "/sluzby",
  },
  openGraph: {
    title: `Služby | ${SITE.name}`,
    description:
      "Zakázková kovovýroba a zámečnické práce, kooperace pro výrobní firmy a výroba produktů na grilování. Tři obory, jedna dílna.",
    url: "/sluzby",
    type: "website",
    images: [{ url: "/sluzby/zakazkova-vyroba.jpeg" }],
  },
};

const SERVICES = [
  {
    title: "Zakázková kovovýroba",
    text: "Výroba na míru podle vašeho návrhu, výkresu, nebo jen slovního zadání — stačí popsat, co potřebujete, zbytek vyřešíme společně. Pracujeme s nerezí i konstrukční ocelí, u náročnějších zakázek zajistíme i výkresovou dokumentaci a atesty materiálu. Bereme i drobné zámečnické opravy, ne jen rozsáhlé zakázky — minimální rozsah zakázky u nás neexistuje. Termín stanovíme předem a dodržíme ho.",
    href: "/kontakt?typ=kovovyroba",
    ratio: "4 / 3",
    image: "/sluzby/zakazkova-vyroba.jpeg",
    alt: "Zakázkově vyrobený nerezový díl s přivařenými výztuhami zavěšený na jeřábovém háku v dílně",
  },
  {
    title: "Kooperace",
    text: "Spolupráce s výrobními a strojírenskými firmami: subdodávky dílů, sériová výroba dle dokumentace, dlouhodobé partnerství s garantovanou kvalitou a dodrženými termíny. Pracujeme i s materiálem dodaným od vás, pokud je pro danou zakázku vhodně zvolený.",
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

const PROCESS_STEPS = [
  {
    title: "Poptávka",
    text: "Popíšete, co potřebujete — stačí i jen slovní zadání. Skica nebo hotový výkres pomůžou, ale nejsou podmínkou.",
  },
  {
    title: "Upřesnění",
    text: "Společně probereme materiál, rozsah a termín. U náročnějších zakázek zajistíme výkresovou dokumentaci nebo atesty materiálu, pokud je to potřeba.",
  },
  {
    title: "Výroba",
    text: "Zakázku vyrobíme v dílně v Kněžicích. Termín stanovíme předem a dodržíme ho — pozdní dodání u nás nehrozí.",
  },
  {
    title: "Předání",
    text: "Hotovou zakázku předáme, případně provedeme montáž přímo na místě.",
  },
];

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "Děláte i drobné zámečnické opravy, nebo jen větší zakázky?",
    answer:
      "Ano, drobné zámečnické opravy provádíme běžně, nejen rozsáhlou zakázkovou kovovýrobu.",
  },
  {
    question: "Jak dlouho trvá výroba zábradlí nebo grilovací Lorny na míru?",
    answer:
      "Standardní grilovací Lorny vedeme skladem a odesíláme zpravidla do druhého dne. Korby na míru a zakázková kovovýroba jako zábradlí se vyrábí podle aktuálního vytížení dílny — přesný termín dodání domluvíme předem a dodržíme ho.",
  },
  {
    question: "Jak daleko od Kněžic jezdíte?",
    answer:
      "Vzdálenost sama o sobě nerozhoduje, spíš velikost zakázky. Standardně jezdíme do 100 km od Kněžic.",
  },
  {
    question: "Pracujete i s materiálem, který dodá zákazník?",
    answer:
      "Ano, pokud je materiál pro danou zakázku správně zvolený a vhodný, dodaný materiál od zákazníka je výhodou.",
  },
  {
    question: "Jaká je záruka na provedenou práci?",
    answer: "Pokud materiál dodáváme my, poskytujeme na práci doživotní záruku.",
  },
];

export default function SluzbyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Služby", path: "/sluzby" }]} />
      <FaqJsonLd items={FAQ_ITEMS} />
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

      <section className="border-b border-ink/10 py-20 md:py-28">
        <div className="container-page">
          <WeldSeam className="mb-6 w-14 text-red" />
          <h2 className="max-w-xl font-display text-3xl tracking-tight text-ink">
            Jak probíhá zakázka
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <SectionMark index={i + 1} total={PROCESS_STEPS.length} label="Krok" />
                <h3 className="mt-4 font-display text-lg tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 py-20 md:py-28">
        <div className="container-page">
          <WeldSeam className="mb-6 w-14 text-red" />
          <h2 className="max-w-xl font-display text-3xl tracking-tight text-ink">
            Časté dotazy
          </h2>
          <div className="mx-auto mt-12 max-w-2xl divide-y divide-ink/10 border-y border-ink/10">
            {FAQ_ITEMS.map((item, i) => (
              <Reveal key={item.question} delay={i * 0.05}>
                <div className="py-8">
                  <h3 className="font-display text-base tracking-tight text-ink">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.answer}
                  </p>
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
