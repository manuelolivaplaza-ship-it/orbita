import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de la Fundación Instituto NOCTUA.",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Aviso legal"
        title="Quién habla aquí."
        lead={`${site.legalName}, RUT ${site.rut}. ${site.address.line1}, ${site.address.commune}, ${site.address.city}.`}
      />
      <section className="border-t border-line py-24">
        <div className="shell max-w-3xl space-y-8 text-paper-dim leading-relaxed">
          <p>
            Este sitio informa las carreras, aranceles y fechas de admisión del
            Instituto Universitario NOCTUA. Los títulos profesionales los otorga
            la Fundación Instituto NOCTUA. Las ponderaciones publicadas
            corresponden a Admisión {site.admissionYear} y pueden actualizarse
            según la normativa de acceso vigente en Chile.
          </p>
          <p>
            Las fotografías, textos y la marca NOCTUA son de la Fundación.
            Queda prohibida su reproducción con fines comerciales sin
            autorización escrita.
          </p>
          <p>
            Para notificaciones: {site.email} · {site.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
