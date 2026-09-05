import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Carta, CartaNote } from "@/components/carta";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import {
  getVentana,
  productosDe,
  ventanas,
  type VentanaId,
} from "@/data/catalog";

type Props = {
  params: Promise<{ ventana: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ventanas.map((ventana) => ({ ventana: ventana.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ventana: id } = await params;
  const ventana = getVentana(id);
  if (!ventana) return { title: "Ventana" };
  return {
    title: ventana.name,
    description: `${ventana.name}, ${ventana.window}. ${ventana.lead}`,
  };
}

export default async function VentanaPage({ params }: Props) {
  const { ventana: id } = await params;
  const ventana = getVentana(id);
  if (!ventana) notFound();

  const items = productosDe(ventana.id as VentanaId);
  const others = ventanas.filter((item) => item.id !== ventana.id);

  return (
    <div className="pt-[4.5rem]">
      <section className="grid border-b border-line md:grid-cols-12">
        <div className="flex flex-col justify-end px-6 py-16 md:col-span-6 md:px-10 md:py-24 lg:px-16">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            {ventana.kicker}
          </p>
          <p className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.6rem)] font-semibold leading-none tracking-tight text-amber">
            {ventana.window}
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight md:text-7xl">
            {ventana.name}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper-dim">
            {ventana.lead}
          </p>
          <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            {ventana.camera}
          </p>
        </div>
        <div className="relative min-h-[26rem] md:col-span-6 md:min-h-[42rem]">
          <Image
            src={ventana.image}
            alt={ventana.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            SKU de esta ventana
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">
            {ventana.title}
          </h2>
        </Reveal>
        <Reveal className="mt-12" delay={80}>
          <Carta items={items} />
          <CartaNote href="/cuenta" label="Abrir cuenta para pedir" />
        </Reveal>
      </section>

      <section className="grid border-t border-line md:grid-cols-2">
        {others.map((item) => (
          <Link
            key={item.id}
            href={`/carta/${item.id}`}
            className="group border-b border-line px-6 py-12 last:border-b-0 md:border-b-0 md:border-r md:px-10 md:py-16 md:last:border-r-0 lg:px-16"
          >
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-amber">
              {item.window}
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold">{item.name}</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-dim">
              {item.title}
            </p>
            <span className="mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em]">
              Cambiar de ventana
              <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
