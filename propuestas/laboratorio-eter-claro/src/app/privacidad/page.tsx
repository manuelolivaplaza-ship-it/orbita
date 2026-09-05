import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad y tratamiento de datos de ETER Laboratorio Clínico.",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        kicker="Privacidad"
        title="Tus datos no son un anexo."
        lead="Un laboratorio guarda lo más íntimo que un cuerpo puede decir. Lo tratamos como tal."
      />
      <div className="wrap-narrow space-y-8 pb-24 text-lg leading-relaxed text-ink-soft">
        <p>
          {site.legal} (RUT {site.rut}) es responsable del tratamiento de tus
          datos personales y de salud, de acuerdo con la Ley N° 19.628 y las
          normas sanitarias vigentes en Chile.
        </p>
        <p>
          Recogemos nombre, RUT, contacto, orden médica y resultados con el
          único fin de tomar la muestra, producir el informe y entregártelo a
          ti o a quien autorices por escrito. No vendemos bases. No enviamos
          marketing con tus valores clínicos.
        </p>
        <p>
          El acceso al portal de resultados exige RUT y un código de un solo
          uso enviado a tu correo. Los informes de VIH y de salud sexual se
          entregan con reserva reforzada.
        </p>
        <p>
          Conservamos las muestras el tiempo técnico necesario y los informes
          el plazo que exige la normativa. Puedes pedir acceso, rectificación
          o cancelación en {site.email}.
        </p>
        <p>Santiago de Chile. Última actualización: marzo 2026.</p>
      </div>
    </>
  );
}
