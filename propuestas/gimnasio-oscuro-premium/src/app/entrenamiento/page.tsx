import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { Chapter, Reveal } from "@/components/reveal";
import { disciplines, ritual } from "@/lib/site";

export const metadata: Metadata = {
  title: "Entrenamiento",
  description:
    "Fuerza, condición, movilidad y recuperación. El método de Obsidiana, en Vitacura.",
};

export default function EntrenamientoPage() {
  return (
    <>
      <PageHero
        chapter="02"
        kicker="Entrenamiento"
        title={
          <>
            El método
            <span className="italic"> cabe en cuatro palabras.</span>
          </>
        }
        lead="Fuerza, condición, movilidad, recuperación. Nada de relleno. Nada de clases de cuarenta personas. Programación con nombre y apellido."
        image="/images/lift.jpg"
        imageAlt="Levantamiento de barra en el piso de fuerza de Obsidiana"
      />

      <section className="px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="I" label="Las cuatro prácticas" />
        <div className="mt-16 space-y-24">
          {disciplines.map((d, i) => (
            <Reveal
              key={d.slug}
              className="grid items-center gap-10 lg:grid-cols-12"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden lg:col-span-6 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="lg:col-span-6">
                <p className="font-mono text-[0.62rem] tracking-[0.28em] text-copper">
                  {d.n} · {d.kicker}
                </p>
                <h2 className="mt-4 font-serif text-5xl tracking-tight md:text-6xl">
                  {d.title}
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory-soft">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="II" label="El ritual del día" />
        <h2 className="mt-10 max-w-2xl font-serif text-5xl tracking-tight md:text-6xl">
          Un día en el recinto
          <span className="italic text-ivory-soft"> no es un horario.</span>
        </h2>
        <ol className="mt-16 divide-y divide-line border-y border-line">
          {ritual.map((r, i) => (
            <Reveal key={r.time} delay={i * 60}>
              <li className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
                <p className="font-mono text-sm tracking-[0.2em] text-copper md:col-span-2">
                  {r.time}
                </p>
                <h3 className="font-serif text-3xl md:col-span-3">{r.title}</h3>
                <p className="text-ivory-soft md:col-span-7">{r.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="III" label="Lo que no hacemos" />
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Pantallas",
              d: "Ni sobre las cintas, ni en los vestidores. El recinto no compite con un teléfono.",
            },
            {
              t: "Clases masivas",
              d: "El studio nunca pasa de diez. El piso no se llena hasta el pasillo.",
            },
            {
              t: "Contratos opacos",
              d: "Seis meses, mes de aviso, precios en UF. Se entiende en una página.",
            },
            {
              t: "Música a todo volumen",
              d: "Hay sonido. No hay un DJ. Si quieres auriculares, son tuyos.",
            },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 80} className="border-t border-line pt-6">
              <h3 className="font-serif text-3xl">{x.t}</h3>
              <p className="mt-4 text-ivory-soft">{x.d}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-20">
          <Button href="/visita">Reservar visita</Button>
        </div>
      </section>
    </>
  );
}
