import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CotaLabel, Datum } from "@/components/cota-mark";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { getProject, getRelated, projects } from "@/lib/data";

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
    <article className="pt-28 lg:pt-36">
      <header className="shell">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-4">
            <p className="kicker">
              {project.code} · {project.category}
            </p>
            <CotaLabel value={project.cota} align="right" />
          </div>
          <h1 className="font-display mt-8 max-w-[14ch] text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[0.9] tracking-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-[15px] text-muted">
            {project.location} · {project.year} · {project.area}
          </p>
        </Reveal>
      </header>

      <section className="shell mt-10">
        <div className="relative aspect-[16/10] overflow-hidden bg-cal-2">
          <Image
            src={project.cover}
            alt={project.images[0]?.alt ?? project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Datum />
        <p className="mt-3 max-w-2xl text-[14px] text-muted">
          {project.images[0]?.caption}
        </p>
      </section>

      <section className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="font-serif text-[1.45rem] leading-snug text-ink italic md:text-[1.7rem] md:leading-snug">
            {project.lead}
          </p>
          <div className="mt-10 space-y-6 text-[16px] leading-8 text-ink/85">
            {project.body.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
          <dl className="border-t border-line">
            {project.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-2 gap-4 border-b border-line py-4"
              >
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                  {fact.label}
                </dt>
                <dd className="text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/contacto"
            className="font-display mt-8 inline-flex h-12 items-center bg-cobre px-6 text-[0.9rem] font-semibold text-cal transition-colors hover:bg-cobre-deep"
          >
            Encargar un predio
          </Link>
        </Reveal>
      </section>

      <section className="shell grid gap-8 pb-20 md:grid-cols-2">
        {project.images.slice(1).map((image) => (
          <figure key={image.src} className={image.wide ? "md:col-span-2" : ""}>
            <div
              className={`img-zoom relative bg-cal-2 ${image.wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 max-w-xl text-[14px] text-muted">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="border-t border-line py-20">
        <div className="shell">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Otras láminas
            </h2>
            <Link
              href="/obras"
              className="link-line text-[12px] tracking-[0.16em] uppercase"
            >
              Índice
            </Link>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
