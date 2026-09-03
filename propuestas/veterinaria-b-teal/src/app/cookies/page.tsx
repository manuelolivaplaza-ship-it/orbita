import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Uso de cookies en el sitio de Estuario.",
};

export default function CookiesPage() {
  return (
    <>
      <PageIntro
        kicker="Cookies"
        title="Lo justo para que el sitio funcione."
        lead="Usamos cookies técnicas de sesión. No hay publicidad de terceros ni píxeles de seguimiento comercial."
      />
      <Container className="max-w-3xl pb-20 text-[0.98rem] leading-relaxed text-muted-foreground">
        <p>
          Si el navegador las bloquea, el formulario de hora y el menú móvil
          siguen funcionando. No hay un muro de consentimiento porque no hay
          nada que consentir más allá de lo técnico.
        </p>
      </Container>
    </>
  );
}
