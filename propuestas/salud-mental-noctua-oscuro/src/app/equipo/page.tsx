import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { team } from "@/data/content";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Seis personas en NOCTUA. Psicología clínica y psiquiatría. Te emparejamos, no te asignamos un hueco. Las Condes.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="Equipo"
        title="Seis personas. La misma de principio a fin."
        lead="Leemos lo que escribes y te proponemos a alguien. Si no calza, se cambia. El hueco no manda."
      />

      <section className="pb-28">
        <div className="shell grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <Reveal key={person.slug} delay={index * 70}>
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
                <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-amber">
                  {person.focus}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight group-hover:text-amber">
                  {person.name}
                </h2>
                <p className="mt-2 text-sm text-muted">{person.credential}</p>
                <p className="mt-3 text-sm text-paper-dim">{person.extra}</p>
                <p className="mt-4 max-w-[32ch] font-display text-lg italic leading-snug text-paper-dim">
                  {person.line}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl font-display text-3xl font-semibold">
            Escríbenos. Te proponemos a alguien.
          </p>
          <Link href="/primera" className="btn btn-amber">
            Pedir primera hora
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
