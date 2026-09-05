import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { getOficio, oficios } from "@/lib/oficio";
import { projects } from "@/lib/work";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return oficios.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getOficio(slug);
  if (!item) return { title: "Oficio" };
  return {
    title: item.title,
    description: item.lead,
  };
}

export default async function OficioDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getOficio(slug);
  if (!item) notFound();

  const related = projects.slice(0, 2);

  return (
    <>
      <section className="wrap pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="eyebrow">Oficio · {item.index}</p>
        <h1 className="display mt-5 max-w-[12ch] text-[clamp(3rem,8vw,6.4rem)]">
          {item.title}
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          {item.lead}
        </p>
      </section>

      <section className="wrap">
        <div className="img-frame relative aspect-[16/9] md:aspect-[16/7.5]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <p className="eyebrow md:col-span-4">El trabajo</p>
        <div className="md:col-span-8">
          <p className="max-w-2xl text-[1.08rem] leading-[1.75]">{item.body}</p>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {item.includes.map((line) => (
              <li key={line} className="flex gap-3 border-t border-line pt-3 text-[0.98rem]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-norte" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap pb-20 md:pb-28">
        <div className="mb-10 flex items-end justify-between">
          <p className="eyebrow">Encargos</p>
          <Link href="/trabajo" className="link-line text-sm text-muted">
            Todo el trabajo
          </Link>
        </div>
        <ul className="grid gap-8 md:grid-cols-2">
          {related.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={index * 80}>
              <Link href={`/trabajo/${project.slug}`} className="group block">
                <div className="img-frame relative aspect-[16/10]">
                  <Image
                    src={project.cover}
                    alt={project.coverAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <p className="mt-4 font-display text-2xl tracking-[-0.03em]">
                  {project.name}
                </p>
                <p className="mt-1 text-sm text-muted">{project.sector}</p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <nav
        aria-label="Más oficio"
        className="wrap flex flex-wrap gap-x-8 gap-y-3 border-t border-line py-10 text-sm"
      >
        {oficios.map((other) => (
          <Link
            key={other.slug}
            href={`/oficio/${other.slug}`}
            className={other.slug === item.slug ? "text-norte" : "link-line text-muted"}
          >
            {other.index} {other.title}
          </Link>
        ))}
      </nav>

      <Cta />
    </>
  );
}
