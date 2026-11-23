import './style.css';
import { jsxs as C, Fragment as R, jsx as d } from "react/jsx-runtime";
import { forwardRef as U, useRef as m, useMemo as M, useState as S, useCallback as g, useEffect as h, useImperativeHandle as k } from "react";
import { resolveLocale as W, WarningViewerEngine as y } from "@point-of-attention-ui/core";
const x = U(
  function(e, o) {
    const w = m(null), i = m(null), s = m(e), b = m(e.modelUrl);
    s.current = e;
    const r = M(() => W(e.locale), [e.locale]), [t, u] = S(null), v = g(
      (n) => {
        var f;
        (f = i.current) == null || f.addWarning(n), u(null);
      },
      []
    ), N = g(() => {
      var n;
      (n = i.current) == null || n.cancelSelection(), u(null);
    }, []);
    return h(() => {
      const n = w.current;
      if (!n) return;
      const f = new y(n, {
        modelUrl: e.modelUrl,
        defects: e.defects,
        partsVisibility: e.partsVisibility,
        backgroundColor: e.backgroundColor,
        getSelectionOptions: () => s.current.selectionOptions ?? [],
        onSelectionRequest: (c) => u(c),
        onDefectsChanged: (c) => {
          var l, a;
          return (a = (l = s.current).onDefectsChange) == null ? void 0 : a.call(l, c);
        },
        onModelLoaded: (c) => {
          var l, a;
          return (a = (l = s.current).onModelLoaded) == null ? void 0 : a.call(l, c);
        },
        onModelLoadError: (c) => {
          var l, a;
          return (a = (l = s.current).onModelLoadError) == null ? void 0 : a.call(l, c);
        },
        onSnapshotReport: (c) => {
          var l, a;
          return (a = (l = s.current).onSnapshotReport) == null ? void 0 : a.call(l, c);
        }
      });
      return i.current = f, () => {
        f.dispose(), i.current = null;
      };
    }, []), h(() => {
      var n;
      (n = i.current) == null || n.setDefects(e.defects ?? []);
    }, [e.defects]), h(() => {
      var n;
      (n = i.current) == null || n.setPartsVisibility(e.partsVisibility ?? []);
    }, [e.partsVisibility]), h(() => {
      var n;
      e.modelUrl && e.modelUrl !== b.current && ((n = i.current) == null || n.setModelUrl(e.modelUrl)), b.current = e.modelUrl;
    }, [e.modelUrl]), k(o, () => ({ engine: () => i.current }), []), /* @__PURE__ */ C(R, { children: [
      /* @__PURE__ */ d(
        "div",
        {
          ref: w,
          className: `warning-viewer ${e.className ?? ""}`,
          style: { width: "100%", height: "100%", position: "relative", ...e.style }
        }
      ),
      t && (e.renderSelectionModal ? e.renderSelectionModal({
        request: t,
        locale: r,
        onConfirm: v,
        onCancel: N
      }) : /* @__PURE__ */ d(
        "div",
        {
          className: "warning-modal-backdrop",
          role: "dialog",
          "aria-modal": "true",
          onClick: N,
          children: /* @__PURE__ */ C("div", { className: "warning-modal", onClick: (n) => n.stopPropagation(), children: [
            /* @__PURE__ */ d("h3", { className: "warning-modal-title", children: r.modal.title }),
            t.meshName && /* @__PURE__ */ C("small", { className: "warning-modal-subtitle", children: [
              r.modal.partLabel,
              " ",
              t.meshName
            ] }),
            /* @__PURE__ */ d("ul", { className: "warning-modal-options", children: t.options.map((n) => /* @__PURE__ */ d("li", { className: "warning-modal-option", children: /* @__PURE__ */ C(
              "button",
              {
                className: "warning-modal-option-btn",
                onClick: () => v(n),
                children: [
                  n.severity && /* @__PURE__ */ d("span", { className: `warning-modal-severity-dot warning-modal-severity-dot--${n.severity}` }),
                  n.label
                ]
              }
            ) }, n.id)) }),
            /* @__PURE__ */ d("button", { className: "warning-modal-cancel", onClick: N, children: r.modal.cancel })
          ] })
        }
      ))
    ] });
  }
);
function D(V) {
  const e = m(null), o = m(null);
  h(() => {
    const r = e.current;
    if (!r)
      return;
    const t = new y(r, V);
    return o.current = t, () => {
      t.dispose(), o.current = null;
    };
  }, []);
  const w = g((r) => {
    var t;
    return (t = o.current) == null ? void 0 : t.addWarning(r);
  }, []), i = g(
    (r) => {
      var t;
      return (t = o.current) == null ? void 0 : t.setCameraView(r);
    },
    []
  ), s = g(
    (r, t) => {
      var u;
      return (u = o.current) == null ? void 0 : u.setPartVisible(r, t);
    },
    []
  ), b = g(
    () => {
      var r;
      return ((r = o.current) == null ? void 0 : r.generateCameraImages()) ?? [];
    },
    []
  );
  return {
    containerRef: e,
    engineRef: o,
    addWarning: w,
    setCameraView: i,
    setPartVisible: s,
    generateCameraImages: b
  };
}
export {
  x as WarningViewer,
  D as useWarningViewer
};
//# sourceMappingURL=index.js.map
