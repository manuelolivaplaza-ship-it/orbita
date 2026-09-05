import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Cotizar",
  description:
    "Cotizá fierro, pernos, maderas y planchas con IVA. Corte a medida, retiro en mesón o despacho a obra.",
};

const requisitos = [
  "Familia, medida y cantidad. Si es fierro, el largo de corte.",
  "Comuna de retiro o de obra.",
  "Teléfono que conteste de mañana.",
  `Pedido mínimo de despacho ${formatCLP(site.pedidoMinimoIva)} con IVA.`,
];

export default function CotizarPage() {
  return (
    <div className="pt-[4.4rem]">
      <div className="mx-auto grid max-w-[1480px] gap-16 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24 lg:px-16">
        <header className="md:col-span-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Lista de obra
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] font-light leading-[0.94] tracking-tight">
            Escribe la medida. Después, el patio.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            No es un carro. Es una lista: se lee, se cotiza, se corta. Respondemos
            en horario de mesón.
          </p>
          <ul className="mt-10 space-y-4 text-sm leading-relaxed text-ink-soft">
            {requisitos.map((item) => (
              <li key={item} className="grid grid-cols-[0.7rem_1fr] gap-3">
                <span className="mt-2 block h-px bg-steel" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted">
            También por WhatsApp al {site.whatsapp} o al {site.phone}.
          </p>
        </header>
        <div className="md:col-span-6 md:col-start-7">
          <Suspense fallback={<p className="text-sm text-muted">Abriendo la lista…</p>}>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
