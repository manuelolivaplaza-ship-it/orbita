"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { channelOptions } from "@/lib/data";
import { cn, isValidEmail, isValidRut } from "@/lib/utils";

const initial = {
  name: "",
  email: "",
  phone: "",
  rut: "",
  company: "",
  channel: "",
  spend: "",
  message: "",
};

export function LecturaForm({ className }: { className?: string }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function update(field: keyof typeof initial, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 3) next.name = "Indique su nombre.";
    if (!isValidEmail(values.email)) next.email = "Indique un correo válido.";
    if (values.phone.replace(/\D/g, "").length < 8)
      next.phone = "Indique un celular.";
    if (values.rut.trim() && !isValidRut(values.rut))
      next.rut = "El RUT no calza. Revise el dígito verificador.";
    if (values.message.trim().length < 12)
      next.message = "Cuéntenos, en pocas líneas, qué hay que leer.";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setStatus("sending");
    try {
      await fetch("/api/lectura", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    } catch {
      /* El dist estático no tiene API; la minuta queda en local. */
    }
    try {
      window.localStorage.setItem(
        "marea-lectura",
        JSON.stringify({ ...values, at: Date.now() })
      );
    } catch {
      /* ignore */
    }
    setStatus("sent");
    setValues(initial);
  }

  if (status === "sent") {
    return (
      <div className={cn("border border-line bg-foam px-7 py-10", className)} role="status">
        <p className="mark">Recibido</p>
        <h3 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight">
          Le respondemos dentro de las 24 horas hábiles.
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
          Si el encargo no es nuestro, se lo diremos en esa llamada — y a quién
          conviene escribir.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border border-line bg-foam px-4 py-3 text-[16px] text-ink placeholder:text-muted/70 transition-colors duration-200 focus:border-cyan";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" error={errors.name}>
          <input
            className={fieldClass}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            autoComplete="name"
            name="name"
          />
        </Field>
        <Field label="Correo" error={errors.email}>
          <input
            className={fieldClass}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            autoComplete="email"
            name="email"
            type="email"
          />
        </Field>
        <Field label="Celular" error={errors.phone}>
          <input
            className={fieldClass}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
            name="phone"
            inputMode="tel"
            placeholder="+56 9"
          />
        </Field>
        <Field label="RUT (opcional)" error={errors.rut}>
          <input
            className={fieldClass}
            value={values.rut}
            onChange={(event) => update("rut", event.target.value)}
            name="rut"
            placeholder="12.345.678-9"
          />
        </Field>
        <Field label="Empresa (opcional)">
          <input
            className={fieldClass}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            name="company"
            autoComplete="organization"
          />
        </Field>
        <Field label="Canal">
          <select
            className={fieldClass}
            value={values.channel}
            onChange={(event) => update("channel", event.target.value)}
            name="channel"
          >
            <option value="">No lo tengo claro</option>
            {channelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Gasto actual de pauta, al mes (opcional)">
        <input
          className={fieldClass}
          value={values.spend}
          onChange={(event) => update("spend", event.target.value)}
          name="spend"
          placeholder="Ej. 1,2 millones · o 0"
        />
      </Field>
      <Field label="Qué hay que leer" error={errors.message}>
        <textarea
          className={cn(fieldClass, "min-h-[8.5rem] resize-y")}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          name="message"
        />
      </Field>
      {status === "error" ? (
        <p className="text-[14px] text-blue" role="alert">
          No se pudo enviar. Escríbanos a hola@marea.cl o por WhatsApp.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center bg-navy px-7 text-[0.92rem] font-semibold text-foam transition-colors duration-200 hover:bg-ink disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Pedir la lectura"}
      </button>
      <p className="text-[13px] text-muted">
        $92.000 · 45 minutos · se descuenta si cerramos. Respondemos en 24 horas
        hábiles.
      </p>
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
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium">{label}</span>
      {children}
      {error ? (
        <span className="mt-1 block text-[13px] text-blue" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
