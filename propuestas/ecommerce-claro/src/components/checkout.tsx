"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { linePrice, useCart } from "@/lib/cart";
import { formatCLP, formatDays } from "@/lib/format";
import { getProduct } from "@/lib/products";
import { getRegion, pickup, regions, shippingFor } from "@/lib/shipping";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Pay = "transferencia" | "webpay";
type Doc = "boleta" | "factura";

export function Checkout() {
  const router = useRouter();
  const { lines, subtotal, clear } = useCart();
  const [regionId, setRegionId] = useState("rm");
  const [envio, setEnvio] = useState<"despacho" | "retiro">("despacho");
  const [pay, setPay] = useState<Pay>("webpay");
  const [doc, setDoc] = useState<Doc>("boleta");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const region = getRegion(regionId);
  const shipId = envio === "retiro" ? pickup.id : regionId;
  const shipping = shippingFor(subtotal, shipId, site.freeShippingFrom);
  const total = subtotal + shipping;
  const lead = envio === "retiro" ? 0 : region.lead;

  const resumen = useMemo(
    () =>
      lines.map((line) => {
        const product = getProduct(line.slug);
        return {
          line,
          name: product?.name ?? line.slug,
          amount: linePrice(line),
        };
      }),
    [lines],
  );

  if (lines.length === 0) {
    return (
      <section className="shell pt-28 pb-24 lg:pt-36">
        <p className="kicker">Pagar</p>
        <h1 className="font-display mt-4 text-5xl tracking-tight">
          El carrito está vacío.
        </h1>
        <a href="/coleccion" className="btn btn-ink mt-8 inline-flex">
          Volver a la colección
        </a>
      </section>
    );
  }

  return (
    <section className="shell grid gap-16 pt-28 pb-24 lg:grid-cols-12 lg:pt-36 lg:pb-32">
      <div className="lg:col-span-7">
        <p className="kicker">Pagar</p>
        <h1 className="font-display mt-4 text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.92] tracking-tight">
          Datos para la mesa.
        </h1>
        <form
          className="mt-12 grid gap-10"
          onSubmit={async (e) => {
            e.preventDefault();
            setError("");
            const form = e.currentTarget;
            const data = new FormData(form);
            const nombre = String(data.get("nombre") ?? "").trim();
            const email = String(data.get("email") ?? "").trim();
            const telefono = String(data.get("telefono") ?? "").trim();
            const comuna = String(data.get("comuna") ?? "").trim();
            const direccion = String(data.get("direccion") ?? "").trim();
            if (!nombre || !email || !telefono) {
              setError("Faltan nombre, correo o teléfono.");
              return;
            }
            if (envio === "despacho" && (!comuna || !direccion)) {
              setError("Para despacho pedimos dirección y comuna.");
              return;
            }
            setSending(true);
            await new Promise((r) => setTimeout(r, 700));
            const id = `BA-${Date.now().toString().slice(-7)}`;
            try {
              sessionStorage.setItem(
                "bazar-pedido",
                JSON.stringify({
                  id,
                  nombre,
                  email,
                  total,
                  pay,
                  envio,
                  region: envio === "retiro" ? pickup.name : region.name,
                }),
              );
            } catch {
              /* ignore */
            }
            clear();
            router.push(`/pedido?id=${id}`);
          }}
        >
          <fieldset className="grid gap-6 sm:grid-cols-2">
            <legend className="kicker mb-4 w-full sm:col-span-2">Quién recibe</legend>
            <div>
              <label className="field" htmlFor="nombre">
                Nombre
              </label>
              <input id="nombre" name="nombre" required className="input-line" />
            </div>
            <div>
              <label className="field" htmlFor="apellidos">
                Apellidos
              </label>
              <input id="apellidos" name="apellidos" required className="input-line" />
            </div>
            <div>
              <label className="field" htmlFor="email">
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="input-line"
                placeholder="tu@correo.cl"
              />
            </div>
            <div>
              <label className="field" htmlFor="telefono">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                className="input-line"
                placeholder="+56 9"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend className="kicker mb-4">Documento</legend>
            <div className="flex gap-2">
              {(["boleta", "factura"] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDoc(d)}
                  className={cn(
                    "border px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.2em]",
                    doc === d
                      ? "border-tinta bg-tinta text-papel"
                      : "border-linea",
                  )}
                >
                  {d}
                </button>
              ))}
            </div>
            {doc === "factura" ? (
              <div className="mt-4 max-w-sm">
                <label className="field" htmlFor="rut">
                  RUT para factura
                </label>
                <input
                  id="rut"
                  name="rut"
                  className="input-line"
                  placeholder="12.345.678-9"
                />
              </div>
            ) : null}
          </fieldset>

          <fieldset>
            <legend className="kicker mb-4">Cómo llega</legend>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setEnvio("despacho")}
                className={cn(
                  "border px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.2em]",
                  envio === "despacho"
                    ? "border-tinta bg-tinta text-papel"
                    : "border-linea",
                )}
              >
                Despacho a domicilio
              </button>
              <button
                type="button"
                onClick={() => setEnvio("retiro")}
                className={cn(
                  "border px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.2em]",
                  envio === "retiro"
                    ? "border-tinta bg-tinta text-papel"
                    : "border-linea",
                )}
              >
                Retiro en Lastarria
              </button>
            </div>

            {envio === "despacho" ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="field" htmlFor="region">
                    Región
                  </label>
                  <select
                    id="region"
                    name="region"
                    className="input-line"
                    value={regionId}
                    onChange={(e) => setRegionId(e.target.value)}
                  >
                    {regions.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="field" htmlFor="comuna">
                    Comuna
                  </label>
                  <input id="comuna" name="comuna" className="input-line" />
                </div>
                <div className="sm:col-span-2">
                  <label className="field" htmlFor="direccion">
                    Dirección
                  </label>
                  <input
                    id="direccion"
                    name="direccion"
                    className="input-line"
                    placeholder="Calle, número, depto"
                  />
                </div>
              </div>
            ) : (
              <p className="mt-5 max-w-md text-sm leading-relaxed text-tinta-suave">
                {site.address.line}. Te avisamos cuando esté lista. {site.hoursShort}.
              </p>
            )}
          </fieldset>

          <fieldset>
            <legend className="kicker mb-4">Pago</legend>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setPay("webpay")}
                className={cn(
                  "border px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.2em]",
                  pay === "webpay"
                    ? "border-tinta bg-tinta text-papel"
                    : "border-linea",
                )}
              >
                Webpay
              </button>
              <button
                type="button"
                onClick={() => setPay("transferencia")}
                className={cn(
                  "border px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.2em]",
                  pay === "transferencia"
                    ? "border-tinta bg-tinta text-papel"
                    : "border-linea",
                )}
              >
                Transferencia
              </button>
            </div>
            {pay === "transferencia" ? (
              <p className="mt-4 max-w-md text-sm leading-relaxed text-tinta-suave">
                {site.legalName} · Banco Estado · Cuenta vista 347-2-110284-8 ·
                RUT {site.rut}. Te mandamos el correo con el detalle al confirmar.
              </p>
            ) : (
              <p className="mt-4 max-w-md text-sm leading-relaxed text-tinta-suave">
                Esta propuesta simula Webpay. En producción se abre Transbank y
                vuelve a la ficha del pedido.
              </p>
            )}
          </fieldset>

          {error ? (
            <p className="text-sm text-bronce-profundo" role="alert">
              {error}
            </p>
          ) : null}

          <button type="submit" className="btn btn-ink w-fit" disabled={sending}>
            {sending ? "Confirmando…" : `Pagar ${formatCLP(total)}`}
          </button>
        </form>
      </div>

      <aside className="lg:col-span-4 lg:col-start-9 lg:sticky lg:top-28 lg:self-start">
        <p className="kicker">Pedido</p>
        <ul className="mt-6 space-y-4">
          {resumen.map((item) => (
            <li key={item.line.key} className="flex justify-between gap-4 text-sm">
              <span>
                {item.name}
                <span className="text-gris"> ×{item.line.qty}</span>
              </span>
              <span className="font-mono nums">{formatCLP(item.amount)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-2 border-t border-linea pt-6 text-sm">
          <p className="flex justify-between">
            <span className="text-gris">Subtotal</span>
            <span className="font-mono nums">{formatCLP(subtotal)}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gris">Despacho</span>
            <span className="font-mono nums">
              {shipping === 0 ? "Sin costo" : formatCLP(shipping)}
            </span>
          </p>
          <p className="flex justify-between pt-2 text-base">
            <span>Total</span>
            <span className="font-display nums text-3xl tracking-tight">
              {formatCLP(total)}
            </span>
          </p>
        </div>
        <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
          {envio === "retiro"
            ? "Listo para retiro el mismo día, en horario de casa"
            : `Llega en ${formatDays(lead)} · ${region.name}`}
        </p>
      </aside>
    </section>
  );
}
