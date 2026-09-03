import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agendar hora",
  description:
    "Pide tu primera visita en Cian, Vitacura. Te confirmamos el hueco por teléfono o WhatsApp el mismo día.",
};

export default function HoraPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Pide una hora. Te confirmamos en el día."
        lead="No es un calendario automático. Recepción mira la agenda real y te escribe. Si duele ahora, llama o WhatsApp: no esperes el formulario."
      />
      <Container className="pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <BookingForm />
          <aside className="rounded-[1.4rem] bg-navy p-8 text-background sm:p-10">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-cian">
              Más rápido
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">
              WhatsApp o teléfono.
            </h2>
            <p className="mt-4 leading-relaxed text-background/70">
              Si es urgencia, no uses el formulario. El hueco de la mañana se
              reserva por voz.
            </p>
            <a
              href={site.whatsapp}
              className="mt-6 inline-flex h-12 items-center rounded-xl bg-cian px-5 text-sm font-medium text-navy hover:bg-cian/90"
            >
              Escribir al {site.mobile}
            </a>
            <a
              href={site.phoneHref}
              className="mt-3 block text-sm text-background/80 hover:text-background"
            >
              Llamar {site.phoneIntl}
            </a>
            <div className="mt-8 h-px bg-background/15" />
            <ul className="mt-6 space-y-2 text-sm text-background/70">
              {site.hours.map((h) => (
                <li key={h.day}>
                  <span className="text-background">{h.day}:</span> {h.time}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </>
  );
}
