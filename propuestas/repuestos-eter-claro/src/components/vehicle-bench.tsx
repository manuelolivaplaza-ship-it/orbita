"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { families, vehicles, years } from "@/lib/data";
import { site } from "@/lib/site";
import { cn, formatPatente, isValidPatente } from "@/lib/utils";

const marcas = Object.keys(vehicles);

type Result = {
  patente: string;
  marca: string;
  modelo: string;
  year: string;
};

export function VehicleBench({
  id = "consulta-vehiculo",
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  const [patente, setPatente] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const modelos = useMemo(() => (marca ? vehicles[marca] ?? [] : []), [marca]);

  function onMarca(value: string) {
    setMarca(value);
    setModelo("");
    setResult(null);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = patente.trim();
    if (clean && !isValidPatente(clean)) {
      setError("La patente no calza. Usa ABCD12 o AB1234.");
      return;
    }
    if (!clean && (!marca || !modelo || !year)) {
      setError("Indica la patente o completa marca, modelo y año.");
      return;
    }
    setError("");
    setResult({
      patente: clean ? formatPatente(clean) : "",
      marca: marca || "por patente",
      modelo: modelo || "a confirmar",
      year: year || "—",
    });
  }

  const wa = result
    ? `https://wa.me/56987624410?text=${encodeURIComponent(
        `Hola, quiero cruzar una pieza. ${
          result.patente ? `Patente ${result.patente}. ` : ""
        }${result.marca} ${result.modelo} ${result.year}.`
      )}`
    : site.whatsapp;

  return (
    <section
      id={id}
      className={cn("relative z-10", compact ? "" : "-mt-8 lg:-mt-16")}
    >
      <div className="shell">
        <div className="border border-line bg-mist/92 p-6 shadow-[0_24px_80px_-48px_rgba(27,36,44,0.45)] backdrop-blur-md lg:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Banco de consulta</p>
              <h2 className="font-display mt-3 text-[clamp(1.8rem,3.4vw,2.6rem)] font-normal leading-tight tracking-tight">
                Cruzar pieza
              </h2>
            </div>
            <p className="max-w-[36ch] text-[14px] leading-relaxed text-muted">
              Patente chilena, o marca, modelo y año. El cruce sale de la ficha,
              no del mostrador a ojo.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-8 grid gap-3 md:grid-cols-12"
            noValidate
          >
            <label className="md:col-span-3">
              <span className="mb-2 block text-[11px] tracking-[0.18em] text-muted uppercase">
                Patente
              </span>
              <input
                className="field font-sku uppercase"
                placeholder="ABCD 12"
                value={patente}
                onChange={(e) => {
                  setPatente(e.target.value.toUpperCase());
                  setError("");
                }}
                autoComplete="off"
                inputMode="text"
              />
            </label>
            <label className="md:col-span-3">
              <span className="mb-2 block text-[11px] tracking-[0.18em] text-muted uppercase">
                Marca
              </span>
              <select
                className="field"
                value={marca}
                onChange={(e) => onMarca(e.target.value)}
              >
                <option value="">Elegir</option>
                {marcas.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="md:col-span-3">
              <span className="mb-2 block text-[11px] tracking-[0.18em] text-muted uppercase">
                Modelo
              </span>
              <select
                className="field"
                value={modelo}
                onChange={(e) => {
                  setModelo(e.target.value);
                  setError("");
                }}
                disabled={!marca}
              >
                <option value="">{marca ? "Elegir" : "Marca primero"}</option>
                {modelos.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-[11px] tracking-[0.18em] text-muted uppercase">
                Año
              </span>
              <select
                className="field"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                  setError("");
                }}
              >
                <option value="">—</option>
                {years.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <div className="flex items-end md:col-span-1">
              <button
                type="submit"
                className="font-ui h-[52px] w-full bg-ether-deep text-[0.78rem] font-medium tracking-[0.14em] text-mist uppercase transition-colors hover:bg-ink"
              >
                Cruzar
              </button>
            </div>
          </form>

          {error ? (
            <p className="mt-4 text-[14px] text-ether-deep" role="alert">
              {error}
            </p>
          ) : null}

          {result ? (
            <div
              className="mt-8 grid gap-6 border-t border-line pt-8 lg:grid-cols-12"
              role="status"
            >
              <div className="lg:col-span-5">
                <p className="kicker">Ficha</p>
                <p className="font-display mt-3 text-3xl leading-tight">
                  {result.marca} {result.modelo}
                  <span className="text-muted"> {result.year}</span>
                </p>
                {result.patente ? (
                  <p className="font-sku mt-3 text-[13px] text-ether">
                    {result.patente}
                  </p>
                ) : null}
                <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-muted">
                  Hay referencias en las seis familias. El precio se confirma
                  con motor y, si aplica, con el número OEM.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-[14px] lg:col-span-4">
                {families.map((item) => (
                  <li key={item.slug} className="flex justify-between border-b border-line py-2">
                    <span>{item.name}</span>
                    <span className="font-sku text-[11px] text-muted">
                      {item.index}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-end gap-3 lg:col-span-3">
                <a
                  href={wa}
                  className="font-ui inline-flex h-12 items-center justify-center bg-ether-deep px-5 text-[0.78rem] font-medium tracking-[0.12em] text-mist uppercase"
                >
                  WhatsApp
                </a>
                <Link
                  href="/consulta"
                  className="font-ui inline-flex h-12 items-center justify-center border border-ink px-5 text-[0.78rem] font-medium tracking-[0.12em] uppercase"
                >
                  Dejar ficha
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
