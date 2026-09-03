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
import { getService, services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Servicio" };
  return {
    title: s.name,
    description: s.lead,
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <article className="pt-36 pb-20 sm:pt-40">
      <Container>
        <p className="kicker">{s.species}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-6xl">
          {s.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {s.lead}
        </p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm">
          <p>
            <span className="block text-[0.7rem] tracking-[0.16em] uppercase text-moss">
              Honorarios
            </span>
            {s.price}
          </p>
          <p>
            <span className="block text-[0.7rem] tracking-[0.16em] uppercase text-moss">
              Tiempo
            </span>
            {s.duration}
          </p>
        </div>
        <div className="relative mt-12 aspect-[16/8] overflow-hidden rounded-[1.6rem]">
          <Image
            src={s.image}
            alt={s.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
            {s.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild className="h-11 rounded-full px-6">
                <Link href="/primera-hora">Agendar esta hora</Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full px-6">
                <a href={site.phoneHref}>Llamar</a>
              </Button>
            </div>
          </div>
          <aside>
            <p className="text-[0.7rem] tracking-[0.18em] uppercase text-moss">
              Incluye
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {s.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-moss" />
                  {item}
                </li>
              ))}
            </ul>
            {s.faqs.length ? (
              <Accordion type="single" collapsible className="mt-10">
                {s.faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`q-${i}`}>
                    <AccordionTrigger className="text-left font-display text-lg">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : null}
          </aside>
        </div>
        <div className="mt-20 border-t border-border pt-10">
          <p className="kicker">También</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/servicios/${o.slug}`}
                  className="font-display text-2xl hover:text-moss"
                >
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </article>
  );
}
