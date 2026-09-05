import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  large = false,
  index,
  priority = false,
}: {
  project: Project;
  large?: boolean;
  index?: number;
  priority?: boolean;
}) {
  return (
    <Link href={`/obras/${project.slug}`} className="group block">
      <div
        className={`img-zoom relative overflow-hidden bg-surface ${
          large ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority={priority}
          sizes={
            large
              ? "(min-width: 1024px) 70vw, 100vw"
              : "(min-width: 768px) 50vw, 100vw"
          }
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-void/0 transition duration-500 group-hover:bg-void/20" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 opacity-0 transition duration-500 group-hover:opacity-100">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper">
            {project.code}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper">
            Ver corte
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-3">
            {typeof index === "number" ? (
              <span className="font-mono text-[10px] tracking-[0.18em] text-muted">
                {String(index).padStart(2, "0")}
              </span>
            ) : null}
            <h3 className="font-display text-2xl leading-none tracking-tight md:text-[1.7rem]">
              {project.title}
            </h3>
          </div>
          <p className="mt-2 text-sm text-muted">
            {project.location} · {project.year}
          </p>
        </div>
        <span className="pt-1 text-[10px] uppercase tracking-[0.2em] text-muted">
          {project.category}
        </span>
      </div>
    </Link>
  );
}
