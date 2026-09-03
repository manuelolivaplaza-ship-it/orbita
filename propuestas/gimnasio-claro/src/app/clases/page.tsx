import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { ClassBoard } from "@/components/class-board";
import { Container, Section } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Clases",
  description:
    "Horario semanal de ALBA: Fuerza, Reforma, Pulso, Tierra, Cerro y Frío. Cupos chicos, reserva con 12 horas.",
};

export default function ClasesPage() {
  return (
    <>
      <PageHero
        kicker="La semana"
        title="Un horario que se puede sostener."
        lead="Mañanas temprano, mediodía para quien trabaja cerca, tardes que se llenan. Reserva con 12 horas. El cupo es el cupo."
      />

      <Container className="pb-8">
        <Reveal>
          <ClassBoard />
        </Reveal>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Los socios Alba Luz y Atelier reservan primero. El plan Alba tiene 8
          clases al mes. El pase del día se confirma el día anterior, según
          hueco. Tierra de terraza se mueve al salón si hay viento o lluvia.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/visita">Reservar visita</ButtonLink>
          <ButtonLink href="https://wa.me/56942187703" variant="ghost" external>
            Pedir un cupo por WhatsApp
          </ButtonLink>
        </div>
      </Container>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Photo
              src="/images/clase-reforma.jpg"
              alt="Clase de Reforma con tres personas en reformers y una instructora de pie"
              className="aspect-[16/10]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
          <Reveal delay={1}>
            <p className="kicker">Cómo reservar</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight">
              Doce horas antes. Sin listas eternas.
            </h2>
            <ol className="mt-8 space-y-5">
              {[
                "Elige el bloque en el tablero o escríbenos.",
                "Confirmamos el cupo por WhatsApp o en recepción.",
                "Llega diez minutos antes. El café está abierto.",
                "Si no puedes venir, avisa con 4 horas: el cupo se libera.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display text-copper">0{i + 1}</span>
                  <span className="text-[1.02rem] leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
