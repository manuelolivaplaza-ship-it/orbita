import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { Container, Section } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Entrenamiento",
  description:
    "Fuerza, Reforma, Pulso, Tierra, Cerro y Frío. Seis prácticas con cupos chicos en ALBA Lo Barnechea.",
};

export default function EntrenamientoPage() {
  return (
    <>
      <PageHero
        kicker="El método"
        title="Entrenar con criterio, no con ruido."
        lead="Seis prácticas, cupos de 4 a 12 personas y un equipo que te corrige. El plan se escribe. El ego se queda afuera."
      />

      <Container className="pb-6">
        <Photo
          src="/images/luz.jpg"
          alt="Un rayo de sol cruza el piso de roble, con una kettlebell de cobre al borde de la luz"
          className="aspect-[16/8] min-h-[240px]"
          sizes="100vw"
          priority
          caption="Antes de la primera clase. El trabajo empieza cuando entra el sol."
        />
      </Container>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Cómo se entrena</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight">
              Tres reglas que no negociamos.
            </h2>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {[
              {
                t: "Te ven",
                d: "Si la clase supera el cupo, se abre otra. Nunca se infla. Alguien mira tu rodilla, tu lumbar, tu cara.",
              },
              {
                t: "Se progresa",
                d: "Cada práctica tiene un arco de semanas, no un circuito inventado el domingo en la noche.",
              },
              {
                t: "Se recupera",
                d: "Frío, Tierra y el día libre son parte del plan. El club no vive de que te quiebres.",
              },
            ].map((item) => (
              <Reveal key={item.t}>
                <h3 className="font-display text-2xl tracking-tight">{item.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.d}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <div className="pb-8">
        {programs.map((program, index) => {
          const reverse = index % 2 === 1;
          return (
            <article
              key={program.slug}
              id={program.slug}
              className="border-t border-line py-16 sm:py-20"
            >
              <Container className="grid items-center gap-10 lg:grid-cols-12">
                <Reveal className={reverse ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-6"}>
                  <Photo
                    src={program.action}
                    alt={program.name}
                    className="aspect-[16/11]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </Reveal>
                <Reveal
                  delay={1}
                  className={
                    reverse
                      ? "lg:col-span-5 lg:col-start-1 lg:row-start-1"
                      : "lg:col-span-5 lg:col-start-8"
                  }
                >
                  <p className="kicker">
                    {program.duration} · {program.cupo} personas
                  </p>
                  <h2 className="mt-4 font-display text-5xl tracking-tight">
                    {program.name}
                  </h2>
                  <p className="mt-5 text-[1.08rem] leading-relaxed">{program.lead}</p>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">
                    {program.body}
                  </p>
                  <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                    <span className="text-ink">Para quién. </span>
                    {program.forWhom}
                  </p>
                </Reveal>
              </Container>
            </article>
          );
        })}
      </div>

      <Section className="bg-cream">
        <Container className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="kicker">Reserva</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight">
              Las clases se piden con 12 horas.
            </h2>
            <p className="mt-4 text-ink-soft">
              El horario vive en la página de clases. Los socios reservan por
              WhatsApp o en recepción. El pase del día se confirma el día anterior.
            </p>
          </div>
          <ButtonLink href="/clases">Ver horario</ButtonLink>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
