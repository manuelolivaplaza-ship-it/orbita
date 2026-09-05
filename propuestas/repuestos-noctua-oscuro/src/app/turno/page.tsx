import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BahiaBoard } from "@/components/bahia-board";
import { Lamp } from "@/components/lamp";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Turno",
  description:
    "Turno noche en Quilicura: mesón a las 18:00, cruce hasta las 23:30, bahía a las 05:30, despacho RM de 06:00 a 08:30.",
};

const beats = [
  {
    hora: "18:00",
    title: "Se enciende el mesón",
    text: "Entra la lista del taller, la flota y lo que el maestro dejó escrito. Se lee, no se adivina.",
  },
  {
    hora: "21:00",
    title: "Picking de bahía",
    text: "Lo confirmado baja a estante rotulado. Disco con disco. Filtro con filtro. Un pasillo.",
  },
  {
    hora: site.cruceHora,
    title: "Cierra el cruce",
    text: "Después de esta hora se recibe consulta, pero no se promete bahía de madrugada.",
  },
  {
    hora: site.bahiaHora,
    title: "Retiro",
    text: "El maestro pasa, firma, se lleva la pieza. Frei Montalva, acceso de camión.",
  },
  {
    hora: `${site.despachoDesde}`,
    title: "Sale a la RM",
    text: `Furgón a taller y faena hasta las ${site.despachoHasta}. Pedido mínimo ${formatCLP(site.pedidoMinimoIva)}.`,
  },
];

export default function TurnoPage() {
  return (
    <div className="pt-[4.5rem]">
      <header className="grid md:grid-cols-12">
        <div className="relative min-h-[24rem] md:col-span-7 md:min-h-[78svh]">
          <Image
            src="/images/meson.jpg"
            alt="Mesón de la bodega de noche, mostrador de acero y un monitor con luz ámbar"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-end px-5 py-14 md:col-span-5 md:px-10 md:py-16 lg:px-14">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Turno noche · Quilicura
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.8rem,5.5vw,5.6rem)] font-medium leading-[0.88] tracking-wide">
            De dieciocho a seis.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            La ciudad baja la voz. La bodega la sube. Un mesón, un pasillo, ocho
            bahías.
          </p>
          <div className="mt-8">
            <Lamp />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Cómo corre
          </p>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium tracking-wide md:text-5xl">
            El reloj de la bodega.
          </h2>
        </Reveal>
        <ol className="mt-14">
          {beats.map((beat, index) => (
            <li key={beat.hora}>
              <Reveal
                delay={index * 50}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-12 md:items-baseline"
              >
                <p className="font-mono text-[0.8rem] tracking-[0.16em] text-sodium md:col-span-2">
                  {beat.hora}
                </p>
                <h3 className="font-display text-2xl font-medium tracking-wide md:col-span-4">
                  {beat.title}
                </h3>
                <p className="text-sm leading-relaxed text-mute md:col-span-6">
                  {beat.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[22rem] md:col-span-6 md:min-h-[36rem]">
            <Image
              src="/images/bahia.jpg"
              alt="Bahía de picking de noche: bandejas de piezas bajo una lámpara de sodio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[22rem] md:col-span-6 md:min-h-[36rem]">
            <Image
              src="/images/despacho.jpg"
              alt="Furgón de despacho saliendo de la bodega al amanecer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <h2 className="max-w-xl font-display text-4xl font-medium tracking-wide md:text-5xl">
            Lo que está bajando ahora.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-mute">
            Tablero de demostración. El real se lee en el mesón. Si tu patente
            no está, se cruza esta noche.
          </p>
        </Reveal>
        <Reveal className="mt-12" delay={80}>
          <BahiaBoard />
        </Reveal>
        <Reveal className="mt-14 grid gap-8 border-t border-line pt-12 md:grid-cols-3" delay={100}>
          {site.hours.map((row) => (
            <div key={row.days}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
                {row.days}
              </p>
              <p className="mt-3 font-display text-3xl font-medium tracking-wide">
                {row.time}
              </p>
            </div>
          ))}
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/cruce" className="btn btn-sodium">
            Cruzar patente
            <Arrow />
          </Link>
          <a
            href={site.address.maps}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            Cómo llegar
          </a>
        </div>
      </section>
    </div>
  );
}
