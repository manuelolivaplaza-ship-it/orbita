import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles, site, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "Casona de 1912 en Barrio Yungay. Patio con níspero, mesa de cinco, mástil en el techo. Cómo trabaja SEÑAL.",
};

export default function EstudioPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="YNG"
        kicker="El piso"
        title="Una casona. Un mástil. Diez cuentas."
        lede="Maturana 612, Barrio Yungay. Metro Quinta Normal a siete minutos. No es un piso de Isidora Goyenechea y no pretende serlo."
      />

      <div className="tx-frame img-zoom relative mt-10 aspect-[16/9]">
        <Image
          src="/images/casona.jpg"
          alt="Fachada de la casona SEÑAL en Maturana, anochecer, una ventana encendida"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-serif text-[1.15rem] leading-relaxed text-paper-dim">
            Elisa abrió este piso en 2018 porque en la agencia anterior las
            cuentas se acumulaban y el Business Manager lo miraba un junior el
            viernes a las 18:00. Acá las que caben, caben. Las que no, se
            esperan o se derivan.
          </p>
          <p className="font-serif mt-5 text-[1.15rem] leading-relaxed text-paper-dim">
            El patio tiene un níspero. La sala de pauta tiene tres monitores y
            un LED lima que se prende cuando hay algo en el aire. Arriba, un
            mástil que no transmite FM: transmite el criterio.
          </p>
        </Reveal>
        <dl className="grid gap-6 sm:grid-cols-2">
          <div className="border-t border-line pt-4">
            <dt className="kicker">Dirección</dt>
            <dd className="mt-2">
              {site.address.line}
              <br />
              {site.address.city}
            </dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="kicker">Metro</dt>
            <dd className="mt-2">{site.metro}</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="kicker">Horario</dt>
            <dd className="mt-2">{site.hours}</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="kicker">Última hora</dt>
            <dd className="mt-2">{site.lastHour} con usted. Después, el corte.</dd>
          </div>
        </dl>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        <div className="tx-frame img-zoom relative aspect-[16/10]">
          <Image
            src="/images/patio.jpg"
            alt="Patio interior con níspero y una lámpara de tungsteno"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="tx-frame img-zoom relative aspect-[16/10]">
          <Image
            src="/images/sala.jpg"
            alt="Sala de pauta: tres monitores y un LED lima en un rack"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="tx-frame img-zoom relative aspect-[16/10]">
          <Image
            src="/images/mesa.jpg"
            alt="Mesa de trabajo con papeles, lámpara y consola con LED lima"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="tx-frame img-zoom relative aspect-[16/10]">
          <Image
            src="/images/calle.jpg"
            alt="Calle de Yungay de noche, adoquines mojados y una ventana encendida"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-4">
        {principles.map((p) => (
          <Reveal key={p.folio}>
            <p className="font-mono text-[0.68rem] tracking-[0.16em] text-carrier">
              {p.folio}
            </p>
            <h2 className="mt-3 text-[1.5rem] leading-none">{p.title}</h2>
            <p className="font-serif mt-3 text-paper-dim">{p.text}</p>
          </Reveal>
        ))}
      </div>

      <ol className="mt-20 grid gap-8 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.folio}>
            <p className="kicker">{s.folio}</p>
            <h3 className="mt-3 text-[1.4rem] leading-none">{s.title}</h3>
            <p className="font-serif mt-3 text-sm text-paper-dim">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 flex flex-wrap gap-3">
        <Link href="/lectura" className="btn btn-primary">
          Pedir una lectura
        </Link>
        <Link href="/mesa" className="btn btn-ghost">
          La mesa
        </Link>
      </div>
    </div>
  );
}
