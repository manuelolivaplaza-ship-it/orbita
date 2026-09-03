import type { Metadata } from "next";
import { Catalog } from "@/components/catalog";
import { Container, Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Colección",
  description:
    "Residencias de autor disponibles en Santiago, Costa Central, Lagos del Sur y Casablanca. Visitas privadas, con cita.",
};

export default function PropiedadesPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <Reveal>
          <p className="kicker">Colección</p>
          <h1 className="display mt-5 max-w-4xl text-6xl sm:text-7xl lg:text-8xl">
            Un inventario breve,
            <br />
            <em className="text-gold">a propósito.</em>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
            Cada ficha corresponde a una residencia que resistió la visita al
            mediodía. Si no está aquí, o se entregó, o no pasó el criterio.
          </p>
        </Reveal>
        <div className="mt-14">
          <Catalog />
        </div>
      </Container>
    </div>
  );
}
