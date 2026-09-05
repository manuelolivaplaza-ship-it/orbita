"use client";

import { useState, type FormEvent } from "react";
import { DEMO_RUT, formatRut, isValidRut } from "@/lib/rut";
import { Informe } from "@/components/informe";

export function ResultsPortal() {
  const [rut, setRut] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!isValidRut(rut)) {
      setError("El RUT no es válido.");
      setOpen(false);
      return;
    }
    if (formatRut(rut) !== DEMO_RUT) {
      setError(
        `En esta demo, el informe de ejemplo se abre con el RUT ${DEMO_RUT}.`,
      );
      setOpen(false);
      return;
    }
    setError("");
    setOpen(true);
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="wrap-narrow grid gap-6">
        <label>
          <span className="field-label">RUT del paciente</span>
          <input
            className="input text-2xl"
            value={rut}
            onChange={(event) => setRut(formatRut(event.target.value))}
            placeholder="12.345.678-9"
            autoComplete="off"
          />
        </label>
        <label>
          <span className="field-label">Fecha de nacimiento</span>
          <input className="input" type="date" defaultValue="1989-03-14" />
        </label>
        <button type="submit" className="btn btn-ink w-fit">
          Ver informe
        </button>
        {error ? <p className="text-sm text-[#9a5a3a]">{error}</p> : null}
        <p className="text-sm text-mute">
          Para ver un informe de ejemplo, ingresa el RUT {DEMO_RUT}. En
          producción, el acceso llega por correo con un código de un solo uso.
        </p>
      </form>
      {open ? (
        <div className="wrap mt-16">
          <Informe />
        </div>
      ) : null}
    </div>
  );
}
