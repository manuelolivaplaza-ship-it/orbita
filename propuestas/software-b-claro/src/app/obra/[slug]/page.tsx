import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getAdjacent, getObra, obras } from "@/lib/obra";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return obras.map((obra) => ({ slug: obra.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const obra = getObra(slug);
  if (!obra) return {};
  return {
    title: `${obra.name} · Obra`,
    description: obra.lede,
  };
}

export default async function ObraDetailPage({ params }: Props) {
  const { slug } = await params;
  const obra = getObra(slug);
  if (!obra) notFound();
  const { prev, next } = getAdjacent(slug);

  return (
    <>
      <section className="sheet pb-8 pt-12 md:pt-16">
        <p className="kicker">
          <Link href="/obra" className="link-n">
            Obra
          </Link>
          <span className="mx-2">·</span>
          {obra.code}
        </p>
        <h1 className="display mt-5 max-w-[16ch] text-[clamp(2.8rem,7vw,5.8rem)]">
          {obra.headline}
        </h1>
        <p className="mt-8 max-w-2xl text-[1.12rem] leading-[1.7] text-muted">
          {obra.lede}
        </p>
        <div className="titleblock mt-10">
          <div>
            <p>Cliente</p>
            <p className="mt-1 text-ink">{obra.name}</p>
          </div>
          <div className="cell-r">
            <p>Sector</p>
            <p className="mt-1 text-ink">{obra.sector}</p>
          </div>
          <div className="border-t border-line">
            <p>Lugar · latitud</p>
            <p className="mt-1 text-ink">
              {obra.location} · {obra.lat}
            </p>
          </div>
          <div className="cell-r border-t border-line">
            <p>Año</p>
            <p className="mt-1 text-ink">{obra.year}</p>
          </div>
        </div>
      </section>

      <section className="sheet pb-12">
        <div className="img-cut relative aspect-[16/9] md:aspect-[16/7.5]">
          <Image
            src={obra.cover}
            alt={obra.coverAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="sheet grid gap-12 py-8 md:grid-cols-12 md:py-16">
        <p className="kicker md:col-span-4">El problema</p>
        <p className="max-w-2xl text-[1.08rem] leading-[1.75] md:col-span-8">
          {obra.challenge}
        </p>
      </section>

      <section className="sheet grid gap-10 py-8 md:grid-cols-12 md:py-12">
        <p className="kicker md:col-span-4">El trazado</p>
        <ol className="grid gap-8 md:col-span-8">
          {obra.approach.map((step, index) => (
            <Reveal as="li" key={step} delay={index * 50} className="grid grid-cols-12 gap-4">
              <span className="col-span-2 font-mono text-[0.72rem] tracking-[0.14em] text-norte">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="col-span-10 text-[1.04rem] leading-relaxed">{step}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="sheet grid gap-10 py-10 md:grid-cols-12">
        <div className="img-cut relative aspect-[4/5] md:col-span-5 md:aspect-auto md:min-h-[480px]">
          <Image
            src={obra.atmosphere}
            alt={obra.atmosphereAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-between bg-nieve-2 px-8 py-12 md:col-span-7 md:px-14 md:py-16">
          <p className="kicker">Lo que quedó</p>
          <blockquote className="font-display mt-8 text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.18] tracking-[-0.03em]">
            “{obra.quote.text}”
          </blockquote>
          <p className="mt-10 text-sm text-muted">
            {obra.quote.author} · {obra.quote.role}
          </p>
          <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-muted">
            {obra.outcome}
          </p>
        </div>
      </section>

      <section className="sheet grid grid-cols-3 gap-6 py-16 md:py-20">
        {obra.metrics.map((metric) => (
          <div key={metric.label} className="border-t border-ink pt-5">
            <p className="display text-3xl md:text-5xl">{metric.value}</p>
            <p className="mt-2 text-sm text-muted">{metric.label}</p>
          </div>
        ))}
      </section>

      <section className="sheet pb-10">
        <p className="kicker">Stack</p>
        <p className="mt-3 font-mono text-sm tracking-[0.06em] uppercase text-muted">
          {obra.stack.join(" · ")}
        </p>
      </section>

      <nav className="sheet grid gap-6 border-t border-line py-12 md:grid-cols-2 md:py-16">
        <Link href={`/obra/${prev.slug}`} className="group">
          <p className="kicker">Anterior</p>
          <p className="font-display mt-2 text-2xl tracking-[-0.03em] group-hover:text-norte">
            {prev.name}
          </p>
        </Link>
        <Link href={`/obra/${next.slug}`} className="group md:text-right">
          <p className="kicker">Siguiente</p>
          <p className="font-display mt-2 text-2xl tracking-[-0.03em] group-hover:text-norte">
            {next.name}
          </p>
        </Link>
      </nav>
    </>
  );
}
