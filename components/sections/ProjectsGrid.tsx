"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
import { PROJECTS } from "@/lib/projects";

const ProjectLightbox = dynamic(() => import("@/components/sections/ProjectLightbox"), {
  ssr: false,
});

export default function ProjectsGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.06}>
            <ProjectCard project={project} onImageClick={() => setActiveIndex(i)} />
          </Reveal>
        ))}
      </div>

      <ProjectLightbox
        projects={PROJECTS}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
