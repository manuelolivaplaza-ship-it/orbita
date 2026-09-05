import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        kicker="Datos"
        title="Privacidad."
        lead="Pedimos lo mínimo para cruzar la pieza: nombre, celular, patente o ficha del auto."
      />
      <section className="py-16">
        <div className="shell max-w-2xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            Los datos del formulario se usan para cotizar y despachar. No se
            venden. No se ceden a pauta. El responsable es {site.legalName}.
          </p>
          <p>
            La patente se usa para el cruce de ficha. No se publica. El
            historial de consultas se guarda el tiempo de la operación y de las
            obligaciones tributarias.
          </p>
          <p>
            Para acceder, corregir o borrar tus datos: {site.email}. Respuesta
            en 15 días hábiles, según la Ley 19.628.
          </p>
          <p>
            Este sitio no instala pauta de terceros. Si hay cookies técnicas,
            son las del propio dominio.
          </p>
        </div>
      </section>
    </>
  );
}
