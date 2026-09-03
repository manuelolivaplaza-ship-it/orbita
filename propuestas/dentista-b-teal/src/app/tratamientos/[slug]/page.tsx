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
      <section className="pt-28 pb-8 sm:pt-36">
        <Container>
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-lagoon">
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
            {t.faqs.length > 0 ? (
              <Accordion type="single" collapsible className="mt-12">
                {t.faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="font-display text-left text-xl">
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
          <aside className="h-fit space-y-8 lg:sticky lg:top-28">
            <div className="rounded-[1.5rem] border border-border bg-card p-7">
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-lagoon">
                Incluye
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {t.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lagoon" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 h-12 w-full rounded-full">
                <Link href="/primera-hora">Agendar este tratamiento</Link>
              </Button>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground">
                También
              </p>
              <ul className="mt-3 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/tratamientos/${o.slug}`}
                      className="font-display text-xl hover:text-primary"
                    >
                      {o.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
