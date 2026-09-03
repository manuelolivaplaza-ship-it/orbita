import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { faqs, honorarios, noHacemos, principles, steps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Oficio",
  description:
    "Cómo trabaja SOLAR: lectura del solar, visita al mediodía, honorario del 2% más IVA, mandato escrito.",
};

export default function OficioPage() {
  return (
    <>
      <PageIntro
        plate="02"
        kicker="Método"
        title="El plano se abre primero."
        lead="No partimos por el living. Partimos por el frente, el fondo, el plan regulador y la sombra que tira el vecino a las 13:00."
      />

      <section className="pb-8">
        <div className="shell grid gap-4 lg:grid-cols-2">
          <div className="relative min-h-[42vh]">
            <Image
              src="/images/mesa.jpg"
              alt="Mesa de trabajo con planos de solares"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="relative min-h-[42vh]">
            <Image
              src="/images/fachada.jpg"
              alt="Casa de SOLAR en Avenida Larraín, La Reina"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-6 md:grid-cols-2">
          {principles.map((item) => (
            <Reveal key={item.folio} className="border border-line px-7 py-8">
              <p className="font-mono text-[11px] tracking-[0.18em] text-teja">
                {item.folio}
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-lima/40 py-20">
        <div className="shell">
          <p className="kicker">Pasos</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-tight">
            Encargo, lectura, visita, escritura.
          </h2>
          <ol className="mt-12 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <li key={item.folio} className="bg-papel px-6 py-8">
                <p className="font-mono text-[11px] tracking-[0.18em] text-teja">
                  {item.folio}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Honorarios</p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight">
              El 2%, a la vista.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              Lo que no está en la hoja de encargo no está pactado. El brief de
              cincuenta minutos no tiene honorario.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-8">
            {honorarios.map((item) => (
              <div key={item.title} className="border border-line px-6 py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[14px] tracking-wide text-teja">
                    {item.value}
                  </p>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Fuera de mesa</p>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight">
              Lo que no hacemos.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {noHacemos.map((item) => (
              <li
                key={item}
                className="border-t border-line pt-3 text-[16px] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="shell">
          <p className="kicker">Preguntas</p>
          <div className="mt-10 max-w-3xl">
            {faqs.map((item) => (
              <div key={item.q} className="border-t border-line py-7">
                <h3 className="font-display text-xl font-semibold">{item.q}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/contacto"
            className="font-display mt-8 inline-flex h-12 items-center bg-teja px-6 text-[0.9rem] font-semibold text-papel hover:bg-teja-deep"
          >
            Encargar un solar
          </Link>
        </div>
      </section>
    </>
  );
}
