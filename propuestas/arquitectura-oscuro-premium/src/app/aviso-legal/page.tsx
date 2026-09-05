import type { Metadata } from "next";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <div className="shell max-w-3xl pb-24 pt-28 md:pt-32">
      <p className="kicker">Legal</p>
      <h1 className="mt-4 font-display text-5xl">Aviso legal</h1>
      <div className="mt-10 space-y-6 text-sm leading-7 text-paper-dim">
        <p>
          {studio.legal}, RUT {studio.rut}, con domicilio en {studio.address},{" "}
          {studio.neighborhood}. Correo: {studio.email}. Teléfono: {studio.phone}.
        </p>
        <p>
          Las obras, honorarios y plazos publicados son referenciales. Cada
          encargo se confirma por escrito, en UF, después de visitar el predio.
        </p>
        <p>
          Las fotografías ilustran el enfoque del estudio. Los textos de este
          sitio no constituyen oferta.
        </p>
      </div>
    </div>
  );
}
