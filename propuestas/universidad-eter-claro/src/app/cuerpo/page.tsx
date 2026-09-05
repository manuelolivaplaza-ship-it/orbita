import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { faculty } from "@/data/content";

export const metadata: Metadata = {
  title: "Cuerpo académico",
  description:
    "Rectora, decanas y titulares de ETER. Quien enseña, firma. Taller de doce.",
};

export default function CuerpoPage() {
  return (
    <>
      <PageIntro
        kicker="Cuerpo académico"
        title="Quien enseña, firma."
        lead="No hay cátedra fantasma ni ayudante que recita una guía. El titular del taller está en la sala. Si el grupo crece, se abre otro taller — no se hincha este."
      />

      <section className="border-t border-linea">
        {faculty.map((person, index) => {
          const reverse = index % 2 === 1;
          return (
            <article key={person.slug} className="border-b border-linea">
              <div className="grid md:grid-cols-12">
                <div
                  className={`relative min-h-[420px] md:col-span-5 md:min-h-[640px] ${reverse ? "md:col-start-8" : ""}`}
                >
                  <Image
                    src={person.image}
                    alt={person.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover object-top"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center px-6 py-16 md:col-span-6 md:px-12 lg:px-16 ${reverse ? "md:col-start-1 md:row-start-1" : "md:col-start-7"}`}
                >
                  <Reveal>
                    <p className="kicker">
                      {person.role} · {person.school}
                    </p>
                    <h2 className="mt-4 font-display text-5xl font-light tracking-tight md:text-6xl">
                      {person.name}
                    </h2>
                    <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
                      {person.focus}
                    </p>
                    <p className="mt-6 max-w-md text-tinta-suave">
                      {person.credential}. {person.extra}
                    </p>
                    <p className="mt-6 max-w-md font-display text-2xl font-light italic text-tinta-suave">
                      {person.line}
                    </p>
                  </Reveal>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
