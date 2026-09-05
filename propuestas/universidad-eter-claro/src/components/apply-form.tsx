"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { careers } from "@/data/content";
import { cn } from "@/lib/cn";
import { isValidEmail, isValidPhone } from "@/lib/format";

const initial = {
  name: "",
  email: "",
  phone: "",
  career: "",
  commune: "",
  message: "",
};

export function ApplyForm({
  className,
  defaultCareer = "",
}: {
  className?: string;
  defaultCareer?: string;
}) {
  const [values, setValues] = useState({ ...initial, career: defaultCareer });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function update(field: keyof typeof initial, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 3) next.name = "Indica tu nombre.";
    if (!isValidEmail(values.email)) next.email = "Indica un correo válido.";
    if (!isValidPhone(values.phone)) next.phone = "Indica un celular.";
    if (!values.career) next.career = "Elige una carrera.";
    if (values.commune.trim().length < 3) next.commune = "Indica tu comuna.";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setStatus("sending");
    try {
      await fetch("/api/postular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch {
      /* propuesta estática: el acuse vive en el cliente */
    }
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className={cn("border-t border-linea pt-8", className)} role="status">
        <p className="kicker">Recibido</p>
        <h3 className="font-display mt-4 text-3xl font-light tracking-tight">
          Te escribimos en 48 horas hábiles.
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-tinta-suave">
          Admisión responde con las ponderaciones de tu carrera, las fechas de
          entrevista y —si aplica— la pauta del portafolio. No hay lista de
          espera silenciosa: si el cupo está lleno, se dice.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-1", className)} noValidate>
      <Field label="Nombre" error={errors.name}>
        <input
          className="input-line"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          autoComplete="name"
        />
      </Field>
      <div className="grid gap-1 sm:grid-cols-2 sm:gap-8">
        <Field label="Correo" error={errors.email}>
          <input
            className="input-line"
            type="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            autoComplete="email"
          />
        </Field>
        <Field label="Celular" error={errors.phone}>
          <input
            className="input-line"
            type="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
            placeholder="+56 9"
          />
        </Field>
      </div>
      <div className="grid gap-1 sm:grid-cols-2 sm:gap-8">
        <Field label="Carrera" error={errors.career}>
          <select
            className="input-line"
            value={values.career}
            onChange={(event) => update("career", event.target.value)}
          >
            <option value="">Elegir</option>
            {careers.map((career) => (
              <option key={career.slug} value={career.slug}>
                {career.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Comuna" error={errors.commune}>
          <input
            className="input-line"
            value={values.commune}
            onChange={(event) => update("commune", event.target.value)}
            placeholder="Lo Barnechea, Ñuñoa…"
          />
        </Field>
      </div>
      <Field label="Una línea, si quieres" error={errors.message}>
        <textarea
          className="input-line"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="De dónde vienes, qué has leído, qué taller te llama."
        />
      </Field>
      <button
        type="submit"
        className="btn btn-ink mt-8"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Enviar postulación"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block py-3">
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gris">
        {label}
      </span>
      <div className="mt-1">{children}</div>
      {error ? (
        <span className="mt-2 block text-sm text-cielo">{error}</span>
      ) : null}
    </label>
  );
}
