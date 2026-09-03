import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { HoursLive } from "@/components/hours-live";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Estuario, Los Robles 1240, Isla Teja, Valdivia. Teléfono, WhatsApp, horario de consultas y UCI 24 h.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        kicker="Contacto"
        title="Isla Teja,"
        italic="orilla del Calle-Calle."
        lead="Estacionamiento cubierto. Colectivos a Isla Teja. Si llueve —llueve— ven igual."
      />
      <Container className="pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-display text-3xl tracking-tight">
              {site.fullAddress}
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-moss">
                  Teléfono
                </dt>
                <dd className="mt-1 text-lg">
                  <a href={site.phoneHref}>{site.phoneIntl}</a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-moss">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a href={site.whatsapp}>{site.whatsappDisplay}</a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-moss">
                  Correo
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              {site.hours.map((h) => (
                <li key={h.day}>
                  <span className="text-foreground">{h.day}:</span> {h.time}
                </li>
              ))}
            </ul>
            <HoursLive className="mt-6" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-11 rounded-full px-6">
                <a href={site.maps} target="_blank" rel="noreferrer">
                  Abrir en Maps
                </a>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full px-6">
                <Link href="/primera-hora">Agendar hora</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.6rem] border border-border">
            <iframe
              title="Mapa de Estuario en Isla Teja, Valdivia"
              src={site.mapsEmbed}
              className="h-[22rem] w-full lg:h-full min-h-[22rem]"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
