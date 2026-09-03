"use client";

import { FormEvent, useState } from "react";
import { materiaOptions, site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

export function ConsultForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const materia = String(data.get("materia") ?? "").trim();

    if (!nombre || !telefono || !materia) {
      setStatus("error");
      setError("Completa nombre, teléfono y materia.");
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
          materia,
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
      <div
        className="border border-copper/40 bg-surface p-8"
        role="status"
      >
        <p className="kicker">Recibido</p>
        <h3 className="mt-3 font-display text-3xl leading-tight">
          La primera hora quedó pedida.
        </h3>
        <p className="mt-4 max-w-[40ch] text-paper-dim">
          Le escribimos en 24 horas hábiles al teléfono que dejó. Si hay un
          plazo de días, llame ahora al {site.phone}.
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
        <span>Materia *</span>
        <select name="materia" required defaultValue="">
          <option value="" disabled>
            Elige una materia
          </option>
          {materiaOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Qué pasó y cuándo</span>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Si hay audiencia, comparendo o un plazo, indíquelo."
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-copper-bright" role="alert">
          {error}
        </p>
      ) : null}
      <button
        className="btn btn-primary w-full sm:w-auto"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Pedir la primera hora"}
      </button>
      <p className="text-[0.8rem] leading-relaxed text-muted">
        Al enviar acepta contacto por teléfono o WhatsApp. No compartimos sus
        datos. Honorario de la primera hora: $52.000, se descuenta si tomamos el
        asunto.
      </p>
    </form>
  );
}
