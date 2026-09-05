import type { Metadata } from "next";
import { AccountForm } from "@/components/account-form";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export const metadata: Metadata = {
  title: "Abrir cuenta",
  description:
    "Solicitud de cuenta comercial NOCTUA. RUT, giro, comuna y volumen. Pedido mínimo y plazos claros.",
};

const requisitos = [
  "RUT de empresa y giro vigente en SII.",
  "Dirección de cocina o bodega con horario de recepción nocturna.",
  "Encargado de compras con teléfono que conteste después de las 20:00.",
  `Pedido mínimo ${formatCLP(site.pedidoMinimoNeto)} neto por guía.`,
];

export default function CuentaPage() {
  return (
    <div className="pt-[4.5rem]">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24 lg:px-16">
        <header className="md:col-span-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted">
            Cuenta comercial
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[0.94] tracking-tight">
            Abrimos la ficha. Después, la puerta del CD.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper-dim">
            No es un e-commerce. Es una cuenta: una factura, un vendedor de
            territorio, una ronda. Respondemos en horario de CD.
          </p>
          <ul className="mt-10 space-y-4 text-sm leading-relaxed text-paper-dim">
            {requisitos.map((item) => (
              <li key={item} className="grid grid-cols-[0.7rem_1fr] gap-3">
                <span className="mt-2 block h-px bg-amber" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted">
            También por WhatsApp al {site.whatsapp} o al {site.phone}.
          </p>
        </header>
        <div className="md:col-span-6 md:col-start-7">
          <AccountForm />
        </div>
      </div>
    </div>
  );
}
