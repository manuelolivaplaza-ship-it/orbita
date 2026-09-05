"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  if (status === "ok") {
    return (
      <div className="border border-linea p-8">
        <p className="kicker">Recibido</p>
        <h2 className="font-display mt-4 text-3xl tracking-tight">
          Te escribimos.
        </h2>
        <p className="mt-4 max-w-md text-tinta-suave">
          Si es urgente, WhatsApp llega antes: {site.whatsapp}.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-6"
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");
        await new Promise((r) => setTimeout(r, 600));
        setStatus("ok");
      }}
    >
      <div>
        <label className="field" htmlFor="c-nombre">
          Nombre
        </label>
        <input id="c-nombre" name="nombre" required className="input-line" />
      </div>
      <div>
        <label className="field" htmlFor="c-email">
          Correo
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          className="input-line"
        />
      </div>
      <div>
        <label className="field" htmlFor="c-pieza">
          Pieza (si hay)
        </label>
        <input id="c-pieza" name="pieza" className="input-line" />
      </div>
      <div>
        <label className="field" htmlFor="c-msg">
          Mensaje
        </label>
        <textarea id="c-msg" name="mensaje" required className="input-line" />
      </div>
      <button type="submit" className="btn btn-ink w-fit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar"}
      </button>
    </form>
  );
}
