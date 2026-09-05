import Link from "next/link";
import { projects } from "@/lib/projects";

export function Latitud() {
  const ordered = [...projects].sort((a, b) => b.lat - a.lat);

  return (
    <section className="border-y border-line bg-ink py-16 md:py-20">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">Territorio</p>
            <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
              De Calama a Petrohué
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Chile es un corte norte–sur. Las obras se leen en latitud: desierto,
            valle, costa, lagos.
          </p>
        </div>

        <ol className="relative mt-12">
          <span
            className="pointer-events-none absolute bottom-2 left-[5.25rem] top-2 hidden w-px bg-copper/35 md:block"
            aria-hidden
          />
          {ordered.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/obras/${project.slug}`}
                className="group grid items-baseline gap-2 border-t border-line py-5 md:grid-cols-[6.5rem_1fr_auto] md:gap-8"
              >
                <span className="relative font-mono text-[11px] tracking-[0.16em] text-copper">
                  {project.coords.split(" · ")[0]}
                  <span
                    className="absolute top-1.5 right-[-1.35rem] hidden h-2 w-2 border border-copper bg-void group-hover:bg-copper md:block"
                    aria-hidden
                  />
                </span>
                <span>
                  <span className="font-display text-2xl leading-none transition-colors group-hover:text-copper md:text-3xl">
                    {project.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {project.location}
                  </span>
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                  {project.year}
                </span>
              </Link>
            </li>
          ))}
          <div className="border-t border-line" />
        </ol>
      </div>
    </section>
  );
}
