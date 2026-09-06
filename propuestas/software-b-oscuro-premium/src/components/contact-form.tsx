"use client";

import { useState } from "react";
import { budgets, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent";

const fieldClass =
  "w-full rounded-[3px] border border-linea bg-mar px-[15px] py-[13px] text-[1rem] text-marfil transition-colors focus:border-limbo";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-linea bg-mar px-8 py-12 md:px-12 md:py-16">
        <p className="kicker">Bitácora</p>
        <h2 className="display mt-4 text-[clamp(2rem,4vw,3.2rem)]">
          Quedó anotado. Lo leemos con calma.
        </h2>
        <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-niebla">
          Le escribimos dentro de un día hábil, hora Valparaíso. Si es urgente,
          un WhatsApp también llega.
        </p>
        <a href={site.whatsappHref} className="btn btn-primary mt-8">
          Escribir por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6" noValidate>
      <label className="field">
        <span>Nombre</span>
        <input
          name="nombre"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Elisa Bahamondes"
        />
      </label>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="field">
          <span>Correo</span>
          <input
            name="correo"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="elisa@molosur.cl"
          />
        </label>
        <label className="field">
          <span>Empresa / operación</span>
          <input
            name="empresa"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Nombre de la operación"
          />
        </label>
      </div>
      <label className="field">
        <span>Qué hay que mirar</span>
        <select name="necesidad" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Elegir
          </option>
          <option>Sistema de operación</option>
          <option>Producto hacia afuera</option>
          <option>Integración y datos</option>
          <option>Compañía / evolución</option>
          <option>Todavía no lo sé</option>
        </select>
      </label>
      <label className="field">
        <span>Rango</span>
        <select name="presupuesto" className={fieldClass} defaultValue="e">
          {budgets.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>La operación, en pocas líneas</span>
        <textarea
          name="mensaje"
          required
          className={fieldClass}
          placeholder="Qué se mueve hoy, dónde se pierde, qué no puede fallar a las tres."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Anotando…" : "Enviar la mira"}
        </button>
        <p className="text-sm text-niebla">
          Respuesta en un día hábil. Honorario en UF, por escrito.
        </p>
      </div>
    </form>
  );
}
