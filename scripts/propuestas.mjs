import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'propuestas');
const cmd = process.argv[2] || 'build';
const only = process.argv[3];

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

function run(bin, args, cwd) {
  const result = spawnSync(bin, args, { cwd, stdio: 'inherit', shell: true });
  if (result.status) process.exit(result.status ?? 1);
}

if (cmd === 'build') {
  const list = slugs().filter((slug) => !only || only === slug);
  for (const slug of list) {
    const dir = path.join(root, slug);
    if (!isApp(dir)) {
      console.log(`· ${slug} (estática, nada que construir)`);
      continue;
    }
    console.log(`→ Construyendo propuesta aislada: ${slug}`);
    if (!fs.existsSync(path.join(dir, 'node_modules'))) {
      run('npm', ['install'], dir);
    }
    run('npx', ['vite', 'build', '--base', `/propuestas/${slug}/`, '--outDir', 'dist'], dir);
  }
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
  if (!fs.existsSync(path.join(dir, 'node_modules'))) {
    run('npm', ['install'], dir);
  }
  console.log(`→ Dev aislado de ${slug} en http://localhost:3010`);
  console.log(`  Cuando esté lista: npm run propuestas:build -- ${slug}`);
  console.log(`  Luego ábrela en Órbita: /propuesta/${slug}`);
  run('npx', ['vite', '--port', '3010', '--host', '0.0.0.0', '--base', `/propuestas/${slug}/`], dir);
  process.exit(0);
}

console.error('Comandos: build | dev');
process.exit(1);
