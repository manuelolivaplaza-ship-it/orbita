"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site, triageRed } from "@/lib/site";

type Level = "idle" | "red" | "amber" | "green";

export function Triage() {
  const [level, setLevel] = useState<Level>("idle");

  return (
    <div className="rounded-[1.6rem] border border-border bg-card p-6 sm:p-8">
      <p className="kicker">Triaje en casa</p>
      <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
        ¿Es ahora, o puede ser mañana?
      </h2>
      <p className="mt-3 max-w-lg text-muted-foreground leading-relaxed">
        No reemplaza a un veterinario. Sirve para no quedarte con la duda a
        las dos de la mañana.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <Choice
          active={level === "red"}
          onClick={() => setLevel("red")}
          title="Rojo"
          text="No se para, no respira bien, abdomen duro, convulsiona, atropello, no orina, sangra, parto trabado, tóxico."
        />
        <Choice
          active={level === "amber"}
          onClick={() => setLevel("amber")}
          title="Ámbar"
          text="Vómito repetido, no come hace 24 h, cojera súbita, ojo cerrado, una herida, fiebre, un gato escondido todo el día."
        />
        <Choice
          active={level === "green"}
          onClick={() => setLevel("green")}
          title="Verde"
          text="Vacuna, control, picazón, uñas, receta, un bulto que lleva semanas, consejo de alimento."
        />
      </div>

      {level === "red" ? (
        <Result
          kicker="Ven ahora"
          title="No esperes a que escampe."
          text={`Llama al ${site.phoneIntl} mientras sales. Si puedes, avisa: especie, qué pasó, si está consciente. La puerta de urgencias está a la izquierda de la recepción.`}
          cta="Llamar ahora"
          href={site.phoneHref}
          external
        />
      ) : null}
      {level === "amber" ? (
        <Result
          kicker="Hoy, no la próxima semana"
          title="Pide hora de urgencia diurna, o ven."
          text="Si es de noche y empeora —se echa y no se levanta, respira peor, el abdomen crece— pasa a rojo. Si está estable, agenda para hoy."
          cta="Agendar hoy"
          href="/primera-hora"
        />
      ) : null}
      {level === "green" ? (
        <Result
          kicker="Agenda con calma"
          title="Esto cabe en una hora de consulta."
          text="Elige un hueco. Si el animal empeora mientras esperas, llama: el triaje se actualiza."
          cta="Pedir hora"
          href="/primera-hora"
        />
      ) : null}

      {level === "red" ? (
        <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          {triageRed.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-destructive" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Choice({
  active,
  onClick,
  title,
  text,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  text: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition ${
        active
          ? "border-primary bg-secondary"
          : "border-border bg-background hover:border-moss/50"
      }`}
    >
      <p className="font-display text-2xl">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </button>
  );
}

function Result({
  kicker,
  title,
  text,
  cta,
  href,
  external,
}: {
  kicker: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="mt-8 rounded-2xl bg-deep p-6 text-primary-foreground sm:p-8">
      <p className="text-[0.7rem] tracking-[0.2em] uppercase text-moss">
        {kicker}
      </p>
      <h3 className="mt-2 font-display text-3xl tracking-tight">{title}</h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
        {text}
      </p>
      <Button
        asChild
        className="mt-6 h-11 rounded-full bg-primary-foreground px-6 text-deep hover:bg-primary-foreground/90"
      >
        {external ? <a href={href}>{cta}</a> : <Link href={href}>{cta}</Link>}
      </Button>
    </div>
  );
}
