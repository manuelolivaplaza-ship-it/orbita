import type { Metadata } from "next";
import Link from "next/link";
import { CareerIndex } from "@/components/career-index";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { careers, schools } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Carreras",
  description:
    "Ocho carreras de pregrado en NOCTUA: astronomía, datos, cine, sueño, urbanismo, diseño, letras y gobierno. Jornada nocturna.",
};

export default function CarrerasPage() {
  return (
    <>
      <PageIntro
        kicker="Pregrado"
        title="Ocho oficios. Una hora."
        lead="Todas las carreras son nocturnas, de 17:30 a 01:00. El seminario es de doce. El arancel está publicado. Si una novena no cabe, no se abre."
      />

      <section className="border-y border-line py-6">
        <div className="shell flex flex-wrap gap-x-10 gap-y-3">
          {schools.map((school) => (
            <p
              key={school.slug}
              className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-paper-dim"
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

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Arancel {new Date().getFullYear() + 1}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              La cifra, no un desde.
            </h2>
          </Reveal>
          <div className="mt-12">
            {careers.map((career) => (
              <Link
                key={career.slug}
                href={`/carreras/${career.slug}`}
                className="flex items-baseline justify-between gap-6 border-t border-line py-5 last:border-b"
              >
                <span className="font-display text-xl font-semibold tracking-tight">
                  {career.title}
                </span>
                <span className="font-display text-xl font-semibold nums tracking-tight text-paper-dim">
                  {formatCLP(career.arancel)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
