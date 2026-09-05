import { OwlMark } from "@/components/OwlMark";

export default function Loading() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center">
      <OwlMark className="h-12 w-9 animate-pulse text-brass" />
    </div>
  );
}
