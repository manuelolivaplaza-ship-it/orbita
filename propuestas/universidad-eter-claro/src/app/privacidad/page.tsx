import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <>
      <PageIntro
        kicker="Privacidad"
        title="Los datos de una postulación no se venden."
        lead="Nombre, correo, celular, comuna y carrera se usan para responder la admisión. Nada más."
      />
      <section className="border-t border-linea py-24">
        <div className="shell max-w-2xl space-y-6 text-[16px] leading-relaxed text-tinta-suave">
          <p>
            {site.legalName} es responsable del tratamiento. Los datos del
            formulario de postulación y de las visitas al campus se conservan
            el tiempo del proceso de admisión y el año académico siguiente.
          </p>
          <p>
            No cedemos bases a terceros con fines comerciales. No usamos
            seguimiento publicitario. Para acceder, corregir o borrar tus
            datos, escribe a {site.email}.
          </p>
          <p>
            El sitio puede registrar, de forma anónima, páginas visitadas para
            mejorar la información de admisión.
          </p>
        </div>
      </section>
    </>
  );
}
