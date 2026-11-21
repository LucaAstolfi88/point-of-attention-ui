export function createModelUrl(bytes) {
  return URL.createObjectURL(new Blob([bytes], { type: 'model/gltf-binary' }));
}

export function revokeModelUrl(url) {
  URL.revokeObjectURL(url);
}
