"use client";

import { FormEvent, useState } from "react";
import { oficioOptions, site, spendOptions } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

export function DiagnosticoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const oficio = String(data.get("oficio") ?? "").trim();

    if (!nombre || !telefono || !oficio) {
      setStatus("error");
      setError("Complete nombre, teléfono y oficio.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          telefono,
          oficio,
          empresa: String(data.get("empresa") ?? ""),
          pauta: String(data.get("pauta") ?? ""),
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
      <div className="border border-ember/40 bg-surface p-8" role="status">
        <p className="kicker">Recibido</p>
        <h3 className="mt-3 font-display text-3xl leading-tight">
          El diagnóstico quedó pedido.
        </h3>
        <p className="mt-4 max-w-[40ch] text-paper-dim">
          Le escribimos en 24 horas hábiles al teléfono que dejó. Si el mes está
          lleno, se lo decimos. Dos cupos por semana.
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
        <span>Empresa</span>
        <input
          name="empresa"
          type="text"
          autoComplete="organization"
          placeholder="Marca o razón social"
        />
      </label>
      <label className="field">
        <span>Oficio *</span>
        <select name="oficio" required defaultValue="">
          <option value="" disabled>
            Dónde duele
          </option>
          {oficioOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Pauta actual</span>
        <select name="pauta" defaultValue="">
          <option value="" disabled>
            Gasto mensual en plataforma
          </option>
          {spendOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Qué hay que cortar</span>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="CAC, canal, sitio, lo que no está funcionando."
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-ember-bright" role="alert">
          {error}
        </p>
      ) : null}
      <button
        className="btn btn-primary w-full sm:w-auto"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Pedir el diagnóstico"}
      </button>
      <p className="text-[0.8rem] leading-relaxed text-muted">
        Al enviar acepta contacto por teléfono o WhatsApp. Dos cupos por semana.
        Si no hay caso, se lo decimos esa tarde. {site.phone}.
      </p>
    </form>
  );
}
