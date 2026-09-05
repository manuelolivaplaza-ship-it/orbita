import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { WineIndex } from "@/components/WineIndex";

export const metadata: Metadata = {
  title: "Vinos",
  description:
    "Carta de Noctua: Syrah de granito, Pedro Ximénez y Moscatel de Alejandría. Valle del Elqui, Chile.",
};

export default function VinosPage() {
  return (
    <>
      <PageIntro
        kicker="Carta"
        title="Seis vinos. Cada uno con su hora."
        lede="Producción pequeña, registro de cosecha en cada etiqueta. Precios en pesos chilenos, IVA incluido. Despacho a todo Chile."
      />
      <section className="px-6 pb-24 md:px-12 lg:px-16 lg:pb-32">
        <WineIndex />
      </section>
    </>
  );
}
