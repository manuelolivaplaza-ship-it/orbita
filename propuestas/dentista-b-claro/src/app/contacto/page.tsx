import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Alba Atelier Dental. Calle Jorge Juan 42, Madrid. Teléfono, WhatsApp, horario y mapa.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos en Salamanca. Y al teléfono."
        lead={site.fullAddress}
      />
      <Container className="pb-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-sage">
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
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-sage">
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
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-sage">
                Horario
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span className="text-foreground">{h.day} · </span>
                    {h.time}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full px-6">
                <Link href="/cita">Reservar visita</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6">
                <a href={site.whatsapp}>WhatsApp</a>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] border border-border">
            <iframe
              title="Mapa de Alba en Jorge Juan, Madrid"
              src={site.mapsEmbed}
              className="h-[420px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
