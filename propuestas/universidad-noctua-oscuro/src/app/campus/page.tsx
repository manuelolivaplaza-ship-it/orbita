import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { rooms } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Campus",
  description:
    "Campus NOCTUA en Santa Filomena 184, Recoleta. Terraza, biblioteca, seminario, laboratorio de sueño, sala oscura y cúpula en el cerro.",
};

export default function CampusPage() {
  return (
    <>
      <PageIntro
        kicker="Campus · Recoleta"
        title="El recinto cabe en una cuadra. El cielo, no."
        lead={`${site.address.line1}. Metro Baquedano a nueve minutos. El funicular, a cuatro. Se sube al cerro cuando hay que medir. Se baja cuando hay que escribir.`}
      />

      <section className="relative min-h-[62svh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Santiago de noche desde el pretil del cerro"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
        <p className="absolute bottom-8 left-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-paper/70 md:left-10 lg:left-16">
          {site.coords.lat} · {site.coords.lng}
        </p>
      </section>

      <section className="border-y border-line">
        {rooms.map((room, index) => {
          const reverse = index % 2 === 1;
          return (
            <div
              key={room.slug}
              className="grid border-b border-line last:border-b-0 md:grid-cols-12"
            >
              <div
                className={`relative min-h-[320px] md:col-span-7 md:min-h-[520px] ${reverse ? "md:order-2" : ""}`}
              >
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16 ${reverse ? "md:order-1" : ""}`}
              >
                <Reveal>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                    0{index + 1}
                  </p>
                  <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
                    {room.title}
                  </h2>
                  <p className="mt-5 max-w-sm text-base leading-relaxed text-paper-dim">
                    {room.text}
                  </p>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Cómo llegar</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Santa Filomena, falda del cerro.
            </h2>
            <p className="mt-6 text-paper-dim">
              {site.access}. {site.parking}. Visitas sábados 10:00 a 14:00, con
              inscripción. De noche, solo con postulación en curso.
            </p>
            <a
              href={site.address.maps}
              className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
            >
              Ver en el mapa
              <Arrow />
            </a>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <dl className="space-y-8">
              {site.hours.map((row) => (
                <div key={row.days} className="border-t border-line pt-5">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                    {row.days}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="kicker">Siguiente</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Las ocho carreras.
            </h2>
          </Reveal>
          <Link href="/carreras" className="btn btn-amber">
            Ver pregrado
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
