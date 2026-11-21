import { onMounted, onBeforeUnmount, ref } from 'vue';
import { WarningViewerEngine } from '@point-of-attention-ui/core';
import type { SelectionOption, WarningViewerOptions } from '@point-of-attention-ui/core';

export function useWarningViewer(options: WarningViewerOptions) {
  const containerRef = ref<HTMLDivElement | null>(null);
  let engine: WarningViewerEngine | null = null;

  onMounted(() => {
    if (containerRef.value) {
      engine = new WarningViewerEngine(containerRef.value, options);
    }
  });

  onBeforeUnmount(() => {
    engine?.dispose();
    engine = null;
  });

  return {
    containerRef,
    engine: () => engine,
    addWarning: (option: SelectionOption) => engine?.addWarning(option),
    setCameraView: (direction: string) => engine?.setCameraView(direction),
    setPartVisible: (meshName: string, visible: boolean) =>
      engine?.setPartVisible(meshName, visible),
    generateCameraImages: () => engine?.generateCameraImages() ?? [],
  };
}
