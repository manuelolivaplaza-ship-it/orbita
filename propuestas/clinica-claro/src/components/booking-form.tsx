"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { doctors, specialties } from "@/lib/data";
import { cn, formatRut, isValidEmail, isValidPhone, isValidRut } from "@/lib/utils";

const previsiones = [
  "Particular",
  "Banmédica",
  "Colmena",
  "Consalud",
  "Cruz Blanca",
  "Esencial",
  "Nueva Masvida",
  "Vida Tres",
  "Fonasa",
  "Otra",
];

const slots = ["Mañana · 8:00–12:30", "Tarde · 14:00–19:00", "La primera que haya"];

type Values = {
  specialty: string;
  doctor: string;
  slot: string;
  date: string;
  name: string;
  rut: string;
  email: string;
  phone: string;
  prevision: string;
  notes: string;
  privacy: boolean;
};

const initial: Values = {
  specialty: "",
  doctor: "primera",
  slot: "",
  date: "",
  name: "",
  rut: "",
  email: "",
  phone: "",
  prevision: "",
  notes: "",
  privacy: false,
};

export function BookingForm({
  defaultSpecialty = "",
  className,
}: {
  defaultSpecialty?: string;
  className?: string;
}) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({
    ...initial,
    specialty: defaultSpecialty,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const doctorsInRoom = useMemo(() => {
    if (!values.specialty) return doctors;
    return doctors.filter((item) => item.specialtySlug === values.specialty);
  }, [values.specialty]);

  function update<K extends keyof Values>(field: K, value: Values[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validateStep(current: number) {
    const next: Record<string, string> = {};
    if (current === 0 && !values.specialty) next.specialty = "Elija una sala.";
    if (current === 1 && !values.slot) next.slot = "Elija un tramo.";
    if (current === 2) {
      if (values.name.trim().length < 3) next.name = "Indique su nombre.";
      if (!isValidEmail(values.email)) next.email = "Indique un correo válido.";
      if (!isValidPhone(values.phone)) next.phone = "Indique un celular.";
      if (values.rut.trim() && !isValidRut(values.rut))
        next.rut = "El RUT no calza. Revise el dígito verificador.";
      if (!values.prevision) next.prevision = "Indique su previsión.";
      if (!values.privacy) next.privacy = "Necesitamos el consentimiento.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setStep((value) => Math.min(value + 1, 2));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validateStep(2)) return;
    setStatus("sending");
    try {
      const response = await fetch("/api/hora", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("fail");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={cn("border border-line bg-papel px-7 py-10", className)} role="status">
        <p className="kicker">Recibido</p>
        <h3 className="font-display mt-4 text-3xl font-medium leading-tight tracking-tight">
          Recepción confirma el mismo día hábil.
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">
          Le escribimos por WhatsApp o al correo. Si el cupo no alcanza, se lo
          decimos — no le damos una hora de doce minutos para que quepa.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border border-line bg-luz px-4 py-3 text-[16px] text-ink placeholder:text-muted/70 transition-colors focus:border-sol";

  return (
    <form onSubmit={onSubmit} className={cn("space-y-8", className)} noValidate>
      <ol className="flex gap-6 text-[12px] font-semibold tracking-[0.16em] uppercase">
        {["Sala", "Tramo", "Datos"].map((label, index) => (
          <li
            key={label}
            className={index === step ? "text-sol" : "text-muted"}
          >
            0{index + 1} {label}
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <div>
          <p className="mb-4 text-[15px] text-muted">¿A qué sala viene?</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {specialties.map((item) => {
              const selected = values.specialty === item.slug;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => {
                    update("specialty", item.slug);
                    const match = doctors.find((doc) => doc.specialtySlug === item.slug);
                    update("doctor", match?.slug ?? "primera");
                  }}
                  className={cn(
                    "flex items-start gap-3 border px-4 py-3 text-left transition-colors",
                    selected
                      ? "border-sol bg-sol/8"
                      : "border-line bg-luz hover:border-ink/40"
                  )}
                >
                  <span className="font-sans nums text-[12px] text-sol">{item.room}</span>
                  <span>
                    <span className="block font-medium">{item.title}</span>
                    <span className="mt-0.5 block text-[13px] text-muted">{item.short}</span>
                  </span>
                </button>
              );
            })}
          </div>
          {errors.specialty ? (
            <p className="mt-3 text-[13px] text-sol-deep">{errors.specialty}</p>
          ) : null}
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={goNext}
              className="font-sans h-12 bg-sol px-7 text-[0.88rem] font-semibold tracking-wide text-papel hover:bg-sol-deep"
            >
              Seguir
            </button>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div>
          <Field label="Médico">
            <select
              className={fieldClass}
              value={values.doctor}
              onChange={(event) => update("doctor", event.target.value)}
            >
              <option value="primera">La primera hora disponible</option>
              {doctorsInRoom.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name} · {item.specialty}
                </option>
              ))}
            </select>
          </Field>
          <p className="mt-6 mb-3 text-[15px] text-muted">¿Cuándo le acomoda?</p>
          <div className="grid gap-2">
            {slots.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => update("slot", item)}
                className={cn(
                  "border px-4 py-3 text-left transition-colors",
                  values.slot === item
                    ? "border-sol bg-sol/8"
                    : "border-line bg-luz hover:border-ink/40"
                )}
              >
                {item}
              </button>
            ))}
          </div>
          {errors.slot ? (
            <p className="mt-3 text-[13px] text-sol-deep">{errors.slot}</p>
          ) : null}
          <label className="mt-6 block">
            <span className="mb-2 block text-[13px] text-muted">
              Fecha tentativa, si la tiene
            </span>
            <input
              type="date"
              className={fieldClass}
              value={values.date}
              onChange={(event) => update("date", event.target.value)}
            />
          </label>
          <div className="mt-6 flex justify-between">
            <button
              type="button"
              onClick={() => setStep(0)}
              className="font-sans h-12 border border-ink px-6 text-[0.88rem] font-semibold"
            >
              Volver
            </button>
            <button
              type="button"
              onClick={goNext}
              className="font-sans h-12 bg-sol px-7 text-[0.88rem] font-semibold tracking-wide text-papel hover:bg-sol-deep"
            >
              Seguir
            </button>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre" error={errors.name}>
              <input
                className={fieldClass}
                value={values.name}
                autoComplete="name"
                onChange={(event) => update("name", event.target.value)}
              />
            </Field>
            <Field label="RUT (opcional)" error={errors.rut}>
              <input
                className={fieldClass}
                value={values.rut}
                placeholder="12.345.678-9"
                onChange={(event) => update("rut", formatRut(event.target.value))}
              />
            </Field>
            <Field label="Correo" error={errors.email}>
              <input
                className={fieldClass}
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
              />
            </Field>
            <Field label="Celular / WhatsApp" error={errors.phone}>
              <input
                className={fieldClass}
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(event) => update("phone", event.target.value)}
              />
            </Field>
          </div>
          <Field label="Previsión" error={errors.prevision}>
            <select
              className={fieldClass}
              value={values.prevision}
              onChange={(event) => update("prevision", event.target.value)}
            >
              <option value="">Seleccione</option>
              {previsiones.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Qué le trae, en pocas líneas">
            <textarea
              className={`${fieldClass} min-h-28 resize-y`}
              value={values.notes}
              onChange={(event) => update("notes", event.target.value)}
            />
          </Field>
          <label className="flex items-start gap-3 text-[14px] leading-relaxed text-muted">
            <input
              type="checkbox"
              className="mt-1"
              checked={values.privacy}
              onChange={(event) => update("privacy", event.target.checked)}
            />
            <span>
              Acepto el tratamiento de mis datos de salud para agendar esta hora,
              según la{" "}
              <a href="/privacidad" className="link-line text-ink">
                política de privacidad
              </a>
              .
            </span>
          </label>
          {errors.privacy ? (
            <p className="text-[13px] text-sol-deep">{errors.privacy}</p>
          ) : null}
          {status === "error" ? (
            <p className="text-[14px] text-sol-deep">
              No pudimos enviar. Escríbanos por WhatsApp o intente otra vez.
            </p>
          ) : null}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="font-sans h-12 border border-ink px-6 text-[0.88rem] font-semibold"
            >
              Volver
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className="font-sans h-12 bg-sol px-7 text-[0.88rem] font-semibold tracking-wide text-papel hover:bg-sol-deep disabled:opacity-60"
            >
              {status === "sending" ? "Enviando…" : "Pedir la hora"}
            </button>
          </div>
        </div>
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
      <span className="mb-2 block text-[13px] text-muted">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-[13px] text-sol-deep">{error}</span> : null}
    </label>
  );
}
