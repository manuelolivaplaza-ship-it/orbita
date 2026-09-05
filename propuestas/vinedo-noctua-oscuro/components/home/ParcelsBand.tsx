import Link from "next/link";
import { ParcelMap } from "@/components/ParcelMap";
import { Reveal } from "@/components/Reveal";

export function ParcelsBand() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-16 lg:py-32">
      <Reveal>
        <p className="kicker">Cartografía</p>
        <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">
          Cuatro parcelas, un meridiano.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-parchment">
          Strix, Umbra, Alba y Nyctea. Nueve coma cuatro hectáreas entre 1.390
          y 1.810 metros. Pasa el cursor: cada polígono es una ladera con
          nombre de búho.
        </p>
      </Reveal>
      <Reveal className="mt-14" delay={0.1}>
        <ParcelMap />
      </Reveal>
      <Link href="/origen" className="btn-ghost mt-12">
        El origen
      </Link>
    </section>
  );
}
