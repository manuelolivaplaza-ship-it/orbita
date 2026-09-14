import { rotateBotKeyAction, saveSettingsAction } from "@/app/actions/settings";
import { SetupHint } from "@/components/setup-hint";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getSettings, maskKey, resolveBotKey } from "@/lib/settings";
import { isConfigured } from "@/lib/supabase";
import { RotateKeyButton } from "./rotate-key";

export default async function SettingsPage() {
  if (!isConfigured()) {
    return <SetupHint error="Faltan keys de Supabase" />;
  }
  try {
    const settings = await getSettings();
    const key = await resolveBotKey();
    return (
      <div className="max-w-xl space-y-6">
        <div>
          <h1 className="font-heading text-lg font-medium">Settings</h1>
          <p className="text-sm text-muted-foreground">
            Una sola operación. Sin multi-tenant ni facturación.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cola de hoy</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={saveSettingsAction} className="space-y-4">
              <div className="grid gap-1.5">
                <Label htmlFor="daily_new_cap">Cap de nuevos / día</Label>
                <Input
                  id="daily_new_cap"
                  name="daily_new_cap"
                  type="number"
                  min={1}
                  max={500}
                  defaultValue={settings.daily_new_cap}
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="timezone">Timezone</Label>
                <Input id="timezone" value="America/Santiago" readOnly />
                <p className="text-xs text-muted-foreground">
                  Fijo. Outbound Chile.
                </p>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="owner_default">Owner default</Label>
                <Input
                  id="owner_default"
                  name="owner_default"
                  defaultValue={settings.owner_default}
                />
              </div>
              <Button type="submit">Guardar</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API bot</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              Header <span className="font-mono text-foreground">Authorization: Bearer</span>{" "}
              o <span className="font-mono text-foreground">x-crm-bot-key</span>.
            </p>
            <p className="font-mono text-xs">{maskKey(key)}</p>
            <Separator />
            <ul className="space-y-1 font-mono text-xs text-muted-foreground">
              <li>GET /api/bot/queue</li>
              <li>POST /api/bot/sent</li>
              <li>POST /api/bot/reply</li>
              <li>PATCH /api/bot/leads/:id</li>
            </ul>
            <RotateKeyButton action={rotateBotKeyAction} />
            <p className="text-xs text-muted-foreground">
              Rotar guarda un override en Supabase (pisa CRM_BOT_KEY del env).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Precios contexto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm text-muted-foreground">
            <p>Estación $990.000 · hero</p>
            <p>Sonda ~$420.000</p>
            <p>Constelación ~$1.490.000</p>
            <p>Care ~$60.000 / mes</p>
            <p>WA +56 9 3540 9699 · Manuel · Reclu</p>
          </CardContent>
        </Card>
      </div>
    );
  } catch (e) {
    return <SetupHint error={e instanceof Error ? e.message : "Error"} />;
  }
}
