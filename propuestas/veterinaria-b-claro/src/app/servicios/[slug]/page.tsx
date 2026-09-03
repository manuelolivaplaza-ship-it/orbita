import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getService, services } from "@/lib/clinic";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-12 sm:px-8 sm:pt-24 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="kicker">
            <Link href="/servicios" className="hover:text-foreground">
              Servicios
            </Link>
            <span className="mx-2">/</span>
            {service.duration}
          </p>
          <h1 className="display mt-5 text-[2.45rem] leading-[1.06] sm:text-6xl">
            {service.name}
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {service.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-12 rounded-full px-6">
              <Link href={`/turnos?servicio=${service.slug}`}>Pedir este turno</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6">
              <Link href="/contacto">Hablar con la clínica</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] lg:col-span-6">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            preload
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-12 sm:px-8 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-7">
          {service.body.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-lg leading-relaxed text-foreground/85">
              {paragraph}
            </p>
          ))}
          <p className="text-pretty leading-relaxed text-muted-foreground">
            {service.forWho}
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-[1.4rem] border border-border bg-card p-8">
            <p className="kicker">Incluye</p>
            <ul className="mt-6 space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem]">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <p className="kicker">También</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/servicios/${item.slug}`}
              className="rounded-2xl border border-border bg-card p-6 hover:bg-secondary/40"
            >
              <h2 className="font-heading text-2xl italic">{item.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.short}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
