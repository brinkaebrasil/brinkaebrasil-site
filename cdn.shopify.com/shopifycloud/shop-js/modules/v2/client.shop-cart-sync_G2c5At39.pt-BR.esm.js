import { t } from "./chunk.window_CAbVMZox.esm.js";
import "./chunk.init_BkQZGpoZ.esm.js";
import {
  A as e,
  C as n,
  O as o,
  _ as r,
  i as s,
  j as i,
  r as a,
  t as c,
  u,
  x as d,
} from "./chunk.register_Cxs_K5wz.esm.js";
import { t as l } from "./chunk.tslib-es6_CHHZATl5.esm.js";
import { t as p } from "./chunk.useUserRecognitionSignal_Dwelwsuo.esm.js";
import { i as m, n as f, r as _ } from "./chunk.storage_DQF5v-OM.esm.js";
import { t as h } from "./chunk.hooks_CPbkKXUY.esm.js";
import { n as y } from "./chunk.authorize_WtTR8Xbh.esm.js";
import { t as g } from "./chunk.useEventListener_DTq8AI6V.esm.js";
const v = "signInWithShop:cartSyncTransferAttemptedAt",
  w = "signInWithShop:cartSyncNextRecognitionAt",
  b = "signInWithShop:cartSyncTransferCompletedAt";
function S({ now: t = Date.now(), recognitionTtlSeconds: e } = {}) {
  const { source: n, windowMs: o } = (function (t) {
      if (!("number" == typeof t && Number.isFinite(t) && t > 0))
        return { source: "default", windowMs: 3e5 };
      const e = Math.round(1e3 * t);
      return e > 2592e6
        ? { source: "server_clamped", windowMs: 2592e6 }
        : { source: "server", windowMs: e };
    })(e),
    r = _(w, `${t + o}`);
  return r && f(b), { stored: r, windowMs: o, windowSource: n };
}
function j(t, e) {
  if (null === t || "" === t) return { status: "missing" };
  const n = Number(t);
  return !Number.isFinite(n) || n <= 0
    ? { status: "invalid" }
    : n > e
    ? { status: "future" }
    : { status: "valid", timestamp: n };
}
function A({ now: t = Date.now() } = {}) {
  const { ok: e, value: n } = m(w),
    { ok: o, value: r } = m(v);
  if (!e || !o)
    return { reason: "read_storage_unavailable", shouldAttempt: !1 };
  const s = (function (t, e) {
    if (null === t || "" === t) return "missing";
    const n = Number(t);
    return !Number.isFinite(n) || n <= 0 || n - e > 2592e6
      ? "invalid"
      : n > e
      ? "active"
      : "passed";
  })(n, t);
  let i;
  if ("active" === s)
    return {
      reason: "timestamp_within_ttl",
      shouldAttempt: !1,
      step: "completed",
    };
  if ("passed" === s)
    i = { reason: "timestamp_expired", shouldAttempt: !0, step: "completed" };
  else if ("invalid" === s)
    i = { reason: "timestamp_invalid", shouldAttempt: !0, step: "completed" };
  else if (
    (function (t) {
      const { ok: e, value: n } = m(b);
      if (!e) return !1;
      const o = j(n, t);
      return "valid" === o.status && t - o.timestamp < 3e5;
    })(t)
  )
    return {
      reason: "timestamp_within_ttl",
      shouldAttempt: !1,
      step: "completed",
    };
  const a = j(r, t);
  return "missing" === a.status
    ? null != i
      ? i
      : { reason: "no_prior_attempt", shouldAttempt: !0 }
    : "invalid" === a.status
    ? { reason: "timestamp_invalid", shouldAttempt: !0, step: "attempted" }
    : "future" === a.status
    ? { reason: "timestamp_in_future", shouldAttempt: !0, step: "attempted" }
    : t - a.timestamp >= 3e5
    ? { reason: "timestamp_expired", shouldAttempt: !0, step: "attempted" }
    : { reason: "timestamp_within_ttl", shouldAttempt: !1, step: "attempted" };
}
function T(t) {
  var e;
  if (null === t) return "null";
  if (Array.isArray(t)) return "Array";
  const n =
    null === (e = null == t ? void 0 : t.constructor) || void 0 === e
      ? void 0
      : e.name;
  return "string" == typeof n && "" !== n ? n : typeof t;
}
function k(t) {
  const e = { type: T(t), typeofValue: typeof t };
  if ("object" == typeof t && null !== t) {
    (e.ownKeys = Object.keys(t).slice(0, 20)),
      (e.prototypeTag = Object.prototype.toString.call(t));
    const { code: n, name: o, status: r } = t;
    void 0 !== n && (e.code = String(n)),
      void 0 !== o && (e.name = String(o)),
      void 0 !== r && (e.status = String(r));
  }
  return e;
}
function z(t, e) {
  return (
    429 ===
      (function (t) {
        if ("object" != typeof t || null === t) return;
        const { code: e, status: n } = t;
        for (const t of [n, e]) {
          const e = "string" == typeof t ? Number(t) : t;
          if ("number" == typeof e && Number.isFinite(e)) return e;
        }
      })(t) || /too many requests|rate.?limit/i.test(e.message)
  );
}
function I({ onComplete: e, source: n }) {
  const { notify: s } = r(),
    { recordCounter: i, recordHistogram: a } = u(),
    c = p(),
    m = d(Date.now()).current,
    f = d(!1),
    _ = o(
      (n) => {
        if (["blocked", "completed"].includes(n.type)) {
          if (
            (f.current ||
              (a("shop_js_iframe_load_duration", { value: Date.now() - m }),
              (f.current = !0)),
            "blocked" === n.type)
          )
            return (
              i("shop_js_cart_sync_finalize_blocked"), void (null == e || e())
            );
          if ("completed" === n.type) {
            if ("boolean" == typeof n.recognized)
              return (
                i("shop_js_cart_sync_finalize_skipped", {
                  attributes: { recognized: n.recognized },
                }),
                null == e ||
                  e(
                    "number" == typeof n.recognition_ttl_seconds
                      ? { recognitionTtlSeconds: n.recognition_ttl_seconds }
                      : void 0
                  ),
                void c({ recognized: n.recognized })
              );
            i("shop_js_cart_sync_finalize_fetch");
            const o = Date.now();
            !(function ({ onError: e, onResolve: n }) {
              fetch(
                `${t.location.origin}/services/login_with_shop/buyer/finalize`
              ).then(
                (t) =>
                  l(this, void 0, void 0, function* () {
                    try {
                      yield n(t);
                    } catch (t) {
                      e(t, "resolve");
                    }
                  }),
                (t) => e(t, "fetch")
              );
            })({
              onError: (t, e) => {
                const n = (function (t) {
                    if (t instanceof Error) return t;
                    if ("string" == typeof t) return new Error(t);
                    if ("object" == typeof t && null !== t) {
                      const { message: e } = t;
                      return "string" == typeof e && "" !== e
                        ? new Error(e)
                        : new Error(`Non-Error rejection (${T(t)})`);
                    }
                    return new Error(String(t));
                  })(t),
                  o = !(t instanceof Error),
                  r = "fetch" === e && z(t, n);
                i("shop_js_cart_sync_finalize_error", {
                  attributes: {
                    phase: e,
                    rateLimited: r,
                    nonErrorRejection: o,
                  },
                }),
                  r ||
                    ("fetch" === e && o) ||
                    s(n, {
                      metadata: {
                        cartSyncFinalize: Object.assign({ phase: e }, k(t)),
                      },
                    });
              },
              onResolve: (t) =>
                l(this, void 0, void 0, function* () {
                  const { status: n } = t;
                  if (
                    (a("shop_js_fetch_duration", {
                      attributes: { action: "shop_user_recognition_finalize" },
                      value: Date.now() - o,
                    }),
                    i("shop_js_cart_sync_finalize_resolve", {
                      attributes: { status: n },
                    }),
                    200 === n)
                  ) {
                    const n = yield t.json().catch(() => null),
                      o =
                        "number" ==
                        typeof (null == n ? void 0 : n.recognition_ttl_seconds)
                          ? n.recognition_ttl_seconds
                          : void 0;
                    null == e ||
                      e(void 0 === o ? void 0 : { recognitionTtlSeconds: o }),
                      c({
                        recognized: !0 === (null == n ? void 0 : n.recognized),
                      });
                  }
                }),
            });
          }
        }
      },
      [c, m, s, e, i, a]
    ),
    { destroy: h } = g({
      allowedOrigins: [y, t.location.origin],
      handler: _,
      source: n,
    });
  return { destroy: h };
}
function D({ analyticsTraceId: t, shopDomain: e, targetOrigin: n }) {
  const o = (function ({
    analyticsTraceId: t,
    shopDomain: e,
    targetOrigin: n,
  }) {
    return new URLSearchParams({
      analytics_trace_id: t,
      target_origin: n,
      client_handle: e,
    });
  })({ analyticsTraceId: t, shopDomain: e, targetOrigin: n });
  return `${y}/pay/hop?${o}`;
}
function E({ reason: t, step: e }) {
  const n = { reason: t };
  return e && (n.step = e), n;
}
const C = () => {
  const { log: r, recordCounter: s } = u(),
    a = d(null),
    c = d(""),
    {
      analyticsData: { analyticsTraceId: l },
    } = h(),
    p = o(
      (t) => {
        const { reason: e, step: n } = t,
          o = E(t);
        s("shop_js_cart_sync_transfer_session_skipped", { attributes: o });
        r({
          body:
            "write_storage_failed" === e
              ? `ShopCartSync transfer session ${n} timestamp could not be written`
              : "ShopCartSync transfer session skipped",
          attributes: Object.assign({ analyticsTraceId: l }, o),
        });
      },
      [l, r, s]
    ),
    m = o(
      (t) => {
        s("shop_js_cart_sync_transfer_session_attempted", { attributes: E(t) });
      },
      [s]
    ),
    y = o(
      (t) => {
        const {
          stored: e,
          windowMs: n,
          windowSource: o,
        } = S({
          recognitionTtlSeconds: null == t ? void 0 : t.recognitionTtlSeconds,
        });
        e
          ? (s("shop_js_cart_sync_next_recognition_stored", {
              attributes: { source: o },
            }),
            r({
              body: "ShopCartSync recognition TTL applied",
              attributes: {
                analyticsTraceId: l,
                appliedWindowMs: n,
                recognitionTtlSeconds:
                  null == t ? void 0 : t.recognitionTtlSeconds,
                windowSource: o,
              },
            }),
            f(v))
          : p({ reason: "write_storage_failed", step: "completed" });
      },
      [l, r, s, p]
    ),
    { destroy: g } = I({ onComplete: y, source: a });
  e(() => {
    const t = a.current;
    return () => {
      t && g();
    };
  }, [g]);
  const w = n(() => {
    var e, n;
    if (c.current) return c.current;
    const o = t.location.origin,
      s = null === (e = t.Shopify) || void 0 === e ? void 0 : e.shop;
    if (!s)
      return (
        r({
          body: "Missing Shopify domain from window.Shopify",
          attributes: { analyticsTraceId: l, domain: o },
        }),
        ""
      );
    if (null === (n = t.Shopify) || void 0 === n ? void 0 : n.designMode)
      return "";
    const i = A();
    if (!i.shouldAttempt) return p(i), "";
    if (!_("signInWithShop:cartSyncTransferAttemptedAt", `${Date.now()}`))
      return p({ reason: "write_storage_failed", step: "attempted" }), "";
    m(i);
    const a = D({ analyticsTraceId: l, shopDomain: s, targetOrigin: o });
    return (c.current = a), a;
  }, [l, r, m, p]);
  return i("iframe", {
    "aria-hidden": "true",
    "data-testid": "shop-cart-sync-iframe",
    ref: a,
    src: w,
    style: { display: "none" },
    tabIndex: -1,
    title: "Shop Pay cart sync",
  });
};
c(
  ({ element: t }) =>
    i(a, {
      element: t,
      featureName: "ShopCartSync",
      children: i(s, { children: i(C, {}) }),
    }),
  { name: "shop-cart-sync", props: {}, shadow: "open" }
);
import "./chunk.document_DMcRsBXN.esm.js";
import "./chunk.casing_U_9x-Om3.esm.js";
import "./chunk.networkErrorMessages_DIkDbO6W.esm.js";
import "./chunk.utils_CY1J4tRu.esm.js";
import "./chunk.v4_D2VNBPfk.esm.js";
import "./chunk.validators_09U1U9sZ.esm.js";
//# sourceMappingURL=client.shop-cart-sync_G2c5At39.pt-BR.esm.js.map
