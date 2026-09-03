"use client";

import { useState } from "react";
import { isapres } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ReembolsoPanel() {
  const [picked, setPicked] = useState<(typeof isapres)[number]>(isapres[0]);
  const isFonasa = picked.startsWith("Fonasa");

  return (
    <div className="rounded-[1.4rem] border border-border bg-card p-6 sm:p-8">
      <p className="text-[0.7rem] tracking-[0.16em] uppercase text-tide">
        Tu previsión
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {isapres.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setPicked(name)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
              picked === name
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-tide/50"
            )}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="font-display text-2xl tracking-tight">{picked}</h3>
        {isFonasa ? (
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Atendemos de forma particular. Te emitimos boleta electrónica el
            mismo día. Fonasa no cubre esta atención como prestador, pero
            quedan el comprobante y el detalle de prestaciones por si tu
            seguro complementario los pide.
          </p>
        ) : (
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Atendemos particular y te entregamos boleta o factura con el
            código de prestación odontológica. El reembolso lo define tu plan
            —en la práctica, entre un 40% y un 70% según tope y arancel—. No
            inventamos un simulador: en la primera visita te decimos qué código
            corresponde y qué papeles subir a la app de {picked}.
          </p>
        )}
        <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
          <li>— Boleta o factura electrónica el mismo día.</li>
          <li>— Código de prestación en el detalle.</li>
          <li>— Si el plan pide orden: te la preparamos.</li>
          <li>— No cobramos “por tramitar” el reembolso.</li>
        </ul>
      </div>
    </div>
  );
}
