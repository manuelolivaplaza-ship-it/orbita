export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="block h-16 w-1 bg-sol" />
        <p className="text-[12px] tracking-[0.22em] text-muted uppercase">
          Encendiendo
        </p>
      </div>
    </div>
  );
}
