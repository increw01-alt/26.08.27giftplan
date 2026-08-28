import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const nextBinary = fileURLToPath(
  new URL('../node_modules/next/dist/bin/next', import.meta.url),
);

const result = spawnSync(process.execPath, [nextBinary, 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NEXT_OUTPUT_MODE: 'export',
  },
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
