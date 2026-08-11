import type { Metadata } from "next";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Sedm realizací Schovinox — zakázková kovovýroba a kooperace pro gastro provozy, mlékárny, hasičské zbrojnice a průmyslové zákazníky.",
};

export default function ProjektyPage() {
  return (
    <>
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-red">
            Realizace
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            Sedm zakázek, na kterých je vidět řemeslo.
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <ProjectsGrid />
        </div>
      </section>
    </>
  );
}
