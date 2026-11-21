import { useEffect, useRef, useCallback } from 'react';
import type { SelectionOption, WarningViewerOptions } from '@point-of-attention-ui/core';
import { WarningViewerEngine } from '@point-of-attention-ui/core';

/**
 * Imperative hook: gives full control over the engine.
 */
export function useWarningViewer(options: WarningViewerOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<WarningViewerEngine | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const engine = new WarningViewerEngine(container, options);
    engineRef.current = engine;
    return () => {
      engine.dispose();
      engineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addWarning = useCallback((option: SelectionOption) => engineRef.current?.addWarning(option), []);
  const setCameraView = useCallback(
    (direction: string) => engineRef.current?.setCameraView(direction),
    []
  );
  const setPartVisible = useCallback(
    (meshName: string, visible: boolean) => engineRef.current?.setPartVisible(meshName, visible),
    []
  );
  const generateCameraImages = useCallback(
    () => engineRef.current?.generateCameraImages() ?? [],
    []
  );

  return {
    containerRef,
    engineRef,
    addWarning,
    setCameraView,
    setPartVisible,
    generateCameraImages,
  };
}
