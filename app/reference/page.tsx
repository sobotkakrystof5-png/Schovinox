import type { Metadata } from "next";
import TestimonialCard from "@/components/sections/TestimonialCard";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Co o spolupráci se Schovinox říkají klienti a firmy, se kterými dlouhodobě spolupracujeme.",
};

const TESTIMONIALS = [
  {
    name: "Zákazník 1",
    company: "Firma 1",
    quote: "[DOPLNÍ KLIENT]",
    rating: 5,
  },
  {
    name: "Zákazník 2",
    company: "Firma 2",
    quote: "[DOPLNÍ KLIENT]",
    rating: 5,
  },
  {
    name: "Zákazník 3",
    company: "Firma 3",
    quote: "[DOPLNÍ KLIENT]",
    rating: 5,
  },
  {
    name: "Zákazník 4",
    company: "Firma 4",
    quote: "[DOPLNÍ KLIENT]",
    rating: 5,
  },
];

export default function ReferencePage() {
  return (
    <>
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red">
            Reference
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            Firmy a lidé, kteří se vracejí.
          </h1>
        </div>
      </section>

      <LogoMarquee />

      <section className="py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={(i % 2) * 0.08}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
