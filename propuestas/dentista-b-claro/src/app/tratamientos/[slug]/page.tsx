import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { getTreatment, treatments } from "@/lib/site";

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};
  return {
    title: t.name,
    description: t.lead,
  };
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) notFound();

  return (
    <>
      <section className="pt-16 pb-8 sm:pt-24">
        <Container>
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-sage">
            Tratamiento
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-6xl">
            {t.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <p>
              <span className="block text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground">
                Honorarios
              </span>
              {t.price}
            </p>
            <p>
              <span className="block text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground">
                Tiempo
              </span>
              {t.duration}
            </p>
          </div>
        </Container>
      </section>
      <Container className="pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem]">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
            <div className="mt-10 space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
              {t.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {t.faqs.length ? (
              <Accordion
                type="single"
                collapsible
                className="mt-10 border-t border-border"
              >
                {t.faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`${t.slug}-${i}`}>
                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : null}
          </div>
          <aside className="h-fit rounded-[1.6rem] border border-border bg-card p-8 lg:sticky lg:top-24">
            <p className="font-display text-2xl">{t.name}</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {t.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Los honorarios son orientativos. La cifra se cierra tras
              diagnóstico, por escrito.
            </p>
            <Button asChild className="mt-8 h-12 w-full rounded-full">
              <Link href="/cita">Reservar esta visita</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="mt-3 h-12 w-full rounded-full"
            >
              <Link href="/primera-visita">Cómo es la primera visita</Link>
            </Button>
          </aside>
        </div>
      </Container>
    </>
  );
}
