import React from "react";
import { CATEGORIAS, CategoriaTipo } from "../lib/productos";
import { useCart } from "../context/CartContext";
import {
  Tag,
  Drumstick,
  Beef,
  PiggyBank,
  Snowflake,
  Fish,
  Apple,
  Carrot,
  Box,
  Milk,
  UtensilsCrossed,
  GlassWater,
  Cookie,
  Candy,
  Leaf,
  Sparkles,
  Droplets,
  Layers,
} from "lucide-react";

export const CategoryGrid: React.FC = () => {
  const { activeCategory, setActiveCategory } = useCart();

  const handleCategoryClick = (cat: CategoriaTipo) => {
    setActiveCategory(cat);
    const elem = document.getElementById("catalogo");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderIcon = (id: CategoriaTipo) => {
    switch (id) {
      case "Ofertas":
        return <Tag className="w-6 h-6 text-blue-600" />;
      case "Pollo":
        return <Drumstick className="w-6 h-6 text-amber-600" />;
      case "Vacuno":
        return <Beef className="w-6 h-6 text-red-600" />;
      case "Cerdo":
        return <PiggyBank className="w-6 h-6 text-pink-600" />;
      case "Congelados":
        return <Snowflake className="w-6 h-6 text-cyan-600" />;
      case "Pescados":
      case "Mariscos":
        return <Fish className="w-6 h-6 text-blue-500" />;
      case "Frutas":
        return <Apple className="w-6 h-6 text-red-500" />;
      case "Verduras":
        return <Carrot className="w-6 h-6 text-orange-500" />;
      case "Abarrotes":
        return <Box className="w-6 h-6 text-yellow-700" />;
      case "Lácteos":
        return <Milk className="w-6 h-6 text-blue-400" />;
      case "Queso":
        return <UtensilsCrossed className="w-6 h-6 text-amber-500" />;
      case "Bebidas":
        return <GlassWater className="w-6 h-6 text-purple-600" />;
      case "Panadería":
      case "Snacks":
        return <Cookie className="w-6 h-6 text-amber-700" />;
      case "Dulces":
        return <Candy className="w-6 h-6 text-pink-500" />;
      case "Vegano":
        return <Leaf className="w-6 h-6 text-emerald-600" />;
      case "Higiene":
        return <Sparkles className="w-6 h-6 text-sky-500" />;
      case "Aseo":
        return <Droplets className="w-6 h-6 text-indigo-600" />;
      default:
        return <Layers className="w-6 h-6 text-[#1890FF]" />;
    }
  };

  return (
    <section className="py-12 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#1890FF] mb-1">
              Explora nuestros pasillos
            </h2>
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Categorías en oferta mayorista
            </p>
          </div>
          <button
            onClick={() => {
              setActiveCategory("Todas");
              const elem = document.getElementById("catalogo");
              if (elem) elem.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm font-bold text-[#1890FF] hover:underline flex items-center gap-1 self-start md:self-auto cursor-pointer"
          >
            Ver todo el catálogo →
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIAS.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[105px] focus:outline-none focus:ring-2 focus:ring-[#1890FF] ${
                  isSelected
                    ? "bg-[#1890FF] text-white border-[#1890FF] shadow-md scale-[1.02]"
                    : "bg-white text-gray-800 border-gray-200/80 hover:border-[#1890FF]/50 hover:shadow-xs hover:bg-blue-50/30"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 ${
                    isSelected ? "bg-white/20 text-white" : "bg-[#F5F7FA]"
                  }`}
                >
                  {renderIcon(cat.id)}
                </div>

                <div>
                  <h3
                    className={`font-bold text-xs sm:text-sm leading-tight ${
                      isSelected ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {cat.nombre}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
