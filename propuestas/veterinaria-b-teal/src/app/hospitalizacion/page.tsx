import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hospitalización y UCI",
  description:
    "Internación veterinaria 24 h en Valdivia. Boxes individuales, UCI, visitas a las 12:00 y 18:30, partes clínicos dos veces al día.",
};

const visits = [
  {
    t: "09:00",
    title: "Parte de la mañana",
    text: "Temperatura, fluidos, dolor, apetito. Te escribimos aunque no preguntes.",
  },
  {
    t: "12:00",
    title: "Visita",
    text: "Veinte minutos. El tutor entra. El animal no se “exhibe” detrás de una reja.",
  },
  {
    t: "18:30",
    title: "Parte de la tarde y visita",
    text: "Qué comió, qué se orinó, qué duele. Si hay que operar de noche, se dice aquí.",
  },
  {
    t: "03:10",
    title: "La hora que no se cotiza",
    text: "Antonia o quien esté de guardia. Monitores. Un teléfono que sí contestan.",
  },
];

export default function HospitalizacionPage() {
  return (
    <>
      <PageIntro
        kicker="Internación"
        title="Quedarse a dormir,"
        italic="de verdad."
        lead="Seis boxes individuales. Dos de cuidados intensivos. Oxígeno, bombas de infusión, y alguien despierto. No un canil en un pasillo."
        image="/images/uci.jpg"
        alt="UCI de Estuario, en calma"
      />
      <Container className="pb-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="kicker">Cómo se interna</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight">
              Perro y gato no comparten aire.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Los boxes felinos están en otra ala, con luz baja y sin ladridos.
              Los caninos miran un patio interior. Cada animal tiene cama,
              manta que puedes traer de casa, y un nombre en la pizarra —no un
              número de jaula.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              El día de internación parte en $62.000 e incluye fluidos de
              mantención, analgésico de base y dos partes. La UCI se cotiza
              según el cuadro: oxígeno, bomba, monitoreo continuo. Nada se
              suma “después, en caja”.
            </p>
            <Button asChild className="mt-8 h-11 rounded-full px-6">
              <a href={site.phoneHref}>Hablar con UCI</a>
            </Button>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/pasillo.jpg"
                alt="Pasillo de internación de Estuario"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </Reveal>
        </div>

        <ol className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visits.map((v) => (
            <li key={v.t}>
              <p className="font-display text-3xl text-moss">{v.t}</p>
              <h3 className="mt-3 font-display text-xl">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {v.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-20 overflow-hidden rounded-[2rem] river-band p-8 text-primary-foreground sm:p-12">
          <h2 className="max-w-xl font-display text-4xl tracking-tight">
            Si un tutor necesita quedarse,
            <span className="italic text-moss"> se arma una silla.</span>
          </h2>
          <p className="mt-4 max-w-lg text-primary-foreground/75">
            Un gato que no come si no está ella. Un perro viejo que se
            desorienta. No es un hotel. Es un hospital que entiende el vínculo.
          </p>
          <Button
            asChild
            className="mt-8 h-11 rounded-full bg-primary-foreground px-6 text-deep hover:bg-primary-foreground/90"
          >
            <Link href="/servicios/hospitalizacion">Ficha de internación</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
