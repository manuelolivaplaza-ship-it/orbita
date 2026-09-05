import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductBuy } from "@/components/product-buy";
import { ProductCard } from "@/components/product-card";
import { getLine, getProduct, products } from "@/data/products";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Compuesto" };
  return {
    title: product.name,
    description: product.lede,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const line = getLine(product.line);
  const related = products.filter((p) => p.line === product.line && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="pt-[4.25rem]">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[70vh] bg-black lg:sticky lg:top-[4.25rem] lg:h-[calc(100svh-4.25rem)]">
          <Image
            src={product.image}
            alt={`${product.name}, vista de estudio`}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="pad py-12 lg:py-16">
          <Suspense fallback={null}>
            <ProductBuy product={product} />
          </Suspense>

          <div className="mt-14 border-t border-line pt-10">
            <p className="kicker">El compuesto</p>
            <p className="mt-4 max-w-lg leading-relaxed text-mute">{product.body}</p>
          </div>

          <div className="mt-10 relative aspect-[16/10] overflow-hidden border border-line">
            <Image
              src={product.atmosphere}
              alt={line?.where ?? product.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
            <p className="absolute bottom-4 left-4 kicker text-amber-2">
              {line?.where}
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="pad border-t border-line py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="kicker">Misma línea</p>
              <h2 className="display mt-3 text-3xl">{line?.latin}</h2>
            </div>
            <Link href={`/catalogo?linea=${product.line}`} className="btn btn-ghost">
              Ver línea →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
