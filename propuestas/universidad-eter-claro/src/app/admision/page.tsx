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
    "Postulación a ETER: PAES 2026, entrevista, portafolio en arquitectura, paisaje y diseño. Fechas, aranceles y becas.",
};

type Props = { searchParams: Promise<{ carrera?: string }> };

export default async function AdmisionPage({ searchParams }: Props) {
  const { carrera } = await searchParams;

  return (
    <>
      <PageIntro
        kicker={`Admisión ${site.admissionYear}`}
        title="Postular no es un funnel. Es una carta y una conversación."
        lead="PAES 2026, NEM, ranking. Entrevista de 25 minutos en El Arrayán. Arquitectura, paisaje y diseño piden diez láminas. El cupo es el taller."
      />

      <section className="border-y border-linea py-24 lg:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Calendario</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              Cinco fechas. Ninguna sorpresa.
            </h2>
          </Reveal>
          <ol className="lg:col-span-6 lg:col-start-7">
            {calendar.map((row, index) => (
              <Reveal
                key={row.what}
                delay={index * 70}
                className="grid grid-cols-12 items-baseline gap-4 border-t border-linea py-6 last:border-b"
              >
                <span className="col-span-5 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-cielo">
                  {row.when}
                </span>
                <span className="col-span-7 font-display text-2xl font-light tracking-tight">
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
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
              Matrícula {formatCLP(matricula)}. El resto, por carrera.
            </h2>
            <p className="mt-6 max-w-sm text-tinta-suave">
              Informamos las vías de financiamiento vigentes en Chile. No
              prometemos gratuidad ni CAE que no administramos. Las becas de
              ETER sí son nuestras.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {careers.map((career) => (
              <div
                key={career.slug}
                className="flex items-baseline justify-between gap-6 border-t border-linea py-5 last:border-b"
              >
                <span className="font-display text-xl font-light">
                  {career.title}
                </span>
                <span className="font-display text-xl font-light nums">
                  {formatCLP(career.arancel)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-linea py-24 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="kicker">Becas</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,4.4vw,4rem)] font-light tracking-tight">
              Altura, territorio, equidad.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {becas.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="border-t border-linea pt-8"
              >
                <h3 className="font-display text-3xl font-light">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-tinta-suave">
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
            <p className="kicker">Escribir</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
              Cuéntanos de qué carrera se trata.
            </h2>
            <p className="mt-6 max-w-sm text-tinta-suave">
              Respondemos en 48 horas hábiles. Si el cupo está lleno, se dice.
              Teléfono {site.phone}.
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
