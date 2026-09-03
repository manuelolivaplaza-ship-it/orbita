import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { propertiesIn, territories } from "@/lib/properties";
import { formatCL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Territorio",
  description:
    "Santiago oriente, Zapallar y Cachagua, Puerto Varas y el valle de Colchagua. Donde Meridiano presenta propiedades.",
};

export default function TerritorioPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="02"
        kicker="Latitudes"
        title="El inmueble viene después."
        lede="Primero el territorio: la ladera, el viento, la luz norte, el colegio, el invierno. Cuatro zonas. El resto, se lo decimos en la primera respuesta."
      />
      <ul className="mt-12 grid gap-12">
        {territories.map((t, i) => {
          const count = propertiesIn(t.slug).length;
          return (
            <li key={t.slug}>
              <Reveal delay={i * 0.04}>
                <Link
                  href={`/territorio/${t.slug}`}
                  className="group grid overflow-hidden border border-line lg:grid-cols-12"
                >
                  <div className="img-zoom relative aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[340px]">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-8 lg:col-span-5">
                    <div>
                      <p className="kicker">{t.coords}</p>
                      <h2 className="mt-3 font-display text-[clamp(2rem,3vw,2.8rem)] leading-[0.95] group-hover:text-brass">
                        {t.name}
                      </h2>
                      <p className="mt-4 max-w-[34ch] text-paper-dim">
                        {t.lede}
                      </p>
                    </div>
                    <p className="mt-8 font-mono text-[0.72rem] tracking-[0.16em] text-brass uppercase">
                      {formatCL(count)}{" "}
                      {count === 1 ? "propiedad" : "propiedades"} en mesa
                    </p>
                  </div>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
