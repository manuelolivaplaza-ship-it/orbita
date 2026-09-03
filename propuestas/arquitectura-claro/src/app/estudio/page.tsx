import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { awards, press, studio, team } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Estudio",
  description:
    "VETA es un atelier de arquitectura en Palermo, Buenos Aires. Dieciocho personas, pocos encargos, obras que duran.",
};

export default function EstudioPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Estudio · Palermo
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
            Un atelier
            <br />
            <em>para el oficio.</em>
          </h1>
        </Reveal>
      </section>

      <section className="relative h-[58vh] min-h-[380px] overflow-hidden bg-paper-2">
        <Image
          src="/images/estudio.jpg"
          alt="Mesa de trabajo del atelier VETA"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-8 text-ink-soft md:text-[1.25rem] md:leading-9">
              {studio.about.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={100}>
            <dl className="border-t border-line">
              {[
                { l: "Fundación", v: String(studio.founded) },
                { l: "Sede", v: "Palermo, Buenos Aires" },
                { l: "Equipo", v: `${studio.people} personas` },
                { l: "Obras", v: `${studio.works} construidas y en curso` },
                { l: "Territorios", v: "Argentina, Uruguay, Chile" },
              ].map((item) => (
                <div
                  key={item.l}
                  className="grid grid-cols-2 gap-4 border-b border-line py-4"
                >
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">
                    {item.l}
                  </dt>
                  <dd className="text-sm">{item.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 lg:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Personas
            </p>
            <h2 className="mt-3 font-display text-4xl italic md:text-5xl">
              El equipo
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {team.map((person, index) => (
              <li key={person.name} className="bg-paper-2 p-6 md:p-8">
                <Reveal delay={index * 40}>
                  <p className="font-display text-2xl leading-tight">
                    {person.name}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm text-ink-soft">{person.focus}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-16 px-5 py-20 md:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Reconocimientos
            </p>
            <h2 className="mt-3 font-display text-4xl italic">Premios</h2>
          </Reveal>
          <ul className="mt-8">
            {awards.map((award) => (
              <li
                key={`${award.year}-${award.project}`}
                className="grid grid-cols-[4rem_1fr] gap-4 border-t border-line py-5 last:border-b"
              >
                <span className="font-mono text-[12px] text-muted">
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
        <div className="lg:col-span-4 lg:col-start-9">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
              Prensa
            </p>
            <h2 className="mt-3 font-display text-4xl italic">Publicados en</h2>
            <ul className="mt-8 space-y-3">
              {press.map((name) => (
                <li key={name} className="border-b border-line pb-3 text-sm">
                  {name}
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="mt-10 inline-block text-[11px] uppercase tracking-[0.22em] link-line"
            >
              Escribir al estudio
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:px-8 lg:px-10">
        <Reveal variant="img-mask">
          <div className="relative aspect-[16/9] overflow-hidden bg-paper-2">
            <Image
              src="/images/modelo.jpg"
              alt="Maqueta de trabajo en el estudio"
              fill
              sizes="100vw"
              className="img-zoom object-cover"
            />
          </div>
        </Reveal>
        <p className="mt-4 text-sm text-muted">
          Maqueta de trabajo. El dibujo viene después del sitio.
        </p>
      </section>
    </div>
  );
}
