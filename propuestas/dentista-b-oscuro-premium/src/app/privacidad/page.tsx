import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacidad" };

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Política de privacidad" />
      <Container className="max-w-3xl py-16 text-[0.98rem] leading-relaxed text-muted-foreground sm:py-24">
        <p>
          Responsable: {site.legalName}, {site.fullAddress}. {site.email}.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Datos que recabamos
        </h2>
        <p className="mt-3">
          Del formulario de agenda: nombre, teléfono, email, previsión, motivo
          y notas. Se usan solo para confirmar la evaluación y, si lo
          autorizas, enviarte recordatorios.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Base legal
        </h2>
        <p className="mt-3">
          Consentimiento y, una vez eres paciente, la relación asistencial y la
          obligación de ficha clínica. Ley 19.628 sobre Protección de la Vida
          Privada y normativa sanitaria aplicable.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Conservación y derechos
        </h2>
        <p className="mt-3">
          Las solicitudes se conservan el tiempo necesario para gestionarlas.
          Puedes acceder, rectificar o suprimir tus datos escribiendo a{" "}
          {site.email}. También ante la Agencia de Protección de Datos
          Personales.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Encargados
        </h2>
        <p className="mt-3">
          El alojamiento del sitio y el software de clínica, cuando se active,
          tratarán datos bajo contrato de encargo.
        </p>
      </Container>
    </>
  );
}
