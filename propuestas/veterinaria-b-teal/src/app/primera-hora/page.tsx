import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { bringList, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agendar hora",
  description:
    "Pide una hora en Estuario, Isla Teja. Te confirmamos por teléfono o WhatsApp. Si duele ahora, llama al +56 63 221 8440.",
};

export default function PrimeraHoraPage() {
  return (
    <>
      <PageIntro
        kicker="Agenda"
        title="Pide hora."
        italic="Te confirmamos en el día."
        lead="Recepción escribe por teléfono o WhatsApp. Si el animal duele ahora, no uses este formulario: llama."
      />
      <Container className="pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <BookingForm />
          <aside>
            <p className="kicker">Qué traer</p>
            <ul className="mt-6 space-y-3 text-sm">
              {bringList.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-moss" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-[1.4rem] bg-deep p-6 text-primary-foreground">
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-moss">
                Si duele
              </p>
              <p className="mt-3 font-display text-3xl tracking-tight">
                {site.phoneIntl}
              </p>
              <p className="mt-3 text-sm text-primary-foreground/75">
                Urgencias 24 h. WhatsApp de recepción solo en horario de
                consultas: {site.whatsappDisplay}.
              </p>
              <a
                href={site.phoneHref}
                className="mt-5 inline-block text-sm underline underline-offset-4"
              >
                Llamar ahora
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
