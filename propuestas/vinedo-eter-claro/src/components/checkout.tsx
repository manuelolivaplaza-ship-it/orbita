"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart";
import { site } from "@/data/site";
import { formatCLP, isValidEmail, isValidPhone } from "@/lib/format";

export function Checkout() {
  const { ready, items, count, subtotal, shipping, total, setQty, remove, clear } =
    useCart();
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"despacho" | "retiro">("despacho");

  if (status === "ok") {
    return (
      <div className="shell py-28">
        <p className="kicker">Pedido recibido</p>
        <h1 className="mt-6 max-w-2xl font-display text-6xl tracking-tight md:text-8xl">
          La caja sale de la cava.
        </h1>
        <p className="mt-8 max-w-md text-lg text-tinta-suave">
          Te escribimos con boleta y seguimiento. Si pediste retiro, te avisamos
          cuando esté lista en Lo Ovalle.
        </p>
        <Link href="/vinos" className="btn btn-ink mt-10">
          Seguir viendo vinos
        </Link>
      </div>
    );
  }

  if (!ready) {
    return (
      <div className="shell py-28">
        <p className="font-display text-4xl text-tinta-suave">Abriendo la caja…</p>
      </div>
    );
  }

  if (count === 0) {
    return (
      <div className="shell py-28">
        <p className="kicker">Selección</p>
        <h1 className="mt-6 font-display text-6xl tracking-tight md:text-8xl">
          Todavía no hay nada en la caja.
        </h1>
        <p className="mt-8 max-w-md text-lg text-tinta-suave">
          Seis vinos. El stock de la tienda es el de la cava.
        </p>
        <Link href="/vinos" className="btn btn-ink mt-10">
          Ver los vinos
        </Link>
      </div>
    );
  }

  return (
    <div className="shell grid gap-16 py-28 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <p className="kicker">Selección</p>
        <h1 className="mt-5 font-display text-5xl tracking-tight md:text-7xl">
          Tu caja.
        </h1>
        <ul className="mt-12 divide-y divide-linea border-y border-linea">
          {items.map((item) => (
            <li key={item.slug} className="flex items-start justify-between gap-6 py-6">
              <div>
                <p className="font-display text-3xl">{item.wine.name}</p>
                <p className="mt-1 text-sm text-gris">
                  {item.wine.varietal} · {item.wine.vintage}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center border border-linea">
                    <button
                      type="button"
                      className="h-9 w-9"
                      onClick={() => setQty(item.slug, item.qty - 1)}
                      aria-label="Restar"
                    >
                      −
                    </button>
                    <span className="nums w-8 text-center text-sm">{item.qty}</span>
                    <button
                      type="button"
                      className="h-9 w-9"
                      onClick={() => setQty(item.slug, item.qty + 1)}
                      aria-label="Sumar"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-gris"
                    onClick={() => remove(item.slug)}
                  >
                    Sacar
                  </button>
                </div>
              </div>
              <p className="nums text-sm">
                {formatCLP(item.wine.price * item.qty)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-5">
        <form
          className="border border-linea p-6 md:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const name = String(data.get("nombre") ?? "").trim();
            const email = String(data.get("email") ?? "").trim();
            const phone = String(data.get("telefono") ?? "").trim();
            if (name.length < 3 || !isValidEmail(email) || !isValidPhone(phone)) {
              setError("Nombre, correo y teléfono, por favor.");
              return;
            }
            if (mode === "despacho" && !String(data.get("comuna") ?? "").trim()) {
              setError("Falta la comuna de despacho.");
              return;
            }
            setError("");
            setStatus("loading");
            window.setTimeout(() => {
              localStorage.setItem(
                "eter-pedido",
                JSON.stringify({
                  ...Object.fromEntries(data.entries()),
                  items,
                  total,
                  mode,
                }),
              );
              clear();
              setStatus("ok");
            }, 800);
          }}
        >
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
            Cómo lo quieres
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              className={`btn ${mode === "despacho" ? "btn-ink" : "btn-ghost"} px-4 py-2 text-[0.58rem]`}
              onClick={() => setMode("despacho")}
            >
              Despacho
            </button>
            <button
              type="button"
              className={`btn ${mode === "retiro" ? "btn-ink" : "btn-ghost"} px-4 py-2 text-[0.58rem]`}
              onClick={() => setMode("retiro")}
            >
              Retiro en viña
            </button>
          </div>

          <label className="mt-8 block">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
              Nombre
            </span>
            <input name="nombre" className="input-line mt-1" required />
          </label>
          <label className="mt-5 block">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
              Correo
            </span>
            <input name="email" type="email" className="input-line mt-1" required />
          </label>
          <label className="mt-5 block">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
              Teléfono
            </span>
            <input name="telefono" type="tel" className="input-line mt-1" required />
          </label>
          {mode === "despacho" ? (
            <>
              <label className="mt-5 block">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
                  Comuna
                </span>
                <input name="comuna" className="input-line mt-1" required />
              </label>
              <label className="mt-5 block">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
                  Dirección
                </span>
                <input name="direccion" className="input-line mt-1" required />
              </label>
            </>
          ) : (
            <p className="mt-6 text-sm leading-relaxed text-tinta-suave">
              Retiro en {site.address.line1}, {site.address.commune}.{" "}
              {site.hoursShort}. Sin costo.
            </p>
          )}
          <label className="mt-5 block">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
              Boleta o factura
            </span>
            <select name="documento" className="input-line mt-1" defaultValue="boleta">
              <option value="boleta">Boleta</option>
              <option value="factura">Factura</option>
            </select>
          </label>

          <dl className="mt-10 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-gris">Subtotal</dt>
              <dd className="nums">{formatCLP(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gris">
                {mode === "retiro" ? "Retiro" : "Despacho RM referencial"}
              </dt>
              <dd className="nums">
                {mode === "retiro"
                  ? "Sin costo"
                  : shipping === 0
                    ? "Gratis"
                    : formatCLP(shipping)}
              </dd>
            </div>
            <div className="flex justify-between border-t border-linea pt-3 text-base">
              <dt>Total</dt>
              <dd className="nums">
                {formatCLP(mode === "retiro" ? subtotal : total)}
              </dd>
            </div>
          </dl>

          {error ? <p className="mt-4 text-sm text-hoja">{error}</p> : null}

          <button
            type="submit"
            className="btn btn-ink mt-8 w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Enviando…" : "Confirmar pedido"}
          </button>
          <p className="mt-4 text-xs leading-relaxed text-gris">
            El total se confirma antes de pagar, nunca después. Despacho a
            regiones {formatCLP(site.shipping.regions)}, {site.shipping.regionsWindow}.
            Gratis en RM sobre {formatCLP(site.shipping.freeFrom)}.
          </p>
        </form>
      </div>
    </div>
  );
}
