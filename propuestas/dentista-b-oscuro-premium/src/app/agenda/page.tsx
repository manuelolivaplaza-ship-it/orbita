import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agendar evaluación",
  description:
    "Pide tu primera evaluación en Obsidiana Vitacura. Te confirmamos hora el mismo día por teléfono o WhatsApp.",
};

export default function AgendaPage() {
  return (
    <>
      <PageIntro
        eyebrow="Agenda"
        title="Dinos un día. Nosotros la hora."
        lead="No es un calendario cerrado. Recepción te llama para encajar especialista, tiempo y —si duele— el mismo día."
      />
      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <BookingForm />
          <aside className="h-fit space-y-8">
            <div>
              <p className="kicker">Preferimos voz</p>
              <a
                href={site.phoneHref}
                className="mt-2 block font-display text-3xl tracking-tight tabular"
              >
                {site.phoneIntl}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                Lun–vie 9:00–19:30 · sáb 10:00–14:00
              </p>
            </div>
            <div>
              <p className="kicker">WhatsApp</p>
              <a
                href={site.whatsapp}
                className="mt-2 block text-lg hover:text-champagne"
              >
                Escribir ahora
              </a>
            </div>
            <div>
              <p className="kicker">Dónde</p>
              <p className="mt-2 text-lg">{site.fullAddress}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Si hay dolor, no uses este formulario. Llama. Guardamos un cupo
              de urgencia cada mañana.
            </p>
          </aside>
        </div>
      </Container>
    </>
  );
}
