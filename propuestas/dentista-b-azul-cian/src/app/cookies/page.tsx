import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookies" />
      <Container className="max-w-3xl pb-24 text-[0.98rem] leading-relaxed text-muted-foreground">
        <p>
          Este sitio usa cookies técnicas imprescindibles para funcionar
          (sesión, seguridad, preferencia de agenda). No usamos cookies de
          publicidad de terceros.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Analítica
        </h2>
        <p className="mt-3">
          Si en el futuro se activa una medición de visitas, será con una
          herramienta que no vende perfiles, y se avisará en esta página.
        </p>
        <h2 className="mt-10 font-display text-2xl text-foreground">
          Cómo gestionarlas
        </h2>
        <p className="mt-3">
          Puedes bloquear cookies en tu navegador. El formulario de hora
          seguirá funcionando.
        </p>
      </Container>
    </>
  );
}
