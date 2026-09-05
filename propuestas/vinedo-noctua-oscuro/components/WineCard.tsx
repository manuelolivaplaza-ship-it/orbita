import Image from "next/image";
import Link from "next/link";
import { MoonPhase } from "@/components/MoonPhase";
import { clp } from "@/lib/format";
import type { Wine } from "@/lib/wines";
import { cn } from "@/lib/cn";

export function WineCard({
  wine,
  featured = false,
}: {
  wine: Wine;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/vinos/${wine.slug}`}
      className={cn("group block", featured && "lg:grid lg:grid-cols-2 lg:gap-12")}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-dusk",
          featured ? "aspect-[4/5] lg:aspect-auto lg:min-h-[640px]" : "aspect-[3/4]",
        )}
      >
        <Image
          src={wine.image}
          alt={`${wine.name} ${wine.vintage}`}
          fill
          className="object-contain p-6 transition duration-700 ease-night group-hover:scale-[1.03] md:p-8"
          sizes={featured ? "100vw" : "40vw"}
        />
      </div>
      <div className={cn("pt-5", featured && "flex flex-col justify-end lg:py-8")}>
        <p className="kicker">
          {wine.line} · {wine.parcel}
        </p>
        <h3
          className={cn(
            "mt-2 font-display font-light tracking-wide",
            featured ? "text-5xl md:text-6xl" : "text-3xl",
          )}
        >
          {wine.name}
        </h3>
        <p className="mt-1 text-sm text-parchment">
          {wine.varietal} · {wine.vintage}
        </p>
        {featured && (
          <p className="mt-6 max-w-md font-display text-2xl italic leading-snug text-parchment">
            {wine.excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="text-brass">{clp(wine.price)}</span>
          <span className="flex items-center gap-2">
            <MoonPhase moon={wine.moon} size={22} />
            <span className="kicker">{wine.moon.name}</span>
          </span>
        </div>
        {wine.stock < 30 && (
          <p className="mt-3 font-mono text-[10px] uppercase tracking-kicker text-wine">
            {wine.stock === 0
              ? "Agotado"
              : `Quedan ${wine.stock} botellas`}
          </p>
        )}
      </div>
    </Link>
  );
}
