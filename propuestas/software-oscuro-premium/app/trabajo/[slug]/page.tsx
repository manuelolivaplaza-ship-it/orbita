import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNextProject, getProject, projects } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Trabajo" };
  return {
    title: project.name,
    description: project.excerpt,
    openGraph: {
      title: `${project.name} — OBSIDIANA`,
      description: project.excerpt,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  return (
    <article>
      <header className="relative min-h-[72svh] overflow-hidden">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-void/25" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-[1600px] flex-col justify-end px-5 py-16 md:px-10 md:py-20">
          <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
            {project.location} · {project.year} · {project.category}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.8rem,8vw,7.2rem)] leading-[0.9] font-semibold tracking-[-0.03em]">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone">{project.excerpt}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <dl className="grid grid-cols-2 gap-8 md:col-span-4">
          <div>
            <dt className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
              Cliente
            </dt>
            <dd className="mt-2 text-ivory">{project.client}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
              Año
            </dt>
            <dd className="mt-2 text-ivory">{project.year}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
              Lugar
            </dt>
            <dd className="mt-2 text-ivory">{project.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
              Oficio
            </dt>
            <dd className="mt-2 text-ivory">{project.services.join(" · ")}</dd>
          </div>
        </dl>

        <div className="space-y-12 md:col-span-7 md:col-start-6">
          <section>
            <h2 className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
              El nudo
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-stone">
              {project.challenge}
            </p>
          </section>
          <section>
            <h2 className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
              El tajo
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-stone">
              {project.approach}
            </p>
          </section>
          <section>
            <h2 className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
              Lo que quedó
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-stone">
              {project.result}
            </p>
          </section>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-px bg-line px-5 md:grid-cols-3 md:px-10">
        {project.metrics.map((m) => (
          <div key={m.label} className="bg-void py-10 md:px-8">
            <p className="font-display text-4xl font-semibold tracking-tight text-ivory md:text-5xl">
              {m.value}
            </p>
            <p className="mt-2 font-mono text-[11px] tracking-[0.16em] text-mute uppercase">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
          Siguiente
        </p>
        <Link
          href={`/trabajo/${next.slug}`}
          className="group mt-4 flex flex-col justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-end"
        >
          <span className="font-display text-[clamp(2rem,6vw,5rem)] leading-[0.9] font-semibold tracking-tight text-ivory transition-colors duration-500 group-hover:text-gold">
            {next.name}
          </span>
          <span className="font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
            Continuar →
          </span>
        </Link>
      </div>
    </article>
  );
}
