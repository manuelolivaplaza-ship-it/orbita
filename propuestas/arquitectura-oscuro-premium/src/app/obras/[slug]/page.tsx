import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
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
    openGraph: {
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelated(project.slug);
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      <section className="relative -mt-[4.5rem] h-[78svh] min-h-[520px] overflow-hidden bg-void">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/15 to-void/35" />
        <div className="shell absolute inset-x-0 bottom-0 pb-10">
          <p className="kicker">
            {project.code} · {project.category}
          </p>
          <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm text-paper-dim">
            {project.location} · {project.year} · {project.coords}
          </p>
        </div>
      </section>

      <section className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="font-display text-3xl leading-snug md:text-[2.4rem] md:leading-snug">
            {project.lead}
          </p>
          <div className="mt-10 space-y-6 text-[15px] leading-8 text-paper-dim">
            {project.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
          <div className="cartela p-6">
            <div className="flex items-baseline justify-between border-b border-line pb-4">
              <p className="font-display text-xl tracking-[0.18em]">ORILLA</p>
              <p className="font-mono text-[10px] tracking-[0.16em] text-copper">
                {project.code}
              </p>
            </div>
            <dl>
              {project.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-2 gap-4 border-b border-line py-3.5"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-sm">{fact.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4 py-3.5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  Estado
                </dt>
                <dd className="text-sm">{project.status}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="shell grid gap-6 pb-24">
        {project.images.map((image, index) => (
          <Reveal
            key={image.src}
            variant="img-mask"
            delay={index * 60}
            className={image.wide ? "" : "md:w-[78%]"}
          >
            <figure>
              <div
                className={`relative overflow-hidden bg-surface ${
                  image.wide ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={image.wide ? "100vw" : "78vw"}
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 max-w-xl text-sm leading-6 text-muted">
                {image.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </section>

      {next ? (
        <section className="border-t border-line">
          <div className="shell flex items-center justify-between py-8">
            <p className="kicker">Siguiente corte</p>
            <Link
              href={`/obras/${next.slug}`}
              className="font-display text-2xl italic link-line md:text-3xl"
            >
              {next.title} →
            </Link>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line py-20">
        <div className="shell">
          <p className="kicker">Otras obras</p>
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
