import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { method, principles, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Oficio",
  description:
    "Sistemas de operación, producto, integración y compañía. Cómo trabaja Meridiano.",
};

export default function OficioPage() {
  return (
    <>
      <section className="sheet pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="kicker">
          <span className="text-norte">02</span>
          <span className="mx-2">·</span>
          Oficio
        </p>
        <h1 className="display mt-5 max-w-[14ch] text-[clamp(3rem,8vw,6.4rem)]">
          Orientar la operación. Construir el sistema.
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          No vendemos un producto de estantería. Entramos a una faena, encontramos
          el eje y levantamos el software que lo sostiene. Cuatro frentes. Un
          solo taller.
        </p>
      </section>

      <section className="sheet pb-8">
        <div className="img-cut relative aspect-[16/8]">
          <Image
            src="/images/mesa.jpg"
            alt="Mesa del taller con planos, regla de acero y luz de mediodía."
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <ol className="sheet divide-y divide-line border-y border-line py-4">
        {services.map((service) => (
          <Reveal as="li" key={service.slug} className="grid gap-8 py-14 md:grid-cols-12">
            <p className="font-mono text-[0.72rem] tracking-[0.14em] text-norte md:col-span-2">
              {service.index}
            </p>
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl tracking-[-0.04em] md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
                {service.lede}
              </p>
            </div>
            <div className="md:col-span-6">
              <p className="text-[1.05rem] leading-relaxed">{service.body}</p>
              <ul className="mt-6 grid gap-2">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-mono text-[0.78rem] tracking-[0.04em] text-muted"
                  >
                    <span className="text-norte">N</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>

      <section className="sheet py-24 md:py-32">
        <p className="kicker">Método</p>
        <h2 className="display mt-3 max-w-xl text-4xl md:text-5xl">
          Cuatro estaciones.
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-2">
          {method.map((step) => (
            <li key={step.index} className="border-t border-ink pt-6">
              <p className="font-mono text-[0.72rem] tracking-[0.14em] text-norte">
                {step.index} · {step.time}
              </p>
              <h3 className="font-display mt-3 text-3xl tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sheet pb-24 md:pb-32">
        <p className="kicker">Principios</p>
        <div className="mt-10 grid gap-px bg-line md:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="bg-nieve p-8 md:p-12">
              <h3 className="font-display text-2xl tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
        <Link href="/contacto" className="btn btn-ink mt-12">
          Pedir un levantamiento
        </Link>
      </section>
    </>
  );
}
