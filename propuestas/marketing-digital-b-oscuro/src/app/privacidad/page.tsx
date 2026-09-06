import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidad",
  description: `Política de privacidad de ${site.legalName}.`,
};

export default function PrivacidadPage() {
  return (
    <div className="shell pb-24">
      <PageIntro kicker="Legal" title="Privacidad" />
      <div className="font-serif mt-10 max-w-[62ch] space-y-5 text-paper-dim">
        <p>
          Los datos que deja en el formulario de lectura —nombre, teléfono,
          empresa, sitio y mensaje— se usan para responderle y, si hay trabajo,
          para la minuta. No se venden. No se ceden a pauta de terceros.
        </p>
        <p>
          El envío queda, además, en el navegador (localStorage) para no
          perderlo si la conexión falla. Puede borrar los datos del sitio en su
          navegador cuando quiera.
        </p>
        <p>
          Si hay pauta, el cliente es dueño del Business Manager, de las
          cuentas de Google y del píxel. SEÑAL opera con acceso, no se queda
          con el activo.
        </p>
        <p>
          Para ejercer derechos de acceso, rectificación o eliminación, escriba
          a {site.email}. Ley 19.628 sobre protección de la vida privada.
        </p>
      </div>
    </div>
  );
}
