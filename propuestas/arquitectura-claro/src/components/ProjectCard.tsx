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
        className={`relative overflow-hidden bg-paper-2 ${
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
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/10" />
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
