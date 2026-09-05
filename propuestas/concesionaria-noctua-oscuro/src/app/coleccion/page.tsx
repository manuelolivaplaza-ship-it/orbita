import type { Metadata } from "next";
import { CollectionBrowser } from "@/components/collection-browser";
import { Reveal } from "@/components/reveal";
import { vehicles } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Colección",
  description:
    "Nueve presencias en Casa NOCTUA: cortes, estelas y un territorio. Vitacura, Santiago.",
};

export default function ColeccionPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-28 pt-32 md:px-10 md:pt-40 lg:px-16">
      <Reveal>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
          En casa ahora
        </p>
        <h1 className="mt-5 font-display text-6xl font-semibold tracking-tight md:text-7xl">
          La colección
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim">
          Nueve presencias. Ninguna de más. Corte, estela o territorio: elige el
          temperamento, no el catálogo.
        </p>
      </Reveal>
      <div className="mt-16">
        <CollectionBrowser
          vehicles={vehicles.map(
            ({
              slug,
              brand,
              model,
              year,
              priceCLP,
              status,
              temperament,
              km,
              color,
              image,
            }) => ({
              slug,
              brand,
              model,
              year,
              priceCLP,
              status,
              temperament,
              km,
              color,
              image,
            }),
          )}
        />
      </div>
    </div>
  );
}
