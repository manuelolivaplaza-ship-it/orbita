import type { Metadata } from "next";
import Image from "next/image";
import { MedidaComposer } from "@/components/medida-composer";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { sidewall } from "@/data/content";
import { DEFAULT_MEDIDA } from "@/data/tires";

export const metadata: Metadata = {
  title: "Buscar medida",
  description:
    "Lee el costado: ancho, perfil y aro. ETER confirma stock y precio el mismo día, con montaje incluido.",
};

type Props = { searchParams: Promise<{ a?: string; p?: string; r?: string }> };

export default async function MedidaPage({ searchParams }: Props) {
  const params = await searchParams;
  const width = Number(params.a) || DEFAULT_MEDIDA.width;
  const aspect = Number(params.p) || DEFAULT_MEDIDA.aspect;
  const rim = Number(params.r) || DEFAULT_MEDIDA.rim;

  return (
    <>
      <PageIntro
        kicker="Costado"
        title="La medida no se adivina."
        lead="Está escrita en el flanco, en la puerta del conductor o en la tapa del estanque. Gira los números. Si no aparece, cotizamos la tuya hoy."
      />

      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 lg:px-16">
        <MedidaComposer initial={{ width, aspect, rim }} />
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 lg:px-16">
          <Reveal className="md:col-span-5">
            <p className="kicker">Cómo leer</p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
              205 / 55 R 16 91V
            </h2>
            <ul className="mt-10 space-y-6">
              {sidewall.map((item) => (
                <li key={item.code} className="grid grid-cols-[4rem_1fr] gap-4">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-goma">
                    {item.code}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-light">
                      {item.role}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{item.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="relative aspect-[4/5] md:col-span-6 md:col-start-7" delay={100}>
            <Image
              src="/images/banda.jpg"
              alt="Macro de banda de rodadura nueva, como un paisaje visto desde arriba"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
