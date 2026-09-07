import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { Container } from "@/components/container";
import { neighborhoods } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Comunas del oriente de Santiago",
  description:
    "Las Condes, Vitacura, Providencia, Ñuñoa, La Reina y Lo Barnechea: precios de referencia y para quién calza cada comuna.",
};

export default function BarriosPage() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <p className="text-xs tracking-[0.22em] text-primary uppercase">Territorio</p>
        <h1 className="mt-3 max-w-3xl font-heading text-4xl md:text-6xl">
          Seis comunas. Las conocemos de vereda, no de Excel.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Los UF/m² son referencias de mercado 2025–2026. Sirven para orientarte.
          La tasación de tu casa es otra conversación.
        </p>

        <div className="mt-14 grid gap-10">
          {neighborhoods.map((n, i) => (
            <article
              key={n.slug}
              className="grid overflow-hidden rounded-3xl bg-card ring-1 ring-border md:grid-cols-2"
            >
              <div className={`relative min-h-[280px] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image src={n.image} alt={n.name} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h2 className="font-heading text-4xl">{n.name}</h2>
                <p className="mt-2 text-sm text-primary">
                  {n.priceM2} UF/m² venta · {n.rentM2.toLocaleString("es-CL")} CLP/m² arriendo
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{n.pitch}</p>
                <p className="mt-3 text-sm">
                  <span className="text-muted-foreground">Para quién: </span>
                  {n.for}
                </p>
                <Link
                  href={`/propiedades?comuna=${encodeURIComponent(n.name)}`}
                  className="mt-6 text-sm font-medium text-primary hover:underline"
                >
                  Ver propiedades en {n.name} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
