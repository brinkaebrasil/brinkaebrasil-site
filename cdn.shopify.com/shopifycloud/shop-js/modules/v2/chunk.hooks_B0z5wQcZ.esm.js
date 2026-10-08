import { l as e } from "./chunk.casing_U_9x-Om3.esm.js";
import { j as t, k as r } from "./chunk.register_Cxs_K5wz.esm.js";
import { i as o } from "./chunk.tslib-es6_CHHZATl5.esm.js";
import { t as n } from "./chunk.context_IZTYG4gY.esm.js";
const s = () => r(n),
  c = ["string", void 0],
  i = () => {
    const { locale: r, translations: n } = s();
    return {
      locale: r,
      translate: (s, i) => {
        const a = s.split(".");
        if (!n || !r) throw new ReferenceError();
        const f = i || {},
          { count: l, defaultValue: u } = f,
          h = o(f, ["count", "defaultValue"]);
        let p = n.get(r);
        if (!p && (null == i ? void 0 : i.defaultValue)) return i.defaultValue;
        try {
          for (const e of a)
            switch (typeof p) {
              case "object":
                p = p[e];
                break;
              case "string":
              case "undefined":
                throw new ReferenceError();
            }
          if (void 0 === p) throw new ReferenceError();
          if ("string" != typeof n && l) {
            let e = 1 === l ? "one" : "other";
            0 === l && "string" != typeof n && "zero" in n && (e = "zero"),
              (p = p[e]);
          }
          if ("string" != typeof p) throw new ReferenceError();
          let r = !1;
          const o = Object.keys(h),
            s = p.split(new RegExp(`({${o.join("}|{")}})`, "g"));
          return (
            o.forEach((e) => {
              r || c.includes(typeof h[e]) || (r = !0),
                s.forEach((t, r) => {
                  t === `{${e}}` && (s[r] = h[e]);
                });
            }),
            r ? t(e, { children: s }) : s.join("")
          );
        } catch (e) {
          return u || s;
        }
      },
    };
  };
export { s as n, i as t };
//# sourceMappingURL=chunk.hooks_B0z5wQcZ.esm.js.map
