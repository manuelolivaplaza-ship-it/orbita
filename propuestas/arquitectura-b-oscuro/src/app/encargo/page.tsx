import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Encargo",
  description:
    "Conversar sobre un predio con UMBRAL. Responde el arquitecto, no un ejecutivo.",
};

export default function EncargoPage() {
  return (
    <>
      <PageIntro
        kicker="Primera conversación"
        title="Encargo"
        lead="Cuéntanos el predio, el programa y el presupuesto en UF. Si calza, coordinamos una hora en Las Condes o una visita al terreno."
      />

      <section className="shell grid gap-16 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker">Estudio</p>
          <p className="mt-4 text-[15px] leading-8 text-paper-dim">
            {studio.address}
            <br />
            {studio.neighborhood}
            <br />
            {studio.hours}
          </p>
          <a
            href={studio.phoneHref}
            className="mt-8 block font-display text-4xl tabular tracking-tight"
          >
            {studio.phone}
          </a>
          <a href={`mailto:${studio.email}`} className="link-line mt-3 inline-block text-paper-dim">
            {studio.email}
          </a>
          <p className="mt-8 text-sm text-muted">
            Responde el arquitecto, no un ejecutivo.
          </p>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
