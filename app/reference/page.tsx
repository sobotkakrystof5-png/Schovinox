import type { Metadata } from "next";
import ReferenceCard from "@/components/sections/ReferenceCard";
import ReferenceForm from "@/components/forms/ReferenceForm";
import Reveal from "@/components/ui/Reveal";
import WeldSeam from "@/components/ui/WeldSeam";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Reference od zákazníků Schovinox, napsané těmi, pro které jsme dělali, ne námi.",
  alternates: {
    canonical: "/reference",
  },
  openGraph: {
    title: `Reference | ${SITE.name}`,
    description:
      "Reference od zákazníků Schovinox, napsané těmi, pro které jsme dělali, ne námi.",
    url: "/reference",
    type: "website",
    // Fallback fotka — dedikované referenční fotky zatím nejsou (TESTIMONIALS je prázdné).
    images: [{ url: "/galerie/realizace-1.jpeg" }],
  },
};

// TODO: Až bude TESTIMONIALS obsahovat skutečné reference, doplnit sem
// Review / AggregateRating JSON-LD (ne dřív — fingovat hodnocení nejde).

export default function ReferencePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Reference", path: "/reference" }]} />
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red">
            Reference
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            Reference píšou zákazníci. Ne my.
          </h1>
          <p className="mt-5 max-w-lg text-sm text-gray-500">
            Žádné vymyšlené citace ani cizí loga. Každou referenci na této
            stránce napsal skutečný zákazník. Než se tu objeví, ručně si ji
            projdeme.
          </p>
        </div>
      </section>

      {TESTIMONIALS.length > 0 && (
        <section className="py-20">
          <div className="container-page">
            <div className="mx-auto max-w-4xl divide-y divide-ink/10 border-y border-ink/10">
              {TESTIMONIALS.map((testimonial, i) => (
                <Reveal key={testimonial.id} delay={i * 0.05} className="py-12">
                  <ReferenceCard
                    testimonial={testimonial}
                    index={i + 1}
                    total={TESTIMONIALS.length}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ink py-20 text-offwhite">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <WeldSeam className="mb-6 w-14 text-red" />
            <h2 className="font-display text-2xl tracking-tight md:text-3xl">
              Dělali jsme pro vás?
            </h2>
            <p className="mt-3 max-w-xs text-sm text-offwhite/60">
              Napište pár vět o tom, na čem jsme spolupracovali a jak to
              dopadlo. Klidně přiložte fotku hotové práce.
            </p>
          </div>
          <div className="md:col-span-8">
            <ReferenceForm />
          </div>
        </div>
      </section>
    </>
  );
}
