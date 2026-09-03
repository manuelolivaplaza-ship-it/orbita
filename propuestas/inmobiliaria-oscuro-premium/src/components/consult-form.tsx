"use client";

import { FormEvent, useState } from "react";
import { consultaOptions, site } from "@/lib/site";
import { properties } from "@/lib/properties";

type Status = "idle" | "sending" | "ok" | "error";

export function ConsultForm({
  defaultFolio,
}: {
  defaultFolio?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const encargo = String(data.get("encargo") ?? "").trim();

    if (!nombre || !telefono || !encargo) {
      setStatus("error");
      setError("Complete nombre, teléfono y tipo de encargo.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/consulta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          telefono,
          encargo,
          folio: String(data.get("folio") ?? ""),
          presupuesto: String(data.get("presupuesto") ?? ""),
          mensaje: String(data.get("mensaje") ?? ""),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("No se pudo enviar. Llame o escriba por WhatsApp.");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-brass/40 bg-surface p-8" role="status">
        <p className="kicker">Recibido</p>
        <h3 className="mt-3 font-display text-3xl leading-tight">
          La consulta quedó en mesa.
        </h3>
        <p className="mt-4 max-w-[40ch] text-paper-dim">
          Le escribimos en 24 horas hábiles al teléfono que dejó. Si hay una
          visita esta semana, llame ahora al {site.phone}.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>Nombre *</span>
        <input
          name="nombre"
          type="text"
          autoComplete="name"
          required
          placeholder="Nombre y apellido"
        />
      </label>
      <label className="field">
        <span>Teléfono *</span>
        <input
          name="telefono"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          placeholder="+56 9"
          className="tabular"
        />
      </label>
      <label className="field">
        <span>Encargo *</span>
        <select name="encargo" required defaultValue="">
          <option value="" disabled>
            Elige un encargo
          </option>
          {consultaOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Folio en mesa</span>
        <select name="folio" defaultValue={defaultFolio ?? ""}>
          <option value="">Aún no sé</option>
          {properties.map((p) => (
            <option key={p.slug} value={p.folio}>
              {p.folio} — {p.name}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Presupuesto en UF</span>
        <input
          name="presupuesto"
          type="text"
          inputMode="numeric"
          placeholder="Ej. 18.000"
          className="tabular"
        />
      </label>
      <label className="field">
        <span>Qué busca, y qué no</span>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Comuna, orientación, colegio, silencio. Si hay plazo de arriendo o de escritura, indíquelo."
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-brass-bright" role="alert">
          {error}
        </p>
      ) : null}
      <button
        className="btn btn-primary w-full sm:w-auto"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Solicitar presentación"}
      </button>
      <p className="text-[0.8rem] leading-relaxed text-muted">
        Al enviar acepta contacto por teléfono o WhatsApp. No compartimos sus
        datos. El brief de cincuenta minutos no tiene honorario.
      </p>
    </form>
  );
}
