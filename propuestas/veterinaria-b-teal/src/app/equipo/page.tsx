import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Cinco médicos veterinarios en Isla Teja. Interna, cirugía, UCI, felinos, imagen. Formados en la Austral y en Santiago.",
};

export default function EquipoPage() {
  return (
    <>
      <PageIntro
        kicker="Equipo"
        title="Nombres, no un turno."
        italic="Fichas con autor."
        lead="Cinco médicos. TENS de día y de noche. Recepción que pregunta primero el nombre del animal. Si operas, sabes quién induce. Si internas, sabes quién llama a las 18:30."
      />
      <Container className="pb-20">
        <div className="grid gap-16">
          {team.map((m, i) => (
            <Reveal key={m.slug}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem] sm:aspect-[4/5]">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <div>
                  <p className="kicker">{m.creds}</p>
                  <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
                    {m.name}
                  </h2>
                  <p className="mt-3 text-moss">{m.role}</p>
                  <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-20 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Con ellos, Camila Soto en recepción, y un equipo de TENS que no
          aparece en la foto y aparece en cada parte de UCI. Si quieres saber
          quién está de guardia esta noche, llama.
        </p>
      </Container>
    </>
  );
}
