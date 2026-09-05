import type { Metadata } from "next";
import Link from "next/link";
import { CareerIndex } from "@/components/career-index";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { careers, schools } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Carreras",
  description:
    "Ocho carreras de pregrado en ETER: arquitectura, paisaje, diseño, clima, territorio, computación, letras y gobierno.",
};

export default function CarrerasPage() {
  return (
    <>
      <PageIntro
        kicker="Pregrado"
        title="Ocho carreras. Jornada diurna. Sede única."
        lead="Tres escuelas. Cupos publicados. Arancel publicado. Si el oficio no cabe en un taller de doce, no está en esta lista."
      />

      <section className="border-y border-linea py-8">
        <div className="shell flex flex-wrap gap-x-10 gap-y-3">
          {schools.map((school) => (
            <p
              key={school.slug}
              className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-tinta-suave"
            >
              {school.title}
            </p>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell">
          <CareerIndex />
        </div>
      </section>

      <section className="border-t border-linea py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Arancel 2027</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-light tracking-tight">
              La cifra, no un «desde».
            </h2>
          </Reveal>
          <div className="mt-14 border-t border-linea">
            {careers.map((career) => (
              <div
                key={career.slug}
                className="grid grid-cols-12 items-baseline gap-4 border-b border-linea py-6"
              >
                <div className="col-span-8 md:col-span-7">
                  <Link
                    href={`/carreras/${career.slug}`}
                    className="font-display text-2xl font-light tracking-tight hover:text-cielo md:text-3xl"
                  >
                    {career.title}
                  </Link>
                  <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
                    {career.years} años · {career.cupos} cupos · {career.jornada}
                  </p>
                </div>
                <p className="col-span-4 text-right font-display text-2xl font-light nums tracking-tight md:col-span-5 md:text-3xl">
                  {formatCLP(career.arancel)}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-gris">
            Arancel anual en pesos chilenos. Matrícula {formatCLP(320000)}, una
            vez al año. Beca Altura y Beca Territorio se postulan con la
            admisión.
          </p>
          <Link
            href="/admision"
            className="link-line mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em]"
          >
            Admisión 2027
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
