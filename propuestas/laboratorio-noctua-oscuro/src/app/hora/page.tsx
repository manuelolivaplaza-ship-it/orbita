import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/components/booking-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Pedir hora",
  description:
    "Agenda una toma en NOCTUA: amanecer, ocaso o domicilio. Te confirmamos por WhatsApp.",
};

export default function HoraPage() {
  return (
    <>
      <PageIntro
        kicker="Agenda"
        title="Amanecer o ocaso."
        lead={`Último cupo de toma ${site.lastDraw}. El informe, a las ${site.informeHour}. Te confirmamos por WhatsApp, con la preparación exacta.`}
      />
      <section className="shell grid gap-16 pb-28 md:grid-cols-12 md:pb-36">
        <div className="md:col-span-8">
          <Suspense
            fallback={
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                Cargando formulario…
              </p>
            }
          >
            <BookingForm />
          </Suspense>
        </div>
        <aside className="md:col-span-4">
          <p className="kicker">También</p>
          <p className="mt-4 text-sm leading-relaxed text-paper-dim">
            WhatsApp {site.whatsapp}. Teléfono {site.phone}. Si es domicilio,
            Ignacio coordina la noche anterior.
          </p>
          <a href={site.whatsappHref} className="btn btn-ghost mt-8">
            Escribir ahora
          </a>
        </aside>
      </section>
    </>
  );
}
