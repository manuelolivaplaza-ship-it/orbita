import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { cobertura, rondaAm, rondaPm } from "@/data/catalog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Red",
  description:
    "Centro de distribución en Pudahuel. Ronda AM, cadena de frío y plazos a RM, Valparaíso y O’Higgins.",
};

const protocolo = [
  {
    n: "01",
    title: "Sonda por guía",
    text: "Cada salida lleva registro de temperatura. Si se desvía dos grados, la guía no se cierra.",
  },
  {
    n: "02",
    title: "Cámaras separadas",
    text: "Seco no entra a positivo. Positivo no entra a túnel. Tres puertas, tres alarmas.",
  },
  {
    n: "03",
    title: "Camión propio",
    text: "No tercerizamos el frío. Caja refrigerada, una parada por local, firma en puerta.",
  },
  {
    n: "04",
    title: "Corte a las 14:00",
    text: "Lo que entra antes viaja de madrugada. Lo que entra después, sale en la ronda del día siguiente.",
  },
];

export default function RedPage() {
  return (
    <div className="pt-[4.4rem]">
      <header className="mx-auto grid max-w-[1480px] gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24 lg:px-16">
        <div className="md:col-span-7">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Red
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.8rem,6vw,6.2rem)] font-light leading-[0.92] tracking-tight">
            El CD abre a las 06:30. La ronda, a las 04:30.
          </h1>
        </div>
        <p className="self-end max-w-md text-base leading-relaxed text-ink-soft md:col-span-4 md:col-start-9">
          Parque ENEA, Pudahuel. A un lado el aeropuerto, al otro la ciudad. De
          ahí sale lo seco, lo líquido y lo frío hacia las cocinas que no pueden
          esperar.
        </p>
      </header>

      <section className="relative min-h-[22rem] border-y border-line md:min-h-[36rem]">
        <Image
          src="/images/cd.jpg"
          alt="Centro de distribución de hormigón pálido al amanecer, niebla sobre el asfalto mojado y la cordillera al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="grid border-b border-line md:grid-cols-3">
        {cobertura.map((zona, index) => (
          <Reveal
            key={zona.zona}
            delay={index * 80}
            className="border-b border-line px-5 py-12 last:border-b-0 md:border-b-0 md:border-r md:px-10 md:last:border-r-0 lg:px-16"
          >
            <p className="font-display text-5xl font-light tracking-tight text-frost">
              {zona.plazo}
            </p>
            <h2 className="mt-4 font-display text-2xl font-light">{zona.zona}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{zona.nota}</p>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-16 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28 lg:px-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Ronda AM
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              El horario no es un adorno.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
              Horas de llegada referenciales a puerta de local. Se ajustan con la
              primera semana de cuenta.
            </p>
          </Reveal>
          <ol className="mt-10">
            {rondaAm.map((stop, index) => (
              <Reveal key={stop.hora} delay={index * 40}>
                <li className="flex items-baseline justify-between gap-6 border-b border-line py-3">
                  <span className="font-mono text-sm tabular-nums text-frost">
                    {stop.hora}
                  </span>
                  <span className="text-right text-sm text-ink-soft">{stop.lugar}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Ronda PM
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              Reposición y corte.
            </h2>
          </Reveal>
          <ol className="mt-10">
            {rondaPm.map((stop, index) => (
              <Reveal key={stop.hora} delay={index * 40}>
                <li className="flex items-baseline justify-between gap-6 border-b border-line py-3">
                  <span className="font-mono text-sm tabular-nums text-frost">
                    {stop.hora}
                  </span>
                  <span className="text-right text-sm text-ink-soft">{stop.lugar}</span>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
              CD
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-ink-soft">
              {site.address.line1}
              <br />
              {site.address.commune}, {site.address.city}
            </address>
            <ul className="mt-6 space-y-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
              {site.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[22rem] md:col-span-6 md:min-h-[34rem]">
            <Image
              src="/images/cadena.jpg"
              alt="Pasillo de cámara de frío con condensación en el vidrio y bultos pálidos en estanterías de acero"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="px-5 py-14 md:col-span-6 md:px-10 md:py-16 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
                Cadena
              </p>
              <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
                El frío no se negocia.
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-8">
              {protocolo.map((paso, index) => (
                <Reveal key={paso.n} delay={index * 60}>
                  <li className="grid grid-cols-[3rem_1fr] gap-4">
                    <span className="font-mono text-[0.62rem] text-frost">{paso.n}</span>
                    <div>
                      <h3 className="font-display text-2xl font-light">{paso.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {paso.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-12">
              <Link href="/cuenta" className="btn btn-ink">
                Pedir ronda
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
