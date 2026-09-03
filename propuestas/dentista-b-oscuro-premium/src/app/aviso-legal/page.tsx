import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Aviso legal" };

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Aviso legal" />
      <Container className="max-w-3xl py-16 text-[0.98rem] leading-relaxed text-muted-foreground sm:py-24">
        <p>
          {site.legalName}. {site.fullAddress}. Teléfono {site.phoneIntl}.
          Correo {site.email}.
        </p>
        <p className="mt-6">
          Los valores publicados son referenciales. El valor final de cualquier
          tratamiento se confirma tras diagnóstico y se consigna por escrito
          antes de iniciar.
        </p>
        <p className="mt-6">
          La información de este sitio no sustituye una evaluación clínica. Si
          hay dolor o trauma, llama: no uses el formulario.
        </p>
      </Container>
    </>
  );
}
