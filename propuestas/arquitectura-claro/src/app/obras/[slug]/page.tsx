import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { getProject, getRelated, projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Obra" };
  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelated(project.slug);

  return (
    <article>
      <section className="relative h-[78svh] min-h-[520px] overflow-hidden bg-hero text-paper">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hero/75 via-hero/10 to-hero/25" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-10 md:px-8 lg:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-paper/70">
            {project.code} · {project.category}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm text-paper/80">
            {project.location} · {project.year}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-7">
          <p className="font-display text-3xl leading-snug md:text-[2.4rem] md:leading-snug">
            {project.lead}
          </p>
          <div className="mt-10 space-y-6 text-[15px] leading-8 text-ink-soft">
            {project.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
          <dl className="border-t border-line">
            {project.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-2 gap-4 border-b border-line py-4"
              >
                <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                  {fact.label}
                </dt>
                <dd className="text-sm">{fact.value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-4 border-b border-line py-4">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                Estado
              </dt>
              <dd className="text-sm">{project.status}</dd>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b border-line py-4">
              <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                Cliente
              </dt>
              <dd className="text-sm">{project.client}</dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] space-y-6 px-5 pb-20 md:px-8 lg:px-10">
        {project.images.map((image) => (
          <Reveal key={image.src} variant="img-mask">
            <figure>
              <div
                className={`relative overflow-hidden bg-paper-2 ${
                  image.wide ? "aspect-[16/9]" : "aspect-[4/3] md:aspect-[16/10]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="img-zoom object-cover"
                />
              </div>
              <figcaption className="mt-3 flex gap-4 text-sm text-muted">
                <span className="font-mono text-[10px] tracking-[0.16em]">
                  {project.code}
                </span>
                {image.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl italic md:text-4xl">
            Otras obras
          </h2>
          <Link
            href="/obras"
            className="text-[11px] uppercase tracking-[0.22em] text-muted link-line"
          >
            Índice
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {related.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </section>
    </article>
  );
}
