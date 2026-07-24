import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projekty/${project.slug}`} className="group block">
      <div className="relative overflow-hidden">
        <PlaceholderImage
          label={`[FOTO: ${project.title}]`}
          aspectRatio="4 / 3"
          className="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 flex items-end bg-red/0 p-5 transition-colors duration-300 group-hover:bg-red/85">
          <span className="translate-y-2 text-sm font-medium text-offwhite opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Zobrazit detail →
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3 border-t border-ink/10 pt-4">
        <div>
          <h3 className="font-display text-lg tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {project.category} · {project.material} · {project.year}
          </p>
        </div>
        <ArrowUpRight
          className="mt-1 h-4 w-4 shrink-0 text-red opacity-0 transition-opacity group-hover:opacity-100"
          strokeWidth={1.5}
        />
      </div>
    </Link>
  );
}
