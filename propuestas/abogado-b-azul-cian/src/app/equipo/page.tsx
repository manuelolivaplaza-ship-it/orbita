import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { lawyers } from "@/lib/data";

export const metadata: Metadata = {
  title: "La mesa",
  description:
    "Cinco abogados en CAUCE. Catalina, Tomás, Valentina, Ignacio y Antonia. El mismo que lo recibe, lo lleva.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="La mesa"
        title="Cinco sillas. Nadie de más."
        lead="Quien lo recibe, lo lleva. No hay una secretaría que no leyó el expediente. El WhatsApp es del abogado."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((person, index) => (
            <Reveal key={person.slug} delay={index * 0.05}>
              <Link href={`/equipo/${person.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4] bg-paper-2">
                  <Image
                    src={person.image}
                    alt={`Retrato de ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="kicker mt-5">
                  {person.role} · {person.practice}
                </p>
                <h2 className="font-display mt-2 text-3xl font-semibold tracking-tight group-hover:text-cyan-deep">
                  {person.name}
                </h2>
                <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-muted">
                  {person.bio[0]}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
