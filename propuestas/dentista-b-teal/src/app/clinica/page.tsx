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
    "Pabellón de vidrio junto al Parque Bicentenario, en Vitacura. Suites privadas, piedra teal, luz de laguna.",
};

const spaces = [
  {
    src: "/images/reception.jpg",
    alt: "Recepción: piedra teal, roble y la laguna",
    title: "Recepción",
    text: "Un mostrador de piedra honed, agua quieta, y nadie llamándote por apellido en voz alta.",
  },
  {
    src: "/images/suite.jpg",
    alt: "Suite de tratamiento con vista a la laguna",
    title: "Suite",
    text: "Cuatro boxes privados. El sillón mira al parque. El instrumental, escondido.",
  },
  {
    src: "/images/corridor.jpg",
    alt: "Corredor de vidrio hacia el agua",
    title: "Corredor",
    text: "Vidrio, lino, una piscina interior que no es adorno: es el ritmo de la casa.",
  },
];

export default function ClinicaPage() {
  return (
    <>
      <PageHero
        eyebrow="La clínica"
        title="Un pabellón de vidrio sobre el agua."
        lead="Vitacura, segundo piso, frente al Parque Bicentenario. No es un consultorio de pasillo. Es un lugar donde el tiempo de sillón no se recorta."
      />
      <Container className="pb-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem]">
          <Image
            src="/images/facade.jpg"
            alt="Fachada de Bruma al amanecer"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </Container>
      <Container className="pb-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
              El lugar
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
              Piedra teal, roble, Andes al fondo.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Elegimos Vitacura porque el parque ya hacía el trabajo: agua,
              silencio, una línea de montaña. El pabellón solo tenía que no
              estropearlo. Por eso el vidrio, por eso la piedra verde, por eso
              no hay radio en la recepción.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Estacionamiento subterráneo en el edificio. Acceso por Av.
              Bicentenario. Si vienes en auto, te esperamos en el segundo piso.
              Si vienes con miedo, también.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-border bg-card p-6">
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground">
                  Dirección
                </dt>
                <dd className="mt-2 font-display text-xl leading-snug">
                  {site.fullAddress}
                </dd>
              </div>
              <div className="rounded-[1.4rem] border border-border bg-card p-6">
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground">
                  Horario
                </dt>
                <dd className="mt-2 space-y-1 text-sm">
                  {site.hours.slice(0, 3).map((h) => (
                    <p key={h.day}>
                      <span className="text-foreground">{h.day}</span>
                      <br />
                      {h.time}
                    </p>
                  ))}
                </dd>
              </div>
              <div className="rounded-[1.4rem] border border-border bg-card p-6 sm:col-span-2">
                <dt className="text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground">
                  Particular · reembolso Isapre
                </dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">
                  Trabajamos de forma particular para no recortar el tiempo de
                  sillón. Emitimos boleta y ficha para que tu Isapre reembolse
                  según póliza. No operamos con bono FONASA.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[1.8rem]">
            <Image
              src="/images/lifestyle.jpg"
              alt="Mañana en el Parque Bicentenario, junto a la clínica"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Reveal>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {spaces.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="overflow-hidden rounded-[1.6rem] border border-border">
            <iframe
              title="Mapa de Bruma en Vitacura"
              src={site.mapsEmbed}
              className="h-72 w-full grayscale sm:h-96"
              loading="lazy"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full px-6">
              <Link href="/primera-hora">Agendar hora</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6">
              <a href={site.maps} target="_blank" rel="noreferrer">
                Cómo llegar
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
