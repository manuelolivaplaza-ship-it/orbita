import { completeOrbChat, type ChatTurn } from './complete-orb';

type NodeReq = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  on?: (event: string, cb: (chunk?: Buffer) => void) => void;
};

type NodeRes = {
  statusCode: number;
  setHeader: (name: string, value: string) => void;
  end: (body?: string) => void;
};

function json(res: NodeRes, status: number, payload: unknown) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function readStream(req: NodeReq): Promise<string> {
  const on = req.on;
  if (!on) return Promise.resolve('');
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    on('data', (chunk) => {
      if (chunk) chunks.push(chunk);
    });
    on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    on('error', reject);
  });
}

function asTurns(value: unknown): ChatTurn[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const row = item as { role?: unknown; content?: unknown };
      if (row.role !== 'user' && row.role !== 'assistant') return null;
      if (typeof row.content !== 'string') return null;
      return { role: row.role, content: row.content };
    })
    .filter((row): row is ChatTurn => Boolean(row));
}

export default async function handler(req: NodeReq, res: NodeRes) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }
  if (req.method !== 'POST') {
    json(res, 405, { error: 'Método no permitido' });
    return;
  }

  const apiKey = process.env.BAI_API_KEY;
  if (!apiKey) {
    json(res, 503, { error: 'Falta BAI_API_KEY en el servidor' });
    return;
  }

  try {
    let payload: { messages?: unknown } = {};
    if (typeof req.body === 'string') {
      payload = JSON.parse(req.body || '{}') as { messages?: unknown };
    } else if (req.body && typeof req.body === 'object') {
      payload = req.body as { messages?: unknown };
    } else {
      payload = JSON.parse((await readStream(req)) || '{}') as { messages?: unknown };
    }
    const reply = await completeOrbChat({
      messages: asTurns(payload.messages),
      apiKey,
      model: process.env.BAI_MODEL,
    });
    json(res, 200, reply);
  } catch (err) {
    const status = Number((err as { status?: number }).status) || 500;
    const message = err instanceof Error ? err.message : 'Error de Orb';
    json(res, status, { error: message });
  }
}
