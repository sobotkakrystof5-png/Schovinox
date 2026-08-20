import type { Metadata } from "next";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Sedm realizací Schovinox: zakázková kovovýroba a kooperace pro gastro provozy, mlékárny, hasičské zbrojnice a průmyslové zákazníky.",
  alternates: {
    canonical: "/projekty",
  },
  openGraph: {
    title: `Projekty | ${SITE.name}`,
    description:
      "Sedm realizací Schovinox: zakázková kovovýroba a kooperace pro gastro provozy, mlékárny, hasičské zbrojnice a průmyslové zákazníky.",
    url: "/projekty",
    type: "website",
    images: [{ url: "/projekty/projekt-1.jpeg" }],
  },
};

export default function ProjektyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Projekty", path: "/projekty" }]} />
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
