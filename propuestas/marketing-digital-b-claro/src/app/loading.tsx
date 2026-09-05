export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-20">
      <div className="w-40">
        <div className="loading-line h-px bg-norte" />
        <p className="mt-4 text-center text-[11px] tracking-[0.22em] text-muted uppercase">
          Luz pareja
        </p>
      </div>
    </div>
  );
}
