import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { Reveal } from "@/components/reveal";
import { VisitFormFromQuery } from "@/components/visit-form";
import { site } from "@/data/site";
import { getVehicleOptions } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Agendar visita",
  description:
    "Visita Casa NOCTUA con cita. Cuarenta minutos, Vitacura, después del crepúsculo.",
};

export default function VisitaPage() {

  return (
    <div className="mx-auto grid max-w-[1440px] gap-16 px-6 pb-28 pt-32 md:grid-cols-12 md:px-10 md:pt-40 lg:px-16">
      <div className="md:col-span-5">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Con cita
          </p>
          <h1 className="mt-5 font-display text-6xl font-semibold tracking-tight md:text-7xl">
            Ven a la hora Noctua.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            Cuarenta minutos. Una pieza, o la casa entera. Te escribimos por
            WhatsApp para confirmar. Preferimos las veinte: la ciudad ya bajó la
            voz y el asfalto todavía guarda el calor.
          </p>
        </Reveal>

        <div className="relative mt-12 aspect-[4/5] overflow-hidden md:mt-16">
          <Image
            src="/images/headlight.jpg"
            alt="Farol de un auto de la casa, como un ojo preciso"
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
              Horario
            </dt>
            <dd className="mt-2 text-paper-dim">
              Martes a sábado, 18:00 – 00:00
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
          <div>
            <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
              Correo
            </dt>
            <dd className="mt-2">
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="md:col-span-6 md:col-start-7 md:pt-24">
        <Suspense fallback={null}>
          <VisitFormFromQuery options={getVehicleOptions()} />
        </Suspense>
      </div>
    </div>
  );
}
