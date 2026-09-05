import type { Metadata } from "next";
import { Suspense } from "react";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Cotizar",
  description:
    "Cotizá fierro, pernos, planchas y soldadura con IVA. Corte a medida, retiro en Quilicura o despacho de madrugada.",
};

const requisitos = [
  "Familia, medida y cantidad. Si es fierro, el largo de corte.",
  "Comuna de retiro o de obra.",
  "Teléfono que conteste de noche.",
  `Pedido mínimo de despacho ${formatCLP(site.pedidoMinimoIva)} con IVA.`,
];

export default function CotizarPage() {
  return (
    <div className="pt-[4.5rem]">
      <div className="mx-auto grid max-w-[1480px] gap-16 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24 lg:px-16">
        <header className="md:col-span-5">
          <h1 className="font-display text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.92] tracking-wide">
            Escribe la medida. Después, la nave.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute">
            No es un carro. Es una lista: se lee, se cotiza, se corta.
            Respondemos en horario de turno.
          </p>
          <ul className="mt-10 space-y-4 text-sm leading-relaxed text-mute">
            {requisitos.map((item) => (
              <li key={item} className="grid grid-cols-[0.7rem_1fr] gap-3">
                <span className="mt-2 block h-px bg-sodium" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-mute">
            También por WhatsApp al {site.whatsapp} o al {site.phone}.
          </p>
        </header>
        <div className="md:col-span-6 md:col-start-7">
          <Suspense fallback={<p className="text-sm text-mute">Abriendo la lista…</p>}>
            <QuoteForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
