import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Triage } from "@/components/triage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Urgencias 24 horas",
  description:
    "Guardia veterinaria presencial las 24 horas en Ñuñoa. Llama antes de salir. Irarrázaval 2940.",
};

const steps = [
  {
    n: "01",
    title: "Llama o escribe",
    text: "El triaje empieza en el teléfono. Cuéntanos especie, edad, qué pasó y desde cuándo. Te decimos si hay que venir ahora.",
  },
  {
    n: "02",
    title: "En el camino",
    text: "No des de comer. Trae el envase si comió algo tóxico. Inmoviliza si hay trauma. No pongas nada en la boca si convulsionó.",
  },
  {
    n: "03",
    title: "En Farol",
    text: "Estabilizamos, examinamos, pedimos lo que no puede esperar. El precio de la urgencia se dice al llegar. Lo demás, por escrito antes de hacerlo.",
  },
] as const;

export default function UrgenciasPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="02"
        kicker="Guardia 24 h"
        title="Si no puede esperar al día, ven."
        lede="La guardia es presencial. No un teléfono desviado a otra comuna. Llama antes de salir: preparamos mesa, oxígeno o quirófano."
      />

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a href={site.phoneHref} className="btn btn-primary">
          Llamar {site.phone}
        </a>
        <a href={site.whatsappUrgencia} className="btn btn-ghost">
          WhatsApp de guardia
        </a>
      </div>

      <div className="mt-14 img-zoom relative aspect-[16/8]">
        <Image
          src="/images/fachada.jpg"
          alt="Puerta de Farol de noche, con el farol encendido"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <ol className="mt-16 grid gap-10 border-t border-line pt-14 sm:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n}>
            <p className="kicker tabular">{s.n}</p>
            <h2 className="mt-4 font-display text-2xl leading-tight">{s.title}</h2>
            <p className="mt-3 text-paper-dim">{s.text}</p>
          </li>
        ))}
      </ol>

      <section className="mt-20 grid gap-12 border-t border-line pt-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Triaje</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[0.95]">
            ¿Ahora, o una hora mañana?
          </h2>
          <p className="mt-5 text-paper-dim">
            Urgencia de día{" "}
            <span className="text-lantern">$48.900</span>. De 20:00 a 8:00,{" "}
            <span className="text-lantern">$64.900</span>. Si internamos u
            operamos, el presupuesto se firma antes.
          </p>
        </Reveal>
        <div className="lg:col-span-7">
          <Triage />
        </div>
      </section>

      <p className="mt-16 max-w-[52ch] text-paper-dim">
        Si tu animal respira mal, convulsionó, tiene el abdomen duro, lo
        atropellaron o es un gato que no come: no uses el formulario de hora.
        Llama. {site.address.line}, {site.address.city}.
      </p>
      <Link href="/internacion" className="mt-6 inline-block link-line">
        Si hay que internar →
      </Link>
    </div>
  );
}
