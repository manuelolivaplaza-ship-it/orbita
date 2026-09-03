import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <div className="shell pb-24">
      <PageIntro
        kicker="Términos"
        title="Aviso legal."
        lede="Este sitio presenta un inventario privado. No es una oferta vinculante ni una tasación."
      />
      <div className="mt-12 max-w-[62ch] space-y-8 text-[1.02rem] leading-relaxed text-paper-dim">
        <section>
          <h2 className="font-display text-2xl text-paper">El sitio</h2>
          <p className="mt-3">
            {site.legalName} opera como corredora de propiedades. Los folios,
            valores en UF, superficies y fotografías son referenciales y pueden
            cambiar sin aviso. La dirección exacta de un inmueble off-market se
            entrega en la presentación, no en esta web.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-paper">Valores</h2>
          <p className="mt-3">
            Los precios se expresan en Unidades de Fomento. No incluyen IVA
            cuando corresponde, ni contribuciones, ni gastos de escritura. El
            honorario de corredora se pacta por escrito en la hoja de encargo.
            Una lectura de mercado no reemplaza la tasación del banco.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-paper">Propiedad intelectual</h2>
          <p className="mt-3">
            Textos, fotografías y la marca Meridiano pertenecen a {site.legalName}.
            No se autoriza su reproducción para vitrinas, portales ni redes
            sin permiso escrito.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-paper">Ley aplicable</h2>
          <p className="mt-3">
            República de Chile. Tribunales de Santiago. {site.cbr}.
          </p>
        </section>
      </div>
    </div>
  );
}
