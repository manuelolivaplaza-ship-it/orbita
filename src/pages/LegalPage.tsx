import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';
import { site } from '../data/site';

export default function LegalPage({ kind }: { kind: 'privacidad' | 'terminos' }) {
  const privacy = kind === 'privacidad';

  return (
    <>
      <PageMeta
        title={`${privacy ? 'Privacidad' : 'Términos'} | Órbita`}
        description={privacy ? 'Política de privacidad de Órbita.' : 'Términos de uso de Órbita.'}
      />
      <section className="relative z-10 px-6 pt-28 sm:pt-32 pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-4">Legal</p>
          <h1
            className="text-4xl sm:text-5xl font-medium tracking-tight text-[#0B0B12] mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            {privacy ? 'Privacidad' : 'Términos'}
          </h1>
          <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
            {privacy ? (
              <>
                <p>
                  Si nos escribes por el formulario, WhatsApp o el newsletter, usamos tu nombre, email y el detalle del
                  proyecto solo para responderte y armar una propuesta.
                </p>
                <p>
                  No vendemos listas. No hacemos remarketing con los datos del formulario. El número de WhatsApp y el
                  correo de contacto están en el sitio:{' '}
                  <a className="underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  .
                </p>
                <p>
                  Los sitios de ejemplo en /preview son piezas de demostración: sus formularios no envían datos reales.
                </p>
              </>
            ) : (
              <>
                <p>
                  Los precios publicados son referencias en CLP más IVA. El alcance se cierra por escrito en la
                  cotización. Las piezas en /creaciones marcadas como preview son sitios de ejemplo, no clientes en
                  producción.
                </p>
                <p>
                  ProgramBI y Maverlang son proyectos reales en producción; sus sitios viven en sus propios dominios.
                </p>
                <p>Órbita opera desde {site.city}. Para cualquier reclamo: {site.email}.</p>
              </>
            )}
          </div>
          <Link to="/" className="inline-block mt-10 text-sm font-medium text-[#0B0B12] hover:text-[#6B7280]">
            ← Volver al inicio
          </Link>
        </div>
      </section>
    </>
  );
}
