import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { getAdjacent, getProject, projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Trabajo" };
  return {
    title: `${project.name} — ${project.sector}`,
    description: project.lede,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacent(project.slug);

  return (
    <>
      <article>
        <header className="wrap pb-10 pt-12 md:pb-14 md:pt-20">
          <p className="eyebrow">
            {project.sector} · {project.location} · {project.year}
          </p>
          <h1 className="display mt-5 max-w-[18ch] text-[clamp(2.8rem,7vw,5.8rem)]">
            {project.headline}
          </h1>
          <p className="mt-8 max-w-2xl text-[1.12rem] leading-[1.7] text-muted">
            {project.lede}
          </p>
        </header>

        <div className="wrap">
          <div className="img-frame relative aspect-[16/9] md:aspect-[16/7.5]">
            <ViewTransition name={`project-${project.slug}`}>
              <Image
                src={project.cover}
                alt={project.coverAlt}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </ViewTransition>
          </div>
        </div>

        <section className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <p className="eyebrow md:col-span-4">El problema</p>
          <p className="max-w-2xl text-[1.08rem] leading-[1.75] md:col-span-8">
            {project.challenge}
          </p>
        </section>

        <section className="wrap grid gap-12 pb-8 md:grid-cols-12 md:pb-16">
          <div className="md:col-span-4">
            <p className="eyebrow">Cómo lo hicimos</p>
          </div>
          <ol className="grid gap-10 md:col-span-8">
            {project.approach.map((step, index) => (
              <Reveal as="li" key={step} delay={index * 60} className="grid grid-cols-12 gap-4">
                <span className="col-span-2 font-display text-2xl text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="col-span-10 text-[1.05rem] leading-[1.75] text-ink">{step}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="wrap grid gap-8 py-10 md:grid-cols-2 md:py-16">
          <div className="img-frame relative aspect-[4/3]">
            <Image
              src={project.atmosphere}
              alt={project.atmosphereAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-between bg-paper-2 px-8 py-10 md:px-12">
            <p className="eyebrow">El resultado</p>
            <p className="mt-8 font-display text-3xl leading-[1.15] tracking-[-0.03em] md:text-4xl">
              {project.outcome}
            </p>
          </div>
        </section>

        <section className="wrap grid grid-cols-1 gap-10 border-y border-line py-14 md:grid-cols-3 md:py-16">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-display text-4xl tracking-[-0.04em] md:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </section>

        <section className="wrap py-16 md:py-24">
          <blockquote className="max-w-3xl">
            <p className="font-display text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.18] tracking-[-0.03em]">
              “{project.quote.text}”
            </p>
            <footer className="mt-8 text-sm text-muted">
              {project.quote.author}
              <span className="mx-2 text-line">·</span>
              {project.quote.role}
            </footer>
          </blockquote>
          <ul className="mt-12 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1 text-xs tracking-[0.08em] text-muted uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </article>

      <nav
        aria-label="Más trabajo"
        className="wrap grid gap-8 border-t border-line py-12 md:grid-cols-2 md:py-16"
      >
        <Link href={`/trabajo/${prev.slug}`} className="group">
          <p className="eyebrow">Anterior</p>
          <p className="mt-2 font-display text-3xl tracking-[-0.04em] transition-colors group-hover:text-copper">
            {prev.name}
          </p>
          <p className="mt-1 text-sm text-muted">{prev.sector}</p>
        </Link>
        <Link href={`/trabajo/${next.slug}`} className="group md:text-right">
          <p className="eyebrow">Siguiente</p>
          <p className="mt-2 font-display text-3xl tracking-[-0.04em] transition-colors group-hover:text-copper">
            {next.name}
          </p>
          <p className="mt-1 text-sm text-muted">{next.sector}</p>
        </Link>
      </nav>

      <Cta />
    </>
  );
}
