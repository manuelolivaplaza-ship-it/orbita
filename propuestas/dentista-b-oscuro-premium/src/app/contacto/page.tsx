import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Obsidiana Odontología, Av. Alonso de Córdova 5870, of. 304, Vitacura. +56 9 8123 4567.",
};

export default function ContactoPage() {
  return (
    <>
      <PageIntro
        eyebrow="Vitacura"
        title="Alonso de Córdova 5870."
        lead="Oficina 304. Estacionamiento en el edificio. Si llegas con dolor, avisa: hay cupo de urgencia cada mañana."
      />
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5">
            <div>
              <p className="kicker">Teléfono</p>
              <a
                href={site.phoneHref}
                className="mt-2 block font-display text-2xl tabular"
              >
                {site.phone}
              </a>
            </div>
            <div>
              <p className="kicker">WhatsApp</p>
              <a
                href={site.whatsapp}
                className="mt-2 block font-display text-2xl hover:text-champagne"
              >
                Escribir
              </a>
            </div>
            <div>
              <p className="kicker">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block hover:text-champagne"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="kicker">Horario</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span className="text-foreground">{h.day}: </span>
                    {h.time}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-span-2">
              <p className="kicker">Dirección</p>
              <p className="mt-2">{site.fullAddress}</p>
              <a
                href={site.maps}
                className="mt-2 inline-block text-sm text-champagne hover:underline"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <iframe
              title="Mapa de Obsidiana en Vitacura"
              src={site.mapsEmbed}
              className="h-[22rem] w-full border border-line grayscale invert-[0.88] sm:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
