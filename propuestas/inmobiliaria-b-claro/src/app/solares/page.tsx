import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { SolarCard } from "@/components/solar-card";
import { solares } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solares",
  description:
    "Casas en sitio en Ñuñoa, La Reina, Peñalolén y Macul. Frente, fondo, patio y orientación. Valores en UF.",
};

export default function SolaresPage() {
  return (
    <>
      <PageIntro
        plate="01"
        kicker="Mesa"
        title="Solares en lectura."
        lead="No es un portal. Es lo que esta mesa puede defender: un frente, un fondo, un patio y un plan regulador que no se come la luz el año que viene."
      />
      <section className="pb-24">
        <div className="shell grid gap-6">
          {solares.map((solar) => (
            <Reveal key={solar.slug}>
              <SolarCard solar={solar} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
