import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Magdalena Reyes, Tomás Valdivia, Javiera Muñoz e Ignacio Parra. Cuatro doctores, un criterio clínico en Vitacura.",
};

export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Cuatro doctores. Un criterio."
        lead="No hay un comercial de pasillo ni un turno de diez minutos. Cada caso tiene autor. Si un día no hay hueco de calidad, no lo inventamos."
      />
      <Container className="pb-24">
        <div className="grid gap-16">
          {team.map((m, i) => (
            <article
              key={m.name}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden rounded-[1.5rem] sm:aspect-[4/5] ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div>
                <p className="text-[0.7rem] tracking-[0.18em] uppercase text-tide">
                  {m.creds}
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                  {m.name}
                </h2>
                <p className="mt-2 text-primary">{m.role}</p>
                <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted-foreground">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-20 rounded-[1.4rem] bg-mist px-8 py-12 sm:px-12">
          <h2 className="font-display text-3xl tracking-tight">
            El resto del equipo también tiene nombre.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Higienistas, recepción y laboratorio propio. Si preguntas por tu
            ficha, te responde alguien que estuvo en tu última hora —no un
            call center.
          </p>
          <Button asChild className="mt-8 h-12 rounded-xl px-6">
            <Link href="/hora">Agendar con el equipo</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
