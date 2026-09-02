import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = path.join(repoRoot, 'propuestas');
const cmd = process.argv[2] || 'build';
const only = process.argv[3];
const viteBin = path.join(
  repoRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'vite.cmd' : 'vite',
);

function slugs() {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
    .map((d) => d.name);
}

function isApp(dir) {
  return fs.existsSync(path.join(dir, 'package.json'));
}

function run(bin, args, cwd, envExtra = {}) {
  const result = spawnSync(bin, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env, ...envExtra },
  });
  if (result.status) process.exit(result.status ?? 1);
}

function shouldInstall(dir) {
  // En Vercel NODE_ENV=production y un npm install por carpeta omite Vite
  // (devDependency) y alarga el build hasta el timeout.
  if (process.env.VERCEL === '1' || process.env.SKIP_PROPUESTA_INSTALL === '1') return false;
  return !fs.existsSync(path.join(dir, 'node_modules'));
}

function buildOne(slug) {
  const dir = path.join(root, slug);
  if (!isApp(dir)) {
    console.log(`· ${slug} (estática, nada que construir)`);
    return;
  }
  console.log(`→ Construyendo propuesta aislada: ${slug}`);
  if (shouldInstall(dir)) {
    run('npm', ['install', '--include=dev'], dir, {
      NODE_ENV: 'development',
      npm_config_production: 'false',
    });
  }
  if (!fs.existsSync(viteBin)) {
    console.error('No encontré Vite en node_modules/.bin. Corré npm install en la raíz.');
    process.exit(1);
  }
  run(viteBin, ['build', '--base', `/propuestas/${slug}/`, '--outDir', 'dist'], dir);
}

if (cmd === 'build') {
  const list = slugs().filter((slug) => !only || only === slug);
  for (const slug of list) buildOne(slug);
  process.exit(0);
}

if (cmd === 'dev') {
  const slug = only || slugs().find((name) => isApp(path.join(root, name)));
  if (!slug) {
    console.error('Uso: npm run propuesta -- nombre-de-la-carpeta');
    process.exit(1);
  }
  const dir = path.join(root, slug);
  if (!isApp(dir)) {
    console.error(`"${slug}" no es una app (falta package.json). Para HTML/PDF no hace falta este comando.`);
    process.exit(1);
  }
  if (shouldInstall(dir)) {
    run('npm', ['install', '--include=dev'], dir, {
      NODE_ENV: 'development',
      npm_config_production: 'false',
    });
  }
  console.log(`→ Dev aislado de ${slug} en http://localhost:3010`);
  console.log(`  Cuando esté lista: npm run propuestas:build -- ${slug}`);
  console.log(`  Luego ábrela en Órbita: /propuesta/${slug}`);
  run(viteBin, ['--port', '3010', '--base', `/propuestas/${slug}/`], dir);
  process.exit(0);
}

console.error('Comandos: build | dev');
process.exit(1);
