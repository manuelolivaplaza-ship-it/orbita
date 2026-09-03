import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${site.legalName}.`,
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Legal"
        title="Aviso legal."
        lead="Este sitio informa. No diagnostica. Una hora en CLARO no se reemplaza con un párrafo."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            El sitio {site.url} es de {site.legalName}, RUT {site.rut},{" "}
            {site.address.line}, {site.address.city}. {site.superintendencia}.
          </p>
          <p>
            Los textos, aranceles y plazos son referenciales y pueden cambiar.
            El valor vigente se confirma al agendar. Nada de lo publicado
            constituye indicación médica personalizada ni reemplaza una
            consulta.
          </p>
          <p>
            CLARO no es un servicio de urgencia. Ante dolor de pecho,
            dificultad para respirar, signos de accidente cerebrovascular o
            cualquier emergencia, llame al SAMU 131.
          </p>
          <p>
            Las fotografías muestran la casa. Los retratos del equipo son de
            los profesionales de esta clínica. Los testimonios están editados
            en longitud y firman con inicial para proteger la reserva.
          </p>
          <p>
            Ley aplicable: República de Chile. Tribunales de Santiago.
          </p>
        </div>
      </section>
    </>
  );
}
