import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { getTire, sizeLabel, terrenos, tires } from "@/data/tires";
import { formatCLP, stockLabel } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tires.map((tire) => ({ slug: tire.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tire = getTire(slug);
  if (!tire) return { title: "Compuesto" };
  return {
    title: `${tire.brand} ${tire.model} ${sizeLabel(tire)}`,
    description: tire.excerpt,
  };
}

export default async function TirePage({ params }: Props) {
  const { slug } = await params;
  const tire = getTire(slug);
  if (!tire) notFound();

  const terreno = terrenos[tire.terreno];
  const related = tires
    .filter((item) => item.terreno === tire.terreno && item.slug !== tire.slug)
    .slice(0, 3);

  return (
    <article className="pt-28 md:pt-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 pb-24 md:grid-cols-12 md:px-10 lg:px-16">
        <Reveal className="md:col-span-6">
          <p className="kicker">
            {terreno.title} · {sizeLabel(tire)}
          </p>
          <h1 className="mt-5 font-display text-5xl font-light tracking-tight md:text-7xl">
            {tire.brand}
            <br />
            <em className="italic">{tire.model}</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            {tire.excerpt}
          </p>
          <p className="mt-10 font-display text-5xl font-light tabular-nums">
            {formatCLP(tire.priceCLP)}
          </p>
          <p className="mt-2 text-sm text-muted">{tire.note}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/cita?medida=${encodeURIComponent(sizeLabel(tire))}`}
              className="btn btn-ink"
            >
              Cotizar esta medida
              <Arrow />
            </Link>
            <p className="self-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-goma">
              {stockLabel(tire.stock)}
            </p>
          </div>
        </Reveal>

        <Reveal className="relative aspect-square md:col-span-6" delay={80}>
          <div className="absolute inset-[8%] overflow-hidden rounded-full">
            <Image
              src={tire.image}
              alt={`${tire.brand} ${tire.model} ${sizeLabel(tire)}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <section className="border-y border-line">
        <dl className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-6">
          {[
            { k: "Medida", v: sizeLabel(tire) },
            { k: "Índice", v: tire.load },
            { k: "Mojado", v: tire.wet },
            { k: "Ruido", v: tire.noise },
            { k: "Origen", v: tire.origin },
            { k: "Terreno", v: terreno.title },
          ].map((item) => (
            <div
              key={item.k}
              className="border-line px-6 py-8 even:border-l md:border-l md:first:border-l-0 md:px-10"
            >
              <dt className="kicker">{item.k}</dt>
              <dd className="mt-3 font-display text-2xl font-light">{item.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16">
        <p className="kicker">Mismo terreno</p>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/compuestos/${item.slug}`}
                className="flex flex-wrap items-baseline justify-between gap-3 py-5"
              >
                <span className="font-display text-2xl font-light">
                  {item.brand} {item.model}
                </span>
                <span className="font-mono text-[0.62rem] tracking-[0.16em] text-muted">
                  {sizeLabel(item)} · {formatCLP(item.priceCLP)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/compuestos"
          className="link-line mt-10 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
        >
          Todo el piso
          <Arrow />
        </Link>
      </section>
    </article>
  );
}
