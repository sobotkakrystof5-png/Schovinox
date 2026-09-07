import type { Metadata } from "next";
import Image from "next/image";
import Timeline from "@/components/sections/Timeline";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Náš příběh",
  description:
    "Od brigády u dědy zámečníka po profesionální svařování: příběh Schovinox napříč třemi generacemi řemesla.",
  alternates: {
    canonical: "/o-nas",
  },
  openGraph: {
    title: `Náš příběh | ${SITE.name}`,
    description:
      "Od brigády u dědy zámečníka po profesionální svařování: příběh Schovinox napříč třemi generacemi řemesla.",
    url: "/o-nas",
    type: "website",
    images: [{ url: "/o-nas-portret.jpeg" }],
  },
};

const QUALIFICATIONS = [
  "Svařování potrubí od průměru 5 mm bez horního omezení",
  "Zkoušky pro svařování tlakových nádob — RTG, kapilární zkoušky, ultrazvuk",
  "Svařování tupých i koutových svarů bez omezení",
  "Čtení výkresové dokumentace a svařování potrubních tras",
];

const MILESTONES = [
  {
    mark: "14 let",
    title: "Zámečnická krev v rodině",
    text: "Poprvé chytil kleště do ruky jako brigádník po boku dědy, zkušeného zámečníka staré školy. Dílna, pilníky a zápach oceli se staly druhým domovem dřív, než stihl dokončit základní školu.",
  },
  {
    mark: "4 roky",
    title: "Praxe po boku dědy",
    text: "Čtyři roky zakázek po celé republice: servis pro firmu KFC, potrubní trasy pro moštárny, výrobní zařízení pro masokombináty, vývoj zařízení pro farmaceutiku a mnoho dalšího. Ukázalo se, že rozhoduje zvolený postup, materiál a pevná ruka.",
  },
  {
    mark: "18 let",
    title: "První jiskra u svářečky",
    text: "O prázdninách přišla první zkušenost se svařováním. Co začalo jako brigáda navíc, se rychle změnilo v řemeslo, kterému propadl: přesné, hlučné a nekompromisní k chybám.",
  },
  {
    mark: "16 let",
    title: "Profesionální svářeč",
    text: "Šestnáct let praxe u svářečky dovedlo řemeslo do detailu: od tenkých nerezových plechů po masivní konstrukční profily. Přesnost přestala být cílem a stala se návykem.",
  },
  {
    mark: "Dnes",
    title: "Schovinox",
    text: "Firma stavějící na generacích zkušeností: zakázková kovovýroba, kooperace s dalšími firmami a vlastní řada produktů na grilování. Stejná dílna, stejná pečlivost, jen větší rozsah zakázek.",
  },
];

export default function ONasPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "O nás", path: "/o-nas" }]} />
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red">
            Náš příběh
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            Tři generace u jedné svářečky.
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Timeline milestones={MILESTONES} />
          </div>

          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/10">
                <Image
                  src="/o-nas-portret.jpeg"
                  alt="Pan Schovánek při TIG svařování nerezové nádrže v dílně, se svářečskou kuklou a v rukavicích"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-20 md:py-28">
        <div className="container-page">
          <WeldSeam className="mb-6 w-14 text-red" />
          <h2 className="max-w-xl font-display text-3xl tracking-tight text-ink">
            Kvalifikace a zkoušky
          </h2>
          <ul className="mx-auto mt-12 grid max-w-2xl gap-x-10 gap-y-6 border-y border-ink/10 py-10 sm:grid-cols-2">
            {QUALIFICATIONS.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-500">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-ink py-24 text-offwhite">
        <div className="container-page">
          <WeldSeam className="mb-10 w-16 text-red" />
          <Reveal>
            <blockquote className="max-w-3xl font-display text-2xl leading-snug tracking-tight md:text-3xl">
              „Spojuji to, co má vydržet na věky, čistě, přesně a z nerezu.“
            </blockquote>
            <p className="mt-6 text-sm text-offwhite/50">
              - Dominik Schovánek, zakladatel Schovinox
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
