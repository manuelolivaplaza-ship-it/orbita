import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/mark";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Triage } from "@/components/triage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Urgencia",
  description:
    "NOCTUA no es un servicio de urgencia. Mapa de qué sí se atiende de noche y qué debe ir al SAMU 131.",
};

export default function UrgenciaPage() {
  return (
    <>
      <PageIntro
        kicker="Criterio"
        title="No somos urgencia. Sí somos la noche."
        lead="Un pecho que aprieta ahora no espera un cupo. Un insomnio de meses, sí. Aquí está el mapa. Si duda, llame al 131."
      />

      <section className="pb-8">
        <div className="shell">
          <Triage />
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Si duda, no venga. Llame.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
              Preferimos perder un cupo a que alguien conduzca hasta Vitacura
              con un infarto. SAMU {site.emergency}. Si el caso cabe en esta
              casa, se lo decimos altiro.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={80}>
            <dl className="space-y-8 text-sm">
              <div className="border-t border-line pt-6">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  SAMU
                </dt>
                <dd className="mt-3 font-display text-5xl font-semibold nums tracking-tight">
                  {site.emergency}
                </dd>
              </div>
              <div className="border-t border-line pt-6">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  Casa · no urgencia
                </dt>
                <dd className="mt-3">
                  <a href={site.phoneHref} className="link-line nums text-lg">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-6">
                <dt className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
                  WhatsApp
                </dt>
                <dd className="mt-3">
                  <a href={site.whatsappHref} className="link-line">
                    {site.whatsapp}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/agenda" className="btn btn-amber">
                Pedir hora
                <Arrow />
              </Link>
              <a href={`tel:${site.emergency}`} className="btn btn-ghost">
                Llamar 131
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
