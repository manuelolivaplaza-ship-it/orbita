import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { HarvestLog } from "@/components/HarvestLog";
import { MoonPhase } from "@/components/MoonPhase";
import { WineCard } from "@/components/WineCard";
import { clp, num } from "@/lib/format";
import { getWine, relatedWines, wines } from "@/lib/wines";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return wines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wine = getWine(slug);
  if (!wine) return { title: "Vino" };
  return {
    title: `${wine.name} ${wine.vintage}`,
    description: wine.excerpt,
  };
}

export default async function WinePage({ params }: Props) {
  const { slug } = await params;
  const wine = getWine(slug);
  if (!wine) notFound();
  const related = relatedWines(wine.slug);

  return (
    <article className="pt-24">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[70vh] bg-night lg:sticky lg:top-24 lg:h-[calc(100svh-6rem)]">
          <Image
            src={wine.image}
            alt={`${wine.name} ${wine.vintage}`}
            fill
            priority
            className="object-contain p-10 md:p-16"
            sizes="50vw"
          />
        </div>

        <div className="px-6 py-12 md:px-12 lg:px-16 lg:py-16">
          <p className="kicker">
            {wine.line} · D.O. Valle del Elqui
          </p>
          <h1 className="mt-4 font-display text-6xl font-light tracking-wide md:text-7xl">
            {wine.name}
          </h1>
          <p className="mt-3 text-parchment">
            {wine.varietal} · {wine.vintage} · {wine.volume}
          </p>

          <div className="mt-8 flex items-end justify-between gap-6 border-y border-bone/10 py-6">
            <p className="font-display text-4xl text-brass">{clp(wine.price)}</p>
            <span className="flex items-center gap-2">
              <MoonPhase moon={wine.moon} />
              <span className="kicker">
                Luna {wine.moon.name}
              </span>
            </span>
          </div>

          <p className="mt-8 font-display text-2xl italic leading-snug text-parchment">
            {wine.excerpt}
          </p>
          <p className="mt-6 text-[15px] leading-[1.85] text-parchment">
            {wine.notes}
          </p>

          <AddToCart slug={wine.slug} stock={wine.stock} className="mt-10" />
          <p className="mt-3 text-xs text-mist">
            {wine.stock < 30
              ? `Quedan ${wine.stock} botellas de esta cosecha. `
              : ""}
            IVA incluido. Despacho gratis desde $80.000.
          </p>

          <div className="mt-14">
            <HarvestLog wine={wine} />
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="kicker">Maridaje</p>
              <p className="mt-3 text-sm leading-relaxed text-parchment">
                {wine.pairing}
              </p>
            </div>
            <div>
              <p className="kicker">Producción</p>
              <p className="mt-3 text-sm leading-relaxed text-parchment">
                {num(wine.production)} botellas. Parcela {wine.parcel},{" "}
                {num(wine.altitude)} m. Sin clarificar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="px-6 py-24 md:px-12 lg:px-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl font-light md:text-4xl">
            Otras botellas
          </h2>
          <Link href="/vinos" className="kicker hover:text-bone">
            Toda la carta
          </Link>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {related.map((item) => (
            <WineCard key={item.slug} wine={item} />
          ))}
        </div>
      </section>
    </article>
  );
}
