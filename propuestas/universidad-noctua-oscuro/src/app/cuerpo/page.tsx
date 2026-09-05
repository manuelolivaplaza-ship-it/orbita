import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { faculty } from "@/data/content";

export const metadata: Metadata = {
  title: "Cuerpo académico",
  description:
    "Quien enseña en NOCTUA firma: rectoría, decanos y titulares de las tres escuelas. Seminario de doce.",
};

export default function CuerpoPage() {
  return (
    <>
      <PageIntro
        kicker="Cuerpo académico"
        title="Quien enseña, firma."
        lead="Seis titulares a la vista. El seminario no se delega a un ayudante que recita una guía. Si el grupo crece, se abre otro — no se hincha este."
      />

      <section className="border-t border-line">
        {faculty.map((person, index) => {
          const reverse = index % 2 === 1;
          return (
            <article
              key={person.slug}
              className="grid border-b border-line md:grid-cols-12"
            >
              <div
                className={`relative min-h-[420px] md:col-span-5 md:min-h-[640px] ${reverse ? "md:order-2" : ""}`}
              >
                <Image
                  src={person.image}
                  alt={person.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`flex flex-col justify-center px-6 py-16 md:col-span-7 md:px-12 lg:px-20 ${reverse ? "md:order-1" : ""}`}
              >
                <Reveal>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber">
                    {person.role} · {person.school}
                  </p>
                  <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[0.95] tracking-tight">
                    {person.name}
                  </h2>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim">
                    {person.credential}
                    <br />
                    {person.extra}
                  </p>
                  <p className="mt-8 max-w-md font-display text-2xl font-semibold italic leading-snug text-paper-dim">
                    {person.line}
                  </p>
                  <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                    {person.focus}
                  </p>
                </Reveal>
              </div>
            </article>
          );
        })}
      </section>

      <section className="py-24">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <p className="kicker">Siguiente</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Lo que se investiga de noche.
            </h2>
          </Reveal>
          <Link href="/investigacion" className="btn btn-amber">
            Investigación
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
