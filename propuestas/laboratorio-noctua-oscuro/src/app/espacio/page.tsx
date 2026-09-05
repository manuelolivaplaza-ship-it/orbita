import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Espacio",
  description:
    "La casa de NOCTUA en Alonso de Córdova, Vitacura: piedra volcánica, una ventana ámbar, el laboratorio que no apaga.",
};

const rooms = [
  {
    src: "/images/waiting.jpg",
    alt: "Sala de espera: un sillón de lino oscuro y la ciudad de noche",
    caption: "Espera · una silla, sin televisor",
  },
  {
    src: "/images/hands.jpg",
    alt: "Sala de toma, lámpara ámbar",
    caption: "Toma · la punción breve",
  },
  {
    src: "/images/analyzers.jpg",
    alt: "Sala de procesamiento nocturno",
    caption: "Turno · analizadores a las 02:00",
  },
  {
    src: "/images/corridor.jpg",
    alt: "Pasillo oscuro del laboratorio",
    caption: "Pasillo · la luz al fondo",
  },
  {
    src: "/images/microscope.jpg",
    alt: "Microscopio en la oscuridad",
    caption: "Morfología · cuando el número no basta",
  },
  {
    src: "/images/facade.jpg",
    alt: "Fachada nocturna",
    caption: "Vitacura · la ventana que no se apaga",
  },
];

export default function EspacioPage() {
  return (
    <>
      <PageIntro
        kicker="La casa"
        title="Piedra, ámbar, silencio."
        lead={`${site.address.line1}, ${site.address.commune}. No es un strip. Es una casa de piedra volcánica con una ventana que se ve encendida a las tres de la mañana.`}
      />

      <section className="shell grid gap-4 pb-8 md:grid-cols-12">
        {rooms.map((room, index) => (
          <Reveal
            key={room.src}
            delay={index * 60}
            className={
              index === 0 || index === 5
                ? "md:col-span-12"
                : "md:col-span-6"
            }
          >
            <figure>
              <div
                className={`frame ${
                  index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes={index === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                {room.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </section>

      <section className="shell grid gap-12 py-24 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <h2 className="font-display text-4xl font-semibold tracking-tight">
            Cómo se llega.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7 text-paper-dim" delay={80}>
          <p>{site.metro}.</p>
          <p className="mt-3">{site.parking}.</p>
          <p className="mt-3">
            Si vienes en ayunas al ocaso, hay agua. No hay café a la vista: no
            es crueldad, es el método.
          </p>
          <a href={site.address.maps} className="btn btn-ghost mt-8">
            Abrir mapa
            <Arrow />
          </a>
          <Link href="/sucursales" className="btn btn-amber mt-3 ml-0 md:ml-3">
            Las tres sucursales
          </Link>
        </Reveal>
      </section>
    </>
  );
}
