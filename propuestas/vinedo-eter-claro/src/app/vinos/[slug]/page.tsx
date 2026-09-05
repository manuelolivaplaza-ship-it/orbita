import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/add-to-cart";
import { Reveal } from "@/components/reveal";
import { wineBySlug, wines } from "@/data/content";
import { formatCLP } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return wines.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wine = wineBySlug(slug);
  if (!wine) return { title: "Vino" };
  return {
    title: `${wine.name} ${wine.vintage}`,
    description: wine.lead,
  };
}

export default async function WinePage({ params }: Props) {
  const { slug } = await params;
  const wine = wineBySlug(slug);
  if (!wine) notFound();

  const others = wines.filter((item) => item.slug !== wine.slug).slice(0, 3);

  return (
    <article className="pt-28">
      <div className="shell grid items-start gap-12 pb-24 lg:grid-cols-12">
        <div className="frame relative aspect-[3/4] lg:col-span-6">
          <Image
            src={wine.image}
            alt={wine.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-6 lg:pl-8 lg:pt-8">
          <p className="kicker">
            {wine.varietal} · {wine.vintage}
          </p>
          <h1 className="mt-5 font-display text-[clamp(3.4rem,8vw,7rem)] leading-[0.88] tracking-tight">
            {wine.name}
          </h1>
          <p className="mt-6 max-w-[38ch] font-display text-2xl italic leading-snug text-tinta-suave">
            {wine.lead}
          </p>
          <p className="mt-8 nums font-display text-4xl">
            {formatCLP(wine.price)}
          </p>
          <p className="mt-1 text-sm text-gris">
            {wine.format} · {wine.stock === "últimas cajas" ? "últimas cajas" : "en cava"}
          </p>
          <div className="mt-10">
            <AddToCart slug={wine.slug} />
          </div>
          <p className="mt-8 max-w-[46ch] text-[17px] leading-relaxed text-tinta-suave">
            {wine.note}
          </p>
        </div>
      </div>

      <section className="border-y border-linea">
        <div className="shell grid gap-0 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Cuartel", wine.cuartel],
            ["Guarda", wine.guarda],
            ["Alcohol", wine.alcohol],
            ["Producción", wine.production],
            ["Servicio", wine.temp],
            ["Suelo", wine.soil],
            ["Mesa", wine.pairing],
            ["Formato", wine.format],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`border-linea py-8 ${i < 4 ? "md:border-b" : ""} ${i % 2 === 0 ? "md:pr-8" : "md:border-l md:pl-8"} ${i % 4 !== 0 ? "lg:border-l lg:pl-8" : "lg:pl-0"}`}
            >
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-gris">
                {label}
              </p>
              <p className="mt-3 text-[17px] leading-snug">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-24">
        <Reveal>
          <p className="kicker">También en cava</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight">
            Otras botellas.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-10 sm:grid-cols-3">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/vinos/${item.slug}`} className="group block">
                <div className="frame relative aspect-[3/4]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 font-display text-3xl">{item.name}</p>
                <p className="mt-1 nums text-sm text-gris">
                  {formatCLP(item.price)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
