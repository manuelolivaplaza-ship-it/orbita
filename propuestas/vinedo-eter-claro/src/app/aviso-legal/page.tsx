import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Legal"
        title="Aviso legal"
        lead="Quién vende, desde dónde y con qué reglas. Precios referenciales de viña."
      />
      <section className="shell max-w-3xl space-y-8 pb-28 text-[17px] leading-relaxed text-tinta-suave">
        <p>
          {site.legalName} · RUT {site.rut} · {site.address.line1},{" "}
          {site.address.commune}, {site.address.region}, Chile.
        </p>
        <p>
          La venta de alcohol está prohibida a menores de 18 años. Al comprar
          declaras ser mayor de edad. El despacho se entrega a un adulto.
        </p>
        <p>
          Los precios publicados son de viña, en pesos chilenos, e incluyen IVA.
          Se confirman antes de pagar. El stock es el de la cava: si no está, no
          está.
        </p>
        <p>
          Bebe con moderación. Si manejas de vuelta a Santiago, hay agua, café y
          tiempo. Coordinamos transfer para grupos de seis o más.
        </p>
      </section>
    </>
  );
}
