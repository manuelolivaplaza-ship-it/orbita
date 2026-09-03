import type { Metadata } from "next";
import Image from "next/image";

import { team } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Las doctoras Emilia Rivas y Sofía Mandel, y los doctores Tomás Herrera e Inés Palacio. Cirugía, clínica, imágenes y anestesia.",
};

export default function TeamPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
        <p className="kicker">Equipo</p>
        <h1 className="display mt-5 max-w-3xl text-[2.45rem] leading-[1.06] sm:text-6xl lg:text-7xl">
          Cuatro médicos que se hablan.
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground">
          No hay un pasillo de especialistas que no se cruzan. Los casos se
          discuten en la misma mesa, con la misma historia clínica.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-24 px-5 pb-24 sm:px-8">
        {team.map((person, index) => (
          <article
            key={person.slug}
            className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
          >
            <div
              className={`relative aspect-[3/4] overflow-hidden rounded-[1.4rem] lg:col-span-5 ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={person.image}
                alt={person.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7">
              <h2 className="display text-4xl sm:text-5xl">{person.name}</h2>
              <p className="mt-3 text-muted-foreground">{person.role}</p>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed">
                {person.bio}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {person.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
