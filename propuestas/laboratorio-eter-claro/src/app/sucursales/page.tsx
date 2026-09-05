import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { sucursales } from "@/data/sucursales";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sucursales",
  description:
    "Sucursales ETER en Providencia, Las Condes, Ñuñoa y Vitacura. Horarios, metro y estacionamiento.",
};

export default function SucursalesPage() {
  return (
    <>
      <PageHero
        kicker="Sucursales"
        title="Cuatro casas, una misma luz."
        lead="Abrimos temprano porque el ayuno no espera. Llegas, te sientas, te toman la muestra. El resto ocurre en silencio."
      />
      <div className="wrap-wide space-y-24 pb-24">
        {sucursales.map((item, index) => (
          <Reveal
            key={item.slug}
            className="grid items-center gap-10 md:grid-cols-12"
          >
            <div
              className={
                index % 2 === 1
                  ? "md:col-span-6 md:col-start-7 md:order-2"
                  : "md:col-span-6"
              }
            >
              <div className="img-frame aspect-[16/11]">
                <Image
                  src={item.imagen}
                  alt={item.imagenAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div
              className={
                index % 2 === 1
                  ? "md:col-span-5 md:order-1"
                  : "md:col-span-5 md:col-start-8"
              }
            >
              <p className="eyebrow">{item.comuna}</p>
              <h2 className="display mt-3 text-5xl md:text-6xl">{item.nombre}</h2>
              <p className="mt-5 text-lg text-ink-soft">{item.direccion}</p>
              <p className="mt-2 text-ink-soft">{item.referencia}</p>
              <dl className="mt-8 space-y-3 text-sm">
                {item.metro ? (
                  <div className="flex justify-between gap-4 border-t border-line pt-3">
                    <dt className="text-mute">Metro</dt>
                    <dd>{item.metro}</dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-4 border-t border-line pt-3">
                  <dt className="text-mute">Estacionamiento</dt>
                  <dd className="max-w-[16rem] text-right">{item.estacionamiento}</dd>
                </div>
                {item.horarios.map((horario) => (
                  <div
                    key={horario.dias}
                    className="flex justify-between gap-4 border-t border-line pt-3"
                  >
                    <dt className="text-mute">{horario.dias}</dt>
                    <dd className="font-mono">{horario.horas}</dd>
                  </div>
                ))}
                <div className="flex justify-between gap-4 border-t border-line pt-3">
                  <dt className="text-mute">Teléfono</dt>
                  <dd>
                    <a href={`tel:${item.telefono.replace(/\s/g, "")}`}>{item.telefono}</a>
                  </dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contacto" className="btn btn-ink">
                  Agendar aquí
                </Link>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.direccion}, ${item.comuna}, Santiago`)}`}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver mapa
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="wrap pb-20 text-center text-sm text-mute">
        Central {site.phone} · {site.hours}
      </p>
    </>
  );
}
