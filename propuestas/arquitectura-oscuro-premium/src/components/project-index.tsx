"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/projects";

export function ProjectIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const current = projects[active] ?? projects[0];

  return (
    <div className="grid items-start gap-10 lg:grid-cols-12">
      <div className="hidden lg:sticky lg:top-28 lg:col-span-6 lg:block">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          {projects.map((project, index) => (
            <Image
              key={project.slug}
              src={project.cover}
              alt={project.title}
              fill
              sizes="50vw"
              className={`object-cover transition-opacity duration-700 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        {current ? (
          <div className="mt-4 flex items-start justify-between gap-6">
            <p className="max-w-md text-sm leading-6 text-muted">
              {current.excerpt}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-copper">
              {current.coords}
            </p>
          </div>
        ) : null}
      </div>

      <ol className="lg:col-span-6">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Link
              href={`/obras/${project.slug}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-t border-line py-5 md:grid-cols-[3rem_1fr_auto]"
            >
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="font-display text-[1.65rem] leading-none tracking-tight transition-colors group-hover:text-copper md:text-3xl">
                  {project.title}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {project.location}
                </span>
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {project.year}
              </span>
            </Link>
          </li>
        ))}
        <div className="border-t border-line" />
      </ol>
    </div>
  );
}
