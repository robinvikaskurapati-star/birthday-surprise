/**
 * Helper to resolve public assets correctly on GitHub Pages and local environments
 * Handles relative subpaths (e.g. /birthday-surprise/) and dot-slash bases cleanly.
 */
export function resolveAsset(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  // Strip leading slash or dot-slash
  let clean = path;
  if (clean.startsWith('./')) {
    clean = clean.slice(2);
  } else if (clean.startsWith('/')) {
    clean = clean.slice(1);
  }

  const base = import.meta.env.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${clean}`;
}
