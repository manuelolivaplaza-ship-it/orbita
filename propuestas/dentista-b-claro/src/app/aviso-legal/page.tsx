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
          {site.legalName}, con domicilio en {site.fullAddress}. Contacto:{" "}
          {site.email} · {site.phoneIntl}.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Objeto
        </h2>
        <p className="mt-3">
          Este sitio informa sobre los servicios de odontología de Alba y
          permite solicitar cita. No sustituye una consulta clínica.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Propiedad intelectual
        </h2>
        <p className="mt-3">
          Textos, fotografías y marca Alba son titularidad de {site.legalName}.
          Queda prohibida su reproducción sin autorización.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Responsabilidad
        </h2>
        <p className="mt-3">
          Los honorarios publicados son orientativos. El plan de tratamiento y
          su coste se confirman por escrito tras el diagnóstico.
        </p>
      </Container>
    </>
  );
}
