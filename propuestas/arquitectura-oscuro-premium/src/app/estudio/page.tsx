import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { awards, press, studio, team } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "ORILLA es un estudio de arquitectura en Lastarria, Santiago. Catorce personas, pocos encargos, obras que duran.",
};

export default function EstudioPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="shell py-12 md:py-16">
        <Reveal>
          <p className="kicker">Estudio · Lastarria</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
            Un atelier
            <br />
            <em className="italic text-copper">para el oficio.</em>
          </h1>
        </Reveal>
      </section>

      <section className="relative h-[58vh] min-h-[380px] overflow-hidden bg-surface">
        <Image
          src="/images/estudio.jpg"
          alt="Mesa de trabajo de ORILLA en Lastarria, Santiago"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="shell py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-8 text-paper-dim md:text-[1.25rem] md:leading-9">
              {studio.about.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
            <dl className="border-t border-line">
              {[
                { l: "Fundación", v: String(studio.founded) },
                { l: "Sede", v: "Lastarria, Santiago" },
                { l: "Equipo", v: `${studio.people} personas` },
                { l: "Obras", v: `${studio.works} construidas y en curso` },
                { l: "Latitudes", v: studio.latitudes },
                { l: "RUT", v: studio.rut },
              ].map((item) => (
                <div
                  key={item.l}
                  className="grid grid-cols-2 gap-4 border-b border-line py-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {item.l}
                  </dt>
                  <dd className="text-sm">{item.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-ink">
        <div className="shell py-20">
          <Reveal>
            <p className="kicker">Personas</p>
            <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
              El equipo
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person) => (
              <li key={person.name} className="bg-ink px-6 py-8">
                <p className="font-display text-2xl leading-none">
                  {person.name}
                </p>
                <p className="mt-3 text-sm text-paper-dim">{person.role}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {person.focus}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell grid gap-16 py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="kicker">Reconocimientos</p>
            <h2 className="mt-3 font-display text-4xl italic">Premios</h2>
          </Reveal>
          <ul className="mt-8">
            {awards.map((award) => (
              <li
                key={`${award.year}-${award.project}`}
                className="grid grid-cols-[4rem_1fr] gap-4 border-t border-line py-4"
              >
                <span className="font-mono text-[11px] text-copper">
                  {award.year}
                </span>
                <span>
                  <span className="block text-sm">{award.title}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {award.project}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="kicker">Prensa</p>
            <h2 className="mt-3 font-display text-4xl italic">Publicado en</h2>
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
            {press.map((name) => (
              <li
                key={name}
                className="border-b border-line py-3 text-sm text-paper-dim"
              >
                {name}
              </li>
            ))}
          </ul>
          <Link
            href="/contacto"
            className="mt-10 inline-flex btn btn-ghost"
          >
            Escribir al estudio
          </Link>
        </div>
      </section>
    </div>
  );
}
