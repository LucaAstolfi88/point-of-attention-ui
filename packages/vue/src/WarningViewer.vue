<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, computed } from 'vue';
import { WarningViewerEngine, resolveLocale } from '@point-of-attention-ui/core';
import type {
  WarningViewerLocale,
  ModelPartVisibility,
  SelectionOption,
  SelectionRequest,
  SnapshotReport,
  ViewerPart,
  WarningDefect,
} from '@point-of-attention-ui/core';

/** Import shared modal stylesheet (customisable via CSS custom properties) */
import '@point-of-attention-ui/core/point-of-attention-ui.css';

defineOptions({ inheritAttrs: false });

const props = defineProps<{
  /** INPUT 3: URL (or data URI) of the 3D model. */
  modelUrl: string;
  /** INPUT 1: list of defects already present. */
  defects?: WarningDefect[];
  /** INPUT 2: visibility of the model parts. */
  partsVisibility?: ModelPartVisibility[];
  /** Available defect-type options shown in the selection modal. */
  selectionOptions?: SelectionOption[];
  backgroundColor?: number;
  /**
   * UI locale.
   * - `'it'` (default) — Italian
   * - `'en'` — English
   * - A custom `WarningViewerLocale` object for any other language.
   */
  locale?: string | WarningViewerLocale;
}>();

const emit = defineEmits<{
  (e: 'defects-change', defects: WarningDefect[]): void;
  (e: 'model-loaded', parts: ViewerPart[]): void;
  (e: 'model-load-error', error: unknown): void;
  /** Emitted after every defect add/change with the full snapshot report. */
  (e: 'snapshot-report', report: SnapshotReport): void;
}>();

const loc = computed(() => resolveLocale(props.locale));

const containerRef = ref<HTMLDivElement | null>(null);
let engine: WarningViewerEngine | null = null;

const selection = ref<SelectionRequest | null>(null);

function confirm(option: SelectionOption) {
  engine?.addWarning(option);
  selection.value = null;
}

function cancel() {
  engine?.cancelSelection();
  selection.value = null;
}

onMounted(() => {
  if (!containerRef.value) return;
  engine = new WarningViewerEngine(containerRef.value, {
    modelUrl: props.modelUrl,
    defects: props.defects,
    partsVisibility: props.partsVisibility,
    backgroundColor: props.backgroundColor,

    getSelectionOptions: () => props.selectionOptions ?? [],
    onSelectionRequest: (req) => { selection.value = req; },

    onDefectsChanged: (d) => emit('defects-change', d),
    onModelLoaded: (p) => emit('model-loaded', p),
    onModelLoadError: (e) => emit('model-load-error', e),
    onSnapshotReport: (r) => emit('snapshot-report', r),
  });
});

onBeforeUnmount(() => {
  engine?.dispose();
  engine = null;
});

watch(() => props.defects, (v) => engine?.setDefects(v ?? []));
watch(() => props.partsVisibility, (v) => engine?.setPartsVisibility(v ?? []));
watch(() => props.modelUrl, (v) => { if (v) engine?.setModelUrl(v); });

defineExpose({ engine: () => engine });
</script>

<template>
  <div
    ref="containerRef"
    v-bind="$attrs"
    class="warning-viewer"
    style="width:100%;height:100%;position:relative"
  ></div>

  <!-- Built-in selection modal (uses shared CSS classes, customisable via --wv-* properties) -->
  <Teleport to="body">
    <div
      v-if="selection"
      class="warning-modal-backdrop"
      role="dialog"
      aria-modal="true"
      @click.self="cancel"
    >
      <div class="warning-modal" @click.stop>
        <h3 class="warning-modal-title">{{ loc.modal.title }}</h3>
        <small v-if="selection.meshName" class="warning-modal-subtitle">
          {{ loc.modal.partLabel }} {{ selection.meshName }}
        </small>
        <ul class="warning-modal-options">
          <li
            v-for="opt in selection.options"
            :key="opt.id"
            class="warning-modal-option"
          >
            <button
              class="warning-modal-option-btn"
              @click="confirm(opt)"
            >
              <span
                v-if="opt.severity"
                :class="`warning-modal-severity-dot warning-modal-severity-dot--${opt.severity}`"
              />
              {{ opt.label }}
            </button>
          </li>
        </ul>
        <button class="warning-modal-cancel" @click="cancel">
          {{ loc.modal.cancel }}
        </button>
      </div>
    </div>
  </Teleport>
</template>
