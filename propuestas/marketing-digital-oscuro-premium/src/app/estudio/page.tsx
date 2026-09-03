import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles, site, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "El estudio",
  description:
    "Obsidiana es un estudio de marketing digital en Barrio Italia. Cinco personas. Ocho cuentas al año. El gasto de pauta es del cliente.",
};

export default function EstudioPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        folio="00"
        kicker="El estudio"
        title="Un piso en Barrio Italia. Ocho cuentas. El filo."
        lede="Fundado en 2019 por Amparo Vidal. No es una red de medios ni una mesa de 40 ejecutivos. Es un piso en Condell donde el criterio se firma los martes."
      />

      <Reveal className="relative mt-12 aspect-[16/8] overflow-hidden border border-line">
        <Image
          src="/images/italia.jpg"
          alt="Calle de Barrio Italia al anochecer, adoquines mojados y una ventana encendida"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Reveal>

      <section className="mt-20 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="kicker">Por qué Obsidiana</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95]">
            El vidrio volcánico no adorna. Corta.
          </h2>
        </Reveal>
        <div className="space-y-6 text-[1.05rem] leading-relaxed text-paper-dim lg:col-span-7">
          <p>
            Amparo abrió este piso en 2019 porque no quería otra agencia que
            vendiera horas de community y un markup sobre la pauta. Cinco
            personas. Un número de cuentas que cabe en la mesa. Si el año está
            lleno, se lo decimos.
          </p>
          <p>
            La obsidiana es vidrio de volcán. En Chile está en el sur, en el
            norte, en la cordillera. Filo de cirugía. Aquí se usa como método:
            cada semana hay algo que se apaga. El medio es barato. El criterio,
            no.
          </p>
          <p>
            Condell 1448, piso 2. Metro Salvador a ocho minutos. La mesa cierra
            a las 19:00. El media, a veces, sigue. El gasto de pauta es suyo, en
            su Business Manager. Nosotros firmamos el corte.
          </p>
        </div>
      </section>

      <section className="mt-20 grid gap-4 md:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <Image
            src="/images/estudio.jpg"
            alt="Interior del estudio de noche, mesa larga y una lámpara"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <Image
            src="/images/mesa.jpg"
            alt="Mesa de trabajo vista desde arriba, papeles y un peso de cobre"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mt-24 grid gap-px bg-line sm:grid-cols-2">
        {principles.map((p) => (
          <Reveal key={p.folio} className="bg-void p-8 sm:p-10">
            <p className="font-display text-3xl text-ember">{p.folio}</p>
            <h3 className="mt-4 font-display text-2xl leading-tight">{p.title}</h3>
            <p className="mt-3 max-w-[36ch] text-paper-dim">{p.text}</p>
          </Reveal>
        ))}
      </section>

      <section className="mt-24">
        <Reveal>
          <p className="kicker">La mesa</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95]">
            Cinco. Las que firman.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((p) => (
            <li key={p.slug}>
              <Link href={`/mesa/${p.slug}`} className="group block">
                <div className="img-zoom relative aspect-[3/4] bg-surface">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 18vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-4 font-display text-2xl leading-none tracking-tight group-hover:text-ember">
                  {p.name}
                </p>
                <p className="mt-2 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                  {p.role}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-24 grid gap-8 border-t border-line pt-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="kicker">El piso</p>
          <h2 className="mt-4 font-display text-3xl leading-tight">
            {site.address.line}
          </h2>
          <p className="mt-4 text-paper-dim">
            {site.address.city}
            <br />
            {site.metro}
            <br />
            {site.hours}
            <br />
            {site.coords}
          </p>
          <a
            href={site.address.maps}
            className="mt-6 inline-block link-line text-paper"
          >
            Cómo llegar
          </a>
        </div>
        <p className="max-w-[46ch] text-paper-dim lg:col-span-6 lg:col-start-7">
          No es Lastarria ni Nueva Costanera. Es Barrio Italia: talleres,
          vitrinas, una calle que se moja y una lámpara encendida a las 21:00.
          El diagnóstico se hace aquí, o por videollamada si está fuera de
          Santiago. El escrito, siempre, en UF.
        </p>
      </section>
    </div>
  );
}
