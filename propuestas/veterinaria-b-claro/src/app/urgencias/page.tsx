import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Urgencias 24 h",
  description:
    "Guardia presencial las veinticuatro horas en Palermo. Llame al 11 4800 2140 antes de salir.",
};

const signs = [
  "Dificultad para respirar, lengua azul o ahogo",
  "Convulsiones, desmayo o no puede sostenerse",
  "Vientre distendido, intentos de vomitar sin nada",
  "Atropello, caída, pelea o herida que no deja de sangrar",
  "Intoxicación: chocolate, raticida, medicamentos, plantas",
  "Trabajo de parto que no avanza, o cachorro atorado",
  "Un conejo o hurón que dejó de comer",
  "Traumatismo en el ojo, o un ojo cerrado de golpe",
];

const bring = [
  "Al animal, en transportín o con correa corta",
  "El envase del tóxico, si lo hay",
  "Estudios o recetas recientes, si los tiene a mano",
  "Un número de teléfono que atienda",
];

export default function EmergencyPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
        <p className="kicker">Urgencias</p>
        <h1 className="display mt-5 max-w-3xl text-[2.45rem] leading-[1.06] sm:text-6xl lg:text-7xl">
          Si no puede esperar al lunes, no espere.
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground">
          Hay un médico en la clínica las veinticuatro horas. El protocolo es
          uno: llame, cuente qué pasa, le decimos si hay que venir ahora.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild className="h-12 rounded-full px-7">
            <a href={`tel:${clinic.phoneTel}`}>Llamar {clinic.phoneDisplay}</a>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full px-7">
            <Link href="/turnos">No es urgente: pedir turno</Link>
          </Button>
        </div>
      </section>

      <div className="relative mx-auto max-w-[88rem] sm:px-5">
        <div className="relative aspect-[16/9] overflow-hidden sm:rounded-[1.6rem]">
          <Image
            src="/images/night.jpg"
            alt="Fachada de Alba de noche, con el farol encendido sobre la puerta verde"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="kicker">Venga ahora si</p>
          <ul className="mt-8 space-y-4">
            {signs.map((sign) => (
              <li key={sign} className="flex gap-3 border-b border-border pb-4">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">Qué hacer</p>
          <ol className="mt-8 space-y-8">
            <li>
              <p className="font-heading text-3xl italic">1. Llame</p>
              <p className="mt-2 text-muted-foreground">
                {clinic.phoneDisplay}. Un médico atiende. No deje un mensaje: la
                guardia es humana.
              </p>
            </li>
            <li>
              <p className="font-heading text-3xl italic">2. Cuente</p>
              <p className="mt-2 text-muted-foreground">
                Especie, edad, qué pasó, desde cuándo. Si comió algo. Si respira
                bien. Eso cambia lo que preparamos.
              </p>
            </li>
            <li>
              <p className="font-heading text-3xl italic">3. Venga</p>
              <p className="mt-2 text-muted-foreground">
                Gorriti 4872, esquina. La puerta verde, el farol. Si puede, que
                otra persona maneje.
              </p>
            </li>
          </ol>

          <div className="mt-12 rounded-[1.4rem] border border-border bg-card p-8">
            <p className="kicker">Si puede, traiga</p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {bring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
