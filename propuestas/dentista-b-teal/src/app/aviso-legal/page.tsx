import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Aviso legal" };

export default function AvisoLegalPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Aviso legal" />
      <Container className="max-w-3xl pb-24 text-[0.98rem] leading-relaxed text-muted-foreground">
        <p>
          {site.legalName}. Clínica dental en {site.fullAddress}. Teléfono{" "}
          {site.phoneIntl}. Correo {site.email}.
        </p>
        <p className="mt-4">
          Los contenidos de este sitio son informativos. No sustituyen una
          evaluación clínica. Los honorarios publicados son rangos
          orientativos en pesos chilenos; la cifra cerrada se entrega por
          escrito tras el diagnóstico.
        </p>
        <p className="mt-4">
          Bruma Odontología SpA. Vitacura, Santiago de Chile.
        </p>
      </Container>
    </>
  );
}
