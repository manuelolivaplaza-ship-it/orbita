import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { site, visitSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Primera hora",
  description:
    "Agenda tu primera visita en Bruma, Vitacura. Te confirmamos hueco el mismo día por teléfono o WhatsApp.",
};

export default function PrimeraHoraPage() {
  return (
    <>
      <PageHero
        eyebrow="Primera hora"
        title="Dinos un día. Nosotros el hueco."
        lead="No es un calendario cerrado. Recepción te llama para encajar tratamiento, doctor y —si lo pides— más tiempo."
      />
      <Container className="pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <BookingForm />
          <aside className="h-fit space-y-8">
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-lagoon">
                Preferimos voz
              </p>
              <a
                href={site.phoneHref}
                className="mt-2 block font-display text-3xl tracking-tight"
              >
                {site.phoneIntl}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                Lun–jue 8:30–19:30 · vie 8:30–18 · sáb 9–14
              </p>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-lagoon">
                WhatsApp
              </p>
              <a
                href={site.whatsapp}
                className="mt-2 block text-lg hover:text-primary"
              >
                {site.whatsappDisplay}
              </a>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-lagoon">
                Dónde
              </p>
              <p className="mt-2 text-lg">{site.fullAddress}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Estacionamiento subterráneo en el edificio.
              </p>
            </div>
            <ol className="space-y-4 border-t border-border pt-8">
              {visitSteps.map((s) => (
                <li key={s.n}>
                  <span className="text-[0.7rem] tracking-[0.16em] uppercase text-lagoon">
                    {s.n}
                  </span>
                  <p className="font-display text-xl">{s.title}</p>
                </li>
              ))}
            </ol>
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
