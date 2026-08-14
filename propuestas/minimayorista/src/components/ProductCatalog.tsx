import React from "react";
import { PRODUCTOS, CATEGORIAS, CategoriaTipo, formatCLP, Producto } from "../lib/productos";
import { useCart } from "../context/CartContext";
import { Plus, Minus, ShoppingBag, Search, Tag, MessageCircle, FileCode2, Trash2 } from "lucide-react";

export const ProductCatalog: React.FC = () => {
  const {
    cart,
    addItem,
    updateQuantity,
    removeItem,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
  } = useCart();

  // Filter products based on search and selected category
  const filteredProducts = PRODUCTOS.filter((prod) => {
    // Filter by Category
    if (activeCategory === "Ofertas") {
      if (!prod.destacado && !prod.badge) return false;
    } else if (activeCategory !== "Todas" && prod.categoria !== activeCategory) {
      return false;
    }

    // Filter by Search
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const nameMatch = prod.nombre.toLowerCase().includes(query);
      const catMatch = prod.categoria.toLowerCase().includes(query);
      const descMatch = prod.descripcion?.toLowerCase().includes(query) || false;
      return nameMatch || catMatch || descMatch;
    }

    return true;
  });

  const getCartQuantity = (prodId: string) => {
    const found = cart.find((item) => item.producto.id === prodId);
    return found ? found.cantidad : 0;
  };

  return (
    <section id="catalogo" className="py-10 bg-white border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Category Pills */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1890FF] block mb-1">
                Venta Directa al Costo
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
                Catálogo de Productos
              </h2>
            </div>

            {/* Editable file notice tag */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-mono">
              <FileCode2 className="w-4 h-4 text-[#1890FF]" />
              <span>
                Precios editables en: <strong className="text-[#1890FF]">lib/productos.ts</strong>
              </span>
            </div>
          </div>

          {/* Search and Category Navigation */}
          <div className="mt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Filter Pills (Scrollable) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
              <button
                onClick={() => setActiveCategory("Todas")}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === "Todas"
                    ? "bg-[#1890FF] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Todas ({PRODUCTOS.length})
              </button>

              <button
                onClick={() => setActiveCategory("Ofertas")}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer ${
                  activeCategory === "Ofertas"
                    ? "bg-[#1890FF] text-white shadow-sm"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                <Tag className="w-3.5 h-3.5" />
                🔥 Ofertas ({PRODUCTOS.filter((p) => p.destacado || p.badge).length})
              </button>

              {CATEGORIAS.filter((c) => c.id !== "Ofertas").map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "bg-[#1890FF] text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat.nombre}
                </button>
              ))}
            </div>

            {/* Filter Search Input */}
            <div className="relative min-w-[220px]">
              <input
                type="text"
                placeholder="Filtrar por nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5F7FA] border border-gray-300 rounded-full py-2 pl-9 pr-4 text-xs text-[#111827] focus:outline-none focus:border-[#1890FF] focus:bg-white"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
            </div>

          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-[#F5F7FA] rounded-2xl p-12 text-center border border-gray-200/80 my-8">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="font-display font-bold text-lg text-[#111827] mb-1">
              No se encontraron productos
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Prueba buscando con otro nombre o cambiando de categoría.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("Todas");
              }}
              className="bg-[#1890FF] text-white font-bold text-xs px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors shadow-sm"
            >
              Ver todos los productos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const qtyInCart = getCartQuantity(prod.id);

              return (
                <div
                  key={prod.id}
                  className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-[#1890FF]/40 transition-all flex flex-col justify-between group"
                >
                  {/* Top Image & Badge Container */}
                  <div className="h-44 bg-[#F5F7FA] rounded-xl mb-3 relative flex items-center justify-center overflow-hidden">
                    <img
                      src={prod.imagen}
                      alt={prod.nombre}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Badge */}
                    {prod.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-[#16A34A] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs">
                        {prod.badge}
                      </span>
                    )}

                    {/* Category Label Tag */}
                    <span className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                      {prod.categoria}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                        {prod.categoria} • {prod.unidad}
                      </p>
                      <h3 className="font-display font-bold text-sm text-[#111827] line-clamp-2 mb-1 group-hover:text-[#1890FF] transition-colors leading-snug">
                        {prod.nombre}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-gray-100 mt-2">
                      {/* Price row */}
                      <div className="flex items-baseline gap-2 mb-2">
                        {prod.precio === 0 ? (
                          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                            Consultar precio
                          </span>
                        ) : (
                          <>
                            <span className="font-display font-black text-xl text-[#1890FF]">
                              {formatCLP(prod.precio)}
                            </span>
                            {prod.precioAnterior && (
                              <span className="text-xs text-gray-400 line-through font-medium">
                                {formatCLP(prod.precioAnterior)}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart / Quantity Control Oval Footer */}
                  <div className="pt-2">
                    {prod.precio === 0 ? (
                      <a
                        href={`https://wa.me/56920387991?text=${encodeURIComponent(
                          `Hola MiniMayorista, quisiera consultar el precio y disponibilidad de: ${prod.nombre}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-full transition-colors cursor-pointer shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Consultar en WhatsApp</span>
                      </a>
                    ) : qtyInCart === 0 ? (
                      /* Well visible prominent "Agregar" button */
                      <button
                        onClick={() => addItem(prod, 1, false)}
                        className="w-full flex items-center justify-center gap-2 bg-[#1890FF] hover:bg-blue-600 active:bg-blue-700 text-white font-bold text-xs py-2.5 px-4 rounded-full shadow-md shadow-blue-500/15 transition-all cursor-pointer focus:ring-2 focus:ring-[#1890FF]"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Agregar al Carrito</span>
                      </button>
                    ) : (
                      /* Requirement 7: Oval Quantity Control (LEFT: +, CENTER: qty, RIGHT: trash or -) */
                      <div className="w-full bg-blue-50 border border-[#1890FF]/40 rounded-full py-1 px-2.5 flex items-center justify-between shadow-xs">
                        {/* LEFT: + (Increments) */}
                        <button
                          onClick={() => addItem(prod, 1, false)}
                          className="w-7 h-7 rounded-full bg-[#1890FF] hover:bg-blue-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                          title="Aumentar cantidad"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>

                        {/* CENTER: Quantity */}
                        <span className="font-extrabold text-xs text-[#1890FF] px-2">
                          {qtyInCart} en carrito
                        </span>

                        {/* RIGHT: Trash if qty === 1, or - if qty > 1 */}
                        {qtyInCart === 1 ? (
                          <button
                            onClick={() => removeItem(prod.id)}
                            className="w-7 h-7 rounded-full bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                            title="Eliminar producto"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => updateQuantity(prod.id, qtyInCart - 1)}
                            className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 text-[#1890FF] border border-blue-200 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                            title="Disminuir cantidad"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
