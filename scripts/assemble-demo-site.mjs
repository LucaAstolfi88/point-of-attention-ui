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
  try {
    await cp(resolve(root, source), resolve(output, name), { recursive: true });
  } catch (error) {
    console.warn(`Warning: Could not copy ${name} demo from ${source}:`, error.message);
  }
}

// Copy main index.html if it exists, otherwise create a simple one
try {
  await cp(resolve(root, 'demos/index.html'), resolve(output, 'index.html'));
} catch (error) {
  console.warn('Warning: Could not copy demos/index.html, creating simple placeholder');
  await writeFile(resolve(output, 'index.html'), `
<!DOCTYPE html>
<html>
<head>
    <title>Point of Attention UI Demos</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>Point of Attention UI Demos</h1>
    <ul>
        <li><a href="/react/">React Demo</a></li>
        <li><a href="/vue/">Vue Demo</a></li>
        <li><a href="/angular/">Angular Demo</a></li>
        <li><a href="/blazor/">Blazor Demo</a></li>
    </ul>
</body>
</html>
  `);
}

// Copy staticwebapp.config.json if it exists
try {
  await cp(
    resolve(root, 'demos/staticwebapp.config.json'),
    resolve(output, 'staticwebapp.config.json'),
  );
} catch (error) {
  console.warn('Warning: Could not copy staticwebapp.config.json');
}

// Create .nojekyll file for GitHub Pages
await writeFile(resolve(output, '.nojekyll'), '');

// Copy blazor 404.html if the blazor demo exists
try {
  await cp(
    resolve(output, 'blazor/index.html'),
    resolve(output, 'blazor/404.html'),
  );
} catch (error) {
  console.warn('Warning: Could not copy blazor/404.html');
}

console.log(`Demo site assembled at ${output}`);
