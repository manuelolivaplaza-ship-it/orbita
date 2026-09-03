"use client";

import { FormEvent, useState } from "react";
import { materiasOptions, site } from "@/lib/site";
import { ChapterHead } from "./chapter-head";

type Status = "idle" | "sending" | "ok" | "error";

export function Reserva() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get("nombre") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const materia = String(data.get("materia") ?? "").trim();

    if (!nombre || !telefono || !materia) {
      setStatus("error");
      setError("Completa nombre, teléfono y materia.");
      return;
    }

    setStatus("sending");
    setError("");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("ok");
    form.reset();
  }

  return (
    <section id="reserva" aria-labelledby="reserva-title">
      <div className="shell g12">
        <div className="reserva-form">
          <ChapterHead kicker="Reserva" title="Agendar reunión" id="reserva-title" />
          <p className="lede">
            Respuesta en 24h hábiles. Si es urgencia, llama directo.
          </p>

          {status === "ok" ? (
            <div className="form-ok" role="status">
              <h3>Reunión solicitada.</h3>
              <p>
                Te contactamos en 24h hábiles al teléfono que dejaste. Si es
                urgencia penal o familia, llama ahora al {site.phone}.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <label className="field">
                <span>Nombre *</span>
                <input
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Nombre y apellido"
                />
              </label>
              <label className="field">
                <span>Teléfono *</span>
                <input
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  required
                  inputMode="tel"
                  placeholder="+56 9"
                  className="nums"
                />
              </label>
              <label className="field">
                <span>Materia *</span>
                <select name="materia" required defaultValue="">
                  <option value="" disabled>
                    Elige una materia
                  </option>
                  {materiasOptions.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Mensaje</span>
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Qué pasó y cuándo. Si hay audiencia o plazo, indícalo."
                />
              </label>
              {status === "error" ? (
                <p className="form-error" role="alert">
                  {error}
                </p>
              ) : null}
              <div className="form-actions">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Enviando…" : "Solicitar reunión"}
                </button>
              </div>
              <p className="form-note">
                Al enviar aceptas contacto por teléfono/WhatsApp. No compartimos
                tus datos.
              </p>
            </form>
          )}
        </div>
        <aside className="reserva-aside">
          <p className="aside-mark">{site.name}</p>
          <p className="aside-sub">Estudio Jurídico</p>
          <hr className="aside-rule" />
          <p className="aside-contact nums">
            <a href={site.phoneHref}>{site.phone}</a>
            {" · "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="aside-muted">
            {site.address} · Presencial y online
          </p>
          <p className="aside-hours">{site.hours} · {site.urgency}</p>
          <p className="aside-muted nums">
            +{site.years} años · +{site.causes.toLocaleString("es-CL")} causas ·{" "}
            {site.recommend}% recomendación · {site.lawyers} abogados, siempre
            los mismos
          </p>
          <p className="legal nums">
            RUT {site.rut} · © {site.name}
          </p>
        </aside>
      </div>
    </section>
  );
}
