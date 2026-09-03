import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfter } from "@/components/ui/before-after";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { cases, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Resultados reales de Cian en Vitacura. Carillas, implantes y ortodoncia. Antes y después, con el plan que se firmó.",
};

export default function CasosPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos"
        title="Lo que se ve, y lo que se firmó."
        lead="No publicamos catálogos de sonrisas idénticas. Estos son pacientes que aceptaron mostrar el proceso. El slider es para mirar, no para vender un paquete."
      />
      <Container className="pb-24">
        <div className="grid gap-20">
          {cases.map((c) => (
            <article
              key={c.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <BeforeAfter
                before={c.before}
                after={c.after}
                beforeAlt={`${c.name}, antes`}
                afterAlt={`${c.name}, después`}
              />
              <div>
                <p className="text-[0.7rem] tracking-[0.16em] uppercase text-tide">
                  {c.age} · {c.treatment}
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                  {c.name}
                </h2>
                <blockquote className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                  “{c.quote}”
                </blockquote>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-24 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-[1.4rem] border border-border bg-card p-7"
            >
              <p className="leading-relaxed">“{t.text}”</p>
              <footer className="mt-6">
                <p className="font-display text-lg">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.meta}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        <Button asChild className="mt-12 h-12 rounded-xl px-6">
          <Link href="/hora">Quiero un plan así de claro</Link>
        </Button>
      </Container>
    </>
  );
}
