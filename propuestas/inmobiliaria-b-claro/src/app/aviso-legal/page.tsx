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
        plate="A"
        kicker="Papel"
        title="Aviso legal."
        lead="Los solares se presentan de buena fe, con la lectura que cabe a una corredora. La escritura la hace el Conservador, no esta web."
      />
      <section className="pb-24">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName} es una sociedad por acciones chilena, RUT {site.rut},
            inscrita en {site.coproch}. Opera como corredora de propiedades
            según la normativa vigente.
          </p>
          <p>
            Los valores se expresan en UF. Las superficies, frentes y fondos
            provienen de títulos, planos de la DOM y medición en terreno. Si hay
            diferencia, prima el Conservador. La disponibilidad puede cambiar
            sin aviso entre la consulta y la visita.
          </p>
          <p>
            Las fotografías se toman al mediodía. No constituyen un render ni
            una promesa de resultado de ampliación. El plan regulador se cita
            como lectura a la fecha del encargo; la municipalidad puede
            modificarlo.
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
