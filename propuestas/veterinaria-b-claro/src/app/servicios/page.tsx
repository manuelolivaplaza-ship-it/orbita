import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Consulta, prevención, cirugía, imágenes, laboratorio, odontología, internación, urgencias, medicina felina, exóticos, nutrición y cardiología.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-24">
        <p className="kicker">Servicios</p>
        <h1 className="display mt-5 max-w-3xl text-[2.45rem] leading-[1.06] sm:text-6xl lg:text-7xl">
          Todo lo que un animal puede necesitar, sin mandarlo a otro lado.
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground">
          Si hay que derivar, se deriva con nombre y teléfono. El resto se
          resuelve acá, con el mismo médico que ya conoce la historia.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="group overflow-hidden rounded-[1.4rem] border border-border bg-card"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7">
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {service.duration}
                </p>
                <h2 className="mt-3 font-heading text-3xl italic">{service.name}</h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm">
                  Ver
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
