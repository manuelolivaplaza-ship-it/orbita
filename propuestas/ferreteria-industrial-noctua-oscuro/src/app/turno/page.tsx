import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lamp } from "@/components/lamp";
import { Arrow } from "@/components/mark";
import { Reveal } from "@/components/reveal";
import { mesón } from "@/data/catalog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Turno",
  description:
    "Turno noche en Quilicura. Mesón de 18:00 a 05:30. Lista de corte hasta las 22:00, despacho a las 05:00.",
};

const ronda = [
  { hora: "18:00", lugar: "Abre el mesón. Primera guía del turno." },
  { hora: "20:30", lugar: "Cortes de las listas que entraron de día." },
  { hora: "22:00", lugar: "Cierre de listas para las 05:00." },
  { hora: "02:00", lugar: "Paradas de planta y pedidos de emergencia." },
  { hora: "05:00", lugar: "Salida a obra, RM. Retiro en Lo Echevers." },
  { hora: "05:30", lugar: "Cierra la nave. Lunes a sábado." },
];

export default function TurnoPage() {
  const [primero, ...resto] = mesón;

  return (
    <div className="pt-[4.5rem]">
      <header className="mx-auto max-w-[1480px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <h1 className="max-w-3xl font-display text-[clamp(2.8rem,6vw,6.2rem)] font-medium leading-[0.88] tracking-wide">
          El turno corre cuando Santiago duerme.
        </h1>
        <div className="mt-6">
          <Lamp />
        </div>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-mute">
          {site.patioM2.toLocaleString("es-CL")} m² en Lo Echevers. Un pasillo,
          seis bahías, una sierra. No es un mall. Es la nave que atiende a la
          planta.
        </p>
      </header>

      <section className="border-y border-line">
        <div className="relative min-h-[22rem] md:min-h-[70svh]">
          <Image
            src="/images/nave.jpg"
            alt="Volumen de la nave de noche, pilas de acero y lámpara de sodio al fondo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Ronda
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-wide md:text-5xl">
            De las dieciocho a las cinco.
          </h2>
        </Reveal>
        <ol className="mt-12 border-t border-line">
          {ronda.map((item) => (
            <li
              key={item.hora}
              className="grid gap-2 border-b border-line py-5 md:grid-cols-[8rem_1fr] md:items-baseline"
            >
              <span className="font-display text-3xl font-medium tracking-wide text-sodium">
                {item.hora}
              </span>
              <span className="text-base text-steel">{item.lugar}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-line bg-nave">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 lg:px-16">
          <div className="md:col-span-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
              Lo Echevers
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-wide">
              Retiro en nave o despacho de madrugada.
            </h2>
            <address className="mt-6 not-italic text-sm leading-relaxed text-mute">
              {site.address.line1}
              <br />
              {site.address.commune}, {site.address.city}
            </address>
            <a
              href={site.address.maps}
              className="trace mt-6 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
            >
              Abrir mapa
              <Arrow />
            </a>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="space-y-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-mute">
              {site.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-6 border-b border-line py-3">
                  <span>{row.days}</span>
                  <span className="text-face">{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-mute">
              Pedido mínimo de despacho{" "}
              {site.pedidoMinimoIva.toLocaleString("es-CL")} con IVA. Crédito a{" "}
              {site.factura}. Boleta y factura electrónica.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Lo que se pregunta en el mesón
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-wide">
            {primero.q}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute">
            {primero.a}
          </p>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {resto.map((item) => (
            <article key={item.q}>
              <h3 className="font-display text-2xl font-medium tracking-wide">
                {item.q}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mute">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-10 lg:px-16">
          <div>
            <p className="font-display text-3xl font-medium tracking-wide">
              Lista para esta noche.
            </p>
            <p className="mt-2 text-sm text-mute">
              WhatsApp {site.whatsapp} · {site.phone}
            </p>
          </div>
          <Link href="/cotizar" className="btn btn-sodium">
            Cotizar lista
            <Arrow />
          </Link>
        </div>
      </section>
    </div>
  );
}
