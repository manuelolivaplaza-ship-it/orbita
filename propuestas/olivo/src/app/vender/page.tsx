import Image from "next/image";
import type { Metadata } from "next";
import { Check } from "lucide-react";

import { Container } from "@/components/container";
import { LeadForm } from "@/components/lead-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Vender o tasar tu propiedad",
  description:
    "Tasación sin costo en el oriente de Santiago. Plan de venta, fotos, visitas filtradas y honorarios claros: 2% + IVA.",
};

const promises = [
  "Tasación comercial sin costo ni exclusiva previa.",
  "Fotos profesionales y ficha propia — no un recorte de portal.",
  "Visitas con hora, cédula y filtro. Nada de turismo el domingo.",
  "Informe semanal: quién vio, qué dijo, qué ajustar.",
  "Acompañamiento hasta la notaría y la entrega de llaves.",
];

const plan = [
  { t: "Día 1", d: "Visita de tasación y lectura honesta del valor." },
  { t: "Día 3", d: "Sesión de fotos, plano y texto. Publicación en Olivo y portales." },
  { t: "Semana 1–4", d: "Visitas filtradas. Feedback real, no 'le gustó mucho'." },
  { t: "Cierre", d: "Oferta, promesa, estudio de títulos, escritura." },
];

const faqs = [
  {
    q: "¿Cuánto cobran por vender?",
    a: "2% + IVA del valor de venta, a cargo del vendedor, según la práctica de mercado en Chile. Lo dejamos por escrito en la exclusiva. No hay costos ocultos de 'marketing'.",
  },
  {
    q: "¿Tengo que firmar exclusiva?",
    a: "Para vender con nosotros, sí: exclusiva por 90 días. Es la única forma de filtrar visitas y no competir contra tres corredores que bajan el precio en el grupo de WhatsApp.",
  },
  {
    q: "¿Cuánto se demora en vender?",
    a: "En 2025, nuestras exclusivas bien tasadas se fueron en 19 días promedio. Una sobrevalorada se queda. Por eso la tasación es honesta: no compramos la exclusiva inflando el número.",
  },
  {
    q: "¿Qué pasa si no se vende?",
    a: "Revisamos precio y estrategia a los 45 días. Si no hay acuerdo, la exclusiva termina a los 90 y no te cobramos nada.",
  },
];

export default function VenderPage() {
  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden">
        <Image
          src="/images/keys.jpg"
          alt="Puerta y llaves de una casa en Santiago"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#171c19]/55" />
        <Container className="relative flex min-h-[70svh] flex-col justify-center pt-24 pb-16">
          <p className="text-xs tracking-[0.22em] text-white/70 uppercase">Vender</p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl text-white md:text-6xl">
            Vendemos tu propiedad. Tú no persigues a nadie.
          </h1>
          <p className="mt-4 max-w-xl text-white/85">
            Tasación sin costo. Un plan. Visitas que no interrumpen tu vida.
            Honorarios de 2% + IVA, dichos el primer día.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-heading text-4xl">Lo que sí hacemos</h2>
            <ul className="mt-8 grid gap-3">
              {promises.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Check className="size-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <ol className="mt-12 grid gap-6">
              {plan.map((s) => (
                <li key={s.t} className="border-l-2 border-primary pl-4">
                  <p className="text-xs tracking-[0.16em] text-primary uppercase">{s.t}</p>
                  <p className="mt-1 text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-border md:p-8">
            <LeadForm intent="tasacion" />
          </div>
        </Container>
      </section>

      <section className="bg-card py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl">Preguntas de quien va a firmar</h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`v-${i}`}>
                  <AccordionTrigger className="py-5 text-left font-heading text-xl hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl">
            <Image
              src="/images/office.jpg"
              alt="Oficina Olivo en Las Condes"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
