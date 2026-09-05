"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { vehicles, years } from "@/lib/data";
import { cn, isValidEmail, isValidPatente } from "@/lib/utils";

const initial = {
  name: "",
  phone: "",
  email: "",
  patente: "",
  marca: "",
  modelo: "",
  year: "",
  piece: "",
  message: "",
};

export function ConsultForm({ className }: { className?: string }) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const modelos = useMemo(
    () => (values.marca ? vehicles[values.marca] ?? [] : []),
    [values.marca]
  );

  function update(field: keyof typeof initial, value: string) {
    setValues((prev) => {
      if (field === "marca") return { ...prev, marca: value, modelo: "" };
      return { ...prev, [field]: value };
    });
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 3) next.name = "Indique su nombre.";
    if (values.phone.replace(/\D/g, "").length < 8)
      next.phone = "Indique un celular.";
    if (values.email && !isValidEmail(values.email))
      next.email = "El correo no calza.";
    if (values.patente.trim() && !isValidPatente(values.patente))
      next.patente = "Patente ABCD12 o AB1234.";
    if (!values.patente.trim() && (!values.marca || !values.modelo || !values.year))
      next.marca = "Patente, o marca, modelo y año.";
    if (values.message.trim().length < 8)
      next.message = "Diga la pieza o el síntoma, en pocas líneas.";
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
      try {
        localStorage.setItem(
          "eter-consulta",
          JSON.stringify({ at: Date.now(), marca: values.marca })
        );
      } catch {
        /* ignore */
      }
      setStatus("sent");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={cn("border border-line bg-mist px-7 py-10", className)} role="status">
        <p className="kicker">Ficha recibida</p>
        <h3 className="font-display mt-4 text-3xl font-normal leading-tight tracking-tight">
          Te respondemos dentro del día hábil.
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
          Si la pieza no está, te decimos el equivalente y el plazo. Si no es
          de nuestro ramo, también.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" error={errors.name}>
          <input
            className="field"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="name"
          />
        </Field>
        <Field label="Celular" error={errors.phone}>
          <input
            className="field"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            inputMode="tel"
            autoComplete="tel"
            placeholder="+56 9"
          />
        </Field>
      </div>
      <Field label="Correo · opcional" error={errors.email}>
        <input
          className="field"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          type="email"
          autoComplete="email"
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Patente" error={errors.patente}>
          <input
            className="field font-sku uppercase"
            value={values.patente}
            onChange={(e) => update("patente", e.target.value.toUpperCase())}
            placeholder="ABCD 12"
          />
        </Field>
        <Field label="Marca" error={errors.marca}>
          <select
            className="field"
            value={values.marca}
            onChange={(e) => update("marca", e.target.value)}
          >
            <option value="">Elegir</option>
            {Object.keys(vehicles).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Modelo">
          <select
            className="field"
            value={values.modelo}
            onChange={(e) => update("modelo", e.target.value)}
            disabled={!values.marca}
          >
            <option value="">{values.marca ? "Elegir" : "Marca primero"}</option>
            {modelos.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Año">
          <select
            className="field"
            value={values.year}
            onChange={(e) => update("year", e.target.value)}
          >
            <option value="">—</option>
            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Pieza conocida · opcional">
        <input
          className="field"
          value={values.piece}
          onChange={(e) => update("piece", e.target.value)}
          placeholder="Pastillas delanteras, filtro de aceite…"
        />
      </Field>
      <Field label="Qué necesita" error={errors.message}>
        <textarea
          className="field min-h-28 resize-y"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </Field>
      {status === "error" ? (
        <p className="text-[14px] text-ether-deep" role="alert">
          No salió el envío. Escríbenos por WhatsApp.
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-ui inline-flex h-12 items-center bg-ether-deep px-7 text-[0.78rem] font-medium tracking-[0.14em] text-mist uppercase transition-colors hover:bg-ink disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Dejar ficha"}
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
      <span className="mb-2 block text-[11px] tracking-[0.18em] text-muted uppercase">
        {label}
      </span>
      {children}
      {error ? (
        <span className="mt-2 block text-[13px] text-ether-deep">{error}</span>
      ) : null}
    </label>
  );
}
