import type { Metadata } from "next";
import Image from "next/image";
import { ConsultForm } from "@/components/consult-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulta",
  description:
    "Solicite una presentación privada con Meridiano. Brief de cincuenta minutos, sin honorario. Vitacura.",
};

type Props = { searchParams: Promise<{ folio?: string }> };

export default async function ConsultaPage({ searchParams }: Props) {
  const { folio } = await searchParams;

  return (
    <div className="shell pb-24">
      <PageIntro
        folio="04"
        kicker="Presentación"
        title="Cuéntenos el territorio."
        lede="Cincuenta minutos. Presupuesto en UF, comuna, lo que no negocia. Si no hay caso en esta mesa, se lo decimos esa tarde y le indicamos a quién llamar."
      />
      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <ConsultForm defaultFolio={folio} />
        </div>
        <aside className="lg:col-span-5 lg:col-start-8">
          <div className="relative aspect-[4/5] overflow-hidden border border-line">
            <Image
              src="/images/estudio.jpg"
              alt="Mesa de trabajo del estudio"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-6 text-[0.95rem] leading-relaxed text-paper-dim">
            {site.address.line}
            <br />
            {site.address.city}
            <br />
            {site.hours}
          </p>
          <p className="mt-4">
            <a href={site.phoneHref} className="tabular link-line">
              {site.phone}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="link-line">
              {site.email}
            </a>
          </p>
          <p className="mt-6 font-mono text-[0.72rem] tracking-[0.14em] text-brass uppercase">
            {site.coords}
          </p>
        </aside>
      </div>
    </div>
  );
}
