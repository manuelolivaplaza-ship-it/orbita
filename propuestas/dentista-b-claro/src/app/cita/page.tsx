import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reservar cita",
  description:
    "Pide tu primera visita en Alba. Te confirmamos hueco el mismo día por teléfono o WhatsApp.",
};

export default function CitaPage() {
  return (
    <>
      <PageHero
        eyebrow="Cita"
        title="Dinos un día. Nosotros el hueco."
        lead="No es un calendario cerrado. Recepción te llama para encajar tratamiento, doctor y —si lo pides— más tiempo."
      />
      <Container className="pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <BookingForm />
          <aside className="h-fit space-y-8">
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-sage">
                Preferimos voz
              </p>
              <a
                href={site.phoneHref}
                className="mt-2 block font-display text-3xl tracking-tight"
              >
                {site.phoneIntl}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                Lun–jue 9–20 · vie 9–18
              </p>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-sage">
                WhatsApp
              </p>
              <a
                href={site.whatsapp}
                className="mt-2 block text-lg hover:text-primary"
              >
                Escribir ahora
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-sage">
                Dónde
              </p>
              <p className="mt-2 text-lg">{site.fullAddress}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Si hay dolor, no uses este formulario. Llama. Guardamos un hueco
              de urgencia cada mañana.
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}
