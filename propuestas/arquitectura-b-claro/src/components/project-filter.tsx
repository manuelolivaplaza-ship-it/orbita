"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import {
  categories,
  projects,
  type Category,
} from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectFilter() {
  const [active, setActive] = useState<"Todas" | Category>("Todas");
  const filtered = useMemo(
    () =>
      active === "Todas"
        ? projects
        : projects.filter((project) => project.category === active),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-4">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActive(item)}
            className={cn(
              "font-mono px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase transition-colors",
              active === item
                ? "bg-ink text-cal"
                : "border border-line text-muted hover:border-ink hover:text-ink"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto border-b border-line">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
              <th className="py-3 pr-4 font-medium">Lámina</th>
              <th className="py-3 pr-4 font-medium">Obra</th>
              <th className="py-3 pr-4 font-medium">Comuna</th>
              <th className="py-3 pr-4 font-medium">Año</th>
              <th className="py-3 pr-4 font-medium">m²</th>
              <th className="py-3 font-medium">Cota</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((project) => (
              <tr key={project.slug} className="border-t border-line transition-colors hover:bg-cal-2">
                <td className="font-mono py-3 pr-4 text-[12px] text-cobre">
                  <Link href={`/obras/${project.slug}`} className="link-line">
                    {project.code}
                  </Link>
                </td>
                <td className="py-3 pr-4">
                  <Link href={`/obras/${project.slug}`} className="link-line">
                    {project.title}
                  </Link>
                </td>
                <td className="py-3 pr-4 text-[14px] text-muted">
                  {project.comuna}
                </td>
                <td className="font-mono nums py-3 pr-4 text-[13px]">
                  {project.year}
                </td>
                <td className="py-3 pr-4 text-[14px]">{project.area}</td>
                <td className="font-mono nums py-3 text-[12px] text-oxido">
                  {project.cota}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {filtered.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
