import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import ProductGallery from "@/components/sections/ProductGallery";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";
import { formatPrice, orderMailHref } from "@/lib/grily";
import type { LornaVariant } from "@/lib/lorny";
import { LORNA_SERIES, LORNA_INTRO_PHOTO, LORNA_PHOTOS } from "@/lib/lorny";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grilovací Lorny",
  description:
    "Grilovací Lorny z potravinářského nerezu 1.4301: plech síly 2 mm, kartáčovaný povrch, mořené sváry. Šest rozměrů s jasnými cenami, design na míru.",
};

const FEATURES = [
  {
    title: "Ruční výroba",
    text: "Každou Lornu svařujeme a brousíme ručně v naší dílně, kus po kuse. Žádná sériová výroba na lince.",
  },
  {
    title: "Potravinářský nerez 1.4301",
    text: "Čistá broušená nerez snese přímý kontakt s jídlem, nekoroduje a nepotřebuje žádný nátěr, lak ani povrchovou úpravu.",
  },
  {
    title: "Design na míru",
    text: "Rozměry i uspořádání přizpůsobíme konkrétní poptávce. Návrh vytvoříme přímo pro vás.",
  },
];

const CRAFT = [
  {
    label: "Materiál",
    value: "Plech síly 2 mm",
    text: "Lorny řežeme z dvoumilimetrového nerezového plechu. Tenčí materiál se žárem časem zkroutí, dvojka drží tvar i po letech nad ohněm.",
  },
  {
    label: "Povrch",
    value: "Celý kartáčovaný",
    text: "Kartáčujeme celý kus, ne jen pohledové plochy. Brus jde jedním směrem, takže gril drží jednotný matný vzhled ze všech stran.",
  },
  {
    label: "Sváry",
    value: "Mořené kyselinou",
    text: "Každý svár mořený kyselinou. Moření sundá náběhové barvy kolem svaru a obnoví pasivní vrstvu nerezu, přesně tam, kde by jinak koroze začala nejdřív.",
  },
];

// Předvyplněný e-mail panu Schovánkovi — zákazník jen doplní údaje a odešle.
const ORDER_MAIL = orderMailHref({
  subject: "Objednávka grilovací Lorny",
  intro: "mám zájem o grilovací Lornu.",
  fields: ["Rozměr (mm):", "Počet kusů:", "Vlastní úpravy nebo design:"],
});

// Poptávka z ceníku — rozměr i cena jsou ve zprávě rovnou doplněné,
// zákazník tak z ceníku odchází s hotovým mailem.
function variantMail(variant: LornaVariant): string {
  return orderMailHref({
    subject: `Objednávka grilovací Lorny ${variant.size} mm`,
    intro: `mám zájem o grilovací Lornu v rozměru ${variant.size} mm (${formatPrice(
      variant.price,
    )} Kč).`,
    fields: ["Počet kusů:", "Vlastní úpravy nebo design:"],
  });
}

export default function GrilovaciLornyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page grid gap-8 pb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-red">
              Vlastní produkt
            </span>
            <h1 className="mt-5 font-display text-4xl tracking-tight text-ink md:text-5xl">
              Grilovací Lorna, kterou svařujeme sami.
            </h1>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-gray-500">
              Nerezový gril z vlastní dílny: šest standardních rozměrů
              s jasnou cenou a možnost nechat si udělat vlastní.
            </p>
            <a
              href="#cenik"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red"
            >
              Přejít na ceník
            </a>
          </div>
        </div>
      </section>

      {/* Galerie — mozaika s lightboxem, hned pod heroem */}
      <section className="border-b border-ink/10 py-14 md:py-16">
        <div className="container-page">
          <ProductGallery photos={LORNA_PHOTOS} orderHref={ORDER_MAIL} />
          <p className="mt-3 text-xs text-gray-500">
            Kliknutím fotku zvětšíte, mezi snímky se dá procházet šipkami.
          </p>
        </div>
      </section>

      {/* Co je grilovací Lorna — nadpis nahoře, vlevo fotka, vpravo popis */}
      <section className="border-b border-ink/10 py-20 md:py-24">
        <div className="container-page">
          <WeldSeam className="mb-6 w-14 text-red" />
          <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            Co je grilovací Lorna
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-28">
                {LORNA_INTRO_PHOTO.src ? (
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/10">
                    <Image
                      src={LORNA_INTRO_PHOTO.src}
                      alt={LORNA_INTRO_PHOTO.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PlaceholderImage
                    label={`[FOTO: ${LORNA_INTRO_PHOTO.alt}]`}
                    aspectRatio="4 / 5"
                  />
                )}
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-ink">
                Grilovací Lorna je náš vlastní produkt, nerezový gril, který
                u nás vzniká od prvního řezu po poslední svar.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                Všechny Lorny vyrábíme z potravinářského nerezu s označením
                1.4301. Ten snese přímý kontakt s jídlem, nekoroduje a vydrží
                venku i bez povrchové úpravy. Rozměry i uspořádání
                přizpůsobíme konkrétní poptávce. Pokud máte vlastní
                představu, vytvoříme design přímo pro vás.
              </p>

              <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
                {FEATURES.map((feature, i) => (
                  <div key={feature.title} className="flex gap-5 py-6">
                    <span className="font-display text-2xl leading-none text-red">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg leading-tight text-ink">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proč je jiná — technické provedení */}
      <section className="bg-ink py-20 text-offwhite md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-red">
                Proč je jiná
              </span>
              <h2 className="mt-5 font-display text-3xl tracking-tight md:text-4xl">
                Rozdíl je v provedení.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-offwhite/60 md:col-span-5 md:pb-2">
              Věci, které na fotce nejsou vidět, ale rozhodují o tom, jak
              bude gril vypadat po páté sezoně na zahradě.
            </p>
          </div>

          <WeldSeam className="mt-12 w-full text-red" />

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
            {CRAFT.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.06}
                className={
                  i === 0
                    ? "md:pr-10"
                    : "md:border-l md:border-offwhite/15 md:pl-10 md:pr-10 md:last:pr-0"
                }
              >
                <span className="text-xs uppercase tracking-[0.2em] text-offwhite/40">
                  {item.label}
                </span>
                <h3 className="mt-3 font-display text-xl tracking-tight text-offwhite">
                  {item.value}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/60">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section id="cenik" className="scroll-mt-24 bg-gray-100 py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-red">
              Ceník
            </span>
            <h2 className="mt-5 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Ceny podle rozměru
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-500">
              Uvedené ceny jsou včetně DPH a platí pro standardní provedení
              z potravinářského nerezu 1.4301. Atypický rozměr, jiné uspořádání
              nebo vlastní design naceníme individuálně po poptávce.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Kliknutím na rozměr se otevře e-mail s předvyplněnou objednávkou,
              stačí doplnit počet kusů a odeslat.
            </p>
            <WeldSeam className="mt-8 w-14 text-red" />
          </div>

          <div className="grid gap-x-14 gap-y-12 md:col-span-8 md:grid-cols-2">
            {LORNA_SERIES.map((series, s) => (
              <Reveal key={series.label} delay={s * 0.06}>
                <h3 className="border-b border-ink pb-3 text-xs uppercase tracking-[0.2em] text-ink">
                  {series.label}
                </h3>
                <ul className="divide-y divide-ink/10">
                  {series.variants.map((variant) => (
                    <li key={variant.slug}>
                      <a
                        href={variantMail(variant)}
                        className="group flex items-baseline justify-between gap-5 py-5 transition-colors"
                      >
                        <span className="flex items-baseline gap-1.5">
                          <span className="font-display text-lg tracking-tight text-ink transition-colors group-hover:text-red">
                            {variant.size}
                          </span>
                          <span className="text-xs text-gray-500">mm</span>
                          <Mail
                            className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-red opacity-0 transition-opacity group-hover:opacity-100"
                            strokeWidth={1.75}
                          />
                        </span>
                        <span className="flex shrink-0 items-baseline">
                          <span className="font-display text-2xl tracking-tight text-ink">
                            {formatPrice(variant.price)}
                          </span>
                          <span className="ml-1.5 text-sm text-gray-500">
                            Kč
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-offwhite">
        <div className="container-page flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl tracking-tight md:text-3xl">
              Mám zájem o grilovací Lornu
            </h2>
            <p className="mt-2 max-w-md text-sm text-offwhite/60">
              Tlačítko otevře e-mail s předvyplněnou poptávkou: doplňte rozměr
              nebo vlastní představu a do 24 hodin se ozveme s návrhem a cenou.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={ORDER_MAIL}
              className="inline-flex items-center justify-center gap-2 border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              Mám zájem
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-offwhite/30 px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:border-offwhite"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
