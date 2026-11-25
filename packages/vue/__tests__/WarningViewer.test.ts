import { describe, expect, it, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import WarningViewer from '../src/WarningViewer.vue';

// The engine needs WebGL, which jsdom does not provide: replace it with a stub.
const engines: Array<{ dispose: ReturnType<typeof vi.fn> }> = [];
vi.mock('@point-of-attention-ui/core', () => {
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

describe('WarningViewer (Vue)', () => {
  beforeEach(() => { engines.length = 0; });

  it('renders the viewer container', () => {
    const wrapper = mount(WarningViewer, { props: { modelUrl: 'model.glb' } });
    expect(wrapper.find('.warning-viewer').exists()).toBe(true);
    wrapper.unmount();
  });

  it('creates one engine on mount and disposes it on unmount', () => {
    const wrapper = mount(WarningViewer, { props: { modelUrl: 'model.glb' } });
    expect(engines).toHaveLength(1);
    const engine = engines[0];
    wrapper.unmount();
    expect(engine.dispose).toHaveBeenCalledTimes(1);
  });
});
