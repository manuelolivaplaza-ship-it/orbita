import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Pedir hora",
  description:
    "Agenda una consulta en NOCTUA Vitacura. Último cupo 22:00. Respuesta el mismo día hábil. No somos urgencia.",
};

export default function AgendaPage() {
  return (
    <div className="shell grid gap-16 pb-28 pt-32 md:grid-cols-12 md:pt-40">
      <div className="md:col-span-5">
        <Reveal>
          <p className="kicker">Hora</p>
          <h1 className="mt-5 font-display text-6xl font-semibold tracking-tight md:text-7xl">
            Cuarenta minutos. Un nombre.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            Te escribimos por WhatsApp para confirmar. Preferimos la noche: el
            síntoma ya dejó de representar. Si el cupo del día está lleno, se
            lo decimos. Si es urgencia, vaya al 131.
          </p>
        </Reveal>

        <div className="relative mt-12 aspect-[4/5] overflow-hidden md:mt-16">
          <Image
            src="/images/espera.jpg"
            alt="Pabellón de espera NOCTUA de noche, con el jardín al otro lado del vidrio"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>

        <dl className="mt-10 space-y-6 text-sm">
          <div>
            <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              Dirección
            </dt>
            <dd className="mt-2 text-paper-dim">
              {site.address.line1}
              <br />
              {site.address.commune}, {site.address.city}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              Teléfono
            </dt>
            <dd className="mt-2">
              <a href={site.phoneHref} className="link-line nums">
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              WhatsApp
            </dt>
            <dd className="mt-2">
              <a href={site.whatsappHref} className="link-line">
                {site.whatsapp}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="md:col-span-6 md:col-start-7">
        <Suspense fallback={null}>
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
