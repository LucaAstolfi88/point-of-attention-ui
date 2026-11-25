export function createModelUrl(bytes) {
  return URL.createObjectURL(new Blob([bytes], { type: 'model/gltf-binary' }));
}

export function revokeModelUrl(url) {
  URL.revokeObjectURL(url);
}

/** True on phones / narrow tablets (menu = drawer, details panel = bottom sheet). */
export function isCompact() {
  return window.matchMedia('(max-width: 768px)').matches;
}
