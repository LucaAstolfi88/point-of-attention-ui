import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { WarningViewer } from '../src/WarningViewer';

// The engine needs WebGL, which jsdom does not provide: replace it with a stub.
const engines: Array<{ dispose: ReturnType<typeof vi.fn> }> = [];
vi.mock('@point-of-attention-ui/core', async () => {
  class WarningViewerEngine {
    dispose = vi.fn();
    setDefects = vi.fn();
    setPartsVisibility = vi.fn();
    setModelUrl = vi.fn();
    addWarning = vi.fn();
    cancelSelection = vi.fn();
    constructor() { engines.push(this as never); }
  }
  return {
    WarningViewerEngine,
    resolveLocale: () => ({ modal: { title: 'Select defect', partLabel: 'Part:', cancel: 'Cancel' } }),
  };
});

describe('WarningViewer (React)', () => {
  beforeEach(() => { engines.length = 0; });

  it('renders the viewer container with the given className', () => {
    const { container } = render(<WarningViewer modelUrl="model.glb" className="extra" />);
    const el = container.querySelector('.warning-viewer');
    expect(el).not.toBeNull();
    expect(el?.classList.contains('extra')).toBe(true);
  });

  it('creates one engine on mount and disposes it on unmount', () => {
    const { unmount } = render(<WarningViewer modelUrl="model.glb" />);
    expect(engines).toHaveLength(1);
    const engine = engines[0];
    unmount();
    expect(engine.dispose).toHaveBeenCalledTimes(1);
  });
});
