import type { Metadata } from "next";
import { ConsultForm } from "@/components/consult-form";
import { PageIntro } from "@/components/page-intro";
import { VehicleBench } from "@/components/vehicle-bench";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulta",
  description:
    "Cruzar una pieza por patente o por marca, modelo y año. Respuesta dentro del día hábil.",
};

export default function ConsultaPage() {
  return (
    <>
      <PageIntro
        kicker="Banco de consulta"
        title="La ficha, no el oído."
        lead="Patente chilena, o marca, modelo y año. Si conoces el OEM, mejor. Te respondemos dentro del día hábil, por WhatsApp o correo."
      />
      <div className="py-12 lg:py-16">
        <VehicleBench id="banco" compact />
      </div>
      <section className="border-t border-line py-20">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Dejar ficha</p>
            <h2 className="font-display mt-4 text-4xl tracking-tight">
              Si no está en el banco, escríbela.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              {site.hours}
              <br />
              {site.address.line}
              <br />
              {site.phone}
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ConsultForm />
          </div>
        </div>
      </section>
    </>
  );
}
