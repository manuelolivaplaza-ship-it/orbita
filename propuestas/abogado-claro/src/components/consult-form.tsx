"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { practices } from "@/lib/data";
import { cn } from "@/lib/utils";

const initial = {
  name: "",
  email: "",
  phone: "",
  area: "",
  message: "",
};

export function ConsultForm({ className }: { className?: string }) {
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Indique un correo válido.";
    if (values.message.trim().length < 12)
      next.message = "Cuéntenos, en pocas líneas, de qué se trata.";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/consulta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("fail");
      setStatus("sent");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={cn("border border-line bg-paper px-8 py-12", className)}
        role="status"
      >
        <p className="overline-label">Recibido</p>
        <h3 className="font-display mt-4 text-3xl leading-tight text-ink">
          Le respondemos dentro de las 24 horas hábiles.
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          La primera conversación no se factura. Si el asunto no es nuestro, se
          lo diremos en esa llamada.
        </p>
      </div>
    );
  }

  const field =
    "w-full border-0 border-b border-line bg-transparent py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-ink";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-7", className)} noValidate>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Nombre" error={errors.name}>
          <input
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={field}
            placeholder="Nombre y apellido"
          />
        </Field>
        <Field label="Correo" error={errors.email}>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={field}
            placeholder="nina.v@example.com"
          />
        </Field>
      </div>
      <div className="grid gap-7 sm:grid-cols-2">
        <Field label="Teléfono">
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={field}
            placeholder="+54 11 …"
          />
        </Field>
        <Field label="Área">
          <select
            name="area"
            value={values.area}
            onChange={(e) => update("area", e.target.value)}
            className={cn(field, "appearance-none rounded-none")}
          >
            <option value="">Indistinto</option>
            {practices.map((item) => (
              <option key={item.slug} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="El asunto" error={errors.message}>
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(field, "resize-none")}
          placeholder="Qué ocurrió, qué necesita, para cuándo."
        />
      </Field>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[12px] leading-relaxed text-muted-foreground">
          Al enviar acepta que lo contactemos por este asunto. No compartimos
          su consulta.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center bg-ink px-8 text-[11px] tracking-[0.22em] text-paper uppercase transition-colors duration-300 hover:bg-bronze disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar consulta"}
        </button>
      </div>
      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          No pudimos enviar. Escríbanos a estudio@alba.ar o llame al 4809 4410.
        </p>
      ) : null}
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
      <span className="overline-label">{label}</span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-xs text-destructive">{error}</span>
      ) : null}
    </label>
  );
}
