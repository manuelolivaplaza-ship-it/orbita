import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectTeaser({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="article" delay={index * 70}>
      <Link
        href={`/trabajo/${project.slug}`}
        className="group grid gap-5 md:grid-cols-12 md:items-end md:gap-8"
      >
        <div
          className={cn(
            "img-frame relative col-span-12 overflow-hidden",
            featured ? "aspect-[16/10] md:col-span-12" : "aspect-[16/11] md:col-span-8",
          )}
        >
          <ViewTransition name={`project-${project.slug}`}>
            <Image
              src={project.cover}
              alt={project.coverAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 80vw, 100vw"
            />
          </ViewTransition>
        </div>
        <div
          className={cn(
            "col-span-12 flex flex-col gap-2 md:pb-1",
            featured ? "md:flex-row md:items-end md:justify-between" : "md:col-span-4",
          )}
        >
          <div>
            <p className="eyebrow">
              {number} · {project.sector}
            </p>
            <h3 className="mt-2 font-display text-3xl tracking-[-0.04em] md:text-4xl">
              {project.name}
            </h3>
            <p className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-muted">
              {project.headline}
            </p>
          </div>
          <span className="mt-3 inline-flex items-center gap-2 text-sm tracking-[0.06em] text-copper">
            Ver el caso
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
