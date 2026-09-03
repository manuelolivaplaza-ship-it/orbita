import type { Metadata } from "next";
import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Vender",
  description:
    "Mandato exclusivo para vender una casa en sitio en Ñuñoa, La Reina, Peñalolén o Macul. Fotografía al mediodía. Honorario 2% + IVA.",
};

const puntos = [
  {
    t: "Mandato exclusivo",
    d: "Si la casa está en tres portales y dos corredoras, no la tomamos. El solar se presenta con un criterio, no con un concurso.",
  },
  {
    t: "Medimos antes de publicar",
    d: "Frente, fondo, patio, orientación, CIP. El precio en UF sale de esa lectura y de comparables de la cuadra, no de lo que se necesita para el depto siguiente.",
  },
  {
    t: "Fotos al mediodía",
    d: "Sin atardecer, sin lámparas encendidas a las cinco. El comprador de esta mesa va a venir a las 13:00. Que vea lo mismo que vio en la lámina.",
  },
  {
    t: "Títulos primero",
    d: "Joaquín abre el Conservador antes de que Emilia cite a nadie. Si hay una herencia a medio camino, se trabaja. Si no se puede, se dice.",
  },
];

export default function VenderPage() {
  return (
    <>
      <PageIntro
        plate="05"
        kicker="Mandato"
        title="Si el solar aguanta, lo vendemos."
        lead="Mandato exclusivo, fotografía al mediodía, honorario del 2% más IVA. Si la casa necesita un filtro de atardecer para verse, quizá no es para esta mesa."
      />
      <section className="pb-10">
        <div className="shell relative min-h-[48vh]">
          <Image
            src="/images/jardin.jpg"
            alt="Jardín y quincho de una casa en La Reina"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="shell grid gap-6 md:grid-cols-2">
          {puntos.map((item) => (
            <Reveal key={item.t} className="border border-line px-7 py-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                {item.t}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                {item.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-t border-line bg-papel-2 py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Encargo de venta</p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight">
              Cuéntenos el solar, no el recuento de visitas.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">
              Comuna, frente, si hay estudio de títulos reciente. Respondemos en
              24 horas hábiles. Si no es para nosotros, se lo decimos.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7">
            <ConsultForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
