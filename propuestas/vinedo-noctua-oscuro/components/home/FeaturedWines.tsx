import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { WineCard } from "@/components/WineCard";
import { wines } from "@/lib/wines";

export function FeaturedWines() {
  const [first, ...rest] = wines.filter((wine) => wine.featured);

  return (
    <section className="px-6 pb-24 md:px-12 lg:px-16 lg:pb-32">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="kicker">Carta</p>
          <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
            Seis vinos. Nada más.
          </h2>
        </div>
        <Link href="/vinos" className="hidden btn-ghost sm:inline-flex">
          Toda la carta
        </Link>
      </div>

      <Reveal className="mt-14">
        {first && <WineCard wine={first} featured />}
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {rest.map((wine, i) => (
          <Reveal key={wine.slug} delay={i * 0.08}>
            <WineCard wine={wine} />
          </Reveal>
        ))}
      </div>

      <Link href="/vinos" className="btn-ghost mt-12 sm:hidden">
        Toda la carta
      </Link>
    </section>
  );
}
