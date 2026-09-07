"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { comunas, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export type LeadIntent = "visita" | "tasacion" | "contacto" | "info";

const copy: Record<
  LeadIntent,
  { title: string; submit: string; success: string; wa: (name: string) => string }
> = {
  visita: {
    title: "Pedir una visita",
    submit: "Pedir visita",
    success: "Listo. Te escribimos hoy para coordinar.",
    wa: (name) =>
      `Hola Olivo, soy ${name}. Quiero agendar una visita a una propiedad.`,
  },
  tasacion: {
    title: "Tasación sin costo",
    submit: "Quiero mi tasación",
    success: "Recibido. Un corredor te contacta para la visita de tasación.",
    wa: (name) =>
      `Hola Olivo, soy ${name}. Quiero una tasación de mi propiedad.`,
  },
  contacto: {
    title: "Escríbenos",
    submit: "Enviar mensaje",
    success: "Gracias. Te respondemos en el día.",
    wa: (name) => `Hola Olivo, soy ${name}. Quiero hablar con un corredor.`,
  },
  info: {
    title: "Pedir información",
    submit: "Pedir información",
    success: "Te mandamos los detalles por WhatsApp o correo.",
    wa: (name) =>
      `Hola Olivo, soy ${name}. Quiero información de una propiedad.`,
  },
};

export function LeadForm({
  intent,
  propertyTitle,
  className,
  compact = false,
}: {
  intent: LeadIntent;
  propertyTitle?: string;
  className?: string;
  compact?: boolean;
}) {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const texts = copy[intent];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const raw = localStorage.getItem("olivo-leads");
      const leads = (raw ? JSON.parse(raw) : []) as unknown[];
      leads.push({ ...payload, intent, propertyTitle, at: new Date().toISOString() });
      localStorage.setItem("olivo-leads", JSON.stringify(leads));
    } catch {
      /* iframe de la galería va sin allow-same-origin */
    }
    setSent(true);
  }

  if (sent) {
    const message = propertyTitle
      ? `${texts.wa(name || "un cliente")} Me interesa: ${propertyTitle}.`
      : texts.wa(name || "un cliente");

    return (
      <div
        className={cn(
          "rounded-2xl bg-secondary p-6 text-secondary-foreground",
          className,
        )}
      >
        <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-5" />
        </div>
        <p className="mt-4 font-heading text-2xl">{texts.success}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Si quieres ir más rápido, escríbenos ahora por WhatsApp.
        </p>
        <Button asChild className="mt-5 h-11 w-full text-sm">
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer">
            Abrir WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("grid gap-4", className)}>
      {!compact ? (
        <div>
          <h3 className="font-heading text-2xl">{texts.title}</h3>
          {propertyTitle ? (
            <p className="mt-1 text-sm text-muted-foreground">{propertyTitle}</p>
          ) : null}
        </div>
      ) : null}

      <Field label="Nombre" htmlFor={`${intent}-nombre`}>
        <Input
          id={`${intent}-nombre`}
          name="nombre"
          required
          autoComplete="name"
          className="h-11"
          placeholder="Nombre y apellido"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="WhatsApp" htmlFor={`${intent}-telefono`}>
          <Input
            id={`${intent}-telefono`}
            name="telefono"
            required
            type="tel"
            autoComplete="tel"
            className="h-11"
            placeholder="+56 9 …"
          />
        </Field>
        <Field label="Correo" htmlFor={`${intent}-email`}>
          <Input
            id={`${intent}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className="h-11"
            placeholder="tu@correo.cl"
          />
        </Field>
      </div>

      {intent === "tasacion" ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Comuna" htmlFor="comuna">
              <select
                id="comuna"
                name="comuna"
                required
                className="h-11 w-full rounded-lg border border-input bg-background px-2.5 text-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Elige
                </option>
                {comunas.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Tipo" htmlFor="tipo">
              <select
                id="tipo"
                name="tipo"
                required
                className="h-11 w-full rounded-lg border border-input bg-background px-2.5 text-sm"
                defaultValue="casa"
              >
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
              </select>
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="m² aproximados" htmlFor="m2">
              <Input id="m2" name="m2" inputMode="numeric" className="h-11" placeholder="180" />
            </Field>
            <Field label="¿Cuándo quieres vender?" htmlFor="plazo">
              <select
                id="plazo"
                name="plazo"
                className="h-11 w-full rounded-lg border border-input bg-background px-2.5 text-sm"
                defaultValue="90-dias"
              >
                <option value="este-mes">Este mes</option>
                <option value="90-dias">En 90 días</option>
                <option value="explorar">Solo quiero saber el valor</option>
              </select>
            </Field>
          </div>
        </>
      ) : null}

      {intent !== "tasacion" ? (
        <Field label="Mensaje" htmlFor={`${intent}-mensaje`}>
          <Textarea
            id={`${intent}-mensaje`}
            name="mensaje"
            rows={compact ? 3 : 4}
            placeholder={
              propertyTitle
                ? "Horarios para visitar, dudas de gastos comunes, crédito…"
                : "Cuéntanos qué buscas o qué quieres vender."
            }
            className="min-h-24"
          />
        </Field>
      ) : null}

      <Button type="submit" className="h-12 text-sm">
        {texts.submit}
      </Button>
      <p className="text-xs text-muted-foreground">
        Te contactamos por WhatsApp. No compartimos tus datos.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
