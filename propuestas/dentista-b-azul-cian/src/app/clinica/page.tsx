import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "La clínica",
  description:
    "Cian en Vitacura: piedra, vidrio, un canal de agua y cuatro suites privadas. Odontología contemporánea frente a la cordillera.",
};

const rooms = [
  {
    src: "/images/reception.jpg",
    alt: "Recepción con canal de agua cian",
    caption: "Recepción · el canal",
  },
  {
    src: "/images/corridor.jpg",
    alt: "Pasillo de cristal con línea de luz cian",
    caption: "Pasillo · la línea",
  },
  {
    src: "/images/suite.jpg",
    alt: "Suite de tratamiento con vista a los Andes",
    caption: "Suite · la cordillera",
  },
  {
    src: "/images/lounge.jpg",
    alt: "Sala de espera con vista al espejo de agua",
    caption: "Espera · el silencio",
  },
];

export default function ClinicaPage() {
  return (
    <>
      <PageHero
        eyebrow="La clínica"
        title="Vitacura, con la cordillera al este."
        lead="Nueva Costanera. Un edificio bajo de piedra y vidrio, un espejo de agua, y dentro: cuatro suites, un protocolo y nadie gritando tu nombre desde un pasillo."
      />
      <Container className="pb-10">
        <div className="relative aspect-[16/8] overflow-hidden rounded-[1.6rem]">
          <Image
            src="/images/facade.jpg"
            alt="Fachada de Cian en Vitacura, con espejo de agua y los Andes"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </Container>
      <Container className="pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              El espacio es la primera prueba.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Diseñamos Cian como se diseña un diagnóstico: sin ruido. El canal
              de agua no es un spa. Es una línea —la misma que recorre el
              pasillo, la misma que aparece en el escáner— para recordar que
              aquí se muestra, no se resume.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Estacionamiento en el edificio, 90 minutos de cortesía. Uber y
              Cabify dejan en la puerta. Si vienes en hora punta, agenda a las
              8:30 o después de las 18:00: el sillón no pelea con la
              Costanera.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <dl className="grid gap-6 sm:grid-cols-2">
              {[
                ["Dirección", site.fullAddress],
                ["Teléfono", site.phoneIntl],
                ["WhatsApp", site.mobile],
                ["Email", site.email],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-tide">
                    {k}
                  </dt>
                  <dd className="mt-2 text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <Button asChild className="mt-8 h-12 rounded-xl px-6">
              <Link href="/hora">Agendar una hora</Link>
            </Button>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {rooms.map((r) => (
            <figure key={r.src} className="group">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.4rem]">
                <Image
                  src={r.src}
                  alt={r.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {r.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </>
  );
}
