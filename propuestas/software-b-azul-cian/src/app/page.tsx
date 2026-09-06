import Image from "next/image";
import Link from "next/link";
import { Traza } from "@/components/traza";
import { questions, services } from "@/lib/site";
import { traces } from "@/lib/traces";
import { trabajos } from "@/lib/trabajo";

export default function HomePage() {
  const featured = trabajos[0];
  const rest = trabajos.slice(1);
  const firstQuestion = questions[0];
  const otherQuestions = questions.slice(1);

  return (
    <>
      <section className="shell pb-10 pt-6 md:pb-14 md:pt-10">
        <h1
          className="enter display max-w-[16ch] text-[clamp(2.8rem,8vw,6.2rem)]"
          style={{ animationDelay: "0.04s" }}
        >
          Una traza para toda la operación.
        </h1>
        <p
          className="enter mt-6 max-w-[42ch] text-[1.08rem] leading-[1.7] text-muted md:text-[1.16rem]"
          style={{ animationDelay: "0.12s" }}
        >
          Estudio de software en Ñuñoa. Diseñamos y construimos sistemas que un
          turno puede seguir — del gate al patio, de la boleta al pago, de la
          pala al acopio. Si no se puede trazar, no está hecho.
        </p>
        <div
          className="enter mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.2s" }}
        >
          <Link href="/contacto" className="btn btn-navy">
            Pedir un levantamiento
          </Link>
          <Link href="/trabajo" className="btn btn-ghost">
            Ver el trabajo
          </Link>
        </div>
        <div className="enter mt-10 md:mt-12" style={{ animationDelay: "0.28s" }}>
          <Traza trace={traces.puerto} />
        </div>
        <p className="caption mt-3">
          Request de ejemplo · Puerto San Vicente · pórtico 2
        </p>
      </section>

      <section className="shell grid items-start gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">
            El turno es el juez. La traza, la prueba.
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-[1.75] text-muted">
            Hay demasiado software que pide explicación. Interfaces que se
            esconden. Plataformas que se inflan. Reuniones para entender lo que
            debería ser un hecho con hora.
          </p>
          <p className="mt-4 max-w-md text-[1.05rem] leading-[1.75] text-muted">
            Nosotros hacemos lo contrario: un identificador que sobrevive al
            cambio de turno, un evento con autor, un rastro que un inspector
            puede seguir sin carpeta. Si hay que explicarlo a las tres de la
            mañana, todavía no está listo.
          </p>
        </div>
        <figure className="md:col-span-6 md:col-start-7">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/mesa.jpg"
              alt="Mesa del estudio: monitores apagados, taza y un cable UTP azul enrollado, luz de mañana."
              fill
              className="object-cover"
              sizes="(min-width: 768px) 46vw, 100vw"
            />
          </div>
          <figcaption className="caption mt-3">
            Mesa · oficina 402 · Irarrázaval 3470
          </figcaption>
        </figure>
      </section>

      <section className="shell pb-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Trabajo reciente</h2>
          <Link href="/trabajo" className="link-line hidden text-sm text-muted md:inline">
            Índice
          </Link>
        </div>
        <Link href={`/trabajo/${featured.slug}`} className="group block">
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/7.5]">
            <Image
              src={featured.cover}
              alt={featured.coverAlt}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-[1.015]"
              sizes="100vw"
            />
          </div>
          <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h3 className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
              {featured.headline}
            </h3>
            <p className="caption">{featured.caption}</p>
          </div>
          <p className="mt-2 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
            {featured.lede}
          </p>
        </Link>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {rest.map((item) => (
            <Link key={item.slug} href={`/trabajo/${item.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.cover}
                  alt={item.coverAlt}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.015]"
                  sizes="(min-width: 768px) 46vw, 100vw"
                />
              </div>
              <p className="caption mt-3">{item.caption}</p>
              <h3 className="font-display mt-2 text-2xl tracking-[-0.03em]">
                {item.headline}
              </h3>
              <p className="mt-2 text-[1.02rem] leading-relaxed text-muted">
                {item.lede}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] md:col-span-4">
            Oficio
          </h2>
          <ul className="mt-10 divide-y divide-line border-y border-line md:col-span-8 md:mt-0">
            {services.map((service) => (
              <li key={service.slug} className="grid gap-3 py-8 md:grid-cols-12">
                <h3 className="font-display text-xl tracking-[-0.03em] md:col-span-5 md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-[1.02rem] leading-relaxed text-muted md:col-span-7">
                  {service.lede}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 md:pl-[calc(33.33%+0.5rem)]">
          <Link href="/oficio" className="link-line text-[0.95rem] font-medium">
            Cómo encargamos el trabajo
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">
              {firstQuestion.q}
            </h2>
            <p className="mt-6 max-w-md text-[1.05rem] leading-[1.75] text-muted">
              {firstQuestion.a}
            </p>
          </div>
          <dl className="md:col-span-6 md:col-start-7">
            {otherQuestions.map((item) => (
              <div key={item.q} className="border-t border-line py-6 first:border-t-0 first:pt-0">
                <dt className="font-display text-xl tracking-[-0.03em]">{item.q}</dt>
                <dd className="mt-2 text-[1.02rem] leading-relaxed text-muted">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
