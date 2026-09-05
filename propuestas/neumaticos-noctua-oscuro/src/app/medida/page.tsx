import { SizeDrum } from "@/components/size-drum";
import { vehicles } from "@/data/vehicles";
import { formatSize } from "@/lib/format";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buscar medida",
  description:
    "Encuentra tu neumático por ancho, perfil y aro, o por un auto que se vea en Chile.",
};

export default function MedidaPage() {
  return (
    <div className="pt-[4.25rem]">
      <header className="pad border-b border-line py-14">
        <p className="kicker">Medida</p>
        <h1 className="display mt-4 text-5xl sm:text-7xl">Tres números.</h1>
        <p className="serif mt-4 max-w-xl text-2xl text-mute">
          Están en el flanco, en el manual, o en el auto de abajo. El resto es
          stock y hora de montaje.
        </p>
      </header>

      <div className="pad grid gap-16 py-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SizeDrum />
        </div>
        <aside className="lg:col-span-4">
          <p className="kicker">Cómo leer el flanco</p>
          <ol className="mt-6 space-y-5 text-sm leading-relaxed text-mute">
            <li>
              <span className="text-ink">205</span> — ancho en milímetros. La
              huella.
            </li>
            <li>
              <span className="text-ink">55</span> — perfil. Altura del flanco
              como % del ancho.
            </li>
            <li>
              <span className="text-ink">R16</span> — aro en pulgadas. Tiene que
              coincidir con la llanta.
            </li>
            <li>
              <span className="text-ink">91V</span> — carga y velocidad. Si
              bajas de lo que trae el auto, no montamos.
            </li>
          </ol>
          <p className="kicker mt-12">Flota chilena</p>
          <ul className="mt-4 divide-y divide-line text-sm">
            {vehicles.slice(0, 8).map((v) => (
              <li key={v.id} className="flex justify-between gap-4 py-2">
                <span>
                  {v.brand} {v.model}
                </span>
                <span className="num text-mute">
                  {formatSize(v.width, v.profile, v.rim)}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
