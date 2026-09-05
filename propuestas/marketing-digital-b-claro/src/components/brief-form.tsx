"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { practices } from "@/lib/data";
import { site } from "@/lib/site";
import { cn, isValidEmail } from "@/lib/utils";

const initial = {
  name: "",
  email: "",
  phone: "",
  company: "",
  need: "",
  budget: "",
  message: "",
};

const budgets = [
  { value: "", label: "Aún no lo tenemos claro" },
  { value: "<40 UF", label: "Menos de 40 UF" },
  { value: "40-80 UF", label: "40 a 80 UF" },
  { value: "80-150 UF", label: "80 a 150 UF" },
  { value: "150+ UF", label: "Más de 150 UF" },
];

export function BriefForm({ className }: { className?: string }) {
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
    if (values.name.trim().length < 3) next.name = "Indica tu nombre.";
    if (!isValidEmail(values.email)) next.email = "Indica un correo válido.";
    if (values.phone.replace(/\D/g, "").length < 8)
      next.phone = "Indica un celular.";
    if (values.message.trim().length < 12)
      next.message = "Cuéntanos, en pocas líneas, de qué se trata.";
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
      <div className={cn("border border-linea bg-nieve px-7 py-10", className)} role="status">
        <p className="kicker">Recibido</p>
        <h3 className="font-display mt-4 text-3xl leading-tight tracking-tight">
          Te respondemos dentro de las 24 horas hábiles.
        </h3>
        <div className="horizon mt-6 max-w-16" />
        <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">
          Si el encargo no es nuestro, te lo decimos en esa llamada — y a quién
          conviene escribir.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border border-linea bg-nieve px-4 py-3 text-[16px] text-tinta placeholder:text-muted/70 transition-colors focus:border-norte";

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
          />
        </Field>
        <Field label="Empresa">
          <input
            className={fieldClass}
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            autoComplete="organization"
            name="company"
          />
        </Field>
      </div>

      <Field label="Qué necesitas">
        <select
          className={fieldClass}
          value={values.need}
          onChange={(event) => update("need", event.target.value)}
          name="need"
        >
          <option value="">Aún no lo sabemos</option>
          {practices.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Presupuesto mensual, más o menos">
        <select
          className={fieldClass}
          value={values.budget}
          onChange={(event) => update("budget", event.target.value)}
          name="budget"
        >
          {budgets.map((item) => (
            <option key={item.label} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Cuéntanos" error={errors.message}>
        <textarea
          className={cn(fieldClass, "min-h-32 resize-y")}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          name="message"
          rows={5}
        />
      </Field>

      {status === "error" ? (
        <p className="text-[14px] text-norte" role="alert">
          No llegó. Escríbenos a {site.email} o por WhatsApp.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center bg-norte px-7 text-[0.82rem] font-semibold tracking-[0.14em] text-nieve uppercase transition-colors hover:bg-norte-deep disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Pedir una lectura"}
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
    <label className="block">
      <span className="mb-2 block text-[12px] font-semibold tracking-[0.14em] text-muted uppercase">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-[13px] text-norte" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}
