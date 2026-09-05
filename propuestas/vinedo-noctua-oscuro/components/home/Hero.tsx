import Image from "next/image";
import Link from "next/link";
import { VineyardClock } from "@/components/VineyardClock";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Hileras de viñedo en el Valle del Elqui bajo la Vía Láctea"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/50" />
      <div className="absolute inset-0 bg-vignette" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 md:px-12 lg:px-16 lg:pb-14">
        <p className="kicker text-parchment">
          {site.coords.lat} · {site.coords.lon} · {site.coords.altitude.toLocaleString("es-CL")} m
        </p>
        <h1 className="mt-4 font-display text-[18vw] font-light leading-[0.8] tracking-[0.12em] md:text-[12.5vw] md:tracking-[0.18em]">
          NOCTUA
        </h1>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl font-display text-2xl italic leading-snug text-parchment md:text-4xl">
            {site.tagline}
          </p>
          <Link href="/vinos" className="btn-ghost w-fit">
            Ver vinos
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-bone/15 pt-5 font-mono text-[10px] uppercase tracking-kicker text-mist">
          <span>Hora en el valle · <VineyardClock /></span>
          <span className="hidden sm:inline">Cosecha 00:00–05:00</span>
          <span>Paihuano · Coquimbo</span>
        </div>
      </div>
    </section>
  );
}
