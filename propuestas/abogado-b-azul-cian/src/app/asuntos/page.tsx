import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { matters } from "@/lib/data";

export const metadata: Metadata = {
  title: "Asuntos",
  description:
    "Casos de CAUCE, sin el nombre del cliente. Laboral, familia, consumidor, civil e inmobiliario, empresa. Providencia.",
};

export default function AsuntosPage() {
  return (
    <>
      <PageIntro
        kicker="Asuntos"
        title="El trabajo, sin el nombre del cliente."
        lead="Cifras reales, nombres omitidos. Un resultado no se promete. Estos son caminos que ya se recorrieron."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {matters.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <article className="flex h-full flex-col border-t border-cyan/50 pt-8">
                <p className="text-[12px] tracking-[0.16em] text-muted uppercase">
                  {item.year} · {item.area} · {item.comuna}
                </p>
                <p className="font-display nums mt-6 text-6xl font-semibold tracking-tight">
                  {item.metric}
                  <span className="text-cyan">.</span>
                </p>
                <p className="mt-1 text-[12px] tracking-[0.14em] text-muted uppercase">
                  {item.metricLabel}
                </p>
                <h2 className="font-display mt-7 text-2xl font-semibold leading-snug tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                  {item.summary}
                </p>
                <p className="mt-5 text-[14px] text-navy">{item.result}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
