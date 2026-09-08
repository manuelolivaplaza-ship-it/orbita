import type { Metadata } from "next";

import { Catalog } from "@/components/catalog";
import { Container } from "@/components/container";
import { properties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Propiedades en venta y arriendo",
  description:
    "Casas y departamentos en Las Condes, Vitacura, Providencia, Ñuñoa, La Reina y Lo Barnechea. Precios en UF.",
};

export default function PropiedadesPage() {
  const ventas = properties.filter((p) => p.operation === "venta").length;
  const arriendos = properties.filter((p) => p.operation === "arriendo").length;

  return (
    <section className="py-14 md:py-20">
      <Container>
        <p className="text-xs tracking-[0.22em] text-primary uppercase">Cartera</p>
        <h1 className="mt-3 font-heading text-4xl md:text-6xl">Propiedades</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {ventas} en venta y {arriendos} en arriendo, en el oriente de Santiago.
          Lo que publicamos es lo que vale la pena mostrar. Si no aparece acá,
          pregúntanos: hay exclusivas que no van a portal.
        </p>
        <div className="mt-10">
          <Catalog />
        </div>
      </Container>
    </section>
  );
}
