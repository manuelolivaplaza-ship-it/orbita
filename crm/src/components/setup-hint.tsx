import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SetupHint({ error }: { error: string }) {
  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Falta configurar Supabase</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm text-muted-foreground">
        <p className="font-mono text-xs text-rose-300">{error}</p>
        <p>
          Copia <span className="font-mono text-foreground">.env.example</span> a{" "}
          <span className="font-mono text-foreground">.env.local</span>, pega las
          keys del proyecto nuevo y corre{" "}
          <span className="font-mono text-foreground">
            supabase/migrations/0001_init.sql
          </span>{" "}
          + <span className="font-mono text-foreground">seed.sql</span> en el SQL
          Editor.
        </p>
      </CardContent>
    </Card>
  );
}
