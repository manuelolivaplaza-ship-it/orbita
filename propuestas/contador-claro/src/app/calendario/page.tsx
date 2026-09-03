import type { Metadata } from "next";
import Link from "next/link";
import { CalendarBoard } from "@/components/calendar-board";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Calendario tributario",
  description:
    "F29, Previred, F22 y declaraciones juradas. El calendario de CLARO, con plazos chilenos y feriados a la vista.",
};

export default function CalendarioPage() {
  return (
    <>
      <PageIntro
        kicker="Calendario"
        title="El F29 no es un misterio. Es una fecha."
        lead="Día 12. Día 20 si declara y paga por internet y es facturador electrónico. Previred el 13. Si cae en sábado, domingo o feriado, corre al hábil siguiente — art. 36 del Código Tributario."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell">
          <Reveal>
            <CalendarBoard />
          </Reveal>
          <p className="mt-12 max-w-2xl text-[14px] leading-relaxed text-muted">
            Fechas referenciales construidas con las reglas del SII (F29 día
            12 / día 20) y el calendario de feriados 2026–2027. Las
            declaraciones juradas y la Operación Renta cambian cada año
            tributario: confirme siempre en{" "}
            <a
              href="https://www.sii.cl"
              className="link-line"
              target="_blank"
              rel="noopener noreferrer"
            >
              sii.cl
            </a>
            . Si su RUT tiene un plazo distinto anotado en la cartola, prima
            esa cartola.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex text-[0.92rem] font-semibold tracking-wide text-cobre"
          >
            Que lo miremos juntos →
          </Link>
        </div>
      </section>
    </>
  );
}
