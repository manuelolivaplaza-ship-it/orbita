import React, { useState, useEffect } from "react";
import { ShoppingBag, Percent, Truck, Store, ChevronLeft, ChevronRight, Plus, Minus, Trash2, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import { PRODUCTOS, Producto, formatCLP } from "../lib/productos";

export const Hero: React.FC = () => {
  const { setActiveCategory, cart, addItem, updateQuantity, removeItem } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 3 featured offer products
  const featuredProducts: Producto[] = [
    PRODUCTOS[0], // Filetitos de Pollo
    PRODUCTOS[1], // Lomo Vetado
    PRODUCTOS[4], // Detergente Líquido
  ];

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, featuredProducts.length]);

  const scrollToSection = (id: string, category?: string) => {
    if (category) {
      setActiveCategory(category as any);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeProduct = featuredProducts[currentSlide];
  const cartItem = cart.find((item) => item.producto.id === activeProduct.id);
  const qtyInCart = cartItem ? cartItem.cantidad : 0;

  return (
    <section id="inicio" className="py-6 md:py-8 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Geometric Balance Hero Banner Container */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#111827] via-[#1e293b] to-[#0f172a] p-6 sm:p-8 md:p-10 overflow-hidden shadow-xl border border-gray-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              {/* Delivery Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3.5 py-1 rounded-full text-xs font-semibold">
                <Truck className="w-3.5 h-3.5 text-[#1890FF]" />
                <span>Despacho 24 - 48 Horas en Santiago</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Tu despensa al costo, <br className="hidden sm:inline" />
                <span className="text-[#1890FF]">en la puerta de tu casa.</span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Precios de mayorista con despacho rápido en todo Santiago. Víveres, carnes, congelados y aseo directo a tu presupuesto familiar.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => scrollToSection("catalogo", "Ofertas")}
                  className="bg-[#1890FF] hover:bg-blue-600 active:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Percent className="w-4 h-4" />
                  <span>Ver Ofertas</span>
                </button>

                <button
                  onClick={() => scrollToSection("catalogo", "Todas")}
                  className="bg-white/10 hover:bg-white/20 border border-white/25 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all cursor-pointer flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Ver Catálogo</span>
                </button>

                <button
                  onClick={() => scrollToSection("sucursales")}
                  className="text-gray-300 hover:text-white px-3 py-2.5 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Store className="w-3.5 h-3.5 text-[#1890FF]" />
                  <span>6 Sucursales</span>
                </button>
              </div>

            </div>

            {/* Right Column: Featured Products Auto Carousel Slider */}
            <div 
              className="lg:col-span-5 relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/20 relative group">
                
                {/* Header tag inside card */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1890FF] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    🔥 Oferta Destacada
                  </span>
                  <span className="text-[11px] font-bold text-gray-400">
                    {currentSlide + 1} / {featuredProducts.length}
                  </span>
                </div>

                {/* Product Image & Discount Badge */}
                <div className="relative h-44 sm:h-52 bg-[#F5F7FA] rounded-xl overflow-hidden flex items-center justify-center mb-3">
                  <img
                    src={activeProduct.imagen}
                    alt={activeProduct.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {activeProduct.precioAnterior ? (
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5" />
                      <span>
                        -{Math.round(((activeProduct.precioAnterior - activeProduct.precio) / activeProduct.precioAnterior) * 100)}% DCTO
                      </span>
                    </span>
                  ) : activeProduct.badge ? (
                    <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                      {activeProduct.badge}
                    </span>
                  ) : null}

                  {/* Manual Prev/Next Navigation Controls */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-all cursor-pointer opacity-80 hover:opacity-100"
                    aria-label="Oferta anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredProducts.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md transition-all cursor-pointer opacity-80 hover:opacity-100"
                    aria-label="Siguiente oferta"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {activeProduct.categoria} • {activeProduct.unidad}
                  </p>
                  <h3 className="font-display font-bold text-base text-[#111827] line-clamp-1">
                    {activeProduct.nombre}
                  </h3>
                  
                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="font-display font-black text-2xl text-[#1890FF]">
                      {formatCLP(activeProduct.precio)}
                    </span>
                    {activeProduct.precioAnterior && (
                      <span className="text-xs text-gray-400 line-through">
                        {formatCLP(activeProduct.precioAnterior)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart / Quantity Control Oval Button */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  {qtyInCart === 0 ? (
                    <button
                      onClick={() => addItem(activeProduct, 1, false)}
                      className="w-full bg-[#1890FF] hover:bg-blue-600 active:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-full text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Agregar al Carrito</span>
                    </button>
                  ) : (
                    <div className="w-full bg-blue-50 border border-[#1890FF]/40 rounded-full py-1.5 px-3 flex items-center justify-between shadow-xs">
                      {/* Left: + (Increments) */}
                      <button
                        onClick={() => addItem(activeProduct, 1, false)}
                        className="w-8 h-8 rounded-full bg-[#1890FF] hover:bg-blue-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                        title="Aumentar cantidad"
                      >
                        <Plus className="w-4 h-4" />
                      </button>

                      {/* Center: Quantity */}
                      <span className="font-extrabold text-sm text-[#1890FF] px-2">
                        {qtyInCart} en el carrito
                      </span>

                      {/* Right: - or Trash (Decreases or deletes if qty === 1) */}
                      {qtyInCart === 1 ? (
                        <button
                          onClick={() => removeItem(activeProduct.id)}
                          className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                          title="Eliminar del carrito"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => updateQuantity(activeProduct.id, qtyInCart - 1)}
                          className="w-8 h-8 rounded-full bg-white hover:bg-gray-100 text-[#1890FF] border border-blue-200 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                          title="Disminuir cantidad"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {featuredProducts.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx ? "w-6 bg-[#1890FF]" : "w-2 bg-gray-200 hover:bg-gray-300"
                      }`}
                      aria-label={`Ir a la oferta ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* Background Decorative Blur */}
          <div className="absolute right-[-40px] top-[-40px] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        </div>

        {/* Quick Info Grid Cards below Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="flex items-center gap-3.5 p-4 bg-white border border-gray-200/80 rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1890FF] shrink-0 font-bold">
              📍
            </div>
            <div className="text-xs">
              <p className="font-bold text-[#111827]">6 Sucursales Santiago</p>
              <p className="text-gray-500">La Florida, Peñalolén, Puente Alto y más</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-white border border-gray-200/80 rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#16A34A] shrink-0 font-bold">
              📦
            </div>
            <div className="text-xs">
              <p className="font-bold text-[#111827]">Despacho Coordinado</p>
              <p className="text-gray-500">Despacho 24-48h en Santiago RM</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-white border border-gray-200/80 rounded-2xl shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 font-bold">
              ⭐
            </div>
            <div className="text-xs">
              <p className="font-bold text-[#111827]">Precios al Costo</p>
              <p className="text-gray-500">Mismo valor en sala de venta y web</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
