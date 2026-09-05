import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/work";
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
  return (
    <Reveal as="article" delay={index * 70}>
      <Link href={`/trabajo/${project.slug}`} className="group block">
        <div
          className={cn(
            "img-frame relative",
            featured ? "aspect-[16/9] md:aspect-[16/7.5]" : "aspect-[4/3] md:aspect-[16/11]",
          )}
        >
          <ViewTransition name={`project-${project.slug}`}>
            <Image
              src={project.cover}
              alt={project.coverAlt}
              fill
              className="object-cover"
              sizes={featured ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              priority={featured}
            />
          </ViewTransition>
        </div>
        <div className="mt-4 flex flex-col gap-1 md:mt-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
          <div>
            <p className="font-display text-3xl tracking-[-0.03em] md:text-4xl">
              {project.name}
            </p>
            <p className="mt-1 max-w-xl text-[0.98rem] leading-relaxed text-muted">
              {project.headline}
            </p>
          </div>
          <p className="eyebrow shrink-0 pt-2 md:pt-0">
            {project.sector} · {project.year}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
