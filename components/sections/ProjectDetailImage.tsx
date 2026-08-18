"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import ProjectLightbox from "@/components/sections/ProjectLightbox";
import type { Project } from "@/lib/projects";

export default function ProjectDetailImage({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Zvětšit fotku: ${project.title}`}
        className="group relative block w-full overflow-hidden text-left"
      >
        <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority
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

      <ProjectLightbox
        projects={[project]}
        index={open ? 0 : null}
        onClose={() => setOpen(false)}
        onNavigate={() => {}}
      />
    </>
  );
}
