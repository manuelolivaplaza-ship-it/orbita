import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${site.legalName}.`,
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        cota="A"
        kicker="Papel"
        title="Aviso legal."
        lead="Este sitio presenta la obra y el oficio de COTA. No sustituye un contrato ni un permiso de edificación."
      />
      <section className="pb-24">
        <div className="shell max-w-3xl space-y-8 text-[16px] leading-relaxed text-muted">
          <p>
            {site.legalName}, RUT {site.rut}, {site.aoa}, con domicilio en{" "}
            {site.address.line}, {site.address.city}. Correo {site.email}.
            Teléfono {site.phone}.
          </p>
          <p>
            Los textos, fotografías y dibujos de este sitio son de COTA o se
            usan con autorización. Queda prohibida su reproducción sin
            consentimiento escrito, salvo el derecho de cita.
          </p>
          <p>
            Las obras publicadas corresponden a encargos reales o a una
            muestra editorial del estudio. Superficies, cotas y estados se
            informan de buena fe. Un anteproyecto se pacta por escrito, en UF,
            antes de dibujar.
          </p>
          <p>
            El envío de la ficha de encargo no constituye contrato. COTA puede
            declinar un predio si el programa, el presupuesto o el oficio no
            calzan con esta mesa.
          </p>
        </div>
      </section>
    </>
  );
}
