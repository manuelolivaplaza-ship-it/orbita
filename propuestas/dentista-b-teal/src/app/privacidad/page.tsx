import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacidad" };

export default function PrivacidadPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Política de privacidad" />
      <Container className="max-w-3xl pb-24 text-[0.98rem] leading-relaxed text-muted-foreground">
        <p>
          Responsable: {site.legalName}, {site.fullAddress}. {site.email}.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Datos que recabamos
        </h2>
        <p className="mt-3">
          Del formulario de hora: nombre, celular, email, motivo y notas. Se
          usan solo para confirmar la visita y, si lo autorizas, enviarte
          recordatorios por WhatsApp o correo.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Base legal
        </h2>
        <p className="mt-3">
          Consentimiento y, una vez eres paciente, la relación asistencial y
          la obligación de ficha clínica, conforme a la Ley 19.628 sobre
          protección de la vida privada y a la normativa sanitaria chilena.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Conservación y derechos
        </h2>
        <p className="mt-3">
          Las solicitudes de hora se conservan el tiempo necesario para
          gestionarlas. Puedes acceder, rectificar o suprimir tus datos
          escribiendo a {site.email}. También ante el Consejo para la
          Transparencia, en lo que corresponda.
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
