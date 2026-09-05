import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import { Chapter, Reveal } from "@/components/reveal";
import { principles, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "El club",
  description:
    "La filosofía de Obsidiana: silencio, precisión y permanencia. Un recinto de 180 socios en Vitacura.",
};

export default function ElClubPage() {
  return (
    <>
      <PageHero
        chapter="01"
        kicker="El club"
        title={
          <>
            Un recinto,
            <span className="italic"> no un local.</span>
          </>
        }
        lead="Obsidiana nació de una idea simple y poco comercial: que el entrenamiento serio necesita silencio, un cupo cerrado y coaches que se queden."
        image="/images/reception.jpg"
        imageAlt="Recepción de Obsidiana, con mostrador de piedra y luz de cobre"
      />

      <section className="px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="I" label="Origen" />
        <div className="mt-12 grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Vidrio volcánico,
              <span className="italic text-ivory-soft"> presión, filo.</span>
            </h2>
            <div className="mt-10 max-w-2xl space-y-6 text-[1.08rem] leading-relaxed text-ivory-soft">
              <p>
                Chile es un país de volcanes. La obsidiana se forma cuando la
                lava se enfría de golpe y el sílice no alcanza a cristalizar: se
                vuelve vidrio negro, cortante, casi sin poros. Los pueblos del
                sur la usaron como cuchillo. Nosotros la usamos como analogía.
              </p>
              <p>
                El club abre en 2024, en un pabellón de piedra sobre Alonso de
                Córdova. No es un local remodelado ni una cadena con otro
                nombre. Es un recinto pensado desde el umbral: la luz, el
                cobre, el silencio, el número de personas que caben sin que el
                piso se vuelva un pasillo.
              </p>
              <p>
                {site.members} socios. {site.coaches} coaches. {site.area} m².
                Esas cifras no son marketing. Son el máximo que el recinto
                soporta sin perder lo que lo hace distinto.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/exterior.jpg"
                alt="Fachada nocturna de Obsidiana"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <p className="mt-4 font-mono text-[0.62rem] tracking-[0.2em] text-muted uppercase">
              {site.address} · {site.comuna}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="II" label="Principios" />
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 100} className="border-t border-line pt-8">
              <p className="font-mono text-[0.62rem] tracking-[0.28em] text-copper">
                {p.n}
              </p>
              <h3 className="mt-5 font-serif text-4xl">{p.title}</h3>
              <p className="mt-5 leading-relaxed text-ivory-soft">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-5 py-28 md:px-8 lg:px-12">
        <Chapter n="III" label="Carta de la fundadora" />
        <Reveal className="mx-auto mt-16 max-w-3xl">
          <p className="font-serif text-3xl leading-snug tracking-tight md:text-4xl">
            “No quería un gimnasio más en el barrio. Quería un lugar donde
            gente ocupada pudiera entrenar como si el tiempo importara —con
            método, sin ruido, sin que nadie le venda un batido a la salida.”
          </p>
          <div className="mt-10 space-y-6 text-[1.05rem] leading-relaxed text-ivory-soft">
            <p>
              Me llamo Isidora Vial. Antes de Obsidiana trabajé quince años
              entre clínicas deportivas y recintos que prometían alto
              rendimiento y entregaban fluorescente. El día que alquilé este
              pabellón, la condición fue una sola: si íbamos a hacerlo, el cupo
              se cerraba en ciento ochenta. El resto es consecuencia.
            </p>
            <p>
              Si vienes de visita, no esperes un tour de ventas. Vas a
              caminar el piso, vas a hablar con un coach, y vas a saber en
              cuarenta minutos si este recinto es para ti. A veces no lo es.
              Eso también está bien.
            </p>
          </div>
          <p className="mt-10 font-serif text-2xl italic">Isidora Vial</p>
          <p className="mt-1 font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
            Fundadora
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line px-5 py-24 md:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-xl font-serif text-4xl md:text-5xl">
            El siguiente paso es una visita.
          </h2>
          <Button href="/visita">Reservar visita</Button>
        </div>
      </section>
    </>
  );
}
