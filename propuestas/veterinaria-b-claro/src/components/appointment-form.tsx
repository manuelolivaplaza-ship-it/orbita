"use client";

import { useActionState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { requestAppointment, type AppointmentState } from "@/lib/actions";
import { clinic, services } from "@/lib/clinic";

const speciesOptions = ["Perro", "Gato", "Conejo", "Hurón", "Ave", "Otra"];
const slots = [
  "8:30",
  "9:30",
  "10:30",
  "11:30",
  "12:30",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const fieldClass =
  "h-12 rounded-xl border-border bg-card px-4 text-base md:text-base";

export function AppointmentForm() {
  const searchParams = useSearchParams();
  const preset = searchParams.get("servicio") ?? "";
  const [state, action, pending] = useActionState<AppointmentState, FormData>(
    requestAppointment,
    null,
  );

  if (state?.ok) {
    return (
      <div className="rounded-3xl border border-border bg-card px-8 py-12 text-center">
        <p className="kicker">Pedido recibido</p>
        <h2 className="display mt-4 text-4xl text-foreground">Ya lo vemos.</h2>
        <p className="mx-auto mt-5 max-w-md text-pretty text-muted-foreground">
          En las próximas horas le escribimos por WhatsApp para confirmar el
          horario. Si el animal no puede esperar, llame ahora al{" "}
          <a href={`tel:${clinic.phoneTel}`} className="text-foreground underline">
            {clinic.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-10">
      <fieldset className="space-y-4">
        <legend className="font-heading text-2xl italic">El animal</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nombre" htmlFor="pet">
            <Input
              id="pet"
              name="pet"
              required
              placeholder="Otto"
              className={fieldClass}
            />
          </Field>
          <Field label="Especie" htmlFor="species">
            <select
              id="species"
              name="species"
              required
              defaultValue=""
              className={fieldClass + " w-full text-foreground"}
            >
              <option value="" disabled>
                Elegir
              </option>
              {speciesOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-heading text-2xl italic">El turno</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Servicio" htmlFor="service" className="sm:col-span-2">
            <select
              id="service"
              name="service"
              required
              defaultValue={
                services.some((service) => service.slug === preset) ? preset : ""
              }
              className={fieldClass + " w-full text-foreground"}
            >
              <option value="" disabled>
                Elegir
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Fecha" htmlFor="date">
            <Input
              id="date"
              name="date"
              type="date"
              required
              min={new Date().toISOString().slice(0, 10)}
              className={fieldClass}
            />
          </Field>
          <Field label="Horario preferido" htmlFor="slot">
            <select
              id="slot"
              name="slot"
              required
              defaultValue=""
              className={fieldClass + " w-full text-foreground"}
            >
              <option value="" disabled>
                Elegir
              </option>
              {slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="font-heading text-2xl italic">Usted</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nombre y apellido" htmlFor="owner">
            <Input
              id="owner"
              name="owner"
              required
              autoComplete="name"
              className={fieldClass}
            />
          </Field>
          <Field label="Teléfono / WhatsApp" htmlFor="phone">
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="11 …"
              className={fieldClass}
            />
          </Field>
          <Field label="Correo (opcional)" htmlFor="email" className="sm:col-span-2">
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
            />
          </Field>
          <Field
            label="¿Qué le pasa? (opcional)"
            htmlFor="notes"
            className="sm:col-span-2"
          >
            <Textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Síntomas, estudios previos, si es la primera visita…"
              className="min-h-28 rounded-xl border-border bg-card px-4 py-3 text-base md:text-base"
            />
          </Field>
        </div>
      </fieldset>

      {state && !state.ok && (
        <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {state.error}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={pending}
          className="h-12 rounded-full px-8 text-[0.95rem]"
        >
          {pending ? "Enviando…" : "Pedir turno"}
        </Button>
        <p className="text-sm text-muted-foreground">
          Le confirmamos por WhatsApp. No es un turno cerrado hasta esa respuesta.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-2 text-[0.8rem] text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
