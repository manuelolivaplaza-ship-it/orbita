"use client";

import { FormEvent, useState } from "react";
import { bandOptions, site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

export function LecturaForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const banda = String(data.get("banda") ?? "").trim();
    const empresa = String(data.get("empresa") ?? "").trim();
    const sitioWeb = String(data.get("sitio") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    if (!nombre || !telefono || !banda) {
      setStatus("error");
      setError("Completa nombre, teléfono y banda.");
      return;
    }

    const payload = { nombre, telefono, banda, empresa, sitio: sitioWeb, mensaje };

    try {
      localStorage.setItem("senal-lectura", JSON.stringify(payload));
    } catch {
      /* ignore */
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/lectura", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
      <div className="border border-carrier/40 bg-surface p-8" role="status">
        <p className="kicker">En el aire</p>
        <h3 className="mt-3 font-display text-4xl leading-[0.9]">
          La lectura quedó pedida.
        </h3>
        <p className="font-serif mt-4 max-w-[40ch] text-paper-dim">
          Le escribimos en 24 horas hábiles al teléfono que dejó. Si la pauta
          está prendida y no sabe qué compra, llame ahora al {site.phone}.
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
        <input name="empresa" type="text" placeholder="Nombre de la empresa" />
      </label>
      <label className="field">
        <span>Sitio</span>
        <input
          name="sitio"
          type="text"
          inputMode="url"
          placeholder="www.empresa.cl"
          autoComplete="url"
        />
      </label>
      <label className="field">
        <span>Banda *</span>
        <select name="banda" required defaultValue="">
          <option value="" disabled>
            Qué hay que leer
          </option>
          {bandOptions.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Qué está pasando</span>
        <textarea
          name="mensaje"
          placeholder="Pauta, sitio, canal, lo que duela. Sin deck."
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-carrier" role="alert">
          {error}{" "}
          <a href={site.whatsapp} className="underline">
            WhatsApp
          </a>
        </p>
      ) : null}
      <button
        type="submit"
        className="btn btn-primary justify-self-start"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Pedir la lectura"}
      </button>
      <p className="text-sm text-muted">
        {site.lecturaPrice} · 45 min · se descuenta si cerramos. Respuesta en 24
        horas hábiles.
      </p>
    </form>
  );
}
