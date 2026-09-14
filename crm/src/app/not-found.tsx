import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-2">
      <p className="font-heading text-lg">No encontrado</p>
      <Link href="/hoy" className="text-sm text-muted-foreground underline">
        Volver a hoy
      </Link>
    </div>
  );
}
