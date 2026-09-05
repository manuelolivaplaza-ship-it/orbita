import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply-form";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { becas, calendar, careers, matricula } from "@/data/content";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Admisión 2027",
  description:
    "Postulación a NOCTUA: PAES 2026, entrevista, portafolio y vigilia en astronomía, cine y neurociencias. Fechas, aranceles y becas.",
};

type Props = { searchParams: Promise<{ carrera?: string }> };

export default async function AdmisionPage({ searchParams }: Props) {
  const { carrera } = await searchParams;

  return (
    <>
      <PageIntro
        kicker={`Admisión ${site.admissionYear}`}
        title="Postular no es un funnel. Es una carta y una noche."
        lead="PAES 2026, NEM, ranking. Entrevista de 25 minutos en Recoleta. Cine, diseño y urbanismo piden diez láminas. Astronomía, cine y neurociencias, una vigilia. El cupo es el seminario."
      />

      <section className="border-y border-line py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Calendario</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Cinco fechas. Ninguna sorpresa.
            </h2>
          </Reveal>
          <ol className="lg:col-span-6 lg:col-start-7">
            {calendar.map((row, index) => (
              <Reveal
                key={row.what}
                delay={index * 70}
                className="grid grid-cols-12 items-baseline gap-4 border-t border-line py-6 last:border-b"
              >
                <span className="col-span-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-amber">
                  {row.when}
                </span>
                <span className="col-span-7 font-display text-2xl font-semibold tracking-tight">
                  {row.what}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Arancel anual</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Matrícula {formatCLP(matricula)}. El resto, por carrera.
            </h2>
            <p className="mt-6 max-w-sm text-paper-dim">
              Informamos las vías de financiamiento vigentes en Chile. No
              prometemos gratuidad ni CAE que no administramos. Las becas de
              NOCTUA sí son nuestras.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {careers.map((career) => (
              <div
                key={career.slug}
                className="flex items-baseline justify-between gap-6 border-t border-line py-5 last:border-b"
              >
                <span className="font-display text-xl font-semibold">
                  {career.title}
                </span>
                <span className="font-display text-xl font-semibold nums">
                  {formatCLP(career.arancel)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Becas</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Tres vías. Escritas.
            </h2>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {becas.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 70}
                className="border-t border-line py-8 last:border-b"
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Carta</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
              Nombre, carrera, comuna. El resto es conversación.
            </h2>
            <p className="mt-6 max-w-sm text-paper-dim">
              Admisión responde en 48 horas hábiles. Si el cupo está lleno, se
              dice. No hay lista de espera silenciosa.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <ApplyForm defaultCareer={carrera ?? ""} />
          </div>
        </div>
      </section>
    </>
  );
}
