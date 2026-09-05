import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { Chapter, Reveal } from "@/components/reveal";
import { site, spaces } from "@/lib/site";

export const metadata: Metadata = {
  title: "El espacio",
  description:
    "1.200 m² de piedra volcánica, cobre y roble en Vitacura. Piso de fuerza, studio, suite térmica y vestidores.",
};

export default function EspacioPage() {
  return (
    <>
      <PageHero
        chapter="03"
        kicker="El espacio"
        title={
          <>
            Arquitectura
            <span className="italic"> para entrenar.</span>
          </>
        }
        lead="Un pabellón de piedra negra sobre Alonso de Córdova. Ventanales al cordón de los Andes. Cobre donde hay que tocar. Silencio donde hay que pensar."
        image="/images/hero.jpg"
        imageAlt="Piso de fuerza de Obsidiana con vista a los Andes"
      />

      <section className="px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="I" label="Las salas" />
        <div className="mt-16 space-y-28">
          {spaces.map((s, i) => (
            <Reveal
              key={s.title}
              className="grid items-center gap-10 lg:grid-cols-12"
            >
              <div
                className={`relative min-h-[52vh] overflow-hidden lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
              <div className="lg:col-span-5">
                <p className="font-mono text-[0.62rem] tracking-[0.28em] text-copper uppercase">
                  {s.meta}
                </p>
                <h2 className="mt-4 font-serif text-5xl tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ivory-soft">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="II" label="Llegar" />
        <div className="mt-12 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-5xl tracking-tight">
              Alonso de Córdova 3102
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory-soft">
              Vitacura, entre Nueva Costanera y Presidente Riesco. Estacionamiento
              subterráneo para socios. Doce minutos a pie desde metro Escuela
              Militar.
            </p>
            <dl className="mt-12 grid gap-6 sm:grid-cols-2">
              {site.hours.map((h) => (
                <div key={h.days} className="border-t border-line pt-4">
                  <dt className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
                    {h.days}
                  </dt>
                  <dd className="mt-2 font-serif text-3xl">{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-12 flex flex-wrap gap-3">
              <Button href="/visita">Reservar visita</Button>
              <Button href={site.maps} variant="outline" external>
                Ver mapa
              </Button>
            </div>
          </div>
          <div className="relative min-h-[48vh] overflow-hidden lg:col-span-6">
            <Image
              src="/images/exterior.jpg"
              alt="Acceso de Obsidiana de noche"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
