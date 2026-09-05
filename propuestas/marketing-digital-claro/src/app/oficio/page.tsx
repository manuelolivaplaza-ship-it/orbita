import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { fees, services, steps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Oficio",
  description:
    "Estrategia y marca, pauta digital, contenido, performance, sitios y medición. Honorarios en UF, por escrito.",
};

export default function OficioPage() {
  return (
    <>
      <PageIntro
        kicker="Oficio"
        title="Lo que hacemos. Lo que no."
        lead="No somos una agencia de “todo digital”. Tomamos estrategia, pauta, contenido, sitios y medición. Si el encargo es un video suelto o un community sin criterio, te recomendamos a otra mesa."
      />

      <section className="pb-8">
        <div className="shell grid gap-10">
          {services.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.04}>
              <Link
                href={`/oficio/${item.slug}`}
                className="group grid items-center gap-8 border-t border-line py-10 lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <p className="kicker">{item.kicker}</p>
                  <h2 className="font-display mt-3 text-[clamp(1.8rem,3.2vw,2.8rem)] font-medium tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-4 max-w-[46ch] text-[16px] leading-relaxed text-muted">
                    {item.lead}
                  </p>
                  <p className="mt-5 text-[13px] font-semibold tracking-wide text-cobre">
                    Ver el oficio
                  </p>
                </div>
                <div className="img-zoom relative aspect-[16/10] lg:col-span-6 lg:col-start-7">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-luz-2 py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <p className="kicker">Método</p>
            <h2 className="font-display mt-3 max-w-[16ch] text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[0.95] tracking-tight">
              Diagnóstico, hipótesis, señal, luz.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div key={item.n}>
                <p className="font-display nums text-cobre text-3xl">{item.n}</p>
                <h3 className="font-display mt-3 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <p className="kicker">Honorarios</p>
            <h2 className="font-display mt-3 max-w-[16ch] text-[clamp(2rem,4.4vw,3.4rem)] font-medium leading-[0.95] tracking-tight">
              Tres puertas. Ninguna es “depende”.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {fees.map((item, index) => (
              <div
                key={item.name}
                className={`border border-line p-8 ${index === 1 ? "bg-sol" : "bg-luz-2"}`}
              >
                <p className="text-[13px] font-semibold tracking-[0.16em] uppercase">
                  {item.name}
                </p>
                <p className="font-display nums mt-4 text-4xl font-medium">{item.price}</p>
                <p className="mt-2 text-[14px] text-ink/70">{item.note}</p>
                <ul className="mt-8 space-y-2.5 text-[15px]">
                  {item.items.map((line) => (
                    <li key={line} className="border-t border-ink/10 pt-2.5">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            href="/contacto"
            className="mt-12 inline-flex h-12 items-center bg-sol px-6 text-[0.92rem] font-semibold text-ink hover:bg-sol-deep"
          >
            Pedir un brief
          </Link>
        </div>
      </section>
    </>
  );
}
