import type { Metadata } from "next";
import Image from "next/image";
import { CitaForm } from "@/components/cita-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Agendar montaje",
  description:
    "Pide hora en ETER La Reina. Montaje el mismo día, ponchadura en el día hábil, cotización por WhatsApp.",
};

type Props = { searchParams: Promise<{ medida?: string; servicio?: string }> };

export default async function CitaPage({ searchParams }: Props) {
  const { medida, servicio } = await searchParams;

  return (
    <div className="mx-auto grid max-w-[1440px] gap-16 px-6 pb-28 pt-32 md:grid-cols-12 md:px-10 md:pt-40 lg:px-16">
      <div className="md:col-span-5">
        <Reveal>
          <p className="kicker">Hora</p>
          <h1 className="mt-5 font-display text-6xl font-light tracking-tight md:text-7xl">
            Trae la patente. Nosotros leemos el costado.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Te confirmamos stock y cupo por WhatsApp. Si la llanta está ponchada,
            escríbenos ahora: {site.hoursShort}.
          </p>
        </Reveal>

        <div className="relative mt-12 aspect-[3/4] overflow-hidden md:mt-16">
          <Image
            src="/images/manometro.jpg"
            alt="Manómetro y tiza de talón sobre piedra clara"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>

        <dl className="mt-10 space-y-6 text-sm">
          <div>
            <dt className="kicker">Dirección</dt>
            <dd className="mt-2 text-ink-soft">
              {site.address.line1}
              <br />
              {site.address.commune}, {site.address.city}
            </dd>
          </div>
          <div>
            <dt className="kicker">WhatsApp</dt>
            <dd className="mt-2">
              <a href={site.whatsappHref} className="link-line">
                {site.whatsapp}
              </a>
            </dd>
          </div>
          <div>
            <dt className="kicker">Teléfono</dt>
            <dd className="mt-2">
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="md:col-span-6 md:col-start-7">
        <CitaForm presetMedida={medida} presetServicio={servicio} />
      </div>
    </div>
  );
}
