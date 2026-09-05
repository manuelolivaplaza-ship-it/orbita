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
    "Ocho médicos en NOCTUA Vitacura. El mismo de principio a fin. Interna, sueño, cardio, neuro, salud mental, gine, imagen y laboratorio.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="Equipo"
        title="Ocho. Sin rotación."
        lead="Te lee quien te va a tratar. No un internado, no un turno. Si el caso pide otra mirada, se pasa — no se alarga."
      />

      <section className="pb-28">
        <div className="shell grid gap-16">
          {team.map((person, index) => (
            <Reveal
              key={person.slug}
              delay={index * 40}
              className="grid items-center gap-8 border-t border-line pt-12 md:grid-cols-12"
            >
              <div className="frame relative aspect-[16/10] md:col-span-5 md:aspect-[4/5]">
                <Image
                  src={person.image}
                  alt={`Oficio de ${person.name}: ${person.focus}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                  {person.focus}
                </p>
                <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight">
                  {person.name}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-paper-dim">
                  {person.credential}
                  <br />
                  {person.extra}
                </p>
                <p className="mt-8 max-w-md font-display text-2xl italic leading-snug text-paper-dim">
                  {person.line}
                </p>
                <Link
                  href={`/especialidades/${person.specialtySlug}`}
                  className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
                >
                  La sala
                  <Arrow />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="shell py-20">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight">
              El mismo de la primera hora. El mismo del alta.
            </h2>
            <Link href="/agenda" className="btn btn-amber mt-10 w-fit">
              Pedir hora
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
