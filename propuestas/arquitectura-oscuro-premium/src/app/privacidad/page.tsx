import type { Metadata } from "next";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <div className="shell max-w-3xl pb-24 pt-28 md:pt-32">
      <p className="kicker">Legal</p>
      <h1 className="mt-4 font-display text-5xl">Privacidad</h1>
      <div className="mt-10 space-y-6 text-sm leading-7 text-paper-dim">
        <p>
          {studio.legal} (RUT {studio.rut}) trata los datos que envías por el
          formulario de encargo —nombre, correo, teléfono, comuna y el texto del
          mensaje— con el único fin de evaluar si el proyecto calza y
          responderte.
        </p>
        <p>
          No vendemos bases. No enviamos newsletters. Conservamos el mensaje el
          tiempo necesario para la conversación. Puedes pedir su eliminación
          escribiendo a {studio.email}.
        </p>
        <p>
          Este sitio es una propuesta de diseño. El formulario guarda una copia
          local en tu navegador y no transmite datos a un servidor.
        </p>
      </div>
    </div>
  );
}
