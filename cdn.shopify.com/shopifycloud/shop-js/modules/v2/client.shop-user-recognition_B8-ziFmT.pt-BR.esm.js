import { t as e } from "./chunk.window_CAbVMZox.esm.js";
import "./chunk.init_BkQZGpoZ.esm.js";
import {
  A as n,
  O as t,
  _ as o,
  i as r,
  j as i,
  r as s,
  t as a,
  u as c,
  x as g,
} from "./chunk.register_Cxs_K5wz.esm.js";
import { t as h } from "./chunk.tslib-es6_CHHZATl5.esm.js";
import { t as l } from "./chunk.useElementEventListener_B2A6OVba.esm.js";
import { t as d } from "./chunk.useUserRecognitionSignal_Dwelwsuo.esm.js";
function u() {
  var n, t, o;
  return {
    recognized:
      !0 ===
      (null ===
        (o =
          null ===
            (t =
              null === (n = e.Shopify) || void 0 === n
                ? void 0
                : n.SignInWithShop) || void 0 === t
            ? void 0
            : t.User) || void 0 === o
        ? void 0
        : o.recognized),
  };
}
const p = new Set(["on-recognition-changed"]),
  _ = new Set(),
  m = () => {
    const { log: r, recordCounter: i } = c();
    return (
      (function () {
        const { notify: r } = o(),
          { log: i, recordCounter: s, recordHistogram: a } = c(),
          l = d(),
          u = g(!1),
          p = g(),
          _ = g(0),
          m = t(
            ({ logData: e, reason: n, success: t }) => {
              s("shop_js_component_action", {
                attributes: Object.assign(
                  Object.assign(
                    { action: "partner_recognition_id_token_exchange" },
                    n && { reason: n }
                  ),
                  { success: t }
                ),
              }),
                e && i(Object.assign({}, e));
            },
            [i, s]
          ),
          f = t(
            (n) =>
              h(this, [n], void 0, function* ({ data: n, origin: t }) {
                if (t !== e.location.origin) return;
                if (
                  "shop_pay_partner_recognition" !==
                  (null == n ? void 0 : n.type)
                )
                  return;
                const o = null == n ? void 0 : n.id_token;
                if ("string" != typeof o || 0 === o.length) return;
                if ((clearInterval(p.current), u.current))
                  return void m({ reason: "already_run", success: !1 });
                u.current = !0;
                const i = Date.now();
                try {
                  const n = yield fetch(
                    `${e.location.origin}/services/login_with_shop/partner/backchannel`,
                    {
                      body: new URLSearchParams({ id_token: o }),
                      method: "POST",
                    }
                  );
                  a("shop_js_fetch_duration", {
                    attributes: {
                      action: "partner_backchannel_token_exchange",
                    },
                    value: Date.now() - i,
                  }),
                    n.ok
                      ? (l({ recognized: !0 }), m({ success: !0 }))
                      : m({
                          logData: {
                            attributes: { status: String(n.status) },
                            body: "Partner recognition backchannel request failed",
                          },
                          reason: "request_failed",
                          success: !1,
                        });
                } catch (e) {
                  e instanceof Error && r(e);
                  const n = e instanceof Error ? e.message : String(e);
                  m({
                    logData: {
                      attributes: { error: n },
                      body: "Partner recognition backchannel request failed",
                    },
                    reason: "error",
                    success: !1,
                  });
                }
              }),
            [m, l, r, a]
          );
        n(
          () => (
            e.addEventListener("message", f),
            e.postMessage(
              { type: "shop_pay_partner_ready" },
              e.location.origin
            ),
            (_.current = 1),
            (p.current = setInterval(() => {
              _.current >= 5
                ? clearInterval(p.current)
                : (e.postMessage(
                    { type: "shop_pay_partner_ready" },
                    e.location.origin
                  ),
                  (_.current += 1));
            }, 300)),
            () => {
              clearInterval(p.current), e.removeEventListener("message", f);
            }
          ),
          [f]
        );
      })(),
      n(() => {
        i("shop_js_component_action", { attributes: { action: "mounted" } });
      }, [i]),
      l({
        registerCallback: (e) => {
          const { callback: n, name: t } = e.detail || {};
          p.has(t) &&
            "function" == typeof n &&
            "on-recognition-changed" === t &&
            (_.add(n), n(u()));
        },
      }),
      n(
        () => (
          e.Shopify || (e.Shopify = {}),
          e.Shopify.SignInWithShop || (e.Shopify.SignInWithShop = {}),
          e.Shopify.SignInWithShop.User || (e.Shopify.SignInWithShop.User = {}),
          (e.Shopify.SignInWithShop.User.onRecognitionChanged = function (e) {
            _.add(e);
            try {
              e(u());
            } catch (n) {
              _.delete(e),
                r({
                  attributes: {
                    error: n instanceof Error ? n.message : String(n),
                  },
                  body: "Provided onRecognitionChanged callback threw on initial invocation and was removed",
                });
            }
            return () => {
              _.delete(e);
            };
          }),
          () => {
            _.clear();
          }
        ),
        [r]
      ),
      n(() => {
        const n = (e) => {
          const n = e.detail;
          for (const e of _)
            try {
              i("shop_js_component_action", {
                attributes: {
                  action: "callback",
                  callback: "on-recognition-changed",
                },
              }),
                e(n);
            } catch (e) {
              r({
                attributes: {
                  error: e instanceof Error ? e.message : String(e),
                },
                body: "Provided onRecognitionChanged callback threw an error",
              });
            }
        };
        return (
          e.addEventListener("shop-user-recognition-changed", n),
          () => {
            e.removeEventListener("shop-user-recognition-changed", n);
          }
        );
      }, [r, i]),
      null
    );
  };
a(
  ({ element: e }) =>
    i(s, {
      element: e,
      featureName: "ShopUserRecognition",
      children: i(r, { children: i(m, {}) }),
    }),
  {
    getters: { recognized: () => u().recognized },
    methods: ["registerCallback"],
    name: "shop-user-recognition",
    props: {},
    singleton: !0,
  }
);
import "./chunk.document_DMcRsBXN.esm.js";
import "./chunk.casing_U_9x-Om3.esm.js";
import "./chunk.networkErrorMessages_DIkDbO6W.esm.js";
import "./chunk.utils_CY1J4tRu.esm.js";
import "./chunk.v4_D2VNBPfk.esm.js";
import "./chunk.hooks_B0z5wQcZ.esm.js";
import "./chunk.context_IZTYG4gY.esm.js";
//# sourceMappingURL=client.shop-user-recognition_B8-ziFmT.pt-BR.esm.js.map
