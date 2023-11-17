const { execSync } = require('child_process');

exports.dev = async () => {
  await execSync('pnpm run build:entry', { stdio: 'inherit' });
  await execSync('cross-env NODE_ENV=dev tsup --watch', { stdio: 'inherit' });
};

exports.build = async () => {
  await execSync('pnpm run build:entry', { stdio: 'inherit' });
  await execSync('cross-env NODE_ENV=prod tsup', { stdio: 'inherit' });
};

exports.docs_dev = async () => {
  await execSync('pnpm run build:entry', { stdio: 'inherit' });
  await execSync('pnpm run build:docs', { stdio: 'inherit' });
  await execSync('pnpm run gen-info', { stdio: 'inherit' });
  await execSync('pnpm run --filter=docs dev', { stdio: 'inherit' });
};

exports.docs_build = async () => {
  await execSync('pnpm run build:docs', { stdio: 'inherit' });
  await execSync('pnpm run gen-info', { stdio: 'inherit' });
  await execSync('pnpm run --filter=docs build', { stdio: 'inherit' });
};

exports.release = async () => {
  await execSync('pnpm run build:entry', { stdio: 'inherit' });
  await execSync('esno ./scripts/release.ts', { stdio: 'inherit' });
};
