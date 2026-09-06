"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { barrios } from "@/lib/data";
import { cn, isValidEmail, isValidRut } from "@/lib/utils";

const initial = {
  name: "",
  email: "",
  phone: "",
  rut: "",
  kind: "comprar",
  comuna: "",
  budget: "",
  folio: "",
  message: "",
};

export function ConsultForm({
  className,
  defaultFolio = "",
}: {
  className?: string;
  defaultFolio?: string;
}) {
  const [values, setValues] = useState({ ...initial, folio: defaultFolio });
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
      next.message = "Cuéntenos, en pocas líneas, qué planta busca.";
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
      setValues({ ...initial, folio: defaultFolio });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className={cn("border border-line bg-luz px-7 py-10", className)}
        role="status"
      >
        <p className="kicker">Recibido</p>
        <h3 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight">
          Le respondemos dentro de las 24 horas hábiles.
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
          Si el encargo no es de esta mesa — un sur, un arriendo, un local —
          se lo diremos en esa llamada.
        </p>
      </div>
    );
  }

  const fieldClass =
    "mt-1.5 w-full border border-line bg-luz px-3 py-2.5 text-[15px] text-ink placeholder:text-muted/70";

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4", className)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" error={errors.name}>
          <input
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass}
          />
        </Field>
        <Field label="Correo" error={errors.email}>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
          />
        </Field>
        <Field label="Celular" error={errors.phone}>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+56 9"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
          />
        </Field>
        <Field label="RUT (opcional)" error={errors.rut}>
          <input
            name="rut"
            placeholder="12.345.678-9"
            value={values.rut}
            onChange={(e) => update("rut", e.target.value)}
            className={fieldClass}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Encargo">
          <select
            value={values.kind}
            onChange={(e) => update("kind", e.target.value)}
            className={fieldClass}
          >
            <option value="comprar">Comprar</option>
            <option value="vender">Vender</option>
            <option value="visita">Agendar visita</option>
          </select>
        </Field>
        <Field label="Barrio">
          <select
            value={values.comuna}
            onChange={(e) => update("comuna", e.target.value)}
            className={fieldClass}
          >
            <option value="">Cualquiera</option>
            {barrios.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Rango en UF">
          <select
            value={values.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={fieldClass}
          >
            <option value="">Aún no</option>
            <option value="hasta-8">Hasta UF 8.000</option>
            <option value="8-12">UF 8.000 a 12.000</option>
            <option value="12-16">UF 12.000 a 16.000</option>
            <option value="16-mas">Más de UF 16.000</option>
          </select>
        </Field>
      </div>

      {defaultFolio ? (
        <p className="font-mono text-[12px] tracking-wide text-norte">
          Folio {defaultFolio}
        </p>
      ) : null}

      <Field label="Qué busca" error={errors.message}>
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={fieldClass}
          placeholder="Comuna, dormitorios, y si el norte es irrenunciable."
        />
      </Field>

      {status === "error" ? (
        <p className="text-[14px] text-sol-deep" role="alert">
          No pudimos enviar. Escríbanos a mesa@helio.cl o por WhatsApp.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-sol mt-2 w-full sm:w-auto"
      >
        {status === "sending" ? "Enviando…" : "Enviar encargo"}
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
    <label className="block text-[13px] text-muted">
      {label}
      {children}
      {error ? (
        <span className="mt-1 block text-[12px] text-sol-deep">{error}</span>
      ) : null}
    </label>
  );
}
