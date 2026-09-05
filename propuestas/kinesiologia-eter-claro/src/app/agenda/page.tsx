import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Agendar evaluación",
  description:
    "Agenda una evaluación kinésica en ETER. 50 minutos, Las Condes o domicilio. Respuesta el mismo día hábil.",
};

export default function AgendaPage() {
  return (
    <div className="shell grid gap-16 pb-28 pt-32 md:grid-cols-12 md:pt-40">
      <div className="md:col-span-5">
        <Reveal>
          <p className="kicker">Evaluación</p>
          <h1 className="mt-5 font-display text-6xl font-light tracking-tight md:text-7xl">
            Cincuenta minutos. Un plan.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-tinta-suave">
            Te escribimos por WhatsApp para confirmar. Preferimos las mañanas:
            la casa todavía tiene luz norte. Si el cupo del día está lleno, se
            lo decimos.
          </p>
        </Reveal>

        <div className="relative mt-12 aspect-[4/5] overflow-hidden md:mt-16">
          <Image
            src="/images/reception.jpg"
            alt="Entrada de ETER: banco de roble, lino y puerta de vidrio al patio"
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
        <BookingForm />
      </div>
    </div>
  );
}
