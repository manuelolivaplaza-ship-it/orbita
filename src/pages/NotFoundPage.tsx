import React from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/PageMeta';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta title="404 | Órbita" description="Página no encontrada." />
      <section className="relative z-10 min-h-[70vh] flex items-center px-6 py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-4">
            404
          </p>
          <h1
            className="text-4xl sm:text-5xl font-medium tracking-tight text-[#0B0B12] mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            Fuera de órbita.
          </h1>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            Esta ruta no existe. Vuelve al inicio o mira las creaciones.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center bg-[#0B0B12] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Ir al inicio
            </Link>
            <Link
              to="/creaciones"
              className="text-sm font-medium text-zinc-700 hover:text-[#6B7280] transition-colors"
            >
              Ver creaciones →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
