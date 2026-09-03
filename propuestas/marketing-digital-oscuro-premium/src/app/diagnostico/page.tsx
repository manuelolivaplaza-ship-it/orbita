import type { Metadata } from "next";
import { DiagnosticoForm } from "@/components/diagnostico-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diagnóstico",
  description:
    "Cuarenta minutos en Barrio Italia o por videollamada. Dos cupos por semana. Si no hay caso, se lo decimos esa tarde.",
};

export default function DiagnosticoPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="04"
        kicker="Diagnóstico"
        title="Cuarenta minutos. Si no hay caso, se lo decimos esa tarde."
        lede="Dos cupos por semana. En Condell 1448 o por videollamada. Traiga pauta, CAC, sitio y lo que no funciona."
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ol className="grid gap-8">
            <li>
              <p className="kicker">01</p>
              <h2 className="mt-3 font-display text-2xl">Escribe</h2>
              <p className="mt-2 text-paper-dim">
                El formulario, WhatsApp o un correo a {site.email}. Respuesta
                en 24 horas hábiles.
              </p>
            </li>
            <li>
              <p className="kicker">02</p>
              <h2 className="mt-3 font-display text-2xl">La mesa</h2>
              <p className="mt-2 text-paper-dim">
                Cuarenta minutos con Amparo o Benjamín. El mismo que, si hay
                caso, lleva la cuenta.
              </p>
            </li>
            <li>
              <p className="kicker">03</p>
              <h2 className="mt-3 font-display text-2xl">El corte</h2>
              <p className="mt-2 text-paper-dim">
                En cinco días hábiles: qué se apaga, qué se dobla, honorario en
                UF. Una página.
              </p>
            </li>
          </ol>
          <p className="mt-10 text-[0.95rem] text-muted">
            {site.address.line}, {site.address.city}
            <br />
            {site.hours}
            <br />
            <a href={site.phoneHref} className="text-paper link-line">
              {site.phone}
            </a>
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <DiagnosticoForm />
        </div>
      </div>
    </div>
  );
}
