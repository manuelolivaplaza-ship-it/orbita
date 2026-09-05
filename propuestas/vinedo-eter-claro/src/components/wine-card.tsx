import Image from "next/image";
import Link from "next/link";
import type { Wine } from "@/data/content";
import { formatCLP } from "@/lib/format";

export function WineCard({
  wine,
  index = 0,
}: {
  wine: Wine;
  index?: number;
}) {
  return (
    <Link
      href={`/vinos/${wine.slug}`}
      className="group block w-[78vw] max-w-[340px] sm:w-[300px]"
    >
      <div className="frame relative aspect-[3/4]">
        <Image
          src={wine.image}
          alt={wine.alt}
          fill
          sizes="340px"
          className="object-cover"
          style={{ transitionDelay: `${index * 40}ms` }}
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <div>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-gris">
            {wine.varietal} · {wine.vintage}
          </p>
          <h3 className="mt-1 font-display text-3xl tracking-tight">{wine.name}</h3>
        </div>
        <p className="nums text-sm text-tinta-suave">{formatCLP(wine.price)}</p>
      </div>
      <p className="mt-2 text-sm text-gris">{wine.cuartel}</p>
    </Link>
  );
}
