import { loginAction } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ e?: string }>;
}) {
  const { e } = await searchParams;
  return (
    <div className="flex min-h-full items-center justify-center px-4">
      <form
        action={loginAction}
        className="w-full max-w-sm space-y-4 rounded-xl p-6 ring-1 ring-foreground/10"
      >
        <div>
          <p className="font-heading text-lg font-medium">Reclu</p>
          <p className="text-sm text-muted-foreground">CRM outbound · Chile</p>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="password">Clave</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoFocus
            required
          />
        </div>
        {e ? (
          <p className="text-sm text-rose-300">Clave incorrecta.</p>
        ) : null}
        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </form>
    </div>
  );
}
