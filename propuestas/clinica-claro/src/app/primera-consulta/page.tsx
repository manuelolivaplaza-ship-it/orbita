import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { faqs, prepare, visitSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Primera hora",
  description:
    "Cómo es venir a CLARO: pedir hora, llegar a la casa, cuarenta y cinco minutos, boleta el mismo día. Qué traer. Preguntas frecuentes.",
};

export default function PrimeraConsultaPage() {
  return (
    <>
      <PageIntro
        kicker="Primera hora"
        title="Llega a una casa. No a una fila."
        lead="El pabellón de vidrio es para sentarse. Recepción no le grita el apellido. La consulta dura lo que dice. Sale con papel y con cifra."
      />

      <section className="pb-16">
        <div className="shell">
          <Reveal className="relative aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src="/images/pabellon.jpg"
              alt="Sala de espera del pabellón de luz"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <ol className="space-y-10 lg:col-span-7">
            {visitSteps.map((step) => (
              <Reveal key={step.n}>
                <p className="font-sans nums text-[12px] tracking-[0.18em] text-sol">
                  {step.n}
                </p>
                <h2 className="font-display mt-2 text-[1.8rem] font-medium leading-tight">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-muted">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="border border-line bg-papel p-7 lg:col-span-5 lg:self-start">
            <p className="kicker">Qué traer</p>
            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted">
              {prepare.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              href="/agenda"
              className="font-sans mt-8 inline-flex h-12 items-center bg-sol px-6 text-[0.88rem] font-semibold tracking-wide text-papel hover:bg-sol-deep"
            >
              Pedir hora
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Preguntas</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[0.98] tracking-tight">
              Lo que suelen preguntar antes de cruzar el patio.
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line lg:col-span-8">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="font-display cursor-pointer list-none text-[1.25rem] font-medium">
                  <span className="flex items-start justify-between gap-4">
                    {item.q}
                    <span className="text-sol transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
