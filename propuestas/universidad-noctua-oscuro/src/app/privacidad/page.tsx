import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Política de privacidad de la Fundación Instituto NOCTUA.",
};

const sections = [
  {
    title: "Qué recabamos",
    text: "Nombre, correo, celular, comuna y carrera de interés, cuando escribes a Admisión. No compramos listas. No rastreamos más de lo necesario para servir este sitio.",
  },
  {
    title: "Para qué",
    text: "Responder tu postulación, agendar entrevista o vigilia, y enviarte las ponderaciones de la carrera que elegiste. No usamos tus datos para publicidad de terceros.",
  },
  {
    title: "Cuánto tiempo",
    text: "Los datos de una postulación se conservan el ciclo de admisión correspondiente y el año siguiente, por si hay lista de espera declarada. Después se eliminan.",
  },
  {
    title: "Tus derechos",
    text: `Puedes pedir acceso, rectificación o eliminación escribiendo a ${site.email}. Respondemos en diez días hábiles. La autoridad competente en Chile es el organismo que corresponda según la Ley 19.628 y la normativa vigente.`,
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        kicker="Privacidad"
        title="Tus datos no son un activo."
        lead={`${site.legalName}, RUT ${site.rut}. Lo que escribes a Admisión queda en Admisión.`}
      />
      <section className="border-t border-line py-24">
        <div className="shell max-w-3xl space-y-12">
          {sections.map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-4 leading-relaxed text-paper-dim">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
