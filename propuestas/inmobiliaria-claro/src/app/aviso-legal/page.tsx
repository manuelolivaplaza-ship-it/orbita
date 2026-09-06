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
        kicker="Papel"
        title="Aviso legal."
        lead="Las plantas se presentan de buena fe, con la lectura que cabe a una corredora. La escritura la hace el Conservador, no esta web."
      />
      <section className="pb-24">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName} es una sociedad por acciones chilena, RUT {site.rut},
            inscrita en {site.coproch}. Opera como corredora de propiedades
            según la normativa vigente.
          </p>
          <p>
            Los valores se expresan en UF. Las superficies y orientaciones
            provienen de títulos, planos de copropiedad o de la DOM, y de
            medición en terreno. Si hay diferencia, prima el Conservador. Las
            horas de sol son una medición de esta mesa a la fecha de la ficha;
            un edificio nuevo al norte puede cambiarlas.
          </p>
          <p>
            Las fotografías se toman a la hora de visita declarada. No
            constituyen un render ni una promesa de amoblado. La disponibilidad
            puede cambiar entre la consulta y la visita.
          </p>
          <p>
            El honorario de corredora se pacta por escrito. Esta web no es una
            oferta vinculante ni un mandato.
          </p>
        </div>
      </section>
    </>
  );
}
