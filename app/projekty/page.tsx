import type { Metadata } from "next";
import ProjectCard from "@/components/sections/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Šest realizací Schovinox — schodiště, brány, kooperace, zábradlí, bezpečnostní dveře a grilovací sety na míru.",
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
            Šest zakázek, na kterých je vidět řemeslo.
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
