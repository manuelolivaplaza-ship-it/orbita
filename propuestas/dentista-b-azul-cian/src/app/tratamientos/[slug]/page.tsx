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

  const others = treatments.filter((x) => x.slug !== t.slug).slice(0, 3);

  return (
    <>
      <section className="pt-16 pb-8 sm:pt-24">
        <Container>
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-tide">
            Tratamiento
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-6xl">
            {t.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-8 text-sm">
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
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem]">
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
            {t.faqs.length > 0 ? (
              <Accordion type="single" collapsible className="mt-10">
                {t.faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left font-display text-lg">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : null}
          </div>
          <aside className="h-fit rounded-[1.4rem] border border-border bg-card p-7 lg:sticky lg:top-24">
            <p className="text-[0.7rem] tracking-[0.16em] uppercase text-tide">
              Incluye
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {t.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cian" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="waterline my-7" />
            <p className="font-display text-2xl tracking-tight">{t.price}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.duration}</p>
            <Button asChild className="mt-6 h-12 w-full rounded-xl">
              <Link href="/hora">Agendar esta hora</Link>
            </Button>
            <Button asChild variant="outline" className="mt-3 h-12 w-full rounded-xl">
              <Link href="/reembolso">Ver reembolso isapre</Link>
            </Button>
          </aside>
        </div>
        <div className="mt-20">
          <p className="text-[0.7rem] tracking-[0.16em] uppercase text-tide">
            También
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/tratamientos/${o.slug}`}
                className="rounded-2xl border border-border bg-card p-5 hover:border-tide/40"
              >
                <p className="font-display text-xl">{o.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{o.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
