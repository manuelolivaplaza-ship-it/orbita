import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { NightArc } from "@/components/night-arc";
import { Reveal } from "@/components/reveal";
import { RondaList } from "@/components/ronda-list";
import { Sonda } from "@/components/sonda";
import { cobertura } from "@/data/catalog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Ronda",
  description:
    "Centro de distribución en Quilicura. Ronda nocturna, cadena de frío y plazos a RM, Valparaíso y O’Higgins.",
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
    text: "Ambiente no entra a positivo. Positivo no entra a túnel. Tres puertas, tres alarmas.",
  },
  {
    n: "03",
    title: "Camión propio",
    text: "No tercerizamos el frío. Caja refrigerada, una parada por local, firma en puerta.",
  },
  {
    n: "04",
    title: "Corte a las 19:00",
    text: "Lo que entra antes viaja esa misma noche. Lo que entra después, sale en el tramo siguiente.",
  },
];

export default function RondaPage() {
  return (
    <div className="pt-[4.5rem]">
      <header className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24 lg:px-16">
        <div className="md:col-span-7">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Ronda
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.8rem,6vw,6.2rem)] font-semibold leading-[0.92] tracking-tight">
            El CD abre a las 20:00. La ronda, a las 21:00.
          </h1>
        </div>
        <p className="self-end max-w-md text-base leading-relaxed text-paper-dim md:col-span-4 md:col-start-9">
          Lo Echevers, Quilicura. A un lado la Ruta 5, al otro la ciudad. De
          ahí sale lo seco, lo frío y lo que la brigada toca al amanecer.
        </p>
      </header>

      <section className="relative min-h-[22rem] border-y border-line md:min-h-[36rem]">
        <Image
          src="/images/cd.jpg"
          alt="Centro de distribución negro en Quilicura de noche, fila de luces ámbar y la cordillera al fondo"
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
            className="border-b border-line px-6 py-12 last:border-b-0 md:border-b-0 md:border-r md:px-10 md:last:border-r-0 lg:px-16"
          >
            <p className="font-display text-5xl font-semibold tracking-tight text-amber">
              {zona.plazo}
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold">{zona.zona}</h2>
            <p className="mt-3 text-sm leading-relaxed text-paper-dim">{zona.nota}</p>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28 lg:px-16">
        <div className="md:col-span-6">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Esta noche
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              El horario no es un adorno.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper-dim">
              Horas de llegada referenciales a puerta de local. Se ajustan con
              la primera semana de cuenta. El marcador ámbar es el tramo en
              curso.
            </p>
          </Reveal>
          <div className="mt-10">
            <RondaList />
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Instrumento
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Tres cámaras. Un puntero.
            </h2>
          </Reveal>
          <div className="mt-10 flex justify-center">
            <NightArc />
          </div>
          <Sonda className="mt-10 text-paper/80" />
          <Reveal className="mt-12">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
              CD
            </p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-paper-dim">
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
              src="/images/sonda.jpg"
              alt="Sonda de temperatura con escarcha sobre un cajón de madera en la caja refrigerada"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="px-6 py-14 md:col-span-6 md:px-10 md:py-16 lg:px-16">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
                Cadena
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
                El frío no se negocia.
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-8">
              {protocolo.map((paso, index) => (
                <Reveal key={paso.n} delay={index * 60}>
                  <li className="grid grid-cols-[3rem_1fr] gap-4">
                    <span className="font-mono text-[0.62rem] text-amber">
                      {paso.n}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold">
                        {paso.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-paper-dim">
                        {paso.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal className="mt-12">
              <Link href="/cuenta" className="btn btn-amber">
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
