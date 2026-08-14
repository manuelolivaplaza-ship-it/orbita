import React from "react";
import { CATEGORIAS, SUCURSALES } from "../lib/productos";
import { useCart } from "../context/CartContext";
import { MapPin, Phone, MessageCircle, Instagram, Facebook, Shield, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const { setActiveCategory } = useCart();

  const handleCategoryClick = (cat: any) => {
    setActiveCategory(cat);
    const elem = document.getElementById("catalogo");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111827] text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1890FF] flex items-center justify-center font-black text-xl text-white">
                M
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight block leading-none">
                  Mini<span className="text-[#1890FF]">Mayorista</span>
                </span>
                <span className="text-[10px] font-medium text-gray-400 tracking-wide uppercase block mt-1">
                  Tu despensa al costo
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Supermercado chileno de venta al por menor con precios de mayorista y despacho a domicilio en Santiago. Víveres, carnes y congelados con el máximo ahorro.
            </p>

            <div className="space-y-1.5 text-xs text-gray-300">
              <a
                href="https://wa.me/56920387991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1890FF] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +56 9 2038 7991</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1890FF]" />
                <span>Santiago, Región Metropolitana</span>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#1890FF] pl-2.5">
              Categorías Principales
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              {CATEGORIAS.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="hover:text-[#1890FF] transition-colors cursor-pointer"
                  >
                    {cat.nombre}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Physical Branches */}
          <div>
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#1890FF] pl-2.5">
              Sucursales en Santiago
            </h3>
            <ul className="space-y-2 text-xs text-gray-400">
              {SUCURSALES.map((suc) => (
                <li key={suc.id} className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1890FF] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-gray-200">{suc.comuna}:</strong> {suc.direccion}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Socials */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#1890FF] pl-2.5">
              Redes y Transparencia
            </h3>

            <div className="flex gap-2">
              <a
                href="https://instagram.com/mini_mayorista"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-pink-600 transition-colors flex items-center justify-center text-white"
                aria-label="Instagram MiniMayorista"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/filetitosdepollo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-blue-600 transition-colors flex items-center justify-center text-white"
                aria-label="Facebook Filetitos de Pollo"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/56920387991"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-emerald-600 transition-colors flex items-center justify-center text-white"
                aria-label="WhatsApp Contacto"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="p-3 bg-gray-800/80 rounded-xl text-[11px] text-gray-300 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> Aviso de Privacidad
              </div>
              <p className="text-gray-400">
                Tus datos ingresados se utilizan únicamente para procesar y despachar tu pedido.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MiniMayorista.cl — Tu despensa al costo. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-gray-400">
            <span>Rediseño ultra-rápido enfocado en conversión y SEO</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
