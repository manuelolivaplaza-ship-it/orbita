import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { ServiceIndex } from "@/components/service-index";

export const metadata: Metadata = {
  title: "Oficio",
  description:
    "Seis oficios de kinesiología en NOCTUA: lectura, columna, hombro, carga, dolor persistente y atleta. Vitacura, de noche.",
};

export default function OficioPage() {
  return (
    <>
      <PageIntro
        kicker="Oficio"
        title="Seis maneras de leer el cuerpo."
        lead="No vendemos packs. Nombramos. Cada oficio parte de una lectura de 75 minutos y termina cuando el cuerpo vuelve a confiar — no cuando se acaba un calendario."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="frame relative aspect-[16/9] min-h-[240px]">
            <Image
              src="/images/hands.jpg"
              alt="Manos de kinesiólogo leyendo un hombro bajo luz ámbar"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Hombro · palpación · box 02
          </p>
        </div>
      </section>

      <section className="pb-28 pt-16 md:pb-36">
        <div className="shell">
          <ServiceIndex />
        </div>
      </section>
    </>
  );
}
