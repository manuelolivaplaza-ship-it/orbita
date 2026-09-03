import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Bruma Odontología, Av. Bicentenario 4050, Vitacura. Teléfono, WhatsApp y mapa.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos en el parque. No en un mall."
        lead="Av. Bicentenario, segundo piso. Si el GPS te deja en la laguna, vas bien."
      />
      <Container className="pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-lagoon">
                Teléfono
              </p>
              <a
                href={site.phoneHref}
                className="mt-2 block font-display text-4xl tracking-tight"
              >
                {site.phoneIntl}
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-lagoon">
                WhatsApp
              </p>
              <a
                href={site.whatsapp}
                className="mt-2 block font-display text-3xl tracking-tight hover:text-primary"
              >
                {site.whatsappDisplay}
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-lagoon">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg hover:text-primary"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-lagoon">
                Dirección
              </p>
              <p className="mt-2 text-lg">{site.fullAddress}</p>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-lagoon">
                Horario
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span className="text-foreground">{h.day}</span> · {h.time}
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild className="h-12 rounded-full px-6">
              <Link href="/primera-hora">Agendar hora</Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] border border-border">
            <iframe
              title="Mapa de Bruma en Vitacura"
              src={site.mapsEmbed}
              className="h-full min-h-[28rem] w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
