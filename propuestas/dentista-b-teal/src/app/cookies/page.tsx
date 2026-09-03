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
          (sesión, seguridad). No usamos cookies de publicidad ni de
          seguimiento de terceros con fines comerciales.
        </p>
        <p className="mt-4">
          Si en el futuro activamos analítica, te lo pediremos de forma
          expresa. Puedes borrar cookies desde tu navegador cuando quieras.
        </p>
      </Container>
    </>
  );
}
