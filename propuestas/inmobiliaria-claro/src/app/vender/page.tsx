import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConsultForm } from "@/components/consult-form";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vender",
  description:
    "Mandato de venta con HELIO. Si la planta no recibe el norte, se lo decimos en la primera visita.",
};

export default function VenderPage() {
  return (
    <>
      <PageIntro
        kicker="Mandato"
        title="Si su planta no recibe el norte, se lo vamos a decir."
        lead="No tomamos todo. Tomamos lo que podemos defender en una visita de sol. El honorario se pacta en UF, por escrito."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="relative aspect-[16/8] min-h-[260px] overflow-hidden bg-luz-2">
            <Image
              src="/images/duble.jpg"
              alt="Casa en Ñuñoa con limonero y teja, mañana"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-10 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Lectura",
              d: "Visitamos a la hora de sol. Medimos rumbo, obstrucción, títulos. En 72 horas le decimos si entra a la lista — o por qué no.",
            },
            {
              n: "02",
              t: "Ficha",
              d: "Fotografía a esa hora, plano, gastos, por qué se vende. La ficha se publica aquí antes que en cualquier portal.",
            },
            {
              n: "03",
              t: "Mandato",
              d: "Exclusivo, en UF, con plazo. No hay letrero si no lo pide. Las visitas las agendamos nosotros, a la hora que corresponde.",
            },
          ].map((item) => (
            <Reveal key={item.n}>
              <p className="font-mono text-[11px] tracking-[0.18em] text-sol">
                {item.n}
              </p>
              <h2 className="font-display mt-3 text-2xl font-medium">{item.t}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-luz-2/50">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Escriba</p>
            <h2 className="font-display mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-[0.95] tracking-tight">
              Cuéntenos la planta. El resto es una visita.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {site.honorario}
            </p>
            <Link href="/criterio" className="mt-6 inline-block font-mono text-[12px] tracking-[0.14em] uppercase link-line">
              Leer el criterio
            </Link>
          </Reveal>
          <div className="lg:col-span-7">
            <ConsultForm />
          </div>
        </div>
      </section>
    </>
  );
}
