"use client";

import { useState } from "react";
import { visits, slots } from "@/data/content";
import { site } from "@/data/site";
import { isValidEmail, isValidPhone } from "@/lib/format";

const KEY = "eter-reserva";

export function VisitForm({ defaultVisit }: { defaultVisit?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  if (status === "ok") {
    return (
      <div className="border border-linea bg-papel-2 p-8">
        <p className="kicker">Reserva recibida</p>
        <h2 className="mt-4 font-display text-4xl tracking-tight">
          Quedó en la cava.
        </h2>
        <p className="mt-4 max-w-md text-tinta-suave">
          Te confirmamos por correo o WhatsApp en menos de dos horas hábiles,
          con cupo y horario. Si el horario se llenó, te proponemos el
          siguiente.
        </p>
        <a href={site.whatsappHref} className="link-hoja mt-6 inline-block">
          Escribir por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      className="grid gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("nombre") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const phone = String(data.get("telefono") ?? "").trim();
        const visit = String(data.get("visita") ?? "");
        const date = String(data.get("fecha") ?? "");
        const people = Number(data.get("personas") ?? 0);

        if (name.length < 3) {
          setError("Escribe tu nombre.");
          return;
        }
        if (!isValidEmail(email)) {
          setError("El correo no se ve bien.");
          return;
        }
        if (!isValidPhone(phone)) {
          setError("Falta un teléfono de contacto.");
          return;
        }
        if (!visit || !date) {
          setError("Elige visita y fecha.");
          return;
        }
        if (people < 1 || people > 8) {
          setError("Entre 1 y 8 personas. Para más, pide cava privada.");
          return;
        }

        setError("");
        setStatus("loading");
        const payload = Object.fromEntries(data.entries());
        window.setTimeout(() => {
          localStorage.setItem(KEY, JSON.stringify(payload));
          setStatus("ok");
        }, 700);
      }}
    >
      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
          Visita
        </span>
        <select
          name="visita"
          defaultValue={defaultVisit ?? visits[0].slug}
          className="input-line mt-1"
          required
        >
          {visits.map((visit) => (
            <option key={visit.slug} value={visit.slug}>
              {visit.name} · {visit.duration}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
            Fecha
          </span>
          <input
            name="fecha"
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            className="input-line mt-1"
            required
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
            Horario
          </span>
          <select name="horario" className="input-line mt-1" defaultValue="11:00">
            {slots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
            Personas
          </span>
          <input
            name="personas"
            type="number"
            min={1}
            max={8}
            defaultValue={2}
            className="input-line mt-1"
            required
          />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
            Nombre
          </span>
          <input name="nombre" className="input-line mt-1" required />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
            Correo
          </span>
          <input name="email" type="email" className="input-line mt-1" required />
        </label>
        <label className="block">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
            Teléfono
          </span>
          <input
            name="telefono"
            type="tel"
            placeholder="+56 9 …"
            className="input-line mt-1"
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-gris">
          Notas
        </span>
        <textarea
          name="notas"
          className="input-line mt-1"
          placeholder="Alergias, traslado, idioma."
        />
      </label>

      {error ? <p className="text-sm text-hoja">{error}</p> : null}

      <button type="submit" className="btn btn-ink w-max" disabled={status === "loading"}>
        {status === "loading" ? "Enviando…" : "Pedir reserva"}
      </button>
      <p className="text-xs leading-relaxed text-gris">
        Responden anfitriones, no un bot. Si no contestamos, devolvemos el
        llamado en dos horas hábiles. {site.phone}
      </p>
    </form>
  );
}
