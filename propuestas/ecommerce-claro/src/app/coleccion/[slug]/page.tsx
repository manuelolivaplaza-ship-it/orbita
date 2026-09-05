import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/add-to-cart";
import { Gallery } from "@/components/gallery";
import { ProductCard } from "@/components/product-card";
import { Arrow } from "@/components/icons";
import {
  categoryLabel,
  getProduct,
  getRelated,
  products,
} from "@/lib/products";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Pieza" };
  return {
    title: product.name,
    description: product.excerpt,
    openGraph: { images: [product.image] },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelated(product.slug);

  const ficha = [
    { k: "Material", v: product.material },
    { k: "Origen", v: product.origin },
    { k: "Oficio", v: product.oficio },
    { k: "Medida", v: product.measures },
    { k: "Peso", v: product.weight },
    { k: "Cuidado", v: product.care },
    { k: "SKU", v: product.sku },
  ];

  const wa = `${site.whatsappHref}%20Pieza%3A%20${encodeURIComponent(product.name)}`;

  return (
    <>
      <section className="shell grid gap-12 pt-28 pb-20 lg:grid-cols-12 lg:gap-16 lg:pt-36">
        <div className="lg:col-span-6">
          <Gallery product={product} />
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:sticky lg:top-28 lg:self-start">
          <p className="kicker">
            {categoryLabel(product.category)} · {product.kicker}
          </p>
          <h1 className="font-display mt-4 text-5xl tracking-tight md:text-6xl">
            {product.name}
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-tinta-suave">
            {product.story}
          </p>
          <div className="mt-10">
            <AddToCart product={product} />
          </div>
          <a
            href={wa}
            className="link-line mt-6 inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.24em]"
            target="_blank"
            rel="noreferrer"
          >
            Preguntar por WhatsApp
            <Arrow />
          </a>
        </div>
      </section>

      <section className="border-y border-linea">
        <div className="shell grid gap-0 md:grid-cols-2">
          {ficha.map((row) => (
            <div
              key={row.k}
              className="grid grid-cols-[8rem_1fr] gap-6 border-b border-linea py-5 md:odd:border-r md:odd:pr-10 md:even:pl-10"
            >
              <p className="kicker">{row.k}</p>
              <p className="text-[0.98rem] text-tinta-suave">{row.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="kicker">Junto a esta</p>
            <h2 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">
              Otras de la mesa
            </h2>
          </div>
          <Link
            href="/coleccion"
            className="link-line font-mono text-[0.62rem] uppercase tracking-[0.24em]"
          >
            Índice
          </Link>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
