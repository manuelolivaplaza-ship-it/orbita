import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { team } from "@/data/content";

export const metadata: Metadata = {
  title: "El equipo",
  description:
    "Seis kinesiólogos en ETER. El mismo de principio a fin. Sin rotación, sin call center.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="El equipo"
        title="Seis. El mismo de principio a fin."
        lead="No hay fotos de delantal. Hay un nombre, una universidad, un enfoque, y la promesa de que no te cambia el kinesiólogo a la tercera sesión."
      />

      <section className="pb-24 lg:pb-36">
        <div className="shell grid gap-16 md:grid-cols-2">
          {team.map((person, index) => (
            <Reveal key={person.slug} delay={(index % 2) * 80}>
              <article className="border-t border-linea pt-8">
                <div className="frame relative aspect-[4/3]">
                  <Image
                    src={person.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-teal">
                  {person.focus}
                </p>
                <h2 className="mt-3 font-display text-4xl font-light tracking-tight">
                  {person.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-tinta-suave">
                  {person.credential}
                  <br />
                  {person.extra}
                </p>
                <p className="mt-5 font-display text-xl italic font-light text-tinta-suave">
                  {person.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-linea py-20">
        <div className="shell grid gap-8 md:grid-cols-12">
          <p className="max-w-md text-lg leading-relaxed text-tinta-suave md:col-span-6">
            Si tu caso necesita otro especialista —cirugía, neurología, fisiatría—
            te derivamos. No es pérdida de un paciente. Es el oficio.
          </p>
          <div className="md:col-span-5 md:col-start-8">
            <Link href="/agenda" className="btn btn-ink">
              Agendar evaluación
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
