import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { people } from "@/lib/data";

export const metadata: Metadata = {
  title: "La mesa",
  description:
    "Cuatro contadores en CLARO. Elena, Joaquín, Amparo y Nicolás. Una mesa, Providencia.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="La mesa"
        title="Cuatro sillas. Nadie de más."
        lead="Quien recibe la primera hora, lleva la cartera. No hay una secretaría que no leyó el F29."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-x-6 gap-y-12 sm:grid-cols-2">
          {people.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.05}>
              <Link href={`/equipo/${person.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4] bg-luz-2">
                  <Image
                    src={person.image}
                    alt={`Retrato de ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-display mt-4 text-2xl font-medium tracking-tight group-hover:text-cobre">
                  {person.name}
                </p>
                <p className="mt-1 text-[14px] text-muted">
                  {person.role} · {person.practice}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
