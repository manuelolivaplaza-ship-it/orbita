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
        lead="Tratamos datos de salud porque un informe clínico no se improvisa. Lo hacemos con el mínimo necesario, en Chile, y con usted informado."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-3xl space-y-10 text-[16px] leading-relaxed text-paper-dim">
          <p>
            {site.legalName}, RUT {site.rut}, con domicilio en {site.address.line1},{" "}
            {site.address.commune}, es responsable del tratamiento. Correo:{" "}
            {site.email}.
          </p>
          <div>
            <h2 className="font-display text-[1.7rem] font-semibold text-paper">
              Qué reunimos
            </h2>
            <p className="mt-3">
              Nombre, RUT, correo, teléfono, previsión y el motivo de la toma
              que nos escribe al pedir hora. En la ficha: historia, órdenes,
              resultados. No vendemos listas. No hacemos marketing con un
              diagnóstico.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-semibold text-paper">
              Para qué
            </h2>
            <p className="mt-3">
              Agendar, identificar la muestra, emitir el informe, cumplir la
              normativa sanitaria y, si corresponde, facturar a su isapre. La
              base legal es la ejecución del servicio y la obligación legal de
              conservar registros clínicos.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-semibold text-paper">
              Conservación
            </h2>
            <p className="mt-3">
              Los informes se guardan el plazo que exige la normativa chilena
              de registros clínicos. Los datos de agenda, el mínimo para
              operar. Servidores en Chile o con cláusulas equivalentes.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-semibold text-paper">
              Tus derechos
            </h2>
            <p className="mt-3">
              Acceso, rectificación, cancelación y oposición, según la ley
              19.628. Escríbenos a {site.email}. Esta página es parte de una
              propuesta de diseño: en producción, el texto se revisa con
              abogado.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
