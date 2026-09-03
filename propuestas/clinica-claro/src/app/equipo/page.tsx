import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { doctors } from "@/lib/data";

export const metadata: Metadata = {
  title: "Médicos",
  description:
    "Ocho especialistas de CLARO. Medicina interna, cardiología, endocrinología, gastro, neurología, ginecología, dermatología y psiquiatría. Providencia.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="La mesa"
        title="Ocho nombres. Ningún pasillo anónimo."
        lead="Cada sala tiene un médico con ficha, correo y una frase que se puede decir en voz alta. Si el cupo está lleno, se lo decimos."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.04}>
              <Link href={`/equipo/${person.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4]">
                  <Image
                    src={person.image}
                    alt={`Retrato de ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-sans mt-4 text-[12px] tracking-[0.16em] text-sol uppercase">
                  Sala · {person.specialty}
                </p>
                <h2 className="font-display mt-1 text-[1.55rem] font-medium leading-tight group-hover:text-sol">
                  {person.shortName}
                </h2>
                <p className="mt-1 text-[14px] text-muted">{person.role}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  «{person.quote}»
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
