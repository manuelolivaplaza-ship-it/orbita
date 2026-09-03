import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        kicker="Ley 19.628"
        title="Privacidad."
        lede="Tratamos datos de contacto para responder consultas y, si hay mandato, para la gestión del encargo. Nada más."
      />
      <div className="mt-12 max-w-[62ch] space-y-8 text-[1.02rem] leading-relaxed text-paper-dim">
        <section>
          <h2 className="font-display text-2xl text-paper">Responsable</h2>
          <p className="mt-3">
            {site.legalName}, RUT {site.rut}, {site.address.line},{" "}
            {site.address.city}. Contacto: {site.email} · {site.phone}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-paper">Qué recabamos</h2>
          <p className="mt-3">
            Nombre, teléfono, tipo de encargo, presupuesto en UF y el mensaje
            que usted escribe. Si hay mandato, se suman los documentos propios
            de la operación (CBR, contribuciones, identificación). No usamos
            cookies de publicidad ni vendemos bases.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-paper">Para qué</h2>
          <p className="mt-3">
            Responder la consulta, calificar un brief, agendar una presentación
            y, si hay encargo, cumplir el mandato de corredora. La base jurídica
            es su consentimiento al enviar el formulario y, después, el
            contrato de mandato.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-paper">Plazo</h2>
          <p className="mt-3">
            Las consultas sin mandato se eliminan a los doce meses. Los
            antecedentes de una operación se conservan el plazo que exige la
            normativa tributaria y civil.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-paper">Sus derechos</h2>
          <p className="mt-3">
            Puede pedir acceso, rectificación, cancelación u oposición
            escribiendo a {site.email}. Respondemos en diez días hábiles.
          </p>
        </section>
      </div>
    </div>
  );
}
