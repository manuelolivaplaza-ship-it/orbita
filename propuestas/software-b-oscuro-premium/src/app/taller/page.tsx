import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "Taller",
  description:
    "Ocho personas en el plan de Valparaíso. Blanco 1199, piso 4. El tren Santiago–Valparaíso, 1 h 20.",
};

export default function TallerPage() {
  return (
    <>
      <PageIntro
        kicker="Taller"
        title="Ocho personas. Un piso sobre el puerto."
        lede="Blanco 1199, oficina 4. El plan de Valparaíso, a cuatro minutos de Metro Puerto. El viernes el taller cierra cuando parte el tren de las 16:10."
      />

      <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
        <Image
          src="/images/taller.jpg"
          alt="Mesa del taller de noche: papel en blanco, regla de acero, lámpara y la bahía por la ventana."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <p className="frame py-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-niebla">
        Blanco 1199 · piso 4 · {site.coords.label}
      </p>

      <section className="frame grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <h2 className="display text-[clamp(2rem,4vw,3rem)]">
            Valparaíso no es un romanticismo.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-[1.06rem] leading-[1.75] text-niebla">
            Estamos acá porque las operaciones que construimos —puerto, flota,
            frío, bodega— tienen el mar cerca. Porque la UTFSM forma a la mitad
            del taller. Porque Casablanca queda a cuarenta minutos y San Antonio
            a una hora. Santiago no está lejos: el tren, 1 h 20.
          </p>
          <p className="mt-5 text-[1.06rem] leading-[1.75] text-niebla">
            El recinto es un piso alto, laca y una ventana al molo. No hay sala
            de ventas. Hay mesa, bitácora y el instrumento de donde tomamos el
            nombre.
          </p>
        </div>
      </section>

      <section className="border-y border-linea bg-mar py-20 md:py-24">
        <div className="frame">
          <h2 className="display text-[clamp(2rem,4vw,3rem)]">La mesa</h2>
          <ul className="mt-12 divide-y divide-linea border-y border-linea">
            {team.map((person) => (
              <li
                key={person.name}
                className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline"
              >
                <h3 className="font-display text-[1.55rem] font-semibold tracking-[-0.03em] md:col-span-4">
                  {person.name}
                </h3>
                <p className="kicker md:col-span-2">{person.role}</p>
                <p className="text-[1.02rem] leading-relaxed text-niebla md:col-span-6">
                  {person.bio}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="frame grid gap-10 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/mira.jpg"
              alt="Sextante de laca negra sobre paño oscuro, el arco de marfil bajo una lámpara."
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-4">
          <h2 className="display text-[clamp(2rem,4vw,3rem)]">Cómo llegar</h2>
          <address className="mt-6 space-y-2 not-italic text-[1.05rem] leading-relaxed text-marfil-dim">
            <p>{site.address.street}</p>
            <p>Valparaíso, Chile</p>
            <p>{site.metro}</p>
            <p>{site.hours}</p>
            <p>{site.note}</p>
          </address>
          <p className="mt-8">
            <a href={site.address.maps} className="link-line">
              Abrir en mapas
            </a>
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn btn-primary">
              Pedir una mira
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
