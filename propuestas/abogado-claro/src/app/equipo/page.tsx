import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { lawyers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Ocho abogados. Una mesa. Socios y asociados de ALBA en Recoleta.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro overline="Equipo" title="Quién lee su asunto.">
        <p>
          No hay un comité de asignación. Hay un socio que toma el teléfono y
          un asociado que ya leyó el expediente. Esa es toda la estructura.
        </p>
      </PageIntro>

      <section className="pb-24 lg:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {lawyers.map((person, index) => (
              <Reveal key={person.slug} delay={(index % 3) * 0.06}>
                <Link href={`/equipo/${person.slug}`} className="group block">
                  <div className="img-zoom relative aspect-[3/4] bg-paper-2">
                    <Image
                      src={person.image}
                      alt={`Retrato de ${person.name}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="font-display mt-5 text-3xl tracking-tight group-hover:text-bronze">
                    {person.name}
                  </p>
                  <p className="mt-1 text-[14px] text-muted-foreground">
                    {person.role}
                  </p>
                  <p className="mt-1 text-[13px] tracking-[0.08em] text-muted-foreground uppercase">
                    {person.practice}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
