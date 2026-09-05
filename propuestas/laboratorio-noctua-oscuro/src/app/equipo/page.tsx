import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { equipo } from "@/data/equipo";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Quiénes firman en NOCTUA: internista, químico farmacéutico y tecnólogos médicos del turno nocturno.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="Equipo"
        title="El turno tiene nombre."
        lead="Cuatro personas. El mismo laboratorio. Nadie subcontrata la validación. Si un número no cierra, se repite —y se firma."
      />
      <section className="shell grid gap-16 pb-28 md:pb-36">
        {equipo.map((person, index) => (
          <Reveal
            key={person.slug}
            delay={index * 60}
            className="grid items-center gap-10 border-t border-line pt-12 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <div className="frame aspect-[3/4]">
                <Image
                  src={person.foto}
                  alt={person.nombre}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="kicker">{person.cargo}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {person.nombre}
              </h2>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                {person.titulo}
              </p>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper-dim">
                {person.texto}
              </p>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
