import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { principles, site, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Criterio",
  description:
    "Cómo HELIO mide el norte en Santiago. Horas de sol de invierno, visitas a esa hora, ficha transparente.",
};

export default function CriterioPage() {
  return (
    <>
      <PageIntro
        kicker="El oficio"
        title="Si no entra el norte, no entra a la lista."
        lead="A 33° sur el sol de invierno es bajo y corre por el norte. Esa no es una opinión de diseño: es geometría. HELIO se arma alrededor de esa geometría."
      />

      <section className="pb-8">
        <div className="shell">
          <div className="relative aspect-[16/8] min-h-[280px] overflow-hidden bg-luz-2">
            <Image
              src="/images/conquistadores-int.jpg"
              alt="Estar abierto al norte, con el parque y la cordillera"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="kicker">Latitud</p>
            <h2 className="font-display mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] font-medium leading-[0.95] tracking-tight">
              Santiago no es Madrid. Tampoco es Ciudad de México.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7">
            <p className="text-[17px] leading-relaxed text-muted">
              En el solsticio de junio, el sol de mediodía en Santiago está a
              unos 33° sobre el horizonte, al norte. Una fachada sur no recibe
              un rayo directo. Una fachada poniente recibe tarde, y en verano
              se tuesta. El norte es la única orientación que da sol en invierno
              y luz estable el resto del año.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Por eso cada ficha declara horas de sol directo en junio y en
              diciembre, medidas en el vano principal. No es un render. Es un
              reloj y una brújula.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-luz-2/50 py-16 lg:py-24">
        <div className="shell grid gap-px bg-line md:grid-cols-3">
          {principles.map((item) => (
            <Reveal key={item.n} className="bg-luz px-6 py-10 lg:px-8">
              <p className="font-mono text-[11px] tracking-[0.18em] text-sol">
                {item.n}
              </p>
              <h3 className="font-display mt-4 text-2xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Qué medimos</p>
            <h2 className="font-display mt-4 text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-tight tracking-tight">
              Antes de fotografiar.
            </h2>
          </Reveal>
          <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {[
              {
                t: "Rumbo verdadero",
                d: "Brújula en el vano, no en la puerta del edificio. El plano de copropiedad a veces miente medio cuadrante.",
              },
              {
                t: "Obstrucción",
                d: "Si un edificio al norte le come el invierno, la planta no entra. Aunque el portal diga «luminoso».",
              },
              {
                t: "Títulos",
                d: "Rol, prohibiciones, reglamento, DFL2. Diego lee el Conservador antes de que Amalia publique.",
              },
              {
                t: "Gastos",
                d: "Comunes en UF, contribuciones del período, bodega, estacionamiento inscrito. Lo que duele, primero.",
              },
            ].map((item) => (
              <Reveal key={item.t}>
                <h3 className="font-display text-xl font-medium">{item.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {item.d}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-16 lg:py-24">
        <div className="shell">
          <Reveal>
            <p className="kicker">Encargo</p>
            <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-tight">
              Cómo se trabaja con HELIO.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <Reveal key={item.n}>
                <p className="font-mono text-[11px] tracking-[0.16em] text-sol">
                  {item.n}
                </p>
                <h3 className="font-display mt-3 text-xl font-medium">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12 flex flex-wrap gap-3">
            <Link href="/visita" className="btn btn-sol">
              Encargar una planta
            </Link>
            <Link href="/vender" className="btn btn-line">
              Vender con HELIO
            </Link>
          </Reveal>
          <p className="mt-8 max-w-xl text-[14px] text-muted">{site.honorario}</p>
        </div>
      </section>
    </>
  );
}
