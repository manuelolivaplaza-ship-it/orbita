import React from "react";
import { SUCURSALES } from "../lib/productos";
import { MapPin, Clock, Phone, ExternalLink, Store } from "lucide-react";

export const BranchList: React.FC = () => {
  return (
    <section id="sucursales" className="py-14 bg-[#F5F7FA] border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1890FF] block mb-1">
            Presencia Física en la RM
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
            Nuestras 6 Sucursales en Santiago
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Visítanos en nuestras salas de venta o compra online con retiro o despacho directo a tu hogar.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUCURSALES.map((suc) => (
            <div
              key={suc.id}
              className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#1890FF]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Comuna Tag & Title */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-blue-50 text-[#1890FF] text-xs font-extrabold px-3 py-1 rounded-full border border-blue-100">
                    {suc.comuna}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Store className="w-3.5 h-3.5 text-gray-400" />
                    <span>Sala de venta</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-[#111827] mb-3">
                  {suc.nombre}
                </h3>

                {/* Address */}
                <div className="flex items-start gap-2.5 text-sm text-gray-700 mb-3">
                  <MapPin className="w-4 h-4 text-[#1890FF] shrink-0 mt-0.5" />
                  <p className="font-medium leading-snug">{suc.direccion}</p>
                </div>

                {/* Schedule */}
                <div className="space-y-1 bg-gray-50 p-3 rounded-xl border border-gray-100 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-2 font-medium text-gray-800 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#1890FF]" /> Horarios de atención:
                  </div>
                  <p className="pl-5">
                    <strong>Lunes a Viernes:</strong> {suc.horarioSemana}
                  </p>
                  <p className="pl-5">
                    <strong>Sábados:</strong> {suc.horarioSabado}
                  </p>
                  <p className="pl-5 text-gray-500">
                    <strong>Domingos:</strong> {suc.horarioDomingo}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                <a
                  href={`tel:${suc.telefono.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#1890FF] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{suc.telefono}</span>
                </a>

                <a
                  href={suc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#1890FF] hover:bg-blue-600 text-white font-bold text-xs py-2 px-3.5 rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  <span>Ver mapa</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
