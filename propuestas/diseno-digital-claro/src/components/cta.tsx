import Link from "next/link";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section className="border-t border-line bg-foam/50">
      <div className="wrap grid gap-8 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="eyebrow">Un encargo</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.96] tracking-[-0.035em]">
            Si el problema cabe en un correo, cabe en esta mesa.
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-5 md:col-span-4 md:col-start-9">
          <p className="text-[1.02rem] leading-relaxed text-muted">
            Diagnóstico en 8 UF. Respuesta en un día hábil, hora Santiago.
            Cotizamos en UF, con IVA aparte.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm tracking-[0.04em] text-foam transition-colors hover:bg-norte"
            >
              Escribir
            </Link>
            <a
              href={site.whatsappHref}
              className="inline-flex h-12 items-center rounded-full border border-ink px-6 text-sm tracking-[0.04em] transition-colors hover:border-norte hover:text-norte"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
