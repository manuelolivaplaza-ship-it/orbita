import Image from "next/image";
import Link from "next/link";
import { formatCLP, pad } from "@/lib/format";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/cn";

export function ProductCard({
  product,
  index,
  large = false,
}: {
  product: Product;
  index?: number;
  large?: boolean;
}) {
  return (
    <Link href={`/coleccion/${product.slug}`} className="group block">
      <div
        className={cn(
          "img-zoom relative overflow-hidden bg-papel-2",
          large ? "aspect-[16/10]" : "aspect-[4/5]",
        )}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={large ? "100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="kicker">
            {typeof index === "number" ? `${pad(index + 1)} · ` : ""}
            {product.kicker}
          </p>
          <h3 className="font-display mt-1 text-2xl tracking-tight md:text-3xl">
            {product.name}
          </h3>
        </div>
        <p className="font-mono nums mt-1 text-sm">
          {formatCLP(product.sizes?.[0]?.price ?? product.price)}
        </p>
      </div>
    </Link>
  );
}
