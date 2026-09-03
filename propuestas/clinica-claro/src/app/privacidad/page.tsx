import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: `Política de privacidad de ${site.legalName}.`,
};

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        kicker="Datos"
        title="Política de privacidad."
        lead="Tratamos datos de salud porque una ficha clínica no se improvisa. Lo hacemos con el mínimo necesario, en Chile, y con usted informado."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line},{" "}
            {site.address.city}, es responsable del tratamiento. Correo:{" "}
            {site.email}.
          </p>
          <div>
            <h2 className="font-display text-[1.6rem] font-medium text-ink">
              Qué reunimos
            </h2>
            <p className="mt-3">
              Nombre, RUT, correo, teléfono, previsión y el motivo de consulta
              que usted nos escribe al pedir hora. En la ficha clínica: historia,
              exámenes, indicaciones. No vendemos listas. No hacemos marketing
              con su diagnóstico.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.6rem] font-medium text-ink">
              Para qué
            </h2>
            <p className="mt-3">
              Agendar, atender, emitir boleta, coordinar laboratorio y cumplir
              obligaciones sanitarias y tributarias. La base legal es su
              consentimiento al pedir hora y la ejecución de la prestación de
              salud, según la Ley 19.628 y la normativa de la Superintendencia
              de Salud.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.6rem] font-medium text-ink">
              Encargados
            </h2>
            <p className="mt-3">
              Laboratorio asociado, procesador de pagos y el software de ficha
              clínica. Todos con contrato. No hay envío de datos de salud a
              redes sociales.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.6rem] font-medium text-ink">
              Sus derechos
            </h2>
            <p className="mt-3">
              Acceso, rectificación, cancelación y oposición. Escríbanos a{" "}
              {site.email}. La ficha clínica se conserva según los plazos
              sanitarios vigentes, no según un boletín de marketing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
