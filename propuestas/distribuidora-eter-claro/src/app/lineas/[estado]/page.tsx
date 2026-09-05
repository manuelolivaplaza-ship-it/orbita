import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Carta, CartaNote } from "@/components/carta";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { estados, getEstado, productosDe, type EstadoId } from "@/data/catalog";

type Props = {
  params: Promise<{ estado: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return estados.map((estado) => ({ estado: estado.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { estado: id } = await params;
  const estado = getEstado(id);
  if (!estado) return { title: "Línea" };
  return {
    title: estado.name,
    description: `${estado.name} a ${estado.temp}. ${estado.lead}`,
  };
}

export default async function EstadoPage({ params }: Props) {
  const { estado: id } = await params;
  const estado = getEstado(id);
  if (!estado) notFound();

  const items = productosDe(estado.id as EstadoId);
  const others = estados.filter((item) => item.id !== estado.id);

  return (
    <div className="pt-[4.4rem]">
      <section className="grid border-b border-line md:grid-cols-12">
        <div className="flex flex-col justify-end px-5 py-16 md:col-span-6 md:px-10 md:py-24 lg:px-16">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            {estado.kicker}
          </p>
          <p className="mt-6 font-display text-[clamp(3.2rem,8vw,7.2rem)] font-light leading-none tracking-tight text-frost">
            {estado.temp}
          </p>
          <h1 className="mt-6 font-display text-5xl font-light tracking-tight md:text-7xl">
            {estado.name}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            {estado.lead}
          </p>
          <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            {estado.camera}
          </p>
        </div>
        <div className="relative min-h-[26rem] md:col-span-6 md:min-h-[42rem]">
          <Image
            src={estado.image}
            alt={estado.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            SKU de esta cámara
          </p>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
            {estado.title}
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
            href={`/lineas/${item.id}`}
            className="group border-b border-line px-5 py-12 last:border-b-0 md:border-b-0 md:border-r md:px-10 md:py-16 md:last:border-r-0 lg:px-16"
          >
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-frost">
              {item.temp}
            </p>
            <h2 className="mt-3 font-display text-4xl font-light">{item.name}</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              {item.title}
            </p>
            <span className="mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em]">
              Cambiar de cámara
              <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
