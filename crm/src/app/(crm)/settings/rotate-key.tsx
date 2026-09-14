"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function RotateKeyButton({
  action,
}: {
  action: () => Promise<string>;
}) {
  const [key, setKey] = useState<string | null>(null);
  const [pending, start] = useTransition();
  return (
    <div className="space-y-2">
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={pending}
        onClick={() =>
          start(async () => {
            const next = await action();
            setKey(next);
            await navigator.clipboard.writeText(next);
            toast.success("Nueva key copiada");
          })
        }
      >
        Rotar API key
      </Button>
      {key ? (
        <p className="break-all font-mono text-[11px] text-amber-200">{key}</p>
      ) : null}
    </div>
  );
}
