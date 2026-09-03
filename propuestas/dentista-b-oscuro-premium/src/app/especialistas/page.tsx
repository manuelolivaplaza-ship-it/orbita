import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { cases, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Especialistas",
  description:
    "Tres especialistas en Obsidiana Vitacura. Quien te evalúa es quien te trata. No rotamos tu caso.",
};

export default function EspecialistasPage() {
  return (
    <>
      <PageIntro
        eyebrow="El equipo"
        title="Tres nombres. Siempre los mismos."
        lead="No hay un doctor de pantalla y otro de box. Magdalena, Vicente y Antonia se dividen el oficio y se quedan con el caso."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-px bg-line lg:grid-cols-3">
            {team.map((person, i) => (
              <article key={person.slug} className="bg-background p-8 sm:p-10">
                <p className="font-display text-sm text-champagne tabular">
                  0{i + 1}
                </p>
                <h2 className="mt-6 font-display text-3xl tracking-tight">
                  {person.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {person.role}
                </p>
                <p className="mt-6 text-[0.72rem] tracking-[0.12em] text-champagne uppercase">
                  {person.creds}
                </p>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {person.bio}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[22rem]">
            <Image
              src="/images/bandeja.jpg"
              alt="Bandeja de instrumental esterilizado sobre piedra oscura"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16">
            <p className="kicker">Oficio compartido</p>
            <h2 className="mt-4 font-display text-3xl tracking-tight">
              Si el caso cruza especialidades, se sientan juntos.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Un implante con endodoncia vecina no se reparte por WhatsApp.
              Magdalena, Vicente y Antonia revisan el plan en la misma ficha,
              con las mismas fotos, antes de que firmes.
            </p>
            <Button
              asChild
              className="mt-8 h-12 w-fit rounded-none px-6 text-[0.72rem] tracking-[0.16em] uppercase"
            >
              <Link href="/agenda">Agendar evaluación</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <p className="kicker">Notas clínicas</p>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.05] tracking-tight">
            Casos, sin teatro.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Sin fotos de sonrisas ajenas. El oficio se cuenta por plazos, etapas
            y quién estuvo en el box.
          </p>
          <div className="mt-12 border-t border-line">
            {cases.map((c) => (
              <article
                key={c.id}
                className="grid gap-4 border-b border-line py-8 md:grid-cols-[7rem_1fr]"
              >
                <p className="font-display text-sm text-champagne tabular">
                  Caso {c.id}
                </p>
                <div>
                  <h3 className="font-display text-2xl tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-teal">{c.meta}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
