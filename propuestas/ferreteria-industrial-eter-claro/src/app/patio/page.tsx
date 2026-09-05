import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Patio",
  description:
    "Patio ETER en 10 de Julio y retiro en Puente Alto. Horario de mesón, despacho RM y crédito a 30 días.",
};

const ronda = [
  { hora: "07:30", lugar: "Abre el mesón. Primera guía." },
  { hora: "09:00", lugar: "Cortes de la lista de ayer." },
  { hora: "14:00", lugar: "Cierre de listas para mañana." },
  { hora: "16:30", lugar: "Última salida a obra, RM." },
  { hora: "18:00", lugar: "Cierra 10 de Julio." },
];

export default function PatioPage() {
  return (
    <div className="pt-[4.4rem]">
      <header className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            El recinto
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,6vw,6.4rem)] font-light leading-[0.9] tracking-tight">
            El patio,
            <br />
            <em className="italic">a las siete.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">
            10 de Julio no es un mall. Es una calle de fierro. El recinto mide{" "}
            {site.patioM2.toLocaleString("es-CL")} m², con tiras al norte y
            mesón al sur.
          </p>
        </Reveal>
      </header>

      <section className="border-y border-line">
        <div className="relative min-h-[22rem] md:min-h-[70svh]">
          <Image
            src="/images/patio.jpg"
            alt="Pasillo central de bodega con luz norte, estanterías de fierro a ambos lados"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-16 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16">
        <Reveal className="md:col-span-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            10 de Julio
          </p>
          <h2 className="mt-5 font-display text-4xl font-light tracking-tight md:text-5xl">
            Bodega y mesón.
          </h2>
          <address className="mt-6 not-italic text-base leading-relaxed text-ink-soft">
            {site.address.line1}
            <br />
            {site.address.commune}, {site.address.city}
          </address>
          <a
            href={site.address.maps}
            className="trace mt-4 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
          >
            Ver mapa
            <Arrow />
          </a>
          <ul className="mt-10 space-y-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
            {site.hours.map((row) => (
              <li key={row.days} className="flex justify-between gap-6">
                <span>{row.days}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={80}>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Retiro Puente Alto
          </p>
          <h2 className="mt-5 font-display text-4xl font-light tracking-tight md:text-5xl">
            Mesón sur.
          </h2>
          <address className="mt-6 not-italic text-base leading-relaxed text-ink-soft">
            {site.pickup.line1}
            <br />
            {site.pickup.commune}
            <br />
            {site.pickup.note}
          </address>
          <a
            href={site.pickup.maps}
            className="trace mt-4 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
          >
            Ver mapa
            <Arrow />
          </a>
          <p className="mt-10 text-sm leading-relaxed text-ink-soft">
            Pedido mínimo de despacho {site.pedidoMinimoIva.toLocaleString("es-CL")}{" "}
            con IVA. Retiro en local, desde una unidad. Factura {site.factura}.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[18rem] md:col-span-5 md:min-h-[32rem]">
            <Image
              src="/images/fierro.jpg"
              alt="Extremos de perfiles y fierro alineados como un peine, en bodega pálida"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="px-5 py-14 md:col-span-7 md:px-10 md:py-16 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
                Día de patio
              </p>
              <h2 className="mt-5 font-display text-4xl font-light tracking-tight">
                La hora manda.
              </h2>
            </Reveal>
            <ol className="mt-10">
              {ronda.map((stop, index) => (
                <Reveal key={stop.hora} delay={index * 50}>
                  <li className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                    <span className="font-mono text-sm tabular-nums text-steel">
                      {stop.hora}
                    </span>
                    <span className="text-right text-sm text-ink-soft">
                      {stop.lugar}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <Reveal className="md:flex md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-4xl font-light tracking-tight md:text-5xl">
            Trae RUT, OC o la lista escrita.
          </h2>
          <Link href="/cotizar" className="btn btn-ink mt-8 md:mt-0">
            Cotizar lista
            <Arrow />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
