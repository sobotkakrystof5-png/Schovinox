import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProjectDetailImage from "@/components/sections/ProjectDetailImage";
import WeldSeam from "@/components/ui/WeldSeam";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projekty/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `/projekty/${project.slug}`,
      type: "website",
      images: [{ url: project.image }],
    },
  };
}

export default function ProjektDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Projekty", path: "/projekty" },
          { name: project.title, path: `/projekty/${project.slug}` },
        ]}
      />
      <section className="border-b border-ink/10 pt-32">
        <div className="container-page pb-12">
          <Link
            href="/projekty"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-red"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Zpět na projekty
          </Link>
          <span className="mt-6 block text-xs uppercase tracking-[0.25em] text-red">
            {project.category}
          </span>
          <h1 className="mt-4 max-w-2xl font-display text-4xl tracking-tight text-ink md:text-5xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ProjectDetailImage project={project} />
          </div>
          <div className="md:col-span-5">
            <WeldSeam className="mb-6 w-14 text-red" />
            <dl className="grid grid-cols-2 gap-y-5 border-b border-ink/10 pb-8 text-sm">
              <dt className="text-gray-500">Materiál</dt>
              <dd className="text-ink">{project.material}</dd>
              <dt className="text-gray-500">Lokalita</dt>
              <dd className="text-ink">{project.location}</dd>
              <dt className="text-gray-500">Rok realizace</dt>
              <dd className="text-ink">{project.year}</dd>
              <dt className="text-gray-500">Typ zakázky</dt>
              <dd className="text-ink">{project.category}</dd>
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-gray-500">
              {project.description}
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-red"
            >
              Chci podobnou realizaci
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-gray-100 py-14">
        <div className="container-page flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Další realizace
          </span>
          <Link
            href={`/projekty/${next.slug}`}
            className="inline-flex items-center gap-1.5 font-display text-lg text-ink hover:text-red"
          >
            {next.title}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
