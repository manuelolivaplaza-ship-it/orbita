"use client";

import Link from "next/link";
import { useMemo, useRef, useState, type FormEvent } from "react";
import { Arrow } from "@/components/mark";
import {
  fleet,
  piecesForVehicle,
  stockLabel,
  vehicleByPlate,
  vehicles,
  years,
  type Vehicle,
} from "@/data/catalog";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import {
  cleanPatente,
  formatCLP,
  formatPatente,
  isValidPatente,
} from "@/lib/format";

const marcas = Object.keys(vehicles);
const demos = fleet.map((item) => item.plates[0]);

type Locked = {
  plate: string;
  vehicle: Vehicle;
  source: "patente" | "ficha";
};

export function Cruce({ compact = false }: { compact?: boolean }) {
  const [raw, setRaw] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");
  const [locked, setLocked] = useState<Locked | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const clean = cleanPatente(raw).slice(0, 6);
  const slots = Array.from({ length: 6 }, (_, i) => clean[i] ?? "");
  const oldPlate = /^[A-Z]{2}\d/.test(clean);
  const modelos = useMemo(() => (marca ? vehicles[marca] ?? [] : []), [marca]);
  const plateVehicle =
    clean.length === 6 && isValidPatente(clean)
      ? vehicleByPlate(clean)
      : undefined;
  const resolved: Locked | null = plateVehicle
    ? {
        plate: formatPatente(clean),
        vehicle: plateVehicle,
        source: "patente",
      }
    : locked;


  function lockFromPlate(plate: string) {
    const vehicle = vehicleByPlate(plate);
    if (!vehicle) {
      setError(
        "Patente válida, sin ficha en esta demostración. Completa marca, modelo y año.",
      );
      setLocked(null);
      return;
    }
    setError("");
    setLocked({
      plate: formatPatente(plate),
      vehicle,
      source: "patente",
    });
    setMarca(vehicle.marca);
    setModelo(vehicle.modelo);
    setYear(String(vehicle.year));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (clean) {
      if (!isValidPatente(clean)) {
        setError("La patente no calza. Usa ABCD12 o AB1234.");
        setLocked(null);
        return;
      }
      lockFromPlate(clean);
      return;
    }
    if (!marca || !modelo || !year) {
      setError("Indica la patente o completa marca, modelo y año.");
      return;
    }
    const byFicha = fleet.find(
      (item) =>
        item.marca === marca &&
        item.modelo === modelo &&
        String(item.year) === year,
    );
    if (!byFicha) {
      setError("");
      setLocked(null);
      setError(
        "Sin ficha exacta en demostración. Cotiza y cruzamos contra OEM esta noche.",
      );
      return;
    }
    setError("");
    setLocked({
      plate: formatPatente(byFicha.plates[0]),
      vehicle: byFicha,
      source: "ficha",
    });
  }

  function applyDemo(plate: string) {
    setRaw(plate);
    lockFromPlate(plate);
  }

  const list = resolved ? piecesForVehicle(resolved.vehicle) : [];
  const wa = resolved
    ? `https://wa.me/56964120904?text=${encodeURIComponent(
        `Hola NOCTUA, quiero cruzar. Patente ${resolved.plate}. ${resolved.vehicle.marca} ${resolved.vehicle.modelo} ${resolved.vehicle.year} · ${resolved.vehicle.motor}.`,
      )}`
    : site.whatsappHref;

  return (
    <div className={cn("border border-line bg-nave", compact && "")}>
      <div className="grid gap-10 px-5 py-8 md:grid-cols-12 md:px-8 md:py-10 lg:px-10">
        <div className="md:col-span-5">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-sodium">
            Instrumento de cruce
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[0.92] tracking-wide">
            {compact ? "Escribe la patente." : "Seis caracteres. La ficha."}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">
            Patente chilena nueva (ABCD 12) o antigua (AB 12.34). Si la ficha
            está en bodega, la pieza aparece. Si no, se cruza contra OEM.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7"
          noValidate
          aria-describedby={error ? "cruce-error" : undefined}
        >
          <label className="block">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
              Patente
            </span>
            <div
              className="relative mt-3 cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {slots.map((char, index) => (
                  <span key={index} className="contents">
                    {(oldPlate ? index === 2 : index === 4) ? (
                      <span className="w-2" />
                    ) : null}
                    <span
                      className="slot"
                      data-on={Boolean(char)}
                      data-cursor={index === clean.length}
                    >
                      {char}
                    </span>
                  </span>
                ))}
              </div>
              <input
                ref={inputRef}
                value={raw}
                onChange={(event) => {
                  const next = event.target.value.toUpperCase();
                  setRaw(next);
                  setError("");
                  setLocked(null);
                  const nextClean = cleanPatente(next).slice(0, 6);
                  const vehicle =
                    nextClean.length === 6 && isValidPatente(nextClean)
                      ? vehicleByPlate(nextClean)
                      : undefined;
                  if (vehicle) {
                    setMarca(vehicle.marca);
                    setModelo(vehicle.modelo);
                    setYear(String(vehicle.year));
                  }
                }}
                autoComplete="off"
                spellCheck={false}
                inputMode="text"
                maxLength={8}
                placeholder="RKJD27"
                aria-label="Patente chilena"
                className="absolute inset-0 cursor-text opacity-0"
              />
            </div>
          </label>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <label>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
                Marca
              </span>
              <select
                className="input-line mt-2"
                value={marca}
                onChange={(event) => {
                  setMarca(event.target.value);
                  setModelo("");
                  setError("");
                }}
              >
                <option value="">Elegir</option>
                {marcas.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
                Modelo
              </span>
              <select
                className="input-line mt-2"
                value={modelo}
                onChange={(event) => {
                  setModelo(event.target.value);
                  setError("");
                }}
                disabled={!marca}
              >
                <option value="">Elegir</option>
                {modelos.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-mute">
                Año
              </span>
              <select
                className="input-line mt-2"
                value={year}
                onChange={(event) => {
                  setYear(event.target.value);
                  setError("");
                }}
              >
                <option value="">Elegir</option>
                {years.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button type="submit" className="btn btn-sodium">
              Cruzar
              <Arrow />
            </button>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-mute">
              {resolved ? "Ficha cerrada" : "Sin adivinar"}
            </p>
          </div>

          {error ? (
            <p id="cruce-error" className="mt-4 text-sm text-oxide" role="alert">
              {error}
            </p>
          ) : null}
        </form>
      </div>

      <div className="border-t border-line px-5 py-5 md:px-8 lg:px-10">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.22em] text-mute">
          Patentes de demostración
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {demos.map((plate) => {
            const active = clean === plate;
            return (
              <li key={plate}>
                <button
                  type="button"
                  onClick={() => applyDemo(plate)}
                  className={cn(
                    "border px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] transition-colors",
                    active
                      ? "border-sodium text-face"
                      : "border-line text-mute hover:border-steel hover:text-steel",
                  )}
                >
                  {formatPatente(plate)}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {resolved ? (
        <div className="lock border-t border-line">
          <div className="grid gap-8 px-5 py-8 md:grid-cols-12 md:px-8 md:py-10 lg:px-10">
            <div className="md:col-span-4">
              <p className="flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-sodium">
                <span className="lamp" data-on="true" />
                Ficha cerrada
              </p>
              <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-mute">
                {resolved.plate}
              </p>
              <h3 className="mt-2 font-display text-4xl font-medium tracking-wide md:text-5xl">
                {resolved.vehicle.marca}
                <br />
                {resolved.vehicle.modelo}
              </h3>
              <dl className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-mute">Año</dt>
                  <dd>{resolved.vehicle.year}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-mute">Motor</dt>
                  <dd className="text-right">{resolved.vehicle.motor}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-mute">Combustible</dt>
                  <dd>{resolved.vehicle.combustible}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-mute">Uso</dt>
                  <dd>{resolved.vehicle.segmento}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={wa} className="btn btn-sodium">
                  WhatsApp
                  <Arrow />
                </a>
                <Link
                  href={`/cotizar?patente=${encodeURIComponent(resolved.plate)}&vehiculo=${encodeURIComponent(
                    `${resolved.vehicle.marca} ${resolved.vehicle.modelo} ${resolved.vehicle.year}`,
                  )}`}
                  className="btn btn-ghost"
                >
                  Mandar a bahía
                </Link>
              </div>
            </div>

            <div className="md:col-span-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-mute">
                {list.length} piezas en cruce
              </p>
              <ul className="mt-4">
                {list.map((piece) => (
                  <li key={piece.slug}>
                    <Link
                      href={`/pieza/${piece.slug}`}
                      className="ficha group hover:text-face"
                    >
                      <span className="font-mono text-[0.62rem] tracking-[0.12em] text-mute">
                        {piece.sku}
                      </span>
                      <span>{piece.name}</span>
                      <span className="hidden text-mute md:inline">
                        {stockLabel[piece.stock]}
                      </span>
                      <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.12em] text-mute md:inline">
                        {piece.oem}
                      </span>
                      <span className="text-right tabular-nums">
                        {formatCLP(piece.priceIva)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-mute">
                Precios con IVA. El cruce de demostración es una ficha de
                bodega, no un stock en vivo. La confirmación sale en el turno.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
