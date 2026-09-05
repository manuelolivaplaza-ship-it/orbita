import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "La casa",
  description:
    "Bazar Austral en Lastarria: una sala con luz de patio, una mesa y catorce piezas.",
};

export default function LaCasaPage() {
  return (
    <>
      <section className="shell grid items-end gap-10 pt-28 pb-12 lg:grid-cols-12 lg:pt-36">
        <div className="lg:col-span-7">
          <p className="kicker">La casa</p>
          <h1 className="font-display mt-4 text-[clamp(2.8rem,7vw,6.4rem)] leading-[0.9] tracking-tight">
            Lastarria 84, local 2.
          </h1>
        </div>
        <p className="max-w-md text-[17px] leading-relaxed text-tinta-suave lg:col-span-5">
          Una sala, una mesa, estantes de lino y gres. Abrimos a las once porque
          esa es la hora que ordena lo que vendemos.
        </p>
      </section>

      <div className="shell">
        <div className="relative aspect-[16/9] min-h-[280px] overflow-hidden bg-papel-2">
          <Image
            src="/images/interior.jpg"
            alt="Sala de Bazar Austral: mesa larga, estantes y luz de patio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-gris">
          {site.address.line} · {site.hoursShort}
        </p>
      </div>

      <section className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Oficio</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight md:text-5xl">
            Reunimos. No fabricamos todo.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
          <p className="text-[17px] leading-[1.75] text-tinta-suave">
            El lino se confecciona en Santiago con tela de Maule. El gres se
            tornea en Pomaire. El vidrio se sopla en Puerto Varas. El raulí se
            corta de derribo en Valdivia. El aceite sale de Ovalle. Cada pieza
            entra porque se usa a las once — o junto a esa hora.
          </p>
          <p className="mt-4 text-[17px] leading-[1.75] text-tinta-suave">
            No hay temporada de liquidación. Cuando se acaba una hornada, se
            acaba. El stock que ves es el que hay en la sala.
          </p>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-12">
        <div className="relative min-h-[360px] md:col-span-6 md:min-h-[640px]">
          <Image
            src="/images/taller.jpg"
            alt="Taller de gres: bowls secando a la luz de un ventanal"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative min-h-[360px] md:col-span-6 md:min-h-[640px]">
          <Image
            src="/images/estante.jpg"
            alt="Estante con lino doblado, bowls y una jarra de vidrio"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-4">
          <p className="kicker">Visita</p>
          <h2 className="font-display mt-4 text-4xl tracking-tight">
            Sin cita, en horario de casa.
          </h2>
        </Reveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
          <Reveal delay={60}>
            <p className="kicker">Dirección</p>
            <p className="mt-4 text-[17px] leading-relaxed">
              {site.address.line}
              <br />
              {site.address.commune}, {site.address.city}
            </p>
            <a
              href={site.address.maps}
              className="link-line mt-4 inline-block font-mono text-[0.62rem] uppercase tracking-[0.22em]"
              target="_blank"
              rel="noreferrer"
            >
              Ver mapa
            </a>
          </Reveal>
          <Reveal delay={120}>
            <p className="kicker">Horario</p>
            <ul className="mt-4 space-y-3 text-[17px]">
              {site.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-tinta-suave">{h.days}</span>
                  <br />
                  {h.time}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-linea bg-papel-2">
        <div className="shell flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
          <h2 className="font-display max-w-xl text-4xl tracking-tight">
            Si quieres apartar una pieza, escríbenos antes de venir.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/contacto" className="btn btn-ink">
              Escribir
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
