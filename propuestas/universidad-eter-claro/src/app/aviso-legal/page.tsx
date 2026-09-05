import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <>
      <PageIntro
        kicker="Aviso legal"
        title="Quién habla en este sitio."
        lead={`${site.legalName}, RUT ${site.rut}. Sede en ${site.address.line1}, ${site.address.commune}, ${site.address.city}.`}
      />
      <section className="border-t border-linea py-24">
        <div className="shell max-w-2xl space-y-6 text-[16px] leading-relaxed text-tinta-suave">
          <p>
            Este sitio informa sobre las carreras, el campus y el proceso de
            admisión de ETER. Los aranceles, cupos y ponderaciones corresponden
            al año académico {site.admissionYear} y pueden actualizarse; la
            cifra vigente es la que confirma Admisión por escrito.
          </p>
          <p>
            Las fotografías muestran el campus y el cuerpo académico. No
            constituyen oferta de resultado laboral ni acreditación de un
            organismo que no se nombre.
          </p>
          <p>
            Correo: {site.email}. Teléfono: {site.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
