import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { team } from "@/data/content";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Seis terapeutas en Providencia. Psicología clínica y psiquiatría. Te emparejamos; no te asignamos un hueco.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="Equipo"
        title="Seis personas. Ninguna es un avatar."
        lead="Leemos lo que escribes y te proponemos a alguien. Si no calza en las primeras dos sesiones, se cambia — sin costo de emparejamiento."
      />

      <section className="pb-28">
        <div className="shell grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <Reveal key={person.slug} delay={(index % 3) * 70}>
              <Link href={`/equipo/${person.slug}`} className="group block">
                <div className="frame relative aspect-[3/4]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-sage-deep">
                  {person.focus}
                </p>
                <h2 className="mt-2 font-display text-3xl font-light tracking-tight group-hover:text-sage-deep md:text-4xl">
                  {person.name}
                </h2>
                <p className="mt-2 text-sm text-gris">{person.credential}</p>
                <p className="mt-3 max-w-[34ch] font-display text-xl font-light italic leading-snug text-tinta-suave">
                  {person.line}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
