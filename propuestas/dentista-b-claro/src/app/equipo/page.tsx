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
    "Elena Marín, Hugo Beltrán, Inés Soler y Camila Ruiz. Cuatro doctores, un atelier, ninguna franquicia.",
};

export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Quien te atiende tiene nombre y criterio."
        lead="No rotamos a un doctor distinto cada mes. El caso lo lleva quien lo empieza, hasta el alta."
      />
      <Container className="pb-24">
        <div className="space-y-16">
          {team.map((m, i) => (
            <article
              key={m.name}
              className="grid items-center gap-8 border-t border-border pt-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 first:border-t-0 first:pt-0"
            >
              <div
                className={`relative aspect-[3/4] overflow-hidden rounded-[1.6rem] ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 35vw, 90vw"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-[0.72rem] tracking-[0.18em] uppercase text-sage">
                  {m.creds}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tight">
                  {m.name}
                </h2>
                <p className="mt-2 text-muted-foreground">{m.role}</p>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/85">
                  {m.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-20 rounded-[1.6rem] border border-border p-8 sm:p-12">
          <h2 className="font-display text-3xl tracking-tight">
            Y quien no sale en la foto
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Recepción, higiene y el ceramista con el que hablamos por su nombre.
            Si preguntas por Marta, te atiende Marta. No un call center.
          </p>
          <Button asChild className="mt-8 h-12 rounded-full px-6">
            <Link href="/cita">Reservar con el equipo</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
