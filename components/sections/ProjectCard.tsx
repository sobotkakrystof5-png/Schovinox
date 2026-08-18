import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ZoomIn } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  onImageClick: () => void;
};

export default function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  return (
    <div className="group">
      <button
        type="button"
        onClick={onImageClick}
        aria-label={`Zvětšit fotku: ${project.title}`}
        className="relative block w-full overflow-hidden text-left"
      >
        <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-red/0 p-5 transition-colors duration-300 group-hover:bg-red/85">
          <span className="translate-y-2 text-sm font-medium text-offwhite opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Zvětšit fotku
          </span>
          <ZoomIn
            className="h-5 w-5 translate-y-2 text-offwhite opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            strokeWidth={1.5}
          />
        </div>
      </button>
      <Link
        href={`/projekty/${project.slug}`}
        className="mt-4 flex items-start justify-between gap-3 border-t border-ink/10 pt-4"
      >
        <div>
          <h3 className="font-display text-lg tracking-tight text-ink group-hover:text-red">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{project.category}</p>
        </div>
        <ArrowUpRight
          className="mt-1 h-4 w-4 shrink-0 text-red opacity-0 transition-opacity group-hover:opacity-100"
          strokeWidth={1.5}
        />
      </Link>
    </div>
  );
}
