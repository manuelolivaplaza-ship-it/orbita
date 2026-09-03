import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { VisitForm } from "@/components/visit-form";
import { site } from "@/data/site";
import { getVehicleOptions } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Agendar visita",
  description:
    "Visita Casa ETER con cita. Cuarenta minutos, Lo Barnechea, una pieza a la vez.",
};

type Props = { searchParams: Promise<{ pieza?: string }> };

export default async function VisitaPage({ searchParams }: Props) {
  const { pieza } = await searchParams;

  return (
    <div className="mx-auto grid max-w-[1440px] gap-16 px-6 pb-28 pt-32 md:grid-cols-12 md:px-10 md:pt-40 lg:px-16">
      <div className="md:col-span-5">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Con cita
          </p>
          <h1 className="mt-5 font-display text-6xl font-light tracking-tight md:text-7xl">
            Ven a la hora de la luz.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Cuarenta minutos. Una pieza, o la casa entera. Te escribimos por
            WhatsApp para confirmar. Preferimos las mañanas: el valle todavía
            tiene niebla.
          </p>
        </Reveal>

        <div className="relative mt-12 aspect-[4/5] overflow-hidden md:mt-16">
          <Image
            src="/images/reception.jpg"
            alt="Recepción de Casa ETER"
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
            <dd className="mt-2 text-ink-soft">
              {site.address.line1}
              <br />
              {site.address.commune}, {site.address.city}
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
        <VisitForm presetSlug={pieza} options={getVehicleOptions()} />
      </div>
    </div>
  );
}
