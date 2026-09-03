import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HoursLive } from "@/components/hours-live";
import { Button } from "@/components/ui/button";
import { clinic, hours, whatsappUrl } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Gorriti 4872, Palermo. Teléfono y WhatsApp 11 4800 2140. Consultorio de lunes a sábado, urgencias las 24 horas.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
        <p className="kicker">Contacto</p>
        <h1 className="display mt-5 max-w-3xl text-[2.45rem] leading-[1.06] sm:text-6xl lg:text-7xl">
          La puerta verde, en la esquina.
        </h1>
      </section>

      <div className="relative mx-auto max-w-[88rem] sm:px-5">
        <div className="relative aspect-[16/9] overflow-hidden sm:rounded-[1.6rem]">
          <Image
            src="/images/facade.jpg"
            alt="Fachada de Alba en Gorriti y la esquina de Palermo"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-3">
        <div>
          <p className="kicker">Dónde</p>
          <p className="mt-4 font-heading text-3xl italic">
            {clinic.address}
            <br />
            {clinic.neighborhood}
          </p>
          <p className="mt-3 text-muted-foreground">{clinic.city}</p>
          <Button asChild variant="link" className="mt-4 h-auto px-0">
            <a href={clinic.mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </Button>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Estacionamiento medido en la calle. Playa paga a tres cuadras. Colectivos
            29, 39, 111 y 152. Subte D, estación Plaza Italia, diez minutos a pie.
          </p>
        </div>

        <div>
          <p className="kicker">Escribir</p>
          <ul className="mt-4 space-y-3 text-lg">
            <li>
              <a href={`tel:${clinic.phoneTel}`} className="hover:underline">
                {clinic.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} className="hover:underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${clinic.email}`} className="hover:underline">
                {clinic.email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${clinic.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                @{clinic.instagram}
              </a>
            </li>
          </ul>
          <Button asChild className="mt-8 h-12 rounded-full px-6">
            <Link href="/turnos">Pedir turno</Link>
          </Button>
        </div>

        <div>
          <p className="kicker">Cuándo</p>
          <div className="mt-4">
            <HoursLive />
          </div>
          <ul className="mt-6 space-y-3">
            {hours.map((entry) => (
              <li key={entry.label} className="flex justify-between gap-4 text-sm">
                <span className="text-muted-foreground">{entry.label}</span>
                <span>{entry.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
