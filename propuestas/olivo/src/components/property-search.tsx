"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { comunas } from "@/lib/site";
import { cn } from "@/lib/utils";

const operations = [
  { id: "venta", label: "Comprar" },
  { id: "arriendo", label: "Arrendar" },
  { id: "vender", label: "Vender" },
] as const;

export function PropertySearch({ className }: { className?: string }) {
  const router = useRouter();
  const [op, setOp] = useState<(typeof operations)[number]["id"]>("venta");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (op === "vender") {
      router.push("/vender");
      return;
    }
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    params.set("op", op);
    const tipo = String(data.get("tipo") || "");
    const comuna = String(data.get("comuna") || "");
    const dorms = String(data.get("dorms") || "");
    if (tipo && tipo !== "todos") params.set("tipo", tipo);
    if (comuna && comuna !== "todas") params.set("comuna", comuna);
    if (dorms && dorms !== "todos") params.set("dorms", dorms);
    const qs = params.toString();
    try {
      router.push(`/propiedades?${qs}`);
    } catch {
      window.location.assign(`propiedades/?${qs}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl bg-card p-3 shadow-[0_20px_50px_-24px_rgba(23,28,25,0.45)] ring-1 ring-border sm:p-4",
        className,
      )}
    >
      <div className="mb-3 flex gap-1 rounded-xl bg-muted p-1">
        {operations.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOp(item.id)}
            className={cn(
              "flex-1 rounded-lg px-3 py-2 text-sm font-medium transition",
              op === item.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {op === "vender" ? (
        <div className="flex flex-col items-start justify-between gap-4 p-2 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm text-muted-foreground">
            Tasación sin costo, plan de venta y visitas filtradas. Respuesta el mismo día.
          </p>
          <Button type="submit" className="h-12 w-full px-6 sm:w-auto">
            Tasar mi propiedad
          </Button>
        </div>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <select
            name="comuna"
            defaultValue="todas"
            aria-label="Comuna"
            className="h-12 rounded-xl border border-input bg-background px-3 text-sm"
          >
            <option value="todas">Todas las comunas</option>
            {comunas.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            name="tipo"
            defaultValue="todos"
            aria-label="Tipo de propiedad"
            className="h-12 rounded-xl border border-input bg-background px-3 text-sm"
          >
            <option value="todos">Casa o departamento</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
          </select>
          <select
            name="dorms"
            defaultValue="todos"
            aria-label="Dormitorios"
            className="h-12 rounded-xl border border-input bg-background px-3 text-sm"
          >
            <option value="todos">Cualquier dormitorio</option>
            <option value="1">1 o más</option>
            <option value="2">2 o más</option>
            <option value="3">3 o más</option>
            <option value="4">4 o más</option>
          </select>
          <Button type="submit" className="h-12 px-8">
            Buscar
          </Button>
        </div>
      )}
    </form>
  );
}
