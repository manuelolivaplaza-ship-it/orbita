import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

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
        lead="Este sitio informa. No diagnostica. No reemplaza una consulta clínica ni una urgencia."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-3xl space-y-10 text-[16px] leading-relaxed text-tinta-suave">
          <p>
            {site.legalName}, RUT {site.rut}, {site.address.line1},{" "}
            {site.address.commune}, Santiago, Chile. Correo: {site.email}.
            Teléfono: {site.phone}.
          </p>
          <div>
            <h2 className="font-display text-[1.7rem] font-light text-tinta">
              Contenido
            </h2>
            <p className="mt-3">
              Los textos de este sitio son informativos. No constituyen
              diagnóstico, receta ni indicación personalizada. La atención
              clínica ocurre en sesión, con consentimiento informado.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-light text-tinta">
              Urgencias
            </h2>
            <p className="mt-3">
              ETER no es un servicio de urgencia ni un hospital. Si hay riesgo
              vital, llame a Salud Responde {site.crisis.phone} o al{" "}
              {site.crisis.alt} (prevención del suicidio), o acuda a un servicio
              de urgencia.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-light text-tinta">
              Propiedad
            </h2>
            <p className="mt-3">
              Marca, textos y fotografías de este sitio pertenecen a{" "}
              {site.legalName}, salvo indicación contraria. Queda prohibida su
              reproducción sin autorización.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[1.7rem] font-light text-tinta">
              Ley aplicable
            </h2>
            <p className="mt-3">
              Chile. Tribunales de Santiago. Superintendencia de Salud, cuando
              corresponda a prestaciones de salud.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
