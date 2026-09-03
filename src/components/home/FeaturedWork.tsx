import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedCases } from '../../data/cases';
import { CaseCard } from '../cases/CaseCard';

export const FeaturedWork: React.FC = () => {
  const featured = getFeaturedCases();

  return (
    <section
      id="creaciones"
      className="relative z-10 scroll-mt-24 border-t border-zinc-200/80 bg-white px-4 py-16 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Creaciones
            </p>
            <h2
              className="text-4xl font-medium leading-[1.02] tracking-tight text-[#0B0B12] sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: '-0.04em' }}
            >
              Sitios que ya están
              <br className="hidden sm:block" /> en órbita.
            </h2>
          </div>
          <div className="max-w-md lg:col-span-5 lg:justify-self-end lg:pb-1">
            <p className="text-base leading-relaxed text-zinc-600">
              Trabajo en producción, no maquetas. Entra a cada caso y recorre el sitio como lo
              haría un cliente.
            </p>
            <Link
              to="/creaciones"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] transition-colors hover:text-[#6B7280]"
            >
              Ver las creaciones
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          {featured.map((c) => (
            <CaseCard key={c.slug} caseStudy={c} />
          ))}
        </div>
      </div>
    </section>
  );
};
