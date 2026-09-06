"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { isValidEmail } from "@/lib/utils";

const needs = [
  "Sistema de operación",
  "Producto hacia afuera",
  "Integración y observabilidad",
  "Compañía / evolución",
  "Todavía no lo sé",
];

const initial = {
  nombre: "",
  correo: "",
  empresa: "",
  necesidad: "",
  mensaje: "",
};

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof typeof initial, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (values.nombre.trim().length < 3) next.nombre = "Indique su nombre.";
    if (!isValidEmail(values.correo)) next.correo = "Indique un correo válido.";
    if (values.mensaje.trim().length < 12)
      next.mensaje = "Cuéntenos, en pocas líneas, qué hay que trazar.";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setStatus("sending");
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("sent");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[0.7rem] bg-navy px-7 py-10 text-[#d7e8f2]" role="status">
        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-cian uppercase">
          Recibido
        </p>
        <h2 className="display mt-4 text-[clamp(1.8rem,4vw,2.6rem)] text-white">
          Quedó anotado. Lo leemos con calma.
        </h2>
        <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-[#8eacbe]">
          Le escribimos dentro de un día hábil, hora Santiago. Si es urgente, un
          WhatsApp también llega.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-[0.4rem] border border-line bg-papel px-4 py-3 text-[16px] text-tinta placeholder:text-muted/70 transition-colors duration-200 focus:border-cian";

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <Field label="Nombre" htmlFor="nombre" error={errors.nombre}>
        <input
          id="nombre"
          name="nombre"
          autoComplete="name"
          className={fieldClass}
          value={values.nombre}
          onChange={(event) => update("nombre", event.target.value)}
          placeholder="Josefina Ruiz"
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Correo" htmlFor="correo" error={errors.correo}>
          <input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            className={fieldClass}
            value={values.correo}
            onChange={(event) => update("correo", event.target.value)}
            placeholder="josefina@empresa.cl"
          />
        </Field>
        <Field label="Empresa / operación" htmlFor="empresa">
          <input
            id="empresa"
            name="empresa"
            autoComplete="organization"
            className={fieldClass}
            value={values.empresa}
            onChange={(event) => update("empresa", event.target.value)}
            placeholder="Nombre de la operación"
          />
        </Field>
      </div>
      <Field label="Qué hay que trazar" htmlFor="necesidad">
        <select
          id="necesidad"
          name="necesidad"
          className={fieldClass}
          value={values.necesidad}
          onChange={(event) => update("necesidad", event.target.value)}
        >
          <option value="">Elegir</option>
          {needs.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Mensaje" htmlFor="mensaje" error={errors.mensaje}>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          className={fieldClass}
          value={values.mensaje}
          onChange={(event) => update("mensaje", event.target.value)}
          placeholder="Qué opera hoy y dónde se pierde el rastro."
        />
      </Field>
      {status === "error" ? (
        <p className="text-sm text-red-700">
          No se pudo enviar. Escríbanos a hola@traza.cl o por WhatsApp.
        </p>
      ) : null}
      <button
        type="submit"
        className="btn btn-navy w-fit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Enviar levantamiento"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-2" htmlFor={htmlFor}>
      <span className="text-[0.82rem] font-medium">{label}</span>
      {children}
      {error ? <span className="text-sm text-red-700">{error}</span> : null}
    </label>
  );
}
