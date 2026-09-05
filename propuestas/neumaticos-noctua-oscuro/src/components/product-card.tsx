import Image from "next/image";
import Link from "next/link";
import { getLine, priceFrom, type Product } from "@/data/products";
import { clp } from "@/lib/format";

export function ProductCard({
  product,
  index,
}: {
  product: Product;
  index?: number;
}) {
  const line = getLine(product.line);
  const n = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link
      href={`/catalogo/${product.slug}`}
      className="group relative flex flex-col border border-line bg-bg-2/40 transition-colors hover:border-amber/50"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <Image
          src={product.image}
          alt={`${product.name}, neumático NOCTUA`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="kicker text-amber-2">{line?.latin}</span>
          {n ? <span className="hud text-ink/70">{n}</span> : null}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-between p-4 hud text-ink/80">
          <span>Mojado {product.wet}</span>
          <span>{product.noise} dB</span>
          <span>Nox {product.night}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {product.name}
          </h3>
          <p className="num text-sm text-amber-2">{clp.format(priceFrom(product))}</p>
        </div>
        <p className="text-sm leading-relaxed text-mute">{product.tagline}</p>
      </div>
    </Link>
  );
}
