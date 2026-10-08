import { t as e } from "./chunk.window_CAbVMZox.esm.js";
import {
  A as t,
  C as n,
  O as r,
  g as s,
} from "./chunk.register_Cxs_K5wz.esm.js";
import { t as o } from "./chunk.tslib-es6_CHHZATl5.esm.js";
import { t as i } from "./chunk.hooks_CPbkKXUY.esm.js";
import { r as a } from "./chunk.validators_09U1U9sZ.esm.js";
function d({ allowedOrigins: d, destination: c = e, handler: l, source: m }) {
  const { trackPostMessageTransmission: u } = i(),
    v = n(() => new Set(), []);
  t(
    () => (
      v.add(l),
      () => {
        v.delete(l);
      }
    ),
    [l, v]
  ),
    t(() => {
      const e = (e) =>
        (function (e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "messageId" in e &&
            "type" in e
          );
        })(e) && u({ direction: "incoming", event: e });
      return (
        v.add(e),
        () => {
          v.delete(e);
        }
      );
    }, [u, v]);
  const f = r(
      (e) => {
        v.forEach((t) => t(e));
      },
      [v]
    ),
    g = r(
      (e) => {
        const t =
          m.current instanceof HTMLIFrameElement
            ? m.current.contentWindow
            : m.current;
        a({ allowedOrigins: d, event: e, source: t }) && f(e.data);
      },
      [d, f, m]
    ),
    h = r(() => {
      c.removeEventListener("message", g, !1);
    }, [c, g]);
  return (
    t(
      () => (
        c.addEventListener("message", g, !1),
        () => {
          h();
        }
      ),
      [c, h, g]
    ),
    {
      destroy: h,
      waitForMessage: r(
        (e, t) =>
          o(this, void 0, void 0, function* () {
            let n;
            try {
              return yield new Promise((r, o) => {
                function i() {
                  o(new s("Abort signal received", "AbortSignalReceivedError"));
                }
                (null == t ? void 0 : t.aborted) && i(),
                  (n = (n) => {
                    n.type === e &&
                      (null == t || t.removeEventListener("abort", i), r(n));
                  }),
                  v.add(n),
                  null == t || t.addEventListener("abort", i);
              });
            } finally {
              n && v.delete(n);
            }
          }),
        [v]
      ),
    }
  );
}
export { d as t };
//# sourceMappingURL=chunk.useEventListener_DTq8AI6V.esm.js.map
