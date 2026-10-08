import { A as e, b as n } from "./chunk.register_Cxs_K5wz.esm.js";
import { n as r } from "./chunk.hooks_B0z5wQcZ.esm.js";
function t(t) {
  const { loading: s } = r(),
    { element: o } = n();
  e(() => {
    var e;
    if (o && !0 !== s)
      return (
        Object.entries(t).forEach(([e, n]) => {
          o.addEventListener(e, n);
        }),
        null ===
          (e = null == o ? void 0 : o._eventListenerReadyPromiseResolve) ||
          void 0 === e ||
          e.call(o),
        () => {
          Object.entries(t).forEach(([e, n]) => {
            null == o || o.removeEventListener(e, n);
          });
        }
      );
  }, [o, s, t]);
}
export { t };
//# sourceMappingURL=chunk.useElementEventListener_B2A6OVba.esm.js.map
