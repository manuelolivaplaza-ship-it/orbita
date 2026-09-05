import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { PageIntro } from "@/components/page-intro";
import { method } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Primera hora",
  description:
    "Pide tu primera hora en ETER. Emparejamos con una persona del equipo. Providencia y online.",
};

export default function PrimeraPage() {
  return (
    <>
      <PageIntro
        kicker="Primera hora"
        title="Escríbenos. Leemos. Te proponemos a alguien."
        lead="No es una ficha de urgencia. Es un texto corto para emparejar. Si ahora es demasiado, llama a Salud Responde."
      />

      <section className="pb-28">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BookingForm />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris">
              Qué pasa después
            </p>
            <ol className="mt-6 space-y-6">
              {method.map((step) => (
                <li key={step.n}>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-sage-deep">
                    {step.n} · {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-tinta-suave">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-12 border-t border-linea pt-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-gris">
                {site.crisis.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-tinta-suave">
                Esta casa no es urgencia.{" "}
                <a href={site.crisis.phoneHref} className="link-sage nums">
                  Salud Responde {site.crisis.phone}
                </a>
                . Prevención del suicidio:{" "}
                <a href={site.crisis.altHref} className="link-sage">
                  {site.crisis.alt}
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
