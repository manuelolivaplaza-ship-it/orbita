import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: `Política de privacidad de ${site.legalName}, según la Ley 19.628.`,
};

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        kicker="Privacidad"
        title="Qué hacemos con sus datos."
        lead="Tratamos datos personales según la Ley 19.628 sobre protección de la vida privada. Lo mínimo para responderle y, si hay encargo, para llevar la cartera."
      />
      <section className="pb-24 lg:pb-32">
        <div className="shell max-w-2xl space-y-5 text-[16px] leading-[1.8] text-muted">
          <p>
            El formulario de este sitio recoge nombre, correo, celular, RUT
            (si lo indica) y el mensaje. Lo usamos para responder en 24 horas
            hábiles. No lo vendemos. No lo usamos para una lista de
            marketing.
          </p>
          <p>
            Si hay un encargo, el tratamiento se amplía a lo necesario para
            la contabilidad, las declaraciones ante el SII, Previred y la
            Dirección del Trabajo, y la facturación del estudio.
          </p>
          <p>
            Puede pedir acceso, corrección o cancelación escribiendo a{" "}
            {site.email}. Conservamos los papeles el tiempo que exigen las
            normas tributarias y laborales chilenas.
          </p>
        </div>
      </section>
    </>
  );
}
