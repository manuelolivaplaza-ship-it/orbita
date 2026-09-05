import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { voces } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "ETER en Av. Larraín, La Reina: entre la ciudad y la cuesta. Taller de luz norte, stock que se puede tocar.",
};

export default function CasaPage() {
  return (
    <>
      <PageIntro
        kicker="La Reina"
        title="Entre la ciudad y la cuesta."
        lead="Av. Larraín 5860. No es un local de avenida gritona: es un taller con luz norte, una librería de goma y el tiempo para leer el costado."
      />

      <section className="relative min-h-[50vh] md:min-h-[68vh]">
        <Image
          src="/images/pasillo.jpg"
          alt="Pasillo de neumáticos alineados como una biblioteca, luz clara al fondo"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16">
        <Reveal className="md:col-span-6">
          <p className="kicker">Por qué ETER</p>
          <h2 className="mt-4 font-display text-5xl font-light tracking-tight">
            El aire es el producto. La goma, apenas el recipiente.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Fundada en {site.founded} como un taller de barrio que se negó a
            vender remanente. El nombre no es poesía de agencia: es lo que
            sostiene el auto. Sin presión correcta, la marca más cara es un
            adorno.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Trabajamos Michelin, Continental, Bridgestone, Pirelli, Goodyear,
            Hankook y Yokohama. Pedimos lo que no está. No inventamos stock.
          </p>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={120}>
          <dl className="space-y-8">
            <div>
              <dt className="kicker">Dirección</dt>
              <dd className="mt-2 text-ink-soft">
                {site.address.line1}
                <br />
                {site.address.commune}, {site.address.city}
                <br />
                {site.metro}
                <br />
                {site.parking}
              </dd>
            </div>
            <div>
              <dt className="kicker">Horario</dt>
              <dd className="mt-2 space-y-1 text-ink-soft">
                {site.hours.map((row) => (
                  <p key={row.days}>
                    {row.days}: {row.time}
                  </p>
                ))}
              </dd>
            </div>
            <div>
              <dt className="kicker">Mapa</dt>
              <dd className="mt-2">
                <a href={site.address.maps} className="link-line">
                  Abrir en Google Maps
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[340px] md:min-h-[520px]">
          <Image
            src="/images/ciudad.jpg"
            alt="Calle de Santiago mojada al amanecer, niebla sobre los cerros"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative min-h-[340px] md:min-h-[520px]">
          <Image
            src="/images/cordillera.jpg"
            alt="Camino de montaña mojado en la cordillera de Santiago"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <Reveal>
          <p className="kicker">Voces</p>
          <h2 className="mt-4 font-display text-5xl font-light tracking-tight">
            Sin estrellas. Con nombre de oficio.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {voces.map((voz, index) => (
            <Reveal key={voz.who} delay={index * 80}>
              <blockquote className="font-display text-2xl font-light leading-snug italic">
                {voz.quote}
              </blockquote>
              <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                {voz.who}
                <br />
                {voz.since}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end md:px-10 lg:px-16">
          <h2 className="max-w-xl font-display text-4xl font-light tracking-tight md:text-5xl">
            Ven con la patente. O con el costado fotografiado.
          </h2>
          <Link href="/cita" className="btn btn-ink">
            Agendar visita
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
