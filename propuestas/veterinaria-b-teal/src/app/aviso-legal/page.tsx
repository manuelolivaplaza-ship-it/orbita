import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de Estuario Clínica Veterinaria.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Aviso legal"
        title="Quién está detrás."
        lead={`${site.legalName}, RUT ${site.rut}. Hospital veterinario en ${site.fullAddress}.`}
      />
      <Container className="max-w-3xl pb-20 text-[0.98rem] leading-relaxed text-muted-foreground">
        <p>
          El contenido de este sitio es informativo. No reemplaza una
          consulta. En urgencia, llama al {site.phoneIntl}.
        </p>
        <p className="mt-4">
          Los honorarios publicados son referenciales en pesos chilenos y se
          confirman por escrito antes de cualquier procedimiento no vital.
        </p>
        <p className="mt-4">
          Fotografías del edificio, el equipo y los animales atendidos en
          Estuario. Queda prohibida su reproducción con fines comerciales
          ajenos a la clínica.
        </p>
      </Container>
    </>
  );
}
