import React, { useState, useEffect, useRef } from "react";
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Phone, 
  Truck, 
  Percent, 
  ChevronDown, 
  Plus, 
  Minus, 
  Trash2,
  Store,
  Grid
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { CATEGORIAS, PRODUCTOS, Producto, CategoriaTipo, formatCLP } from "../lib/productos";

export const Header: React.FC = () => {
  const {
    cart,
    cartCount,
    cartSubtotal,
    setIsCartOpen,
    searchQuery,
    setSearchQuery,
    setActiveCategory,
    addItem,
    updateQuantity,
    removeItem
  } = useCart();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search live popover if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string, category?: CategoriaTipo | "Todas") => {
    setIsMobileMenuOpen(false);
    setIsCategoriesOpen(false);
    setIsSearchOpen(false);
    if (category) {
      setActiveCategory(category);
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Filter products for live search results popover
  const searchResults = searchQuery.trim().length >= 1
    ? PRODUCTOS.filter((p) => {
        const query = searchQuery.toLowerCase();
        return (
          p.nombre.toLowerCase().includes(query) ||
          p.categoria.toLowerCase().includes(query) ||
          (p.descripcion && p.descripcion.toLowerCase().includes(query))
        );
      }).slice(0, 5)
    : [];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Notification Bar */}
      <div className="bg-[#111827] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1.5 font-medium">
              <Truck className="w-3.5 h-3.5 text-[#1890FF]" /> Despacho 24-48h en Santiago RM
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-[#1890FF]" /> 6 Sucursales físicas
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/56920387991?text=Hola%20MiniMayorista,%20quisiera%20consultar%20por%20un%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#1890FF] transition-colors font-medium text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp +56 9 2038 7991
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`bg-white transition-all border-b border-gray-200 ${
          isScrolled ? "shadow-md backdrop-blur-md bg-white/95" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          
          {/* Logo & Brand Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group focus:outline-none rounded-lg shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1890FF] flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="font-display font-extrabold text-lg text-[#111827] tracking-tight block leading-none">
                Mini<span className="text-[#1890FF]">Mayorista</span>
              </span>
              <span className="text-[9px] font-bold text-gray-400 tracking-wider block mt-0.5 uppercase">
                Tu despensa al costo
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 font-medium text-sm text-gray-700">
            <button
              onClick={() => handleNavClick("inicio")}
              className="hover:text-[#1890FF] transition-colors py-1 cursor-pointer"
            >
              Inicio
            </button>

            {/* Categories Dropdown Menu (Requirement 4) */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="hover:text-[#1890FF] transition-colors py-2 px-1 flex items-center gap-1 cursor-pointer font-semibold"
              >
                <Grid className="w-4 h-4 text-[#1890FF]" />
                <span>Categorías</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoriesOpen ? "rotate-180 text-[#1890FF]" : "text-gray-400"}`} />
              </button>

              {/* Dropdown Panel */}
              {isCategoriesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => handleNavClick("catalogo", "Todas")}
                    className="col-span-2 text-left font-bold text-xs text-[#1890FF] bg-blue-50 hover:bg-blue-100/80 p-2 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>Ver Todo el Catálogo</span>
                    <span>→</span>
                  </button>
                  {CATEGORIAS.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleNavClick("catalogo", cat.id)}
                      className="text-left text-xs font-semibold text-gray-700 hover:text-[#1890FF] hover:bg-blue-50/60 p-2 rounded-lg transition-colors truncate flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1890FF] shrink-0"></span>
                      <span className="truncate">{cat.nombre}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick("catalogo", "Ofertas")}
              className="hover:text-[#1890FF] transition-colors py-1 flex items-center gap-1 text-blue-600 font-semibold cursor-pointer"
            >
              <Percent className="w-3.5 h-3.5 text-blue-600" /> Ofertas
            </button>

            <button
              onClick={() => handleNavClick("sucursales")}
              className="hover:text-[#1890FF] transition-colors py-1 cursor-pointer"
            >
              Sucursales
            </button>

            <button
              onClick={() => handleNavClick("contacto")}
              className="hover:text-[#1890FF] transition-colors py-1 cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* Right Section: Search Toggle Button & Cart Button */}
          <div className="flex items-center gap-2 sm:gap-3" ref={searchContainerRef}>
            
            {/* Live Search Bar Toggle (Requirement 5) */}
            <div className="relative">
              {!isSearchOpen ? (
                <button
                  onClick={() => {
                    setIsSearchOpen(true);
                    setTimeout(() => searchInputRef.current?.focus(), 100);
                  }}
                  className="p-2 text-gray-600 hover:text-[#1890FF] hover:bg-blue-50 rounded-full transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                  title="Buscar productos"
                  aria-label="Desplegar barra de búsqueda"
                >
                  <Search className="w-5 h-5 text-[#1890FF]" />
                  <span className="hidden md:inline text-gray-500">Buscar</span>
                </button>
              ) : (
                <div className="relative flex items-center w-64 sm:w-80">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Escribe para buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#F5F7FA] border-2 border-[#1890FF] rounded-full py-1.5 pl-9 pr-8 text-xs font-medium text-[#111827] focus:outline-none focus:bg-white shadow-md transition-all"
                  />
                  <Search className="w-3.5 h-3.5 text-[#1890FF] absolute left-3" />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="absolute right-2.5 p-1 text-gray-400 hover:text-gray-600 rounded-full cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Live Search Popup Overlay with Product Mini-cards */}
              {isSearchOpen && searchQuery.trim().length > 0 && (
                <div className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 z-50 max-h-96 overflow-y-auto animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 text-xs text-gray-400 font-bold uppercase tracking-wider">
                    <span>Resultados ({searchResults.length})</span>
                    <button 
                      onClick={() => handleNavClick("catalogo")}
                      className="text-[#1890FF] hover:underline cursor-pointer"
                    >
                      Ver todos
                    </button>
                  </div>

                  {searchResults.length === 0 ? (
                    <div className="py-6 text-center text-xs text-gray-500">
                      No encontramos productos que coincidan con "<strong className="text-gray-800">{searchQuery}</strong>".
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {searchResults.map((p) => {
                        const inCartItem = cart.find((item) => item.producto.id === p.id);
                        const qty = inCartItem ? inCartItem.cantidad : 0;

                        return (
                          <div
                            key={p.id}
                            className="flex items-center justify-between gap-3 p-2 rounded-xl bg-gray-50/80 hover:bg-blue-50/50 transition-colors border border-gray-100"
                          >
                            <img
                              src={p.imagen}
                              alt={p.nombre}
                              className="w-11 h-11 rounded-lg object-cover bg-white shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-xs text-[#111827] truncate">
                                {p.nombre}
                              </h4>
                              <p className="text-[10px] text-gray-500">
                                {p.unidad} • <strong className="text-[#1890FF]">{formatCLP(p.precio)}</strong>
                              </p>
                            </div>

                            {/* Mini add button / quantity oval */}
                            {qty === 0 ? (
                              <button
                                onClick={() => addItem(p, 1, false)}
                                className="bg-[#1890FF] hover:bg-blue-600 text-white font-bold text-[11px] px-2.5 py-1 rounded-full transition-colors shrink-0 cursor-pointer shadow-xs"
                              >
                                + Agregar
                              </button>
                            ) : (
                              <div className="flex items-center gap-1 bg-blue-50 border border-[#1890FF]/40 rounded-full px-1.5 py-0.5 shrink-0">
                                <button
                                  onClick={() => addItem(p, 1, false)}
                                  className="w-5 h-5 rounded-full bg-[#1890FF] text-white flex items-center justify-center cursor-pointer text-xs"
                                >
                                  +
                                </button>
                                <span className="text-xs font-extrabold text-[#1890FF] px-1">
                                  {qty}
                                </span>
                                {qty === 1 ? (
                                  <button
                                    onClick={() => removeItem(p.id)}
                                    className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center cursor-pointer"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => updateQuantity(p.id, qty - 1)}
                                    className="w-5 h-5 rounded-full bg-white text-[#1890FF] flex items-center justify-center cursor-pointer border border-blue-200"
                                  >
                                    -
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#1890FF] hover:bg-blue-600 active:bg-blue-700 text-white px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md shadow-blue-200 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#1890FF] min-h-[40px] cursor-pointer"
              aria-label={`Ver carrito de compras con ${cartCount} productos`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Carrito ({cartCount})</span>
              {cartSubtotal > 0 && (
                <span className="hidden sm:inline border-l border-blue-300/60 pl-2 text-xs font-semibold">
                  {formatCLP(cartSubtotal)}
                </span>
              )}
            </button>

            {/* Mobile Navigation Drawer Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#1890FF] rounded-lg focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <button
            onClick={() => handleNavClick("inicio")}
            className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
          >
            Inicio
          </button>
          
          <div className="pt-2 border-t border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">
              Categorías de Productos
            </p>
            <div className="grid grid-cols-2 gap-1 px-1">
              <button
                onClick={() => handleNavClick("catalogo", "Todas")}
                className="col-span-2 text-left py-2 px-3 rounded-lg text-xs font-bold text-[#1890FF] bg-blue-50"
              >
                Ver Todo el Catálogo
              </button>
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleNavClick("catalogo", cat.id)}
                  className="text-left py-1.5 px-3 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-100 truncate"
                >
                  {cat.nombre}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100 space-y-1">
            <button
              onClick={() => handleNavClick("sucursales")}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
            >
              Sucursales
            </button>
            <button
              onClick={() => handleNavClick("contacto")}
              className="block w-full text-left py-2 px-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
