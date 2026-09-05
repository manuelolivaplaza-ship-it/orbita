import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Agendar hora",
  description:
    "Agenda una hora en ETER Providencia. Bono electrónico, respuesta el mismo día hábil, cupo en 48 horas o se lo decimos.",
};

export default function AgendaPage() {
  return (
    <div className="shell grid gap-16 pb-28 pt-32 md:grid-cols-12 md:pt-40">
      <div className="md:col-span-5">
        <Reveal>
          <p className="kicker">Agenda</p>
          <h1 className="mt-5 font-display text-6xl font-light tracking-tight md:text-7xl">
            Pide hoy. Te vemos en 48 horas.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
            Te escribimos por WhatsApp para confirmar hora y bono electrónico.
            Si el cupo está lleno, se lo decimos altiro. Preferimos las
            mañanas: la casa todavía tiene luz norte.
          </p>
        </Reveal>

        <div className="relative mt-12 aspect-[4/5] overflow-hidden md:mt-16">
          <Image
            src="/images/ventana.jpg"
            alt="Ventana alta de ETER con eucalipto en la alféizar y piso de roble"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>

        <dl className="mt-10 space-y-6 text-sm">
          <div>
            <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
              Dirección
            </dt>
            <dd className="mt-2 text-tinta-suave">
              {site.address.line1}
              <br />
              {site.address.commune}, {site.address.city}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
              Teléfono
            </dt>
            <dd className="mt-2">
              <a href={site.phoneHref} className="link-line nums">
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
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
        <Suspense
          fallback={
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris">
              Cargando ficha…
            </p>
          }
        >
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
