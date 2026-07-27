import type { Metadata } from "next";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Timeline from "@/components/sections/Timeline";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";

export const metadata: Metadata = {
  title: "Náš příběh",
  description:
    "Od brigády u dědy zámečníka po profesionální svařování — příběh Schovinox napříč třemi generacemi řemesla.",
};

const MILESTONES = [
  {
    mark: "14 let",
    title: "Zámečnická krev v rodině",
    text: "Poprvé chytil kleště do ruky jako brigádník po boku dědy — zkušeného zámečníka staré školy. Dílna, pilníky a zápach oceli se staly druhým domovem dřív, než stihl dokončit základní školu.",
  },
  {
    mark: "4 roky",
    title: "Praxe po boku dědy",
    text: "Čtyři roky zakázek po celé republice — servis pro firmu KFC, potrubní trasy pro moštárny, výrobní zařízení pro masokombináty, vývoj zařízení pro farmaceutiku a mnoho dalšího. Ukázalo se, že rozhoduje zvolený postup, materiál a pevná ruka.",
  },
  {
    mark: "18 let",
    title: "První jiskra u svářečky",
    text: "O prázdninách přišla první zkušenost se svařováním. Co začalo jako brigáda navíc, se rychle změnilo v řemeslo, kterému propadl — přesné, hlučné a nekompromisní k chybám.",
  },
  {
    mark: "13 let",
    title: "Profesionální svářeč",
    text: "Třináct let praxe u svářečky dovedlo řemeslo do detailu — od tenkých nerezových plechů po masivní konstrukční profily. Přesnost přestala být cílem a stala se návykem.",
  },
  {
    mark: "Dnes",
    title: "Schovinox",
    text: "Firma stavějící na generacích zkušeností — zámečnictví, kovovýroba, kooperace s dalšími firmami a vlastní řada grilovacích Loren. Stejná dílna, stejná pečlivost, jen větší rozsah zakázek.",
  },
];

export default function ONasPage() {
  return (
    <>
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
              <PlaceholderImage
                label="[FOTO: Portrét pana Schovánka při práci v dílně]"
                aspectRatio="4 / 5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-ink py-24 text-offwhite">
        <div className="container-page">
          <WeldSeam className="mb-10 w-16 text-red" />
          <Reveal>
            <blockquote className="max-w-3xl font-display text-2xl leading-snug tracking-tight md:text-3xl">
              „[DOPLNÍ KLIENT]“
            </blockquote>
            <p className="mt-6 text-sm text-offwhite/50">
              — Pan Schovánek, zakladatel Schovinox
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
