import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { values } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "La clínica",
  description:
    "Alba es una clínica veterinaria de alta complejidad en Palermo: consultorio, quirofano, laboratorio e internación en una esquina con puerta verde.",
};

export default function ClinicPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
        <p className="kicker">La clínica</p>
        <h1 className="display mt-5 max-w-3xl text-[2.45rem] leading-[1.06] sm:text-6xl lg:text-7xl">
          Una esquina de Palermo, un hospital a escala humana.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          En 2014, Emilia Rivas abrió una puerta verde en Gorriti con una idea
          poco original y muy difícil: hacer medicina seria sin el ruido de una
          clínica de volumen. Doce años después, seguimos siendo cuatro médicos
          y una sola mesa de decisiones.
        </p>
      </section>

      <div className="relative mx-auto max-w-[88rem] sm:px-5">
        <div className="relative aspect-[16/10] overflow-hidden sm:rounded-[1.6rem]">
          <Image
            src="/images/facade.jpg"
            alt="Fachada de Alba en una esquina de Palermo, con jacarandás y puerta verde"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-6xl px-5 text-sm text-muted-foreground sm:px-8">
        Gorriti 4872. Jacarandás en noviembre, farol de bronce el resto del año.
      </p>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-24 sm:px-8 md:grid-cols-2">
        {values.map((value, index) => (
          <Reveal key={value.title} delay={index * 80} className="border-t border-border pt-8">
            <h2 className="font-heading text-3xl italic">{value.title}</h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {value.text}
            </p>
          </Reveal>
        ))}
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
            <Image
              src="/images/reception.jpg"
              alt="Recepción de Alba, con escritorio de roble y casilleros de historias clínicas"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="kicker">La casa</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">
              Recepción, dos consultorios, quirofano, laboratorio, internación.
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              El edificio es una casona de esquina. Abajo: espera, consultorios y
              imágenes. Al fondo, el quirofano y el laboratorio. Arriba, la
              internación — lejos del timbre, cerca de quien hace guardia.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Hay una sala felina que no comparte olores con los perros. Hay un
              olivo que pierde hojas sobre el piso de terrazo. Hay silencio, a
              propósito.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
          <Image
            src="/images/lab.jpg"
            alt="Laboratorio propio de Alba"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
          <Image
            src="/images/waiting.jpg"
            alt="Sala de espera"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
