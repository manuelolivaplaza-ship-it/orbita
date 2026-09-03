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
          Este sitio usa cookies técnicas imprescindibles para su
          funcionamiento. No instalamos cookies de analítica ni publicidad
          hasta que un paciente (o la clínica) lo decida.
        </p>
        <p className="mt-4">
          Puedes bloquear cookies desde tu navegador. Si lo haces, algunas
          funciones —como el envío del formulario— pueden fallar.
        </p>
      </Container>
    </>
  );
}
