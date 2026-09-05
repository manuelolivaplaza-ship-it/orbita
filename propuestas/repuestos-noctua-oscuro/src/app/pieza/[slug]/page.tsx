import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import {
  families,
  pieceBySlug,
  pieces,
  relatedPieces,
  stockLabel,
} from "@/data/catalog";
import { formatCLP } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pieces.map((piece) => ({ slug: piece.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const piece = pieceBySlug(slug);
  if (!piece) return { title: "Pieza" };
  return {
    title: `${piece.name} · ${piece.sku}`,
    description: piece.lead,
  };
}

export default async function PiecePage({ params }: Props) {
  const { slug } = await params;
  const piece = pieceBySlug(slug);
  if (!piece) notFound();

  const family = families.find((item) => item.id === piece.family);
  const related = relatedPieces(piece);

  return (
    <div className="pt-[4.5rem]">
      <div className="grid md:grid-cols-12">
        <div className="relative min-h-[28rem] md:col-span-6 md:min-h-[88svh]">
          <Image
            src={piece.image}
            alt={piece.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-end px-5 py-14 md:col-span-6 md:px-10 md:py-16 lg:px-16">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            {family?.name} · {piece.sku}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.8rem,5vw,5.4rem)] font-medium leading-[0.9] tracking-wide">
            {piece.name}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            {piece.lead}
          </p>
          <p className="mt-8 font-display text-4xl font-medium tracking-wide text-face">
            {formatCLP(piece.priceIva)}
          </p>
          <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
            {piece.unit} · IVA incluido
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={`/cotizar?familia=${piece.family}&sku=${piece.sku}`}
              className="btn btn-sodium"
            >
              Mandar a bahía
              <Arrow />
            </Link>
            <Link href="/cruce" className="btn btn-ghost">
              Cruzar patente
            </Link>
          </div>
        </div>
      </div>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10 lg:px-16">
          <Reveal className="md:col-span-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
              Ficha
            </p>
            <dl className="mt-8 space-y-5">
              {[
                ["SKU", piece.sku],
                ["OEM", piece.oem],
                ["Stock", stockLabel[piece.stock]],
                ["Especificación", piece.spec],
                piece.torque ? ["Torque", piece.torque] : null,
                ["Calza", piece.fits],
              ]
                .filter((row): row is [string, string] => Boolean(row))
                .map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line pb-4"
                  >
                    <dt className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-mute">
                      {label}
                    </dt>
                    <dd className="text-sm leading-relaxed">{value}</dd>
                  </div>
                ))}
            </dl>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
              Cómo se pide
            </p>
            <p className="mt-8 text-base leading-relaxed text-mute">
              No basta el nombre. Se cruza patente o código de motor. Si el
              desgaste es de a par —discos, amortiguadores, pastillas— salen las
              dos. El mesón no confirma a ojo.
            </p>
            {family ? (
              <Link
                href={`/familias/${family.id}`}
                className="trace mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
              >
                Volver a {family.name}
                <Arrow />
              </Link>
            ) : null}
          </Reveal>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
              Misma bahía
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-wide">
              Otras fichas
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60} className="bg-void">
                <Link
                  href={`/pieza/${item.slug}`}
                  className="group block px-5 py-8 hover:bg-nave md:px-6"
                >
                  <p className="font-mono text-[0.58rem] tracking-[0.14em] text-mute">
                    {item.sku}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-medium tracking-wide">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm text-mute">
                    {formatCLP(item.priceIva)}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.2em]">
                    Ver ficha
                    <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
