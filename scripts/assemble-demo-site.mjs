import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, process.argv[2] ?? 'demo-site');

const demos = {
  react: 'demos/react/dist',
  vue: 'demos/vue/dist',
  angular: 'demos/angular/dist/angular',
  blazor: 'demos/blazor/publish/wwwroot',
};

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const [name, source] of Object.entries(demos)) {
  await cp(resolve(root, source), resolve(output, name), { recursive: true });
}

await cp(resolve(root, 'demos/index.html'), resolve(output, 'index.html'));
await cp(
  resolve(root, 'demos/staticwebapp.config.json'),
  resolve(output, 'staticwebapp.config.json'),
);
await writeFile(resolve(output, '.nojekyll'), '');

await cp(
  resolve(output, 'blazor/index.html'),
  resolve(output, 'blazor/404.html'),
);

console.log(`Demo site assembled at ${output}`);
