import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/data/site";
import { clp } from "@/lib/format";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taller",
  description:
    "Montaje, balanceo, alineación 3D y cita nocturna en Huechuraba. Un auto a la vez.",
};

export default function TallerPage() {
  return (
    <div className="pt-[4.25rem]">
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/taller.jpg"
          alt="Atelier NOCTUA de noche"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/20" />
        <div className="relative pad flex min-h-[70vh] flex-col justify-end pb-16 pt-28">
          <p className="kicker text-amber-2">Atelier</p>
          <h1 className="display mt-4 text-5xl sm:text-7xl">El taller.</h1>
          <p className="serif mt-4 max-w-xl text-2xl">
            Una lámpara. Una balanceadora. El resto, silencio.
          </p>
        </div>
      </section>

      <section className="pad grid gap-12 border-b border-line py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">Huechuraba</p>
          <h2 className="display mt-4 text-4xl">Dónde.</h2>
          <p className="mt-6 max-w-md leading-relaxed text-mute">
            {site.address}. Acceso por Américo Vespucio, a diez minutos de
            Tobalaba por Costanera si sales a las 21:00. Estacionamiento en el
            recinto.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {site.hours.map((h) => (
              <li key={h.label} className="flex justify-between gap-6 border-b border-line py-2">
                <span className="text-mute">{h.label}</span>
                <span className="num">{h.value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-mute">
            {site.phone}
            <br />
            {site.email}
          </p>
          <Link href="/cita" className="btn btn-solid mt-8">
            Reservar hora
          </Link>
        </div>
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/11] overflow-hidden border border-line">
            <Image
              src="/images/via-santiago.jpg"
              alt="Santiago de noche desde una vía elevada"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 hud">RM · 33°21′ S · Huechuraba</p>
        </div>
      </section>

      <section className="pad py-20">
        <p className="kicker">Servicios</p>
        <h2 className="display mt-4 text-4xl">La mesa.</h2>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {services.map((s, i) => (
            <li
              key={s.id}
              className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline"
            >
              <span className="hud md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl tracking-tight">{s.name}</h3>
                <p className="mt-1 hud">{s.unit}</p>
              </div>
              <p className="text-sm leading-relaxed text-mute md:col-span-5">
                {s.text}
              </p>
              <p className="num text-amber-2 md:col-span-2 md:text-right">
                {s.price === 0 ? "—" : clp.format(s.price)}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl text-sm text-mute">
          Montaje de un juego de 4, con balanceo y válvulas: desde {clp.format(51600)}.
          Alineación 3D recomendada si el auto tira, si comiste un taco, o cada
          10.000 km.
        </p>
      </section>

      <section className="relative overflow-hidden border-t border-line">
        <Image
          src="/images/cumbre.jpg"
          alt="Cordillera de noche"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-bg/55" />
        <div className="relative pad py-24 lg:py-32">
          <p className="kicker">Programa nocturno</p>
          <h2 className="display mt-4 max-w-3xl text-4xl sm:text-6xl">
            Jueves, viernes, sábado. 21:00 a 01:00.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-mute">
            Sin recargo. Un elevador, un técnico, tu auto. Pensado para quien
            trabaja de día o no quiere el taller a las once de la mañana. La
            cita se reserva. Si llegas tarde más de veinte minutos, se corre.
          </p>
          <Link href="/cita" className="btn btn-solid mt-10">
            Pedir cita nocturna
          </Link>
        </div>
      </section>
    </div>
  );
}
