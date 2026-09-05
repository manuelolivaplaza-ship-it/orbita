"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { formatCLP } from "@/lib/format";
import { site } from "@/lib/site";

type Order = {
  id: string;
  nombre: string;
  email: string;
  total: number;
  pay: string;
  envio: string;
  region: string;
};

function Inner() {
  const params = useSearchParams();
  const id = params.get("id");
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("bazar-pedido");
      if (!raw) return;
      const parsed = JSON.parse(raw) as Order;
      if (!id || parsed.id === id) setOrder(parsed);
    } catch {
      /* ignore */
    }
  }, [id]);

  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center pt-28 pb-24">
      <p className="kicker">Pedido recibido</p>
      <h1 className="font-display mt-4 max-w-3xl text-[clamp(2.4rem,6vw,5rem)] leading-[0.92] tracking-tight">
        Quedó anotado.
      </h1>
      <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-tinta-suave">
        {order
          ? `${order.nombre}, te escribimos a ${order.email}. ${
              order.envio === "retiro"
                ? "Retiro en Lastarria cuando te avisemos."
                : `Despacho a ${order.region}.`
            } ${
              order.pay === "transferencia"
                ? "Cuando veamos la transferencia, sale el bulto."
                : "El pago Webpay quedó simulado en esta propuesta."
            }`
          : "El pedido quedó registrado en esta sesión. Si recargaste, el detalle se pierde: escríbenos y lo reconstruimos."}
      </p>
      {order ? (
        <dl className="mt-10 grid max-w-md grid-cols-2 gap-y-4">
          <dt className="kicker">Número</dt>
          <dd className="font-mono">{order.id}</dd>
          <dt className="kicker">Total</dt>
          <dd className="font-mono nums">{formatCLP(order.total)}</dd>
        </dl>
      ) : id ? (
        <p className="mt-8 font-mono text-sm">{id}</p>
      ) : null}
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/coleccion" className="btn btn-ink">
          Seguir en la colección
        </Link>
        <a href={site.whatsappHref} className="btn btn-ghost" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </section>
  );
}

export function OrderDone() {
  return (
    <Suspense>
      <Inner />
    </Suspense>
  );
}
