import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { fees, process, services } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Oficio",
  description:
    "Anteproyecto, permisería, detalle constructivo y administración de obra. Honorarios en UF, por hitos.",
};

export default function OficioPage() {
  return (
    <>
      <PageIntro
        kicker="Servicios · honorarios · método"
        title="Oficio"
        lead="Diseño, permiso y faena. Un contrato por etapa. Nunca partimos sin presupuesto firmado."
      />

      <section className="shell py-16 md:py-24">
        <ol className="divide-y divide-line border-y border-line">
          {services.map((item) => (
            <li
              key={item.number}
              className="grid gap-4 py-10 lg:grid-cols-12 lg:items-baseline"
            >
              <p className="font-mono text-xs tracking-[0.18em] text-brass lg:col-span-1">
                {item.number}
              </p>
              <h2 className="font-display text-3xl lg:col-span-4">{item.title}</h2>
              <p className="text-[15px] leading-8 text-paper-dim lg:col-span-5">
                {item.deliverable}
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted lg:col-span-2 lg:text-right">
                {item.duration}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-ink py-16 md:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden border border-line">
                <Image
                  src="/images/hormigon.jpg"
                  alt="Detalle de hormigón tabla con veta de encofrado, luz rasante"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="plaque mt-3">
                Hormigón tabla · junta · luz rasante
              </figcaption>
            </figure>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="kicker">Honorarios</p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              Presupuesto claro desde el primer día.
            </h2>
            <div className="mt-10">
              {fees.map((item) => (
                <div key={item.name} className="border-t border-line py-6 last:border-b">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl">{item.name}</h3>
                    <p className="font-display text-xl text-brass">{item.from}</p>
                  </div>
                  <p className="mt-3 max-w-md text-sm leading-7 text-paper-dim">
                    {item.includes}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-7 text-muted">
              El valor final depende del terreno y del programa. Se confirma en
              la primera conversación. Nunca partimos sin presupuesto firmado.
            </p>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <p className="kicker">Método</p>
        <h2 className="mt-4 font-display text-4xl">Cinco etapas.</h2>
        <ol className="mt-12 grid gap-0 md:grid-cols-5">
          {process.map((item, i) => (
            <li
              key={item.number}
              className={`border-line py-8 md:px-5 ${i === 0 ? "md:pl-0" : "md:border-l"} border-t md:border-t-0`}
            >
              <p className="font-display text-4xl text-brass/70">{item.number}</p>
              <h3 className="mt-5 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-paper-dim">{item.text}</p>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {item.duration}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line bg-ink py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Preguntas</p>
            <h2 className="mt-4 font-display text-4xl">Antes de escribir.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Faq />
            <Link href="/encargo" className="btn mt-10">
              Conversar sobre tu proyecto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
