import type { Metadata } from "next";
import { Suspense } from "react";
import { Catalog } from "@/components/catalog";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Colección",
  description:
    "Catorce piezas para la mesa: lino, gres, madera y despensa. Precio con IVA. Despacho a Chile.",
};

export default function ColeccionPage() {
  return (
    <section className="shell pt-28 pb-24 lg:pt-36 lg:pb-32">
      <p className="kicker">Colección</p>
      <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.92] tracking-tight">
        El índice de la mesa.
      </h1>
      <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-tinta-suave">
        Pasa el cursor: la pieza se queda a la derecha. En el teléfono, toca el
        nombre. Catorce, no un inventario.
      </p>
      <div className="mt-14">
        <Suspense>
          <Catalog products={products} />
        </Suspense>
      </div>
    </section>
  );
}
