import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedCases } from '../../data/cases';
import { CaseCard } from '../cases/CaseCard';

export const FeaturedWork: React.FC = () => {
  const featured = getFeaturedCases();

  return (
    <section id="creaciones" className="bg-white px-6 py-24 sm:py-28 relative z-10">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <p className="text-[#6B7280] font-semibold text-xs uppercase tracking-widest mb-3">
              Creaciones
            </p>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0B0B12] leading-[1.05]"
              style={{ letterSpacing: '-0.04em' }}
            >
              Sitios que ya están<br className="hidden sm:block" /> en órbita.
            </h2>
          </div>
          <div className="md:max-w-sm md:text-right">
            <p className="text-zinc-600 text-base leading-relaxed mb-4">
              No vendemos promesas en abstracto. Aquí se ve el resultado: claridad, media y conversión.
            </p>
            <Link
              to="/creaciones"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0B0B12] hover:text-[#6B7280] transition-colors group"
            >
              Ver todas las creaciones
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {featured.map((c, i) => (
            <CaseCard key={c.slug} caseStudy={c} variant={i === 0 ? 'tall' : 'tall'} />
          ))}
        </div>
      </div>
    </section>
  );
};
