import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { facts, getRelated, getWork, works } from "@/lib/works";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Obra" };
  return {
    title: work.title,
    description: work.lead,
    openGraph: { images: [{ url: work.cover }] },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  const related = getRelated(work.slug);
  const index = works.findIndex((item) => item.slug === work.slug);
  const next = works[(index + 1) % works.length];
  const sheet = facts(work);

  return (
    <article>
      <section className="relative -mt-[4.5rem] h-[78svh] min-h-[520px] overflow-hidden bg-void">
        <Image
          src={work.cover}
          alt={work.caption}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void via-void/50 to-transparent">
          <div className="shell pb-10 pt-24">
            <p className="kicker">
              {work.code} · {work.type}
            </p>
            <h1 className="mt-3 font-display text-5xl leading-none tracking-tight md:text-7xl">
              {work.title}
            </h1>
            <p className="mt-4 text-sm text-paper-dim">
              {work.commune} · {work.year} · {work.area} m²
            </p>
          </div>
        </div>
      </section>

      <section className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="font-display text-3xl leading-snug md:text-[2.35rem]">
            {work.lead}
          </p>
          <div className="mt-10 space-y-6 text-[15px] leading-8 text-paper-dim">
            {work.body.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.1}>
          <div className="cartela p-6">
            <div className="flex items-baseline justify-between border-b border-line pb-4">
              <p className="font-display text-xl tracking-[0.2em]">UMBRAL</p>
              <p className="font-mono text-[10px] tracking-[0.16em] text-brass">
                {work.code}
              </p>
            </div>
            <dl>
              {sheet.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-2 gap-4 border-b border-line py-3.5 last:border-b-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      {work.interior ? (
        <section className="border-y border-line bg-ink py-16 md:py-24">
          <div className="shell">
            <figure>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={work.interior}
                  alt={`Interior de ${work.title}`}
                  fill
                  sizes="100vw"
                  className="curtain object-cover"
                />
              </div>
              <figcaption className="plaque mt-3">
                Interior · {work.title} · {work.year}
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      <section className="shell py-16 md:py-24">
        <div className="flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="kicker">Siguiente</p>
            <Link
              href={`/obras/${next.slug}`}
              className="mt-3 block font-display text-3xl sm:text-4xl"
            >
              {next.title}
            </Link>
          </div>
          <Link href="/obras" className="btn-ghost link-line">
            Volver al índice
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/obras/${item.slug}`} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={item.cover}
                  alt={item.caption}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="plaque mt-3">
                {item.code} · {item.title}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
