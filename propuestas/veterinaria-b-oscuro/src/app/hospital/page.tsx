import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { site, visits } from "@/lib/site";

export const metadata: Metadata = {
  title: "El hospital",
  description:
    "Farol es un hospital veterinario 24 horas en Irarrázaval 2940, Ñuñoa. Quirófano, laboratorio, imágenes e internación en la misma casa.",
};

export default function HospitalPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="00"
        kicker="Ñuñoa · Irarrázaval"
        title="Un hospital chico, con las luces de una casa."
        lede="Quirófano, laboratorio, imágenes e internación. Cinco médicos. Una puerta que no se cierra. Desde 2018, en la misma esquina."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-12">
        <Reveal className="img-zoom relative aspect-[16/10] lg:col-span-8">
          <Image
            src="/images/fachada.jpg"
            alt="Entrada de Farol de noche, farol de bronce sobre la puerta de vidrio"
            fill
            priority
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="img-zoom relative aspect-[4/5] lg:col-span-4" delay={0.08}>
          <Image
            src="/images/pasillo.jpg"
            alt="Pasillo del hospital a oscuras, con un farol de pared"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-12">
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-paper-dim lg:col-span-7">
          <p>
            Farol cabe en un edificio de dos pisos sobre Irarrázaval. Abajo:
            recepción, espera de perros, espera de gatos, dos consultorios,
            laboratorio. Arriba: imágenes, quirófano, internación. El farol de
            la puerta no es un adorno: es para que, a las tres, lo encuentres.
          </p>
          <p>
            Antonia Valdés lo abrió en 2018 después de años de guardias donde
            la noche era un interno solo y un teléfono desviado. La regla fue
            simple: si internamos, hay un médico despierto. Si operamos, hay
            un anestesista en la inducción. Si damos un precio, es antes de
            tocar.
          </p>
          <p>
            No vendemos alimento ni correas. No hacemos «limpieza consciente».
            No cerramos el domingo. Atendemos perros, gatos y, con hora,
            conejos. El resto, con honestidad, se deriva.
          </p>
        </div>
        <aside className="border border-line bg-ink p-8 lg:col-span-5">
          <p className="kicker">La esquina</p>
          <p className="mt-4 font-display text-2xl leading-snug">
            {site.address.line}
            <br />
            {site.address.city}, Santiago
          </p>
          <ul className="mt-6 space-y-2 text-paper-dim">
            <li>{site.metro}</li>
            <li>{site.parking}</li>
            <li>{site.hours}</li>
            <li>{site.colegio}</li>
            <li>{site.ley}</li>
          </ul>
          <a
            href={site.address.maps}
            className="mt-6 inline-block link-line"
            target="_blank"
            rel="noreferrer"
          >
            Ver en el mapa
          </a>
        </aside>
      </div>

      <section className="mt-24">
        <Reveal>
          <p className="kicker">Una visita</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
            Cómo es venir, de día.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {visits.map((v, i) => (
            <li
              key={v.n}
              className={
                i === 0
                  ? "lg:pr-8"
                  : i === 3
                    ? "lg:border-l lg:border-line lg:pl-8"
                    : "lg:border-l lg:border-line lg:px-8"
              }
            >
              <p className="kicker tabular">{v.n}</p>
              <h3 className="mt-4 font-display text-2xl leading-tight">{v.title}</h3>
              <p className="mt-3 text-paper-dim">{v.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-24 grid gap-4 sm:grid-cols-2">
        <Reveal className="img-zoom relative aspect-[4/3]">
          <Image
            src="/images/consultorio.jpg"
            alt="Consultorio de Farol, mesa de acero y lámpara cálida"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="img-zoom relative aspect-[4/3]" delay={0.08}>
          <Image
            src="/images/quirofano.jpg"
            alt="Quirófano de Farol de noche"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link href="/hora" className="btn btn-primary">
          Pedir hora
        </Link>
        <Link href="/equipo" className="btn btn-ghost">
          El equipo
        </Link>
      </div>
    </div>
  );
}
