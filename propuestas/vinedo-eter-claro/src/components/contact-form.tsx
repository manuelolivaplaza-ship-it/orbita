"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { isValidEmail } from "@/lib/format";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");
  const [error, setError] = useState("");

  if (status === "ok") {
    return (
      <div>
        <p className="kicker">Mensaje enviado</p>
        <h2 className="mt-4 font-display text-4xl">Te escribimos.</h2>
        <p className="mt-4 text-tinta-suave">
          Si es urgente, WhatsApp {site.whatsapp}.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = String(data.get("email") ?? "");
        if (!isValidEmail(email)) {
          setError("El correo no se ve bien.");
          return;
        }
        setError("");
        localStorage.setItem(
          "eter-contacto",
          JSON.stringify(Object.fromEntries(data.entries())),
        );
        setStatus("ok");
      }}
    >
      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
          Nombre
        </span>
        <input name="nombre" className="input-line mt-1" required />
      </label>
      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
          Correo
        </span>
        <input name="email" type="email" className="input-line mt-1" required />
      </label>
      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
          Tema
        </span>
        <select name="tema" className="input-line mt-1" defaultValue="visita">
          <option value="visita">Visita</option>
          <option value="tienda">Pedido / despacho</option>
          <option value="empresa">Grupo o empresa</option>
          <option value="otro">Otro</option>
        </select>
      </label>
      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
          Mensaje
        </span>
        <textarea name="mensaje" className="input-line mt-1" required />
      </label>
      {error ? <p className="text-sm text-hoja">{error}</p> : null}
      <button type="submit" className="btn btn-ink w-max">
        Enviar
      </button>
    </form>
  );
}
