import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pedir hora",
  description:
    "Pida una hora en CLARO. Recepción confirma el mismo día hábil. Cuarenta y cinco minutos. Providencia.",
};

export default async function AgendaPage({
  searchParams,
}: {
  searchParams: Promise<{ sala?: string }>;
}) {
  const { sala } = await searchParams;

  return (
    <>
      <PageIntro
        kicker="Agenda"
        title="Pida la hora. Recepción confirma el mismo día hábil."
        lead="Elija sala, tramo y datos. Si el cupo no alcanza, se lo decimos. No le inventamos una consulta de doce minutos."
      />

      <section className="pb-24 lg:pb-32">
        <div className="shell grid items-start gap-12 lg:grid-cols-12">
          <div className="border border-line bg-papel p-6 sm:p-8 lg:col-span-7">
            <BookingForm defaultSpecialty={sala ?? ""} />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/consulta.jpg"
                alt="Sala de consulta de CLARO"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              También puede escribir al WhatsApp o llamar al {site.phone}.
              Recepción está en la casa, no en un call center.
            </p>
            <p className="mt-4 text-[15px]">
              <a href={site.whatsapp} className="link-line">
                WhatsApp
              </a>
              <br />
              <a href={site.phoneHref} className="link-line">
                {site.phone}
              </a>
            </p>
            <p className="mt-4 text-[13px] text-muted">
              Dolor de pecho, dificultad para respirar, signos de ACV: SAMU 131.
              No somos urgencia.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
