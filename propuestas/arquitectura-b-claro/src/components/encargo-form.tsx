"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { comunas } from "@/lib/data";
import { site } from "@/lib/site";
import { cn, isValidEmail, isValidRut } from "@/lib/utils";

const initial = {
  name: "",
  email: "",
  phone: "",
  rut: "",
  kind: "casa",
  comuna: "",
  area: "",
  message: "",
};

export function EncargoForm({ className }: { className?: string }) {
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
      next.message = "Cuéntenos, en pocas líneas, del predio.";
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
        className={cn("border border-line bg-cal px-7 py-10", className)}
        role="status"
      >
        <p className="kicker">Recibido</p>
        <h3 className="font-display mt-4 text-3xl font-semibold leading-tight tracking-tight">
          Le respondemos dentro de las 24 horas hábiles.
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
          Si el predio no es de esta mesa —por programa, por presupuesto o por
          oficio— se lo diremos en esa llamada.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border border-line bg-cal px-4 py-3 text-[16px] text-ink placeholder:text-muted/70 transition-colors focus:border-cobre";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" error={errors.name}>
          <input
            className={fieldClass}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
          />
        </Field>
        <Field label="Correo" error={errors.email}>
          <input
            className={fieldClass}
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            autoComplete="email"
          />
        </Field>
        <Field label="Celular" error={errors.phone}>
          <input
            className={fieldClass}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            autoComplete="tel"
            inputMode="tel"
            placeholder="+56 9"
          />
        </Field>
        <Field label="RUT (opcional)" error={errors.rut}>
          <input
            className={fieldClass}
            value={values.rut}
            onChange={(e) => update("rut", e.target.value)}
            placeholder="12.345.678-9"
          />
        </Field>
        <Field label="Encargo">
          <select
            className={fieldClass}
            value={values.kind}
            onChange={(e) => update("kind", e.target.value)}
          >
            <option value="casa">Casa nueva</option>
            <option value="ampliacion">Ampliación o reforma</option>
            <option value="productivo">Bodega / productivo</option>
            <option value="publico">Educativo o cultural</option>
            <option value="otro">Otro</option>
          </select>
        </Field>
        <Field label="Comuna del predio">
          <select
            className={fieldClass}
            value={values.comuna}
            onChange={(e) => update("comuna", e.target.value)}
          >
            <option value="">Indicar</option>
            {comunas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Superficie aprox. (m²)">
          <input
            className={fieldClass}
            value={values.area}
            onChange={(e) => update("area", e.target.value)}
            inputMode="numeric"
            placeholder="280"
          />
        </Field>
      </div>
      <Field label="El predio" error={errors.message}>
        <textarea
          className={`${fieldClass} min-h-[140px] resize-y`}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Pendiente, orientación, árboles, si ya hay un muro de contención, el presupuesto en UF."
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
        className="font-display inline-flex h-12 items-center bg-cobre px-7 text-[0.92rem] font-semibold text-cal transition-colors hover:bg-cobre-deep disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar ficha"}
      </button>
      <p className="max-w-md text-[12px] leading-relaxed text-muted">
        Respuesta en 24 horas hábiles. No compartimos su correo. El honorario se
        pacta por escrito, en UF, si tomamos el encargo.
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
      <span className="font-mono mb-2 block text-[10px] tracking-[0.16em] text-muted uppercase">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-1.5 block text-[13px] text-cobre">{error}</span>
      ) : null}
    </label>
  );
}
