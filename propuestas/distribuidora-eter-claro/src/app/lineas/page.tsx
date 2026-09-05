import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Carta, CartaNote } from "@/components/carta";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { estados, productos } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Líneas",
  description:
    "Carta de ETER: seco, líquido y frío. SKU, formato y precio neto referencial para cocina profesional.",
};

export default function LineasPage() {
  return (
    <div className="pt-[4.4rem]">
      <header className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
          Líneas
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,6vw,6rem)] font-light leading-[0.92] tracking-tight">
          Tres cámaras. Una carta.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
          No mezclamos temperaturas. Cada SKU vive en su estado, sale con su
          sonda y llega con su ficha. Abajo, la lista de trabajo.
        </p>
      </header>

      <section className="grid border-y border-line md:grid-cols-3">
        {estados.map((estado, index) => (
          <Link
            key={estado.id}
            href={`/lineas/${estado.id}`}
            className="group border-b border-line last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <div className="frame relative aspect-[3/4]">
              <Image
                src={estado.image}
                alt={estado.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <Reveal delay={index * 80} className="px-5 py-8 md:px-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-frost">
                {estado.temp}
              </p>
              <h2 className="mt-3 font-display text-3xl font-light">{estado.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {estado.title}
              </p>
              <span className="mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em]">
                Entrar
                <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Reveal>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Inventario de trabajo
          </p>
          <h2 className="mt-4 font-display text-4xl font-light tracking-tight">
            Toda la carta, en neto.
          </h2>
        </Reveal>
        <Reveal className="mt-12" delay={80}>
          <Carta items={productos} showEstado />
          <CartaNote href="/cuenta" label="Abrir cuenta para pedir" />
        </Reveal>
      </section>
    </div>
  );
}
