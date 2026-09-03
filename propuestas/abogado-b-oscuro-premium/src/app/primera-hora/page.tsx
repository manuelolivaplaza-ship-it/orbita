import type { Metadata } from "next";
import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { NightClock } from "@/components/night-clock";
import { PageIntro } from "@/components/page-intro";
import { site, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Primera hora",
  description:
    "Cincuenta minutos en Lastarria o por video. $52.000, se descuenta si tomamos el asunto. Respuesta en 24 horas hábiles.",
};

export default function PrimeraHoraPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="04"
        kicker="Primera hora"
        title="Cincuenta minutos. Si no hay caso, se lo decimos esa tarde."
        lede="Traiga cédula y lo que tenga: contrato, finiquito, resolución, correos. No hace falta un expediente armado."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <ConsultForm />
        </div>
        <aside className="lg:col-span-6">
          <div className="relative mb-8 aspect-[16/10] overflow-hidden border border-line">
            <Image
              src="/images/mesa.jpg"
              alt="Mesa del estudio de noche, lámpara de cobre encendida"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <NightClock className="font-mono text-[0.78rem] text-paper-dim" />
          <dl className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
            <div>
              <dt className="kicker">Valor</dt>
              <dd className="mt-2 font-display text-3xl text-copper">$52.000</dd>
              <p className="mt-1 text-sm text-muted">
                50 min. Se descuenta si tomamos el asunto.
              </p>
            </div>
            <div>
              <dt className="kicker">Dónde</dt>
              <dd className="mt-2 text-paper-dim">
                {site.address.line}
                <br />
                o videollamada
              </dd>
            </div>
            <div>
              <dt className="kicker">Teléfono</dt>
              <dd className="mt-2">
                <a href={site.phoneHref} className="link-line tabular">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">WhatsApp</dt>
              <dd className="mt-2">
                <a href={site.whatsapp} className="link-line">
                  Escribir ahora
                </a>
              </dd>
            </div>
          </dl>
          <ol className="mt-10 grid gap-5">
            {steps.map((s) => (
              <li key={s.folio} className="border-t border-line pt-4">
                <p className="kicker">{s.folio}</p>
                <p className="mt-1 font-medium">{s.title}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </div>
  );
}
