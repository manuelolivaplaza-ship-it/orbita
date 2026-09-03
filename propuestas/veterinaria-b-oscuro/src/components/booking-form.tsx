"use client";

import { FormEvent, useState } from "react";
import { serviceOptions, site, speciesOptions } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const animal = String(data.get("animal") ?? "").trim();
    const servicio = String(data.get("servicio") ?? "").trim();

    if (!nombre || !telefono || !animal || !servicio) {
      setStatus("error");
      setError("Completa nombre, teléfono, animal y servicio.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/hora", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          telefono,
          animal,
          servicio,
          mensaje: String(data.get("mensaje") ?? ""),
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("No se pudo enviar. Llama o escribe por WhatsApp.");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-lantern/40 bg-surface p-8" role="status">
        <p className="kicker">Recibido</p>
        <h3 className="mt-3 font-display text-3xl leading-tight">
          La hora quedó pedida.
        </h3>
        <p className="mt-4 max-w-[40ch] text-paper-dim">
          Te escribimos en el día al teléfono que dejaste. Si es urgente, llama
          ahora al {site.phone} — la guardia está.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>Tu nombre *</span>
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
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Animal *</span>
          <select name="animal" required defaultValue="">
            <option value="" disabled>
              Elige
            </option>
            {speciesOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Servicio *</span>
          <select name="servicio" required defaultValue="">
            <option value="" disabled>
              Elige
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="field">
        <span>Qué le pasa y cuándo te acomoda</span>
        <textarea
          name="mensaje"
          rows={4}
          placeholder="Nombre del animal, edad, y si prefieres mañana o tarde."
        />
      </label>
      {status === "error" ? (
        <p className="text-sm text-lantern-bright" role="alert">
          {error}
        </p>
      ) : null}
      <button
        className="btn btn-primary w-full sm:w-auto"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Pedir hora"}
      </button>
      <p className="text-[0.8rem] leading-relaxed text-muted">
        Al enviar aceptas contacto por teléfono o WhatsApp. Si es una urgencia,
        no uses este formulario: llama al {site.phone}.
      </p>
    </form>
  );
}
