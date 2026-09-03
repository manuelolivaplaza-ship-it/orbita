import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Catalina Vial, Matías Echeverría, Javiera Núñez y Valentina Ruiz. Cuatro doctores, un pabellón en Vitacura.",
};

export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Cuatro doctores. Un mismo pulso."
        lead="No hay un piso de especialistas que no se hablan. El que opera el implante conversa con quien diseña la corona. Por eso el resultado se ve entero."
      />
      <Container className="pb-24">
        <div className="grid gap-16">
          {team.map((m, i) => (
            <Reveal key={m.name}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem] sm:aspect-[4/5]">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <div>
                  <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
                    {m.creds}
                  </p>
                  <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                    {m.name}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{m.role}</p>
                  <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-20 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full px-6">
            <Link href="/primera-hora">Agendar con el equipo</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-6">
            <Link href="/tecnologia">Ver la tecnología</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
