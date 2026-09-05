"use client";

import { useMemo, useState } from "react";
import { categories, type Project } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-y border-line py-4">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className="chip"
              data-active={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {filtered.map((project, index) => (
          <div
            key={project.slug}
            className={index === 0 ? "md:col-span-2" : undefined}
          >
            <ProjectCard
              project={project}
              large={index === 0}
              index={index + 1}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
