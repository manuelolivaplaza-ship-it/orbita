import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Altitude } from "@/components/altitude";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { rooms } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Campus",
  description:
    "Campus El Arrayán, Lo Barnechea. Claustro, biblioteca, talleres, laboratorio de atmósfera y residencia. 847 metros.",
};

export default function CampusPage() {
  return (
    <>
      <PageIntro
        kicker="Campus El Arrayán"
        title="El predio se camina en doce minutos."
        lead={`${site.address.line1}, ${site.address.commune}. Hormigón claro, raulí, lino, una acequia. El macizo no es un fondo de Zoom: está a la vista desde el seminario.`}
      />

      <section className="relative min-h-[70svh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Patio de ETER: columnata, acequia y quillay frente a los Andes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="border-b border-linea py-16">
        <div className="shell grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Altitude />
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-tinta-suave md:col-span-7 md:col-start-6">
            El campus no es un parque temático ni un mall de aulas. Es un
            claustro, naves de taller, una biblioteca y una estación. {site.access}.
            Estacionamiento en el predio, {site.parking.split("·")[1]?.trim()}.
          </p>
        </div>
      </section>

      {rooms.map((room, index) => {
        const reverse = index % 2 === 1;
        return (
          <section key={room.slug} className="border-b border-linea">
            <div className="grid md:grid-cols-12">
              <div
                className={`relative min-h-[340px] md:col-span-7 md:min-h-[560px] ${reverse ? "md:col-start-6 md:row-start-1" : ""}`}
              >
                <Image
                  src={room.image}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`flex flex-col justify-center px-6 py-16 md:col-span-5 md:px-12 lg:px-16 ${reverse ? "md:col-start-1 md:row-start-1" : ""}`}
              >
                <Reveal>
                  <p className="kicker">0{index + 1}</p>
                  <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
                    {room.title}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-tinta-suave">
                    {room.text}
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="kicker">Visitas</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
              Sábados, una hora, con inscripción.
            </h2>
            <p className="mt-6 max-w-md text-tinta-suave">
              De marzo a enero, 9:00 a 13:00. El recorrido lo guía un
              estudiante: claustro, biblioteca, un taller, el seminario. No hay
              stand ni globo.
            </p>
            <Link href="/contacto" className="btn btn-ink mt-10 w-fit">
              Inscribir una visita
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
