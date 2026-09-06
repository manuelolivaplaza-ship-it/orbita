export default function Loading() {
  return (
    <div className="shell flex min-h-[50svh] items-center justify-center">
      <span className="led led-live" aria-hidden />
      <span className="sr-only">Cargando</span>
    </div>
  );
}
