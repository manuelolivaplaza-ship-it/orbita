import type { Metadata } from "next";
import Image from "next/image";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { method, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Producto digital, plataformas internas, sistemas de diseño e ingeniería. Cómo trabaja Alba con empresas en Chile.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="wrap pb-10 pt-12 md:pb-14 md:pt-20">
        <p className="eyebrow">Servicios</p>
        <h1 className="display mt-5 max-w-[16ch] text-[clamp(3rem,8vw,6.4rem)]">
          Cuatro maneras de entrar. Un solo oficio.
        </h1>
        <p className="mt-8 max-w-xl text-[1.12rem] leading-[1.7] text-muted">
          No vendemos horas sueltas ni un menú de tecnologías. Tomamos un
          problema de operación y lo convertimos en software que se sostiene.
        </p>
      </section>

      <section className="wrap pb-8">
        <div className="img-frame relative aspect-[16/8]">
          <Image
            src="/images/copper.jpg"
            alt="Medallón de cobre con un sol grabado, sobre papel."
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <ul className="grid gap-16 md:gap-24">
          {services.map((service, index) => (
            <Reveal
              as="li"
              key={service.slug}
              delay={index * 40}
              className="grid gap-8 border-t border-line pt-10 md:grid-cols-12"
            >
              <p className="font-display text-4xl text-copper md:col-span-2">
                {service.index}
              </p>
              <div className="md:col-span-4">
                <h2 className="font-display text-4xl tracking-[-0.04em]">
                  {service.title}
                </h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
                  {service.lede}
                </p>
              </div>
              <div className="md:col-span-6">
                <p className="text-[1.05rem] leading-[1.75]">{service.body}</p>
                <ul className="mt-6 grid gap-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.98rem] text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-line bg-foam/50">
        <div className="wrap grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <p className="eyebrow">Método</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em]">
              Mirar, nombrar, construir, dejar.
            </h2>
          </div>
          <ol className="grid gap-8 md:col-span-8">
            {method.map((step) => (
              <li key={step.index} className="grid grid-cols-12 gap-4">
                <span className="col-span-2 font-display text-2xl text-copper">
                  {step.index}
                </span>
                <div className="col-span-10">
                  <h3 className="font-display text-2xl tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[1.02rem] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap grid gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="eyebrow">Con quién</p>
          <h2 className="mt-4 font-display text-4xl tracking-[-0.04em]">
            Empresas que ya operan, y necesitan que el software las alcance.
          </h2>
        </div>
        <div className="space-y-5 text-[1.05rem] leading-[1.75] text-muted">
          <p>
            No somos el primer proveedor de una startup de tres personas. Sí
            somos el estudio al que llama una clínica que creció, un puerto que
            todavía usa pizarrón, un fondo que vive en el correo.
          </p>
          <p>
            El encargo típico dura entre cuatro y nueve meses. A veces queda un
            squad embebido después. El precio se conversa con el alcance, no
            con una tarifa escondida en una landing.
          </p>
          <p>
            Trabajamos en español, en Santiago, y con equipos que están en el
            resto de Chile y en la región. La hora es siempre la de aquí.
          </p>
        </div>
      </section>

      <Cta title="Si tienes un problema de operación, no un deck, escribamos." />
    </>
  );
}
