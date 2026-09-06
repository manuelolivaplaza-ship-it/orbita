import type { Metadata } from "next";
import { LecturaForm } from "@/components/lectura-form";
import { PageIntro } from "@/components/page-intro";
import { site, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pedir lectura",
  description:
    "Lectura de 45 minutos en SEÑAL. $84.000, se descuenta si cerramos. Minuta en 48 horas hábiles.",
};

export default function LecturaPage() {
  return (
    <div className="shell grid gap-12 pb-24 lg:grid-cols-2 lg:gap-16">
      <div>
        <PageIntro
          folio="45'"
          kicker="Lectura"
          title="Se mira la cuenta, no la presentación."
          lede={`Cuarenta y cinco minutos en Yungay o por videollamada. ${site.lecturaPrice}. Se descuenta del primer mes si cerramos.`}
        />
        <ol className="mt-10 grid gap-8">
          {steps.map((s) => (
            <li key={s.folio} className="grid grid-cols-[3rem_1fr] gap-4">
              <span className="font-mono text-[0.72rem] tracking-[0.16em] text-carrier">
                {s.folio}
              </span>
              <div>
                <p className="font-display text-[1.35rem] leading-none">
                  {s.title}
                </p>
                <p className="font-serif mt-2 text-paper-dim">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm text-muted">
          También puede escribir al {site.phone} o por{" "}
          <a href={site.whatsapp} className="link-line text-paper">
            WhatsApp
          </a>
          .
        </p>
      </div>
      <div className="lg:pt-14">
        <LecturaForm />
      </div>
    </div>
  );
}
