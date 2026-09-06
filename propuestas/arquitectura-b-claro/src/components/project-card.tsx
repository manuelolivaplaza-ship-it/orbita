import Image from "next/image";
import Link from "next/link";
import { CotaLabel } from "@/components/cota-mark";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  large = false,
  index,
}: {
  project: Project;
  large?: boolean;
  index?: number;
}) {
  return (
    <Link
      href={`/obras/${project.slug}`}
      className={cn("group block", large && "lg:grid lg:grid-cols-12 lg:gap-10")}
    >
      <div
        className={cn(
          "img-zoom relative bg-cal-2",
          large ? "aspect-[16/10] lg:col-span-8" : "aspect-[4/3]"
        )}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          sizes={
            large
              ? "(min-width: 1024px) 66vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
          className="object-cover"
          priority={index === 0}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-cobre" />
      </div>
      <div className={cn("mt-4", large && "lg:col-span-4 lg:mt-0 lg:flex lg:flex-col lg:justify-end")}>
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.16em] text-cobre uppercase">
            {project.code}
          </p>
          <CotaLabel value={project.cota} align="right" />
        </div>
        <h3
          className={cn(
            "font-display mt-2 font-semibold tracking-tight",
            large ? "text-3xl lg:text-4xl" : "text-2xl"
          )}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-[14px] text-muted">
          {project.location} · {project.year} · {project.area}
        </p>
        {large ? (
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/80">
            {project.excerpt}
          </p>
        ) : null}
        <p className="link-line mt-4 inline-block text-[12px] tracking-[0.16em] uppercase">
          Ver corte
        </p>
      </div>
    </Link>
  );
}
