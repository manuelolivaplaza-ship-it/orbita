import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fees, services } from "@/lib/site";
import { formatClp } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Oficio",
  description:
    "Sistemas de operación, producto, observabilidad y compañía. Honorarios desde en pesos chilenos. Cómo trabaja Traza.",
};

export default function OficioPage() {
  return (
    <>
      <section className="shell pb-10 pt-12 md:pb-14 md:pt-20">
        <h1 className="display max-w-[16ch] text-[clamp(2.8rem,7vw,5.6rem)]">
          Orientar la operación. Dejarla trazada.
        </h1>
        <p className="mt-6 max-w-xl text-[1.08rem] leading-[1.7] text-muted">
          No vendemos un producto de estantería. Entramos a una faena,
          encontramos el flujo y levantamos el software que lo sostiene. Cuatro
          frentes. Un solo estudio.
        </p>
      </section>

      <section className="shell pb-8">
        <figure>
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/7]">
            <Image
              src="/images/rack.jpg"
              alt="Rack de red del estudio: cables UTP azules peinados sobre un patch panel negro, sin etiquetas."
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <figcaption className="caption mt-3">
            Patch · UTP cat. 6 · oficina 402
          </figcaption>
        </figure>
      </section>

      <ol className="shell divide-y divide-line border-y border-line">
        {services.map((service) => (
          <li key={service.slug} className="grid gap-6 py-12 md:grid-cols-12 md:py-16">
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl tracking-[-0.04em] md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">
                {service.lede}
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-[1.05rem] leading-relaxed">{service.body}</p>
              <ul className="mt-6 grid gap-2">
                {service.includes.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 font-mono text-[0.78rem] tracking-[0.04em] text-muted"
                  >
                    <span className="text-cian-deep">—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <section className="shell py-20 md:py-28">
        <h2 className="display max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)]">
          Cómo entra un encargo.
        </h2>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.75] text-muted">
          Dos semanas en la operación. Una hoja con el flujo, el usuario real y
          el corte que se puede levantar. Si no cabe en esa hoja, todavía no
          está claro — y se lo decimos. Después, diseño e ingeniería en la
          misma mesa, algo que se puede pulsar cada semana, decisiones
          escritas. Al final, documentación viva y un equipo que puede seguir.
          No desaparecemos el viernes del go-live.
        </p>
      </section>

      <section className="shell pb-24 md:pb-32">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Honorarios</h2>
        <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-muted">
          Precios desde, en pesos chilenos, más IVA. El número exacto sale del
          levantamiento. Si el cupo del mes está tomado, se lo decimos antes de
          agendar.
        </p>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[36rem] text-left">
            <thead>
              <tr className="border-b border-tinta">
                <th className="py-3 pr-4 text-[0.78rem] font-medium tracking-[0.08em] uppercase">
                  Encargo
                </th>
                <th className="py-3 pr-4 text-[0.78rem] font-medium tracking-[0.08em] uppercase">
                  Plazo
                </th>
                <th className="py-3 pr-4 text-[0.78rem] font-medium tracking-[0.08em] uppercase">
                  Desde
                </th>
                <th className="py-3 text-[0.78rem] font-medium tracking-[0.08em] uppercase">
                  Qué incluye
                </th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee) => (
                <tr key={fee.name} className="border-b border-line align-top">
                  <td className="py-5 pr-4 font-display text-xl tracking-[-0.03em]">
                    {fee.name}
                  </td>
                  <td className="py-5 pr-4 font-mono text-[0.78rem] text-muted">
                    {fee.time}
                  </td>
                  <td className="nums py-5 pr-4 font-medium whitespace-nowrap">
                    {formatClp(fee.price)}
                    <span className="block text-[0.72rem] font-normal text-muted">
                      + IVA
                    </span>
                  </td>
                  <td className="py-5 text-[0.95rem] leading-relaxed text-muted">
                    {fee.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/contacto" className="btn btn-navy mt-10">
          Pedir un levantamiento
        </Link>
      </section>
    </>
  );
}
