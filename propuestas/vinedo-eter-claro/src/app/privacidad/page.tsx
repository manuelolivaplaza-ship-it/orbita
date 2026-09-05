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
        kicker="Legal"
        title="Privacidad"
        lead="Qué datos pedimos, para qué y por cuánto tiempo. Sin letra chica escondida."
      />
      <section className="shell max-w-3xl space-y-8 pb-28 text-[17px] leading-relaxed text-tinta-suave">
        <p>
          {site.legalName}, RUT {site.rut}, es responsable de los datos que nos
          entregas al reservar una visita, comprar vino o escribirnos.
        </p>
        <p>
          Usamos nombre, correo, teléfono y dirección solo para confirmar
          reservas, despachar cajas y emitir boleta o factura. No vendemos
          bases. No hacemos remarketing con tus datos de cata.
        </p>
        <p>
          Puedes pedir acceso, corrección o eliminación escribiendo a{" "}
          {site.email}. Guardamos reservas y pedidos el tiempo que exige el SII
          y luego los borramos.
        </p>
        <p>
          El sitio usa un almacenamiento local en tu navegador para la
          selección de vinos. No hay cookies de publicidad.
        </p>
      </section>
    </>
  );
}
