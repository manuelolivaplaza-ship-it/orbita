import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { Chapter, Reveal } from "@/components/reveal";
import { coaches } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coaches",
  description:
    "Doce coaches, cuatro miradas principales. Fuerza, performance, movilidad y recuperación en Obsidiana Vitacura.",
};

export default function CoachesPage() {
  return (
    <>
      <PageHero
        chapter="04"
        kicker="Coaches"
        title={
          <>
            Quien te mira
            <span className="italic"> importa más que la máquina.</span>
          </>
        }
        lead="Doce coaches, un criterio. Nadie grita. Nadie vende suplementos. Todos programan como si fueras a quedarte una década."
        image="/images/strength.jpg"
        imageAlt="Racks y cinturones de cuero en el piso de fuerza"
      />

      <section className="px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="I" label="El equipo" />
        <div className="mt-16 space-y-28">
          {coaches.map((c, i) => (
            <Reveal
              key={c.slug}
              id={c.slug}
              className="grid items-center gap-12 lg:grid-cols-12"
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="lg:col-span-7">
                <p className="font-mono text-[0.62rem] tracking-[0.28em] text-copper uppercase">
                  {c.role} · {c.years}
                </p>
                <h2 className="mt-4 font-serif text-5xl tracking-tight md:text-6xl">
                  {c.name}
                </h2>
                <p className="mt-3 font-mono text-[0.62rem] tracking-[0.22em] text-muted uppercase">
                  {c.origin}
                </p>
                <blockquote className="mt-8 max-w-xl font-serif text-3xl leading-snug italic">
                  “{c.quote}”
                </blockquote>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory-soft">
                  {c.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-5 py-24 md:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-xl font-serif text-4xl md:text-5xl">
            El coach de cabecera se asigna después de la visita.
          </h2>
          <Button href="/visita">Reservar visita</Button>
        </div>
      </section>
    </>
  );
}
