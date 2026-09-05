import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { prices } from "@/data/content";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Valores",
  description:
    "Honorarios ETER: primera hora, sesiones, pareja y psiquiatría. Boleta reembolsable. Providencia.",
};

const notes = [
  {
    title: "Boleta el mismo día",
    text: "Electrónica, reembolsable. Particular e ISAPRE. El porcentaje lo define tu plan: te orientamos con el código y el tope, no prometemos un número que no controlamos.",
  },
  {
    title: "Online, el mismo valor",
    text: "La hora no se descuenta por ser videollamada. El oficio es el mismo. La primera, si puedes, preferimos presencial.",
  },
  {
    title: "Packs después, nunca antes",
    text: "El pack de cuatro sesiones existe. Se ofrece después de la primera hora, cuando hay un ritmo. No hay veinte sesiones por adelantado.",
  },
  {
    title: "Cancelación",
    text: "24 horas de anticipación. Menos que eso, se cobra: el cupo es de una persona. WhatsApp o +56 2 2840 4470.",
  },
];

export default function ValoresPage() {
  return (
    <>
      <PageIntro
        kicker="Valores"
        title="El valor se dice antes. No después."
        lead="Cincuenta minutos. Boleta reembolsable. Sin letra chica de pack. Si el caso no es nuestro, la primera hora igual se cobra — y te derivamos con nombre y apellido."
      />

      <section className="pb-16">
        <div className="shell max-w-4xl">
          {prices.map((price, index) => (
            <Reveal
              key={price.name}
              delay={index * 40}
              className="flex items-baseline justify-between gap-6 border-t border-linea py-6"
            >
              <div>
                <p className="font-display text-2xl font-light md:text-3xl">
                  {price.name}
                </p>
                <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-gris">
                  {price.detail}
                </p>
              </div>
              <p className="shrink-0 font-display text-2xl font-light nums md:text-3xl">
                {formatCLP(price.amount)}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-linea py-24">
        <div className="shell grid gap-10 md:grid-cols-2">
          {notes.map((note) => (
            <Reveal key={note.title} className="border-t border-linea pt-8">
              <h2 className="font-display text-3xl font-light tracking-tight">
                {note.title}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-tinta-suave">
                {note.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-linea py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl font-display text-3xl font-light">
            Si el valor cabe, pedimos la primera hora.
          </p>
          <Link href="/primera" className="btn btn-ink">
            Pedir primera hora
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
