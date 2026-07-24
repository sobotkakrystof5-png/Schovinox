import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";

export const metadata: Metadata = {
  title: "Grilovací lavice",
  description:
    "Ruční výroba grilovacích lavic na míru — ocelová konstrukce, odolný materiál, design šitý vaší zahradě.",
};

const GALLERY = [
  {
    caption: "Základní model — rozměry a materiál doplní klient",
    ratio: "4 / 3",
  },
  {
    caption: "Detail svaru a povrchové úpravy — práškový lak odolný teplu",
    ratio: "1 / 1",
  },
  {
    caption: "Varianta se stolem — grilovací lavice a stůl v jednom celku",
    ratio: "4 / 3",
  },
  {
    caption: "Realizace na zahradě — grilovací set včetně bočních polic",
    ratio: "16 / 10",
  },
];

export default function GrilovaciLavicePage() {
  return (
    <>
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-16 md:grid md:grid-cols-12 md:items-end md:gap-8">
          <div className="md:col-span-8">
            <span className="text-xs uppercase tracking-[0.25em] text-red">
              Vlastní produkt
            </span>
            <h1 className="mt-5 font-display text-4xl tracking-tight text-ink md:text-5xl">
              Grilovací lavice, kterou svařujeme sami.
            </h1>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-500 md:col-span-4 md:mt-0">
            Ne katalogový výrobek z velkoskladu — ruční práce od zaměření
            zahrady po finální lak.
          </p>
        </div>
      </section>

      {/* Asymmetric gallery strip — varying sizes, not a uniform grid */}
      <section className="border-b border-ink/10 py-16">
        <div className="container-page grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <PlaceholderImage label={`[FOTO: ${GALLERY[0].caption}]`} aspectRatio={GALLERY[0].ratio} />
            <p className="mt-3 text-xs text-gray-500">{GALLERY[0].caption}</p>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-5">
            <PlaceholderImage label={`[FOTO: ${GALLERY[1].caption}]`} aspectRatio={GALLERY[1].ratio} />
            <p className="mt-3 text-xs text-gray-500">{GALLERY[1].caption}</p>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-5">
            <PlaceholderImage label={`[FOTO: ${GALLERY[2].caption}]`} aspectRatio={GALLERY[2].ratio} />
            <p className="mt-3 text-xs text-gray-500">{GALLERY[2].caption}</p>
          </Reveal>
          <Reveal delay={0.18} className="md:col-span-7">
            <PlaceholderImage label={`[FOTO: ${GALLERY[3].caption}]`} aspectRatio={GALLERY[3].ratio} />
            <p className="mt-3 text-xs text-gray-500">{GALLERY[3].caption}</p>
          </Reveal>
        </div>
      </section>

      {/* Why it's different */}
      <section className="py-20">
        <div className="container-page grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <WeldSeam className="mb-6 w-14 text-red" />
            <h2 className="font-display text-2xl tracking-tight text-ink">
              Proč je jiná
            </h2>
          </div>
          <div className="grid gap-8 md:col-span-8 md:grid-cols-3">
            <div>
              <span className="font-display text-3xl text-red">01</span>
              <h3 className="mt-3 font-display text-lg text-ink">Ruční výroba</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Každý kus svařujeme a brousíme ručně v naší dílně — žádná
                sériová výroba na lince.
              </p>
            </div>
            <div>
              <span className="font-display text-3xl text-red">02</span>
              <h3 className="mt-3 font-display text-lg text-ink">Odolnost</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Ocelová konstrukce s práškovým lakem vydrží roky venku, bez
                koroze a bez ztráty tvaru.
              </p>
            </div>
            <div>
              <span className="font-display text-3xl text-red">03</span>
              <h3 className="mt-3 font-display text-lg text-ink">Design na míru</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Rozměry i uspořádání přizpůsobíme konkrétní zahradě, ne
                naopak.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-offwhite">
        <div className="container-page flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl tracking-tight md:text-3xl">
              Mám zájem o grilovací lavici
            </h2>
            <p className="mt-2 max-w-md text-sm text-offwhite/60">
              Napište nám rozměry zahrady a představu — do 24 hodin se
              ozveme s návrhem.
            </p>
          </div>
          <Link
            href="/kontakt?typ=grilovaci-lavice"
            className="inline-flex items-center gap-1.5 border border-red bg-red px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-red-dark"
          >
            Mám zájem
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
