import './style.css';
import { defineComponent as U, computed as L, ref as b, onMounted as C, onBeforeUnmount as V, watch as v, openBlock as r, createElementBlock as n, Fragment as k, createElementVNode as i, mergeProps as M, createBlock as N, Teleport as R, withModifiers as y, toDisplayString as m, createCommentVNode as w, renderList as S, normalizeClass as B, createTextVNode as E } from "vue";
import { resolveLocale as P, WarningViewerEngine as _ } from "@point-of-attention-ui/core";
const x = { class: "warning-modal-title" }, D = {
  key: 0,
  class: "warning-modal-subtitle"
}, O = { class: "warning-modal-options" }, $ = ["onClick"], z = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "WarningViewer",
  props: {
    modelUrl: {},
    defects: {},
    partsVisibility: {},
    selectionOptions: {},
    backgroundColor: {},
    locale: {}
  },
  emits: ["defects-change", "model-loaded", "model-load-error", "snapshot-report"],
  setup(u, { expose: c, emit: l }) {
    const t = u, s = l, p = L(() => P(t.locale)), f = b(null);
    let e = null;
    const a = b(null);
    function W(o) {
      e == null || e.addWarning(o), a.value = null;
    }
    function h() {
      e == null || e.cancelSelection(), a.value = null;
    }
    return C(() => {
      f.value && (e = new _(f.value, {
        modelUrl: t.modelUrl,
        defects: t.defects,
        partsVisibility: t.partsVisibility,
        backgroundColor: t.backgroundColor,
        getSelectionOptions: () => t.selectionOptions ?? [],
        onSelectionRequest: (o) => {
          a.value = o;
        },
        onDefectsChanged: (o) => s("defects-change", o),
        onModelLoaded: (o) => s("model-loaded", o),
        onModelLoadError: (o) => s("model-load-error", o),
        onSnapshotReport: (o) => s("snapshot-report", o)
      }));
    }), V(() => {
      e == null || e.dispose(), e = null;
    }), v(() => t.defects, (o) => e == null ? void 0 : e.setDefects(o ?? [])), v(() => t.partsVisibility, (o) => e == null ? void 0 : e.setPartsVisibility(o ?? [])), v(() => t.modelUrl, (o) => {
      o && (e == null || e.setModelUrl(o));
    }), c({ engine: () => e }), (o, g) => (r(), n(k, null, [
      i("div", M({
        ref_key: "containerRef",
        ref: f
      }, o.$attrs, {
        class: "warning-viewer",
        style: { width: "100%", height: "100%", position: "relative" }
      }), null, 16),
      (r(), N(R, { to: "body" }, [
        a.value ? (r(), n("div", {
          key: 0,
          class: "warning-modal-backdrop",
          role: "dialog",
          "aria-modal": "true",
          onClick: y(h, ["self"])
        }, [
          i("div", {
            class: "warning-modal",
            onClick: g[0] || (g[0] = y(() => {
            }, ["stop"]))
          }, [
            i("h3", x, m(p.value.modal.title), 1),
            a.value.meshName ? (r(), n("small", D, m(p.value.modal.partLabel) + " " + m(a.value.meshName), 1)) : w("", !0),
            i("ul", O, [
              (r(!0), n(k, null, S(a.value.options, (d) => (r(), n("li", {
                key: d.id,
                class: "warning-modal-option"
              }, [
                i("button", {
                  class: "warning-modal-option-btn",
                  onClick: (I) => W(d)
                }, [
                  d.severity ? (r(), n("span", {
                    key: 0,
                    class: B(`warning-modal-severity-dot warning-modal-severity-dot--${d.severity}`)
                  }, null, 2)) : w("", !0),
                  E(" " + m(d.label), 1)
                ], 8, $)
              ]))), 128))
            ]),
            i("button", {
              class: "warning-modal-cancel",
              onClick: h
            }, m(p.value.modal.cancel), 1)
          ])
        ])) : w("", !0)
      ]))
    ], 64));
  }
});
function A(u) {
  const c = b(null);
  let l = null;
  return C(() => {
    c.value && (l = new _(c.value, u));
  }), V(() => {
    l == null || l.dispose(), l = null;
  }), {
    containerRef: c,
    engine: () => l,
    addWarning: (t) => l == null ? void 0 : l.addWarning(t),
    setCameraView: (t) => l == null ? void 0 : l.setCameraView(t),
    setPartVisible: (t, s) => l == null ? void 0 : l.setPartVisible(t, s),
    generateCameraImages: () => (l == null ? void 0 : l.generateCameraImages()) ?? []
  };
}
export {
  z as WarningViewer,
  A as useWarningViewer
};
//# sourceMappingURL=index.js.map
