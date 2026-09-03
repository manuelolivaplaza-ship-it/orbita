import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { matters, principles, site, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "Vigilia es un estudio de cuatro abogados en Lastarria. Causas que caben en la mesa. A ocho minutos del Palacio de los Tribunales.",
};

export default function EstudioPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="00"
        kicker="El estudio"
        title="Un piso en Lastarria. Una lámpara. Las causas que caben."
        lede="Fundado en 2016 por Emilia Contreras. No es un edificio de Las Condes ni una casa con patio. Es un piso a ocho minutos de Tribunales, donde el escrito se termina de noche."
      />

      <Reveal className="relative mt-12 aspect-[16/8] overflow-hidden border border-line">
        <Image
          src="/images/pasillo.jpg"
          alt="Pasillo de mármol oscuro con pasamanos de bronce"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>

      <section className="mt-20 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Por qué Vigilia</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95]">
            No tomamos más de lo que podemos leer.
          </h2>
        </Reveal>
        <div className="space-y-6 text-[1.05rem] leading-relaxed text-paper-dim lg:col-span-7">
          <p>
            Emilia abrió este piso en 2016 porque no quería un estudio donde el
            socio aparece en la web y un asociado firma el escrito. Cuatro
            abogados. Un número de asuntos que cabe en la mesa. Si el mes está
            lleno, se lo decimos.
          </p>
          <p>
            La última hora con cliente es a las 20:00. Después queda la lámpara.
            Civil, laboral, familia, recursos y administrativo. Penal no: si ese
            es el asunto, se lo decimos en la primera respuesta y le indicamos a
            quién conviene llamar.
          </p>
          <p>
            Lastarria 70, oficina 3. Metro Bellas Artes a cuatro minutos. El
            Palacio de los Tribunales, a ocho. El escrito no se improvisa en el
            taxi.
          </p>
        </div>
      </section>

      <section className="mt-24 grid gap-px bg-line sm:grid-cols-2">
        {principles.map((p) => (
          <Reveal key={p.folio} className="bg-void p-8 sm:p-10">
            <p className="font-display text-3xl text-copper">{p.folio}</p>
            <h3 className="mt-4 font-display text-2xl leading-tight">{p.title}</h3>
            <p className="mt-3 max-w-[36ch] text-paper-dim">{p.text}</p>
          </Reveal>
        ))}
      </section>

      <section className="mt-24">
        <Reveal>
          <p className="kicker">Cómo partimos</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95]">
            Cuatro pasos. El mismo abogado.
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-8 md:grid-cols-2">
          {steps.map((s) => (
            <li key={s.folio} className="border-t border-line pt-6">
              <span className="kicker">{s.folio}</span>
              <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-paper-dim">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-24">
        <Reveal>
          <p className="kicker">Asuntos recientes</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95]">
            Sin nombres. Con plazos reales.
          </h2>
          <p className="mt-4 max-w-[44ch] text-paper-dim">
            No publicamos fallos como trofeos. Estos son asuntos cerrados, con
            cifras que se pueden decir.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-px bg-line md:grid-cols-2">
          {matters.map((m) => (
            <li key={m.slug} className="bg-void p-8">
              <p className="kicker">
                {m.year} · {m.area} · {m.comuna}
              </p>
              <h3 className="mt-3 font-display text-2xl leading-tight">{m.title}</h3>
              <p className="mt-4 font-display text-5xl tabular leading-none text-copper">
                {m.metric}
              </p>
              <p className="mt-1 text-sm text-muted">{m.metricLabel}</p>
              <p className="mt-4 text-[0.95rem] text-paper-dim">{m.summary}</p>
              <p className="mt-3 text-sm text-paper">{m.result}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-24 grid gap-10 border-t border-line pt-12 lg:grid-cols-2">
        <Reveal className="relative aspect-[4/5] overflow-hidden border border-line sm:aspect-[16/10] lg:aspect-auto lg:min-h-[480px]">
          <Image
            src="/images/escalera.jpg"
            alt="Escalinata de un edificio cívico de noche, farol de cobre"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </Reveal>
        <div className="flex flex-col justify-center">
          <p className="kicker">El barrio</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95]">
            {site.address.line}
          </h2>
          <p className="mt-5 max-w-[40ch] text-paper-dim">
            Santiago Centro, no un tower de oriente. Venimos a Tribunales a pie.
            La primera hora se pide en este piso, o por video si está fuera de
            Santiago.
          </p>
          <p className="mt-5 text-paper-dim">
            {site.metro}
            <br />
            {site.tribunales}
            <br />
            {site.hours}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/primera-hora" className="btn btn-primary">
              Pedir la primera hora
            </Link>
            <a href={site.address.maps} className="btn btn-ghost">
              Cómo llegar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
