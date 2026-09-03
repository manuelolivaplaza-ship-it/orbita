"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { practices } from "@/lib/data";
import { site } from "@/lib/site";
import { cn, isValidEmail, isValidRut } from "@/lib/utils";

const initial = {
  name: "",
  email: "",
  phone: "",
  rut: "",
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
    if (!isValidEmail(values.email)) next.email = "Indique un correo válido.";
    if (values.phone.replace(/\D/g, "").length < 8)
      next.phone = "Indique un celular.";
    if (values.rut.trim() && !isValidRut(values.rut))
      next.rut = "El RUT no calza. Revise el dígito verificador.";
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
      <div className={cn("border border-line bg-luz px-7 py-10", className)} role="status">
        <p className="kicker">Recibido</p>
        <h3 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight">
          Le respondemos dentro de las 24 horas hábiles.
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
          Si el oficio no es nuestro, se lo diremos en esa llamada — y a quién
          conviene escribir.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border border-line bg-luz px-4 py-3 text-[16px] text-ink placeholder:text-muted/70 transition-colors focus:border-cobre";

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
      </div>
      <Field label="Oficio" error={errors.area}>
        <select
          className={fieldClass}
          value={values.area}
          onChange={(event) => update("area", event.target.value)}
          name="area"
        >
          <option value="">El que corresponda</option>
          {practices.map((item) => (
            <option key={item.slug} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </Field>
      <Field label="De qué se trata" error={errors.message}>
        <textarea
          className={cn(fieldClass, "min-h-32 resize-y")}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          name="message"
        />
      </Field>
      {status === "error" ? (
        <p className="text-[14px] text-cobre">
          No se pudo enviar. Escríbanos a {site.email} o por WhatsApp.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center bg-cobre px-7 text-[0.92rem] font-semibold tracking-wide text-luz transition-colors hover:bg-cobre-deep disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Pedir una hora"}
      </button>
      <p className="text-[13px] leading-relaxed text-muted">
        La primera hora cuesta $38.000 y se descuenta si tomamos la cartera.
        Respuesta en 24 horas hábiles.
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
      <span className="mb-1.5 block text-[12px] font-semibold tracking-wide text-muted">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1 block text-[13px] text-cobre">{error}</span> : null}
    </label>
  );
}
