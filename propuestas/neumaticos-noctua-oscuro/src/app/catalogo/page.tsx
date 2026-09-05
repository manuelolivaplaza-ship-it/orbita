import { Suspense } from "react";
import { CatalogView } from "@/components/catalog-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Líneas Vía, Nox, Cumbre, Atacama, Carga y Velox. Medidas chilenas, precios en CLP, stock en Huechuraba.",
};

export default function CatalogoPage() {
  return (
    <div className="pt-[4.25rem]">
      <header className="pad border-b border-line py-14">
        <p className="kicker">Catálogo</p>
        <h1 className="display mt-4 text-5xl sm:text-7xl">Compuestos.</h1>
        <p className="serif mt-4 max-w-xl text-2xl text-mute">
          Seis líneas. Un país. Elige por clima, por auto, o por los tres
          números del flanco.
        </p>
      </header>
      <Suspense fallback={<div className="pad py-20 text-mute">Cargando catálogo…</div>}>
        <CatalogView />
      </Suspense>
    </div>
  );
}
