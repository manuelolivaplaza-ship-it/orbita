import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { facts } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terroir",
  description:
    "Fundo Las Nieblas, Lo Ovalle, Casablanca. 42 hectáreas a 248 metros, niebla costera y suelo granítico.",
};

export default function TerroirPage() {
  return (
    <>
      <PageIntro
        kicker="Lo Ovalle · Casablanca"
        title="El aire hace el vino."
        lead="La camanchaca entra de madrugada por el corredor de Casablanca y se queda hasta el mediodía. No es un adorno. Es el clima."
      />

      <section className="relative aspect-[16/9] overflow-hidden">
        <Image
          src="/images/hileras.jpg"
          alt="Hileras de parra hacia la niebla, suelo arenoso de Lo Ovalle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="shell grid gap-16 py-24 md:grid-cols-12">
        {facts.map((fact) => (
          <Reveal key={fact.n} className="md:col-span-4">
            <p className="font-mono text-[0.62rem] text-hoja">{fact.n}</p>
            <h2 className="mt-4 font-display text-3xl tracking-tight">
              {fact.title}
            </h2>
            <p className="mt-4 leading-relaxed text-tinta-suave">{fact.body}</p>
          </Reveal>
        ))}
      </section>

      <section className="grid lg:grid-cols-12">
        <div className="relative min-h-[50vh] lg:col-span-6">
          <Image
            src="/images/parra.jpg"
            alt="Zarcillo de parra con rocío de la mañana"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative min-h-[50vh] lg:col-span-6">
          <Image
            src="/images/suelo.jpg"
            alt="Suelo granítico y arenoso del cuartel, con sarmientos secos"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="shell grid gap-12 py-24 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <p className="kicker">El fundo</p>
          <h2 className="mt-4 font-display text-5xl tracking-tight">
            {site.address.line1}.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-tinta-suave">
            {site.access}. {site.parking}. Miércoles a domingo, {site.hours[0].time}.
            Lunes y martes el fundo está cerrado al público; el despacho sigue.
          </p>
          <Link href="/visitas" className="btn btn-ink mt-8">
            Reservar visita
          </Link>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src="/images/cava.jpg"
              alt="Cava de ETER: barricas de roble alineadas en un pasillo de piedra clara"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-gris">
            Cava · roble francés 225 L · 14 °C
          </p>
        </div>
      </section>
    </>
  );
}
