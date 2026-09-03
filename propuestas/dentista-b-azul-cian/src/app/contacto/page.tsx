import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cian Odontología, Av. Nueva Costanera 3900, Vitacura. Teléfono, WhatsApp, email y mapa.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Vitacura, a un lado del parque."
        lead="Av. Nueva Costanera 3900. Estacionamiento en el edificio. Te respondemos el mismo día hábil."
      />
      <Container className="pb-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <p className="text-[0.7rem] tracking-[0.16em] uppercase text-tide">
                Dirección
              </p>
              <p className="mt-2 text-lg">{site.fullAddress}</p>
              <a
                href={site.maps}
                className="mt-2 inline-block text-sm text-primary underline-offset-4 hover:underline"
              >
                Abrir en Google Maps
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.16em] uppercase text-tide">
                Teléfono
              </p>
              <a href={site.phoneHref} className="mt-2 block text-lg">
                {site.phoneIntl}
              </a>
              <a href={site.whatsapp} className="mt-1 block text-lg">
                WhatsApp {site.mobile}
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.16em] uppercase text-tide">
                Email
              </p>
              <a href={`mailto:${site.email}`} className="mt-2 block text-lg">
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.16em] uppercase text-tide">
                Horario
              </p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    {h.day}: {h.time}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-xl px-6">
                <Link href="/hora">Agendar hora</Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-xl px-6">
                <a href={site.instagram}>Instagram</a>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.4rem] border border-border">
            <iframe
              title="Mapa de Cian en Vitacura"
              src={site.mapsEmbed}
              className="h-[28rem] w-full grayscale-[30%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
