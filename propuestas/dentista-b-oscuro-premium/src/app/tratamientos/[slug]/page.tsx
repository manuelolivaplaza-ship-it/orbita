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

  const others = treatments.filter((x) => x.slug !== t.slug).slice(0, 4);

  return (
    <>
      <section className="border-b border-line pt-16 pb-12 sm:pt-24">
        <Container>
          <p className="kicker">Prestación</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-tight">
            {t.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.lead}
          </p>
        </Container>
      </section>

      <Container className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10]">
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
                priority
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
                className="mt-12 border-t border-line"
              >
                {t.faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`${t.slug}-${i}`}>
                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline">
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

          <aside className="h-fit border border-line bg-surface p-7 lg:col-span-5 lg:sticky lg:top-24">
            <p className="kicker">Honorarios</p>
            <p className="mt-3 font-display text-3xl tracking-tight tabular">
              {t.price}
            </p>
            <dl className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Tiempo</dt>
                <dd>{t.duration}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Incluye</dt>
                <dd className="text-right">{t.includes}</dd>
              </div>
            </dl>
            <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm text-muted-foreground">
              {t.list.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-champagne" />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-8 h-12 w-full rounded-none text-[0.72rem] tracking-[0.16em] uppercase"
            >
              <Link href="/agenda">Agendar evaluación</Link>
            </Button>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Valor referencial. El valor final se confirma tras diagnóstico.
            </p>
          </aside>
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <p className="kicker">Otras prestaciones</p>
          <div className="mt-6 grid gap-px bg-line sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/tratamientos/${o.slug}`}
                className="bg-background px-5 py-5 transition-colors duration-160 hover:bg-surface"
              >
                <p className="font-display text-lg tracking-tight">{o.name}</p>
                <p className="mt-1 text-sm text-champagne tabular">
                  {o.priceValue}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
