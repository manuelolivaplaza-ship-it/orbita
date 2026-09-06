import type { Metadata } from "next";
import { ConsultForm } from "@/components/consult-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visita",
  description:
    "Agende una visita de sol en HELIO. Encargo de compra o de venta. Providencia, Santiago.",
};

export default async function VisitaPage({
  searchParams,
}: {
  searchParams: Promise<{ folio?: string }>;
}) {
  const { folio } = await searchParams;

  return (
    <>
      <PageIntro
        kicker="Encargo"
        title="Díganos el barrio. El norte lo ponemos nosotros."
        lead={`${site.address.line}. ${site.hours}. ${site.visitNote}`}
      />
      <section className="pb-24">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ConsultForm defaultFolio={folio ?? ""} />
          </div>
          <aside className="border border-line bg-luz-2/60 p-7 lg:col-span-5 lg:self-start">
            <p className="kicker">Mesa</p>
            <p className="font-display mt-3 text-2xl font-medium leading-tight">
              {site.address.line}
            </p>
            <p className="mt-2 text-[15px] text-muted">
              {site.address.city}
              <br />
              {site.metro}
            </p>
            <p className="mt-6 text-[15px]">
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
              <br />
              <a href={site.mobileHref} className="link-line">
                {site.mobile}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="link-line">
                {site.email}
              </a>
            </p>
            <p className="mt-6 text-[14px] leading-relaxed text-muted">
              {site.honorario}
            </p>
            <a href={site.whatsapp} className="btn btn-line mt-8 w-full">
              WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
