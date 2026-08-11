import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import ProductGallery from "@/components/sections/ProductGallery";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";
import { formatPrice, orderMailHref } from "@/lib/grily";
import {
  GRIL_INCLUDED,
  GRIL_INTRO_PHOTO,
  GRIL_PHOTOS,
  GRIL_PRICE,
  GRIL_SPECS,
} from "@/lib/kulate-grily";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kulaté grily",
  description:
    "Nerezový kulatý gril se zadním topeništěm — Ø 475 × 750 mm, plášť 2,5 mm, potravinářský nerez 1.4301. Kompletní set s motorkem, jehlou a stolečkem za 27 000 Kč.",
};

const FEATURES = [
  {
    title: "Ruční výroba",
    text: "Každý gril svařujeme a brousíme ručně v naší dílně — kus po kuse, žádná sériová výroba na lince.",
  },
  {
    title: "Potravinářský nerez 1.4301",
    text: "Čistá broušená nerez snese přímý kontakt s jídlem, nekoroduje a nepotřebuje žádný nátěr, lak ani povrchovou úpravu.",
  },
  {
    title: "Kompletní set",
    text: "Gril dodáváme připravený k použití — motorek, jehla se čtyřmi napichováky, odkapový plech i odkládací stoleček jsou v ceně.",
  },
];

const CRAFT = [
  {
    label: "Topeniště",
    value: "Oheň vzadu, ne pod masem",
    text: "Žár jde na maso ze strany. Šťáva a tuk nekapou do plamene, nepřipaluje se a gril se nezanáší kouřem z hořícího tuku.",
  },
  {
    label: "Materiál",
    value: "Plášť 2,5 mm, topeniště 3 mm",
    text: "Nejvíc žáru dostane topeniště, proto má silnější plech než zbytek pláště. Tenčí materiál by se v místě ohně časem zkroutil.",
  },
  {
    label: "Pohon",
    value: "Nerezový motorek na 50 kg",
    text: "Nosnost je schválně nadsazená — jehla z dvanáctimilimetrové kulatiny se protočí i naplno naložená a motorek se nezadrhne.",
  },
];

// Předvyplněný e-mail panu Schovánkovi — zákazník jen doplní údaje a odešle.
const ORDER_MAIL = orderMailHref({
  subject: "Objednávka kulatého grilu",
  intro: "mám zájem o kulatý gril se zadním topeništěm (kompletní set).",
  fields: ["Počet kusů:", "Dřevo stolečku (buk / dub):", "Poznámka:"],
});

export default function KulateGrilyPage() {
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
              Kulatý gril se zadním topeništěm.
            </h1>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="max-w-md text-sm leading-relaxed text-gray-500">
              Nerezový gril na rožnění v jediném provedení — motorek, jehla
              i odkládací stoleček jsou součástí ceny.
            </p>
            <a
              href="#cena"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-red decoration-2 underline-offset-4 transition-colors hover:text-red"
            >
              Přejít na cenu
            </a>
          </div>
        </div>
      </section>

      {/* Galerie — mozaika s lightboxem, hned pod heroem */}
      <section className="border-b border-ink/10 py-14 md:py-16">
        <div className="container-page">
          <ProductGallery photos={GRIL_PHOTOS} orderHref={ORDER_MAIL} />
          <p className="mt-3 text-xs text-gray-500">
            Kliknutím fotku zvětšíte, mezi snímky se dá procházet šipkami.
          </p>
        </div>
      </section>

      {/* Co je kulatý gril — nadpis nahoře, vlevo fotka, vpravo popis */}
      <section className="border-b border-ink/10 py-20 md:py-24">
        <div className="container-page">
          <WeldSeam className="mb-6 w-14 text-red" />
          <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
            Co je kulatý gril
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-28">
                {GRIL_INTRO_PHOTO.src ? (
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/10">
                    <Image
                      src={GRIL_INTRO_PHOTO.src}
                      alt={GRIL_INTRO_PHOTO.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <PlaceholderImage
                    label={`[FOTO: ${GRIL_INTRO_PHOTO.alt}]`}
                    aspectRatio="4 / 5"
                  />
                )}
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-ink">
                Kulatý gril je náš vlastní produkt — nerezový gril na rožnění
                s topeništěm vzadu, který u nás vzniká od prvního řezu po
                poslední svar.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                Vyrábíme ho z potravinářského nerezu s označením 1.4301. Ten
                snese přímý kontakt s jídlem, nekoroduje a vydrží venku i bez
                povrchové úpravy. Na rozdíl od Loren se kulatý gril prodává
                v jediném provedení — jako kompletní set, ve kterém na sebe
                všechny díly pasují a nic se nedokupuje.
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

      {/* Proč je jiný — technické provedení */}
      <section className="bg-ink py-20 text-offwhite md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-[0.25em] text-red">
                Proč je jiný
              </span>
              <h2 className="mt-5 font-display text-3xl tracking-tight md:text-4xl">
                Rozdíl je v provedení.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-offwhite/60 md:col-span-5 md:pb-2">
              Věci, které na fotce nejsou vidět, ale rozhodují o tom, jak se
              na grilu bude doopravdy vařit.
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

      {/* Cena a technické provedení */}
      <section id="cena" className="scroll-mt-24 bg-gray-100 py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.25em] text-red">
              Cena
            </span>
            <h2 className="mt-5 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Jedno provedení, jedna cena
            </h2>

            <p className="mt-6 flex items-baseline">
              <span className="font-display text-5xl tracking-tight text-ink">
                {formatPrice(GRIL_PRICE)}
              </span>
              <span className="ml-2 text-lg text-gray-500">Kč</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-500">
              Cena je za kompletní set včetně DPH. Gril vyrábíme v jednom
              standardním provedení — vlastní úpravy naceníme individuálně
              po poptávce.
            </p>

            <a
              href={ORDER_MAIL}
              className="mt-7 inline-flex items-center gap-2 border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              Mám zájem
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
              Tlačítko otevře e-mail s předvyplněnou objednávkou — stačí
              doplnit počet kusů a odeslat.
            </p>

            <WeldSeam className="mt-8 w-14 text-red" />
          </div>

          <div className="md:col-span-8">
            {/* Co zákazník dostane */}
            <Reveal>
              <h3 className="border-b border-ink pb-3 text-xs uppercase tracking-[0.2em] text-ink">
                V ceně je
              </h3>
              <ul className="mt-1 grid gap-x-10 sm:grid-cols-2">
                {GRIL_INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 border-b border-ink/10 py-3.5 text-sm text-ink"
                  >
                    <span
                      className="h-[2px] w-3 shrink-0 translate-y-[-3px] bg-red"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Technické parametry */}
            <Reveal delay={0.06} className="mt-14">
              <h3 className="border-b border-ink pb-3 text-xs uppercase tracking-[0.2em] text-ink">
                Technické provedení
              </h3>
              <dl className="divide-y divide-ink/10">
                {GRIL_SPECS.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid gap-1 py-4 sm:grid-cols-12 sm:gap-5"
                  >
                    <dt className="text-xs uppercase tracking-[0.15em] text-gray-500 sm:col-span-4 sm:pt-0.5">
                      {spec.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-ink sm:col-span-8">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-offwhite">
        <div className="container-page flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl tracking-tight md:text-3xl">
              Mám zájem o kulatý gril
            </h2>
            <p className="mt-2 max-w-md text-sm text-offwhite/60">
              Tlačítko otevře e-mail s předvyplněnou objednávkou — doplňte
              počet kusů a dřevo na stoleček, do 24 hodin se ozveme s termínem.
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
