import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddCase } from "@/components/add-case";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { wines } from "@/data/content";
import { formatCLP } from "@/lib/format";

const casePrice = wines.reduce((sum, wine) => sum + wine.price, 0);

export const metadata: Metadata = {
  title: "Vinos",
  description:
    "Seis vinos de niebla en Casablanca. Sauvignon Blanc, Chardonnay, Pinot Noir, Syrah, ensamblaje y espumante. Precio de viña, despacho a Chile.",
};

export default function VinosPage() {
  return (
    <>
      <PageIntro
        kicker="La cava"
        title="Seis vinos. El stock es el que ves."
        lead="No hay lista paralela. Lo que está en la web está en Lo Ovalle. Si una cosecha se acaba, se acaba."
      />

      <section className="shell pb-28">
        <div className="divide-y divide-linea border-y border-linea">
          {wines.map((wine) => (
            <Link
              key={wine.slug}
              href={`/vinos/${wine.slug}`}
              className="group grid items-center gap-8 py-10 md:grid-cols-12"
            >
              <div className="frame relative aspect-[3/4] w-40 md:col-span-3 md:w-auto md:max-w-[220px]">
                <Image
                  src={wine.image}
                  alt={wine.alt}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-6">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-hoja">
                  {wine.varietal} · {wine.vintage}
                </p>
                <h2 className="mt-2 font-display text-5xl tracking-tight md:text-6xl">
                  {wine.name}
                </h2>
                <p className="mt-4 max-w-[46ch] text-tinta-suave">{wine.lead}</p>
                <p className="mt-3 text-sm text-gris">{wine.cuartel}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <p className="nums text-lg">{formatCLP(wine.price)}</p>
                <p className="mt-1 text-sm text-gris">{wine.format}</p>
                <p className="mt-4 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-hoja">
                  {wine.stock === "últimas cajas" ? "Últimas cajas" : "En cava"}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Reveal className="mt-16 grid gap-8 border border-linea p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-7">
            <p className="kicker">Caja de la casa</p>
            <h2 className="mt-4 font-display text-4xl tracking-tight">
              Una botella de cada vino.
            </h2>
            <p className="mt-4 max-w-[46ch] text-tinta-suave">
              Seis etiquetas, el año que está en cava. El precio es la suma: sin
              descuento inventado ni stock paralelo.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-5 md:col-span-5 md:items-end">
            <p className="nums font-display text-4xl">{formatCLP(casePrice)}</p>
            <AddCase />
          </div>
        </Reveal>
        <p className="mt-10 max-w-[50ch] text-sm leading-relaxed text-gris">
          Despacho RM desde $4.990 (gratis sobre $80.000). Regiones desde
          $7.990. Retiro en viña sin costo. Boleta o factura al momento.
        </p>
      </section>
    </>
  );
}
