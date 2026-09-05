import Image from "next/image";
import Link from "next/link";
import { Lamp } from "@/components/lamp";
import { Arrow } from "@/components/mark";
import { NavePlan } from "@/components/nave-plan";
import { Reveal } from "@/components/reveal";
import { SkuNote, SkuTable } from "@/components/sku-table";
import { Tira } from "@/components/tira";
import { featuredSkus } from "@/data/catalog";
import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";

export default function HomePage() {
  const lista = featuredSkus();

  return (
    <>
      <section className="relative min-h-[100svh] md:grid md:grid-cols-12">
        <div className="relative h-[58svh] md:col-span-7 md:h-auto md:min-h-[100svh]">
          <picture>
            <source media="(max-width: 767px)" srcSet="/images/hero-m.jpg" />
            <img
              src="/images/hero.jpg"
              alt="Pasillo de la nave de noche: perfiles a la izquierda, fierro a la derecha, lámpara de sodio al fondo"
              width={1920}
              height={1080}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          <p className="pointer-events-none absolute bottom-6 left-5 hidden font-mono text-[0.58rem] uppercase tracking-[0.28em] text-face/80 md:block">
            Quilicura · {site.patioM2.toLocaleString("es-CL")} m²
          </p>
        </div>

        <div className="flex flex-col justify-end bg-void px-5 pb-10 pt-8 md:col-span-5 md:justify-center md:px-10 md:pb-16 lg:px-14">
          <h1 className="rise max-w-xl font-display text-[clamp(3.1rem,8vw,6.4rem)] font-medium leading-[0.86] tracking-wide">
            El fierro no espera el día.
          </h1>
          <p
            className="rise mt-6 max-w-md text-base leading-relaxed text-mute md:text-lg"
            style={{ animationDelay: "0.16s" }}
          >
            Lista hasta las {site.corteHora}. Corte en la nave. Retiro a las{" "}
            {site.salidaHora}.
          </p>
          <div className="rise mt-5" style={{ animationDelay: "0.22s" }}>
            <Lamp />
          </div>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.28s" }}
          >
            <Link href="/tira" className="btn btn-sodium">
              Anidar corte
              <Arrow />
            </Link>
            <Link href="/cotizar" className="btn btn-ghost">
              Cotizar lista
            </Link>
          </div>
          <div className="rule rule-sodium mt-10" aria-hidden="true" />
        </div>
      </section>

      <section
        id="tira"
        className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <Reveal>
          <Tira />
        </Reveal>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 lg:px-16">
          <Reveal className="md:col-span-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
              Oficio
            </p>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,4.4vw,4.2rem)] font-medium leading-[0.94] tracking-wide">
              La planta no para. El patio tampoco.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 md:pt-12" delay={80}>
            <p className="text-base leading-relaxed text-mute md:text-lg">
              Abrimos a las 18:00, cuando el resto cierra. Atendemos parada de
              planta, vaciado nocturno y la lista que el maestro dejó para la
              madrugada. Si entra antes de las {site.corteHora}, sale a las{" "}
              {site.salidaHora}.
            </p>
            <Link
              href="/turno"
              className="trace mt-8 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
            >
              Cómo corre el turno
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      <section
        id="familias"
        className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16"
      >
        <Reveal className="md:flex md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
              Planta de la nave
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium tracking-wide md:text-6xl">
              Seis bahías. Un pasillo.
            </h2>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mute md:mt-0">
            No es una vitrina. Es el recinto: fierro al norte, mesón al sur,
            despacho por el centro.
          </p>
        </Reveal>
        <Reveal className="mt-12" delay={60}>
          <NavePlan />
        </Reveal>
      </section>

      <section className="border-y border-line bg-nave">
        <div className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <Reveal>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
              Lista de despacho
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-medium tracking-wide md:text-6xl">
              Lo que sale todas las madrugadas.
            </h2>
          </Reveal>
          <Reveal className="mt-12" delay={80}>
            <SkuTable items={lista} />
            <SkuNote />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="grid md:grid-cols-12">
          <div className="relative min-h-[22rem] md:col-span-7 md:min-h-[42rem]">
            <Image
              src="/images/corte.jpg"
              alt="Cara de corte fresca de un perfil cuadrado, viruta sobre hormigón húmedo"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between px-5 py-14 md:col-span-5 md:px-10 md:py-16 lg:px-14">
            <Reveal>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
                Corte
              </p>
              <h2 className="mt-5 font-display text-4xl font-medium tracking-wide md:text-5xl">
                Sin medida escrita, la sierra no enciende.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-mute">
                Tira de 6.000 mm incluida. Corte extra {formatCLP(site.corteExtra)}.
                Doblado {formatCLP(site.dobladoCurva)} por curva. Kerf de 3 mm
                entre piezas.
              </p>
            </Reveal>
            <Reveal className="mt-10" delay={80}>
              <dl className="space-y-4 border-t border-line pt-8">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
                    Lista hasta
                  </dt>
                  <dd>{site.corteHora}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
                    Sale
                  </dt>
                  <dd>{site.salidaHora}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-mute">
                    Tira
                  </dt>
                  <dd>{site.corteIncluidoHasta}</dd>
                </div>
              </dl>
              <Link
                href="/tira"
                className="mt-10 inline-flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.22em]"
              >
                Abrir el nidador
                <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:px-16">
        <Reveal className="md:col-span-7">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-mute">
            Mesón
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5vw,5.2rem)] font-medium leading-[0.9] tracking-wide">
            ¿La planta pide fierro esta noche?
          </h2>
          <a
            href={site.phoneHref}
            className="mt-8 block font-display text-4xl font-medium tracking-wide text-sodium md:text-6xl"
          >
            {site.phone}
          </a>
        </Reveal>
        <Reveal className="md:col-span-4 md:col-start-9 md:pt-16" delay={100}>
          <p className="text-sm leading-relaxed text-mute">
            Manda la lista con medida. Respondemos en horario de nave. Si la
            obra no espera, WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cotizar" className="btn btn-sodium">
              Cotizar lista
              <Arrow />
            </Link>
            <a href={site.whatsappHref} className="btn btn-ghost">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
