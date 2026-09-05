import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

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
        <div className="shell max-w-3xl space-y-10 text-[16px] leading-relaxed text-tinta-suave">
          <p>
            {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line1},{" "}
            {site.address.commune}, es responsable del tratamiento. Correo:{" "}
            {site.email}.
          </p>
          <div>
            <h2 className="font-display text-[1.7rem] font-light text-tinta">
              Qué reunimos
            </h2>
            <p className="mt-3">
              Nombre, RUT, correo, teléfono, previsión y el motivo de consulta
              que usted nos escribe al pedir hora. En la ficha clínica:
              historia, hipótesis, plan. No vendemos listas. No hacemos
              marketing con su diagnóstico.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-light text-tinta">
              Para qué
            </h2>
            <p className="mt-3">
              Agendar, tratar, emitir boleta, coordinar reembolso y, si usted lo
              pide, informar a otro profesional. La base es su consentimiento y
              la ejecución de un contrato de prestación de salud.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-light text-tinta">
              Secreto profesional
            </h2>
            <p className="mt-3">
              La ficha no se informa a empleadores, parejas, colegios ni
              familiares sin su consentimiento, salvo las excepciones legales:
              riesgo vital, orden judicial u otras que la ley chilena imponga.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-light text-tinta">
              Conservación y derechos
            </h2>
            <p className="mt-3">
              La ficha se conserva según la normativa sanitaria chilena. Puede
              pedir acceso, rectificación o cancelación en {site.email}. No
              transferimos datos fuera de Chile salvo obligación legal.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
