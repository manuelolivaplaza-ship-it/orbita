import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "Casa NOCTUA en Vitacura: un pabellón de vidrio negro que se visita después del crepúsculo.",
};

const people = [
  {
    name: "Isidora Valdés",
    role: "Custodia de casa",
    note: "Recibe, ordena el tiempo y decide qué entra al piso.",
  },
  {
    name: "Mateo Alarcón",
    role: "Curador de piezas",
    note: "Busca, prueba y deja ir. Nada llega por volumen.",
  },
];

const principles = [
  {
    title: "Pocas, enteras",
    text: "Nunca más de nueve. Si no hay espacio en la noche, no hay auto. Preferimos una lista de espera a un patio lleno.",
  },
  {
    title: "El crédito no se grita",
    text: "Estructuramos pie y cuotas con tu banco. No vendemos CAE: ordenamos el camino para que la pieza llegue limpia, con transferencia y permiso al día.",
  },
  {
    title: "La noche como filtro",
    text: "Vitacura no es un accidente. Quien viene a las veinte ya decidió no comprar entre globos y financiamiento en letra chica. El silencio hace el resto.",
  },
];

export default function LaCasaPage() {
  return (
    <>
      <section className="relative h-[70svh] min-h-[480px] overflow-hidden bg-void">
        <Image
          src="/images/showroom.jpg"
          alt="Interior de Casa NOCTUA, con un cupé sobre piso negro y la ciudad al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="vignette" />
        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-12 md:px-10 lg:px-16">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-paper/70">
            Vitacura · Santiago
          </p>
          <h1 className="mt-4 font-display text-6xl font-semibold tracking-tight md:text-8xl">
            La casa
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16">
        <Reveal className="md:col-span-6">
          <h2 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Una sala. Una hora. Un auto.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8" delay={100}>
          <p className="text-lg leading-relaxed text-paper-dim">
            NOCTUA nace de una idea simple: el automóvil de lujo en Chile se
            volvió ruido. Abrimos un pabellón de vidrio negro sobre la Costanera,
            y dejamos que la noche haga el trabajo que otros hacen con globos y
            financiamiento en letra chica.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-paper-dim">
            Curamos cortes, estelas y, cuando aparece, un territorio que merezca
            el piso. No representamos una marca. Representamos una hora: de las
            dieciocho a medianoche, martes a sábado.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
          <div className="relative min-h-[360px] md:min-h-[560px]">
            <Image
              src="/images/facade.jpg"
              alt="Fachada de vidrio negro de NOCTUA al anochecer"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[360px] md:min-h-[560px] md:border-l md:border-line">
            <Image
              src="/images/cabin.jpg"
              alt="Cabina de un gran turismo, con luz ámbar de instrumento"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Principios
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight">
            Tres reglas. Ninguna de adorno.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper-dim">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16">
          <Reveal className="md:col-span-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
              Quiénes
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight">
              Dos nocturnos.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-paper-dim">
              No hay equipo de ventas. Hay quien abre la puerta y quien decide
              qué auto merece el piso. El resto, si hace falta, se llama.
            </p>
          </Reveal>
          <div className="grid gap-10 md:col-span-6 md:col-start-7">
            {people.map((person, index) => (
              <Reveal key={person.name} delay={index * 80}>
                <p className="font-display text-3xl font-semibold tracking-tight">
                  {person.name}
                </p>
                <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-amber">
                  {person.role}
                </p>
                <p className="mt-3 text-sm text-paper-dim">{person.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 lg:px-16">
        <Reveal className="md:col-span-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Dónde
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
            {site.address.line1}
          </h2>
          <p className="mt-4 text-paper-dim">
            {site.address.commune}, {site.address.city}. Frente al río, con la
            ciudad debajo.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            {site.hours.map((row) => (
              <div key={row.days} className="flex justify-between gap-6 border-b border-line pb-3">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {row.days}
                </dt>
                <dd className="tabular-nums">{row.time}</dd>
              </div>
            ))}
          </dl>
          <Link href="/visita" className="btn btn-amber mt-10 w-fit">
            Agendar visita
            <Arrow />
          </Link>
        </Reveal>
        <div className="relative min-h-[360px] md:col-span-6 md:col-start-7">
          <Image
            src="/images/lounge.jpg"
            alt="Salón de NOCTUA con vista a Santiago y un búho de bronce"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
