import fs from 'fs';
import esbuild from 'esbuild';
import chokidar from 'chokidar';
import glob from 'glob';

const isWatching = (process.argv[2] || '').trim() === '--watch';

// Cleanup existing build
fs.rmSync('./dist', { recursive: true, force: true });
fs.mkdirSync('./dist')

// Build CSS
esbuild.build({
  entryPoints: ['./src/index.css'],
  bundle: true,
  outfile: './dist/index.css',
  sourcemap: 'inline',
  watch: isWatching,
  loader: {
    '.tsx': 'jsx'
  }
});

// Build TypeScript
esbuild.build({
  entryPoints: ['./src/index.tsx'],
  bundle: true,
  outfile: './dist/index.js',
  sourcemap: 'inline',
  watch: isWatching,
  loader: {
    '.tsx': 'jsx'
  }
});

// Build HTML Files
const copyFiles = () => {
  glob('./src/*.html', (error, files) => {
    for (let src of files) {
      const dest = `./dist/${src.slice('./src'.length + 1)}`;
      fs.copyFileSync(src, dest)
    }
  });
}
if (isWatching) {
  chokidar.watch('./src/*.html').on('all', copyFiles);
  console.log('⌛ Watching for changes...');
} else {
  copyFiles();
  console.log('✅ Built successfully');
}

