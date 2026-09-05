"use client";

import { FormEvent, useState } from "react";
import { comunas, plans } from "@/lib/site";
import { cn } from "@/lib/utils";

const field =
  "w-full bg-transparent border-0 border-b border-line px-0 py-3 text-ivory placeholder:text-muted/70 focus:border-copper focus:ring-0 outline-none transition-colors duration-500";

export function VisitForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-copper/40 bg-surface px-8 py-14 text-center">
        <p className="font-mono text-[0.62rem] tracking-[0.36em] text-copper uppercase">
          Solicitud recibida
        </p>
        <h3 className="mt-5 font-serif text-4xl tracking-tight">
          Te escribimos por WhatsApp.
        </h3>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-ivory-soft">
          Tu visita quedó registrada. En las próximas 24 horas hábiles te
          proponemos un horario. La primera conversación dura cuarenta minutos
          y es individual.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
            Nombre
          </span>
          <input required name="nombre" className={field} />
        </label>
        <label className="block">
          <span className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
            Apellido
          </span>
          <input required name="apellido" className={field} />
        </label>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
            WhatsApp
          </span>
          <input
            required
            name="whatsapp"
            type="tel"
            placeholder="+56 9"
            className={field}
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
            Correo
          </span>
          <input required name="email" type="email" className={field} />
        </label>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
            Comuna
          </span>
          <select required name="comuna" defaultValue="" className={cn(field, "appearance-none")}>
            <option value="" disabled>
              Selecciona
            </option>
            {comunas.map((c) => (
              <option key={c} value={c} className="bg-bg text-ivory">
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
            Membresía de interés
          </span>
          <select required name="plan" defaultValue="club" className={cn(field, "appearance-none")}>
            {plans.map((p) => (
              <option key={p.id} value={p.id} className="bg-bg text-ivory">
                {p.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
          Horario preferente para la visita
        </span>
        <select required name="horario" defaultValue="manana" className={cn(field, "appearance-none")}>
          <option value="amanecer" className="bg-bg">
            05:30 — 08:00
          </option>
          <option value="manana" className="bg-bg">
            08:00 — 12:00
          </option>
          <option value="tarde" className="bg-bg">
            12:00 — 17:00
          </option>
          <option value="noche" className="bg-bg">
            17:00 — 21:00
          </option>
        </select>
      </label>
      <label className="block">
        <span className="font-mono text-[0.58rem] tracking-[0.28em] text-muted uppercase">
          Cuéntanos, en una línea, qué buscas
        </span>
        <textarea name="nota" rows={3} className={cn(field, "resize-none")} />
      </label>
      <button
        type="submit"
        className="mt-4 inline-flex items-center justify-center bg-copper px-8 py-4 font-mono text-[0.68rem] tracking-[0.28em] text-bg uppercase transition-colors duration-500 hover:bg-copper-bright"
      >
        Solicitar visita
      </button>
      <p className="text-sm leading-relaxed text-muted">
        No es una clase de prueba masiva. Es una conversación de 40 minutos,
        con un coach, en el recinto. Si hay cupo, se abre la postulación.
      </p>
    </form>
  );
}
