import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Cookies" };

export default function CookiesPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Cookies" />
      <Container className="max-w-3xl py-16 text-[0.98rem] leading-relaxed text-muted-foreground sm:py-24">
        <p>
          Este sitio usa cookies técnicas imprescindibles para funcionar. No
          usamos cookies de publicidad de terceros. Si más adelante se activa
          medición, se avisará en esta página.
        </p>
      </Container>
    </>
  );
}
