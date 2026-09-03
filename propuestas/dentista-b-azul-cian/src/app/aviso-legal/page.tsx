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
          Titular: {site.legalName}, RUT {site.rut}, {site.fullAddress}.
          Contacto: {site.email} · {site.phoneIntl}.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Objeto
        </h2>
        <p className="mt-3">
          Este sitio informa sobre los servicios odontológicos de Cian y
          permite solicitar una hora. No sustituye una consulta clínica. Los
          rangos de honorarios son orientativos; la cifra se cierra por escrito
          tras el diagnóstico.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Propiedad
        </h2>
        <p className="mt-3">
          Textos, fotografías y marca CIAN son de {site.legalName}, salvo que
          se indique otra autoría. Queda prohibida su reproducción sin
          autorización.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Responsabilidad
        </h2>
        <p className="mt-3">
          Los casos publicados son reales, con consentimiento. Los resultados
          no son transferibles. La odontología no ofrece garantías de
          resultado estético idéntico.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Consumidor
        </h2>
        <p className="mt-3">
          Derechos del consumidor según la Ley 19.496. Reclamos: {site.email}{" "}
          o SERNAC.
        </p>
      </Container>
    </>
  );
}
