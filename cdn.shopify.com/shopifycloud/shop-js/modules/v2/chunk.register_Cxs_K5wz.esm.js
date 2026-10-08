import { t as e } from "./chunk.document_DMcRsBXN.esm.js";
import { t } from "./chunk.window_CAbVMZox.esm.js";
import {
  c as n,
  i as r,
  l as o,
  n as s,
  o as i,
  r as a,
  s as c,
  u,
} from "./chunk.casing_U_9x-Om3.esm.js";
import {
  i as l,
  n as d,
  r as p,
  t as h,
} from "./chunk.tslib-es6_CHHZATl5.esm.js";
import { n as f, t as v } from "./chunk.networkErrorMessages_DIkDbO6W.esm.js";
import { n as m, r as g, t as _ } from "./chunk.utils_CY1J4tRu.esm.js";
import { t as y } from "./chunk.v4_D2VNBPfk.esm.js";
var b,
  w,
  k,
  E,
  P = 0;
Array.isArray;
function O(e, t, n, r, o, s) {
  t || (t = {});
  var i,
    a,
    c = t;
  if ("ref" in c)
    for (a in ((c = {}), t)) "ref" == a ? (i = t[a]) : (c[a] = t[a]);
  var l = {
    type: e,
    props: c,
    key: n,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --P,
    __i: -1,
    __u: 0,
    __source: o,
    __self: s,
  };
  if ("function" == typeof e && (i = e.defaultProps))
    for (a in i) void 0 === c[a] && (c[a] = i[a]);
  return u.vnode && u.vnode(l), l;
}
var I = 0,
  M = [],
  S = u,
  C = S.__b,
  j = S.__r,
  A = S.diffed,
  x = S.__c,
  T = S.unmount,
  B = S.__;
function D(e, t) {
  S.__h && S.__h(w, e, I || t), (I = 0);
  var n = w.__H || (w.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({}), n.__[e];
}
function N(e) {
  return (I = 1), U(Q, e);
}
function U(e, t, n) {
  var r = D(b++, 2);
  if (
    ((r.t = e),
    !r.__c &&
      ((r.__ = [
        n ? n(t) : Q(void 0, t),
        function (e) {
          var t = r.__N ? r.__N[0] : r.__[0],
            n = r.t(t, e);
          t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = w),
      !w.__f))
  ) {
    var o = function (e, t, n) {
      if (!r.__c.__H) return !0;
      var o = r.__c.__H.__.filter(function (e) {
        return !!e.__c;
      });
      if (
        o.every(function (e) {
          return !e.__N;
        })
      )
        return !s || s.call(this, e, t, n);
      var i = r.__c.props !== e;
      return (
        o.forEach(function (e) {
          if (e.__N) {
            var t = e.__[0];
            (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (i = !0);
          }
        }),
        (s && s.call(this, e, t, n)) || i
      );
    };
    w.__f = !0;
    var s = w.shouldComponentUpdate,
      i = w.componentWillUpdate;
    (w.componentWillUpdate = function (e, t, n) {
      if (this.__e) {
        var r = s;
        (s = void 0), o(e, t, n), (s = r);
      }
      i && i.call(this, e, t, n);
    }),
      (w.shouldComponentUpdate = o);
  }
  return r.__N || r.__;
}
function H(e, t) {
  var n = D(b++, 3);
  !S.__s && Z(n.__H, t) && ((n.__ = e), (n.u = t), w.__H.__h.push(n));
}
function L(e, t) {
  var n = D(b++, 4);
  !S.__s && Z(n.__H, t) && ((n.__ = e), (n.u = t), w.__h.push(n));
}
function V(e) {
  return (
    (I = 5),
    $(function () {
      return { current: e };
    }, [])
  );
}
function R(e, t, n) {
  (I = 6),
    L(
      function () {
        if ("function" == typeof e) {
          var n = e(t());
          return function () {
            e(null), n && "function" == typeof n && n();
          };
        }
        if (e)
          return (
            (e.current = t()),
            function () {
              return (e.current = null);
            }
          );
      },
      null == n ? n : n.concat(e)
    );
}
function $(e, t) {
  var n = D(b++, 7);
  return Z(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
}
function q(e, t) {
  return (
    (I = 8),
    $(function () {
      return e;
    }, t)
  );
}
function F(e) {
  var t = w.context[e.__c],
    n = D(b++, 9);
  return (n.c = e), t ? (n.__ ?? ((n.__ = !0), t.sub(w)), t.props.value) : e.__;
}
function K() {
  var e = D(b++, 11);
  if (!e.__) {
    for (var t = w.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
    var n = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + n[0] + "-" + n[1]++;
  }
  return e.__;
}
function z() {
  for (var e; (e = M.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(X), e.__H.__h.forEach(G), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), S.__e(t, e.__v);
      }
}
(S.__b = function (e) {
  (w = null), C && C(e);
}),
  (S.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), B && B(e, t);
  }),
  (S.__r = function (e) {
    j && j(e), (b = 0);
    var t = (w = e.__c).__H;
    t &&
      (k === w
        ? ((t.__h = []),
          (w.__h = []),
          t.__.forEach(function (e) {
            e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
          }))
        : (t.__h.forEach(X), t.__h.forEach(G), (t.__h = []), (b = 0))),
      (k = w);
  }),
  (S.diffed = function (e) {
    A && A(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((1 !== M.push(t) && E === S.requestAnimationFrame) ||
          ((E = S.requestAnimationFrame) || W)(z)),
      t.__H.__.forEach(function (e) {
        e.u && (e.__H = e.u), (e.u = void 0);
      })),
      (k = w = null);
  }),
  (S.__c = function (e, t) {
    t.some(function (e) {
      try {
        e.__h.forEach(X),
          (e.__h = e.__h.filter(function (e) {
            return !e.__ || G(e);
          }));
      } catch (n) {
        t.some(function (e) {
          e.__h && (e.__h = []);
        }),
          (t = []),
          S.__e(n, e.__v);
      }
    }),
      x && x(e, t);
  }),
  (S.unmount = function (e) {
    T && T(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (e) {
        try {
          X(e);
        } catch (e) {
          t = e;
        }
      }),
      (n.__H = void 0),
      t && S.__e(t, n.__v));
  });
var J = "function" == typeof requestAnimationFrame;
function W(e) {
  var t,
    n = function () {
      clearTimeout(r), J && cancelAnimationFrame(t), setTimeout(e);
    },
    r = setTimeout(n, 35);
  J && (t = requestAnimationFrame(n));
}
function X(e) {
  var t = w,
    n = e.__c;
  "function" == typeof n && ((e.__c = void 0), n()), (w = t);
}
function G(e) {
  var t = w;
  (e.__c = e.__()), (w = t);
}
function Z(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (t, n) {
      return t !== e[n];
    })
  );
}
function Q(e, t) {
  return "function" == typeof t ? t(e) : t;
}
const Y = c({ devMode: !1, element: null, instanceId: "" }),
  ee = () => F(Y);
function te(e) {
  return ne(e).map((e) =>
    e instanceof Error
      ? e
      : new re(
          `[${typeof e}] ${(function (e) {
            if ("function" == typeof e) return `${e.name || "anonymous"}`;
            if ("string" != typeof e)
              try {
                return JSON.stringify(e) ?? typeof e;
              } catch {}
            return `${e}`;
          })(e).slice(0, 10240)}`
        )
  );
}
function ne(e, t = 0) {
  return t >= 20
    ? [e, "Truncated cause stack"]
    : e instanceof Error && e.cause
    ? [e, ...ne(e.cause, t + 1)]
    : [e];
}
var re = class extends Error {
    name = "BugsnagInvalidError";
  },
  oe = /^\s*at .*(\S+:\d+|\(native\))/m,
  se = /^(eval@)?(\[native code])?$/;
function ie(e) {
  return e.stack
    ? e.stack.match(oe)
      ? (function (e) {
          return e.stack
            .split("\n")
            .filter((e) => !!e.match(oe))
            .map((e) => {
              let t = e.replace(/^\s+/, "").replace(/^.*?\s+/, ""),
                n = t.match(/ (\(.+\)$)/);
              t = n ? t.replace(n[0], "") : t;
              let r = ae(n ? n[1] : t);
              return {
                method: (n && t) || void 0,
                file:
                  ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? void 0 : r[0],
                lineNumber: r[1],
                columnNumber: r[2],
              };
            });
        })(e)
      : (function (e) {
          return e.stack
            .split("\n")
            .filter((e) => !e.match(se))
            .map((e) => {
              if (-1 === e.indexOf("@") && -1 === e.indexOf(":"))
                return { method: e };
              let t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                n = e.match(t),
                r = n && n[1] ? n[1] : void 0,
                o = ae(e.replace(t, ""));
              return {
                method: r,
                file: o[0],
                lineNumber: o[1],
                columnNumber: o[2],
              };
            });
        })(e)
    : [];
}
function ae(e) {
  if (-1 === e.indexOf(":")) return [e];
  let t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
  return [t[1], t[2] ? Number(t[2]) : void 0, t[3] ? Number(t[3]) : void 0];
}
var ce = class {
  breadcrumbs = [];
  apiKey;
  plugins;
  appId;
  appType;
  appVersion;
  releaseStage;
  locale;
  userAgent;
  metadata;
  persistedMetadata;
  onError;
  onPostErrorListeners = [];
  endpoints;
  session;
  constructor(e) {
    (this.apiKey = e.apiKey),
      (this.appType = e.appType),
      (this.appId = e.appId),
      (this.appVersion = e.appVersion),
      (this.releaseStage = e.releaseStage),
      (this.locale = e.locale),
      (this.userAgent = e.userAgent),
      (this.metadata = e.metadata),
      (this.onError = e.onError),
      (this.persistedMetadata = {}),
      (this.endpoints = e.endpoints ?? {
        notify: "https://error-analytics-production.shopifysvc.com",
        sessions:
          "https://error-analytics-sessions-production.shopifysvc.com/observeonly",
      }),
      (this.plugins = e.plugins ?? []),
      this.plugins.forEach((e) => e.load(this)),
      this.leaveBreadcrumb("Bugsnag started", void 0, "state"),
      (e.withSessionTracking ?? 1) &&
        ((this.session = {
          id: this.getRandomUUID(),
          startedAt: new Date().toISOString(),
          events: { handled: 0, unhandled: 0 },
        }),
        this.startSession());
  }
  addMetadata(e) {
    for (let t of Object.keys(e)) this.persistedMetadata[t] = e[t];
  }
  getSessionId() {
    return this.session?.id;
  }
  leaveBreadcrumb(e, t, n = "manual") {
    this.breadcrumbs.push({
      name: e,
      metaData: t,
      type: n,
      timestamp: new Date().toISOString(),
    });
  }
  notify(
    e,
    {
      errorClass: t,
      severity: n,
      severityType: r,
      handled: o = !0,
      metadata: s,
      context: i,
      groupingHash: a,
    } = {}
  ) {
    let c = te(e),
      u = { ...this.metadata, ...this.persistedMetadata, ...s },
      l = this.buildBugsnagEvent(c, {
        errorClass: t,
        severityType: r,
        handled: o,
        severity: n,
        metadata: u,
        context: i,
        groupingHash: a,
      });
    if ((this.onError?.(l, e) ?? 1) && "development" !== this.releaseStage) {
      this.updateAndAppendSessionInformation(l);
      let t = this.sendToBugsnag(l);
      return this.onPostErrorListeners.forEach((t) => t(l, e)), t;
    }
    return Promise.resolve();
  }
  addOnPostError(e) {
    this.onPostErrorListeners.push(e);
  }
  updateAndAppendSessionInformation(e) {
    this.session &&
      (e.unhandled
        ? this.session.events.unhandled++
        : this.session.events.handled++,
      (e.session = this.session));
  }
  buildBugsnagEvent(
    e,
    {
      errorClass: t,
      severity: n = "error",
      severityType: r = "handledException",
      handled: o,
      metadata: s = {},
      context: i,
      groupingHash: a,
    }
  ) {
    let c = new Date().toISOString(),
      {
        breadcrumbs: u,
        appId: l,
        appType: d,
        appVersion: p,
        releaseStage: h,
        locale: f,
        userAgent: v,
      } = this;
    return {
      payloadVersion: "5",
      exceptions: e.map((e, n) => ({
        errorClass: 0 === n ? t ?? e.name : e.name,
        stacktrace: ue(l, e),
        message: e.message,
        type: "browserjs",
      })),
      severity: n,
      severityReason: { type: r },
      unhandled: !o,
      app: { id: l, type: d, version: p, releaseStage: h },
      device: { time: c, locale: f, userAgent: v },
      breadcrumbs: u,
      context: i,
      metaData: s,
      groupingHash: a,
    };
  }
  async startSession() {
    if ("development" === this.releaseStage)
      return void console.log(
        "Skipping error logging session tracking in development mode"
      );
    let { apiKey: e } = this,
      t = {
        notifier: {
          name: "Bugsnag JavaScript",
          version: "7.22.2",
          url: "https://github.com/bugsnag/bugsnag-js",
        },
        app: {
          version: this.appVersion,
          releaseStage: this.releaseStage,
          type: this.appType,
        },
        device: {
          id: this.appId,
          locale: this.locale,
          userAgent: this.userAgent,
        },
        sessions: [this.session],
      };
    try {
      await fetch(this.endpoints.sessions, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Bugsnag-Api-Key": e,
          "Bugsnag-Payload-Version": "5",
          "Bugsnag-Sent-At":
            this.session?.startedAt ?? new Date().toISOString(),
        },
        body: JSON.stringify(de(t)),
      });
    } catch (e) {
      console.warn("[bugsnag-light] failed to start session"), console.warn(e);
    }
  }
  async sendToBugsnag(e) {
    let { apiKey: t } = this,
      n = {
        apiKey: t,
        notifier: {
          name: "Bugsnag JavaScript",
          version: "7.22.2",
          url: "https://github.com/bugsnag/bugsnag-js",
        },
        events: [e],
      };
    try {
      await fetch(this.endpoints.notify, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Bugsnag-Api-Key": t,
          "Bugsnag-Payload-Version": "5",
          "Bugsnag-Sent-At": e.device.time,
        },
        body: JSON.stringify(de(n)),
      });
    } catch (e) {
      console.warn("[bugsnag-light] failed to send an event"), console.warn(e);
    }
  }
  getRandomUUID() {
    try {
      return crypto.randomUUID();
    } catch {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
        let t = (16 * Math.random()) | 0;
        return ("x" === e ? t : (3 & t) | 8).toString(16);
      });
    }
  }
};
function ue(e, t) {
  let n = ie(t).map((t) => {
    let n = t.file?.includes(e);
    return {
      method: t.method ?? "",
      file: t.file ?? "",
      lineNumber: t.lineNumber ?? 0,
      columnNumber: t.columnNumber,
      inProject: n,
    };
  });
  if (t instanceof re) {
    let e = n.findIndex((e) => e.method.endsWith("notify"));
    e > -1 && (n = n.slice(e + 1));
  }
  return n;
}
var le = 50;
function de(e, t = new Set(), n = 0) {
  if (null === e || "object" != typeof e) return e;
  if (n >= le) return "[MaxDepth]";
  if (t.has(e)) return "[Circular]";
  let r = new Set(t);
  if ((r.add(e), Array.isArray(e))) return e.map((e) => de(e, r, n + 1));
  let o = {};
  for (let t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (o[t] = de(e[t], r, n + 1));
  return o;
}
var pe = "e35d7136cee78d344ccffdbd5ca710fa",
  he = class extends g {
    counter(e) {
      super.counter(e), this.exportMetrics();
    }
    gauge(e) {
      super.gauge(e), this.exportMetrics();
    }
    histogram(e) {
      super.histogram(e), this.exportMetrics();
    }
    log(e) {
      super.log(e), this.exportLogs();
    }
  };
const fe = [
    "Failed to fetch dynamically imported module",
    "Importing a module script failed",
  ],
  ve = new Set([
    "ShopPayPaymentRequest",
    "ShopPayPaymentRequestButton",
    "ShopPayPaymentRequestLogin",
  ]),
  me = [
    "NotFoundError",
    "NotSupportedError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
  ],
  ge = ["pc", "android"],
  _e = (e) => {
    const { errorClass: t, message: n } = e;
    return Boolean(
      "NetworkError" === t ||
        v(n) ||
        ((r = n),
        Boolean(
          (null == r
            ? void 0
            : r.includes(
                "A network failure may have prevented the request from completing"
              )) || (null == r ? void 0 : r.includes("Backpressure applied"))
        ))
    );
    var r;
  },
  ye = ({
    event: n,
    metadata: r,
    onBotLikeUserAgentError: o,
    onNetworkError: s,
  }) => {
    var i, a, c, u, l, d, p;
    const h = n.exceptions[0];
    if (!h) return !1;
    const v = ((e) => {
      const t = null == e ? void 0 : e.trim().toLowerCase();
      if (t && ge.includes(t)) return t;
    })(f.userAgent);
    if (v) return o(v), !1;
    const m = null === (i = r.custom) || void 0 === i ? void 0 : i.feature;
    if (
      ((e, t) => {
        const { errorClass: n, message: r } = e,
          o =
            "SecurityError" === n &&
            (null == r
              ? void 0
              : r.includes(
                  "Failed to read the 'cookie' property from 'Document'"
                )) &&
            (null == r ? void 0 : r.includes("sandboxed")),
          s =
            "SecurityError" === n &&
            (null == r ? void 0 : r.includes("Blocked a frame with origin")) &&
            (null == r
              ? void 0
              : r.includes("from accessing a cross-origin frame")),
          i = "Error" === n && "TooManyContexts" === r,
          a = "string" == typeof t && ve.has(t),
          c = e.stacktrace.some((e) => e.inProject);
        return Boolean(!c || o || i || (s && a));
      })(h, "string" == typeof m ? m : void 0)
    )
      return !1;
    if (((e) => me.includes(e.errorClass))(h)) return !1;
    if (((e) => "BugsnagInvalidError" === e.errorClass)(h)) return !1;
    if (
      ((e) => {
        const { message: t } = e;
        return Boolean(fe.some((e) => (null == t ? void 0 : t.includes(e))));
      })(h)
    )
      return s("DynamicImportError"), !1;
    if (_e(h)) return s(), !1;
    const g =
        null ===
          (c =
            null === (a = t.Shopify) || void 0 === a
              ? void 0
              : a.featureAssets) || void 0 === c
          ? void 0
          : c["shop-js"],
      _ = Boolean(g && Object.keys(g).length > 0),
      y = Array.from(e.querySelectorAll('script[src*="/shop-js/"]')).map(
        (e) => e.src
      );
    (n.device = {
      locale: f.userLanguage || f.language,
      userAgent: f.userAgent,
      orientation:
        null ===
          (l =
            null === (u = t.screen) || void 0 === u ? void 0 : u.orientation) ||
        void 0 === l
          ? void 0
          : l.type,
      time: new Date().toISOString(),
    }),
      (n.metaData = Object.assign(
        Object.assign(Object.assign({}, n.metaData), r),
        {
          custom: Object.assign(
            Object.assign(
              Object.assign(
                {},
                null === (d = n.metaData) || void 0 === d ? void 0 : d.custom
              ),
              r.custom
            ),
            {
              beta: !0,
              bundleLocale: "",
              compactUX: !0,
              domain:
                null === (p = null == t ? void 0 : t.location) || void 0 === p
                  ? void 0
                  : p.hostname,
              shopJsUrls: y,
              shopJsFeatureAssetsExist: _,
            }
          ),
        }
      )),
      (n.request = { url: t.location.href });
  };
var be = class {
  constructor(e) {
    this.opentelClient = new he({ exporter: _() });
    const t = (function ({
      metadata: e,
      onBotLikeUserAgentError: t,
      onNetworkError: n,
    }) {
      return {
        apiKey: pe,
        appId: "shop-js",
        appVersion: "1.1.0-beta",
        onError: (r) =>
          ye({
            event: r,
            metadata: e,
            onBotLikeUserAgentError: t,
            onNetworkError: n,
          }),
        releaseStage: "production",
        withSessionTracking: !1,
      };
    })({
      metadata: { custom: { feature: e } },
      onBotLikeUserAgentError: this.handleBotLikeUserAgentError.bind(this),
      onNetworkError: this.recordNetworkError.bind(this),
    });
    (this.client = new ce(t)),
      (this.feature = e || ""),
      (this.leaveBreadcrumb = this.leaveBreadcrumb.bind(this)),
      (this.notify = this.notify.bind(this));
  }
  leaveBreadcrumb(e, t, n) {
    this.client
      ? this.client.leaveBreadcrumb(e, t, n)
      : console.log("Bugsnag.leaveBreadcrumb() called before client creation.");
  }
  notify(e, t) {
    return h(this, void 0, void 0, function* () {
      var n;
      this.client
        ? this.client.notify(e, t)
        : null === (n = console.warn) ||
          void 0 === n ||
          n.call(console, "Bugsnag.notify() called before client creation.");
    });
  }
  recordNetworkError(e = "NetworkError") {
    this.opentelClient.counter({
      attributes: { feature: this.feature, error: e },
      name: "shop_js_network_error",
      value: 1,
    });
  }
  handleBotLikeUserAgentError(e) {
    this.opentelClient.counter({
      attributes: { feature: this.feature, userAgentBucket: e },
      name: "shop_js_suppressed_bot_like_user_agent_error",
      value: 1,
    });
  }
};
const we = c({
    client: void 0,
    leaveBreadcrumb: () => {
      throw new Error(
        "Invalid attempt to call leaveBreadcrumb outside of context."
      );
    },
    notify: () => {
      throw new Error("Invalid attempt to call notify outside of context.");
    },
  }),
  ke = ({ children: e }) => {
    const { featureName: t } = ee(),
      n = $(() => {
        const { client: e, leaveBreadcrumb: n, notify: r } = new be(t);
        return { client: e, leaveBreadcrumb: n, notify: r };
      }, [t]);
    return O(we.Provider, { value: n, children: e });
  },
  Ee = () => {
    const e = F(we);
    if (!e)
      throw new Error(
        "Invalid attempt to use useBugsnag outside of BugsnagProvider."
      );
    return e;
  };
var Pe =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function Oe(e) {
  return "string" == typeof e && Pe.test(e);
}
var Ie = class extends Error {
  constructor(e, t, n = y()) {
    super(e), (this.name = t), (this.analyticsTraceId = n);
    const r = a(t);
    (this.analyticsTraceId = n), (this.code = r), (this.name = t);
  }
};
function Me({ children: e }) {
  const [t] = (function (e) {
      var t = D(b++, 10),
        n = N();
      return (
        (t.__ = e),
        w.componentDidCatch ||
          (w.componentDidCatch = function (e, r) {
            t.__ && t.__(e, r), n[1](e);
          }),
        [
          n[0],
          function () {
            n[1](void 0);
          },
        ]
      );
    })(),
    { notify: n } = Ee();
  return (
    H(() => {
      t &&
        n(t instanceof Error ? t : new Ie(t, "UnhandledError"), {
          context: "Error in Preact tree",
        });
    }, [t, n]),
    O(o, { children: e })
  );
}
function Se(e, t = 200, n = !1) {
  const r = V(),
    o = V(e);
  return (
    (o.current = e),
    q(
      (...e) => {
        var s;
        const i = n && !r.current;
        "number" == typeof r.current && clearTimeout(r.current),
          (r.current = setTimeout(
            (...e) => {
              var t;
              (r.current = void 0),
                n ||
                  null === (t = o.current) ||
                  void 0 === t ||
                  t.call(o, ...e);
            },
            t,
            ...e
          )),
          i && (null === (s = o.current) || void 0 === s || s.call(o, ...e));
      },
      [t, n]
    )
  );
}
function Ce() {
  return (
    (Boolean(f.userAgent) &&
      /(android|iphone|ipad|mobile|phone)/i.test(f.userAgent)) ||
    (function () {
      const e = f.userAgent.toLowerCase();
      return e.includes("fban/fbios") || e.includes("fb_iab/fb4a");
    })() ||
    f.userAgent.toLowerCase().includes("instagram") ||
    f.userAgent.toLowerCase().includes("messenger") ||
    (function () {
      const e = f.userAgent;
      return RegExp(Te).test(e) || RegExp(Be).test(e);
    })() ||
    /Mozilla\/5.0 \([^)]*Android[^)]*; wv\).+Chrome\//.test(f.userAgent)
  );
}
function je(e) {
  return "/" === e ? e : e.endsWith("/") ? e.slice(0, -1) : e;
}
function Ae() {
  const e = f.userAgent,
    t = Boolean(e.match(/iPad/i)) || Boolean(e.match(/iPhone/i)),
    n = Boolean(e.match(/WebKit/i));
  return t && n && !e.match(/CriOS/i);
}
function xe() {
  return Boolean(
    "undefined" != typeof IntersectionObserver && IntersectionObserver
  );
}
const Te =
    "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|).* AppleNews",
  Be =
    "(iPod|iPod touch|iPhone|iPad);.*CPU.*OS[ +](\\d+)_(\\d+)(?:_(\\d+)|)(?!.*Version).*Mobile(?!.*Safari)",
  De = c({
    log: () => {
      throw new Error("Invalid attempt to call log outside of context.");
    },
    recordCounter: () => {
      throw new Error(
        "Invalid attempt to call recordCounter outside of context."
      );
    },
    recordGauge: () => {
      throw new Error(
        "Invalid attempt to call recordGauge outside of context."
      );
    },
    recordHistogram: () => {
      throw new Error(
        "Invalid attempt to call recordHistogram outside of context."
      );
    },
    client: void 0,
  }),
  Ne = () => F(De),
  Ue = c({
    analyticsData: { analyticsTraceId: "" },
    getTrekkieAttributes: () =>
      h(void 0, void 0, void 0, function* () {
        return Promise.resolve({});
      }),
    produceMonorailEvent: () => {
      throw new Error(
        "Invalid attempt to call produceMonorailEvent outside of context."
      );
    },
    trackModalStateChange: () => {
      throw new Error(
        "Invalid attempt to call trackModalStateChange outside of context."
      );
    },
    trackPageImpression: () =>
      h(void 0, void 0, void 0, function* () {
        throw new Error(
          "Invalid attempt to call trackPageImpression outside of context."
        );
      }),
    trackUserAction: () => {
      throw new Error(
        "Invalid attempt to call trackUserAction outside of context."
      );
    },
    trackPostMessageTransmission: () => {
      throw new Error(
        "Invalid attempt to call trackPostMessageTransmission outside of context."
      );
    },
  }),
  He = Symbol("monorail-provider-data");
function Le(e) {
  return e[He];
}
function Ve(e, t, n) {
  return (
    (t = (function (e) {
      var t = (function (e, t) {
        if ("object" != typeof e || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t);
          if ("object" != typeof r) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" == typeof t ? t : t + "";
    })(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Re(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function $e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? Re(Object(n), !0).forEach(function (t) {
          Ve(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Re(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
const qe = "http://localhost:8082",
  Fe = "https://monorail-edge.shopifysvc.com",
  Ke = "/v1/produce";
function ze(e) {
  return void 0 !== e.schemaId;
}
var Je = class {
  constructor(e) {
    this.producer = e;
  }
  do(e, t) {
    return ze(e) ? this.producer.produce(e) : this.producer.produceBatch(e);
  }
};
function We() {
  if (
    "undefined" != typeof crypto &&
    crypto &&
    "function" == typeof crypto.randomUUID
  )
    return crypto.randomUUID();
  const e = new Array(36);
  for (let t = 0; t < 36; t++) e[t] = Math.floor(16 * Math.random());
  return (
    (e[14] = 4),
    (e[19] = e[19] &= -5),
    (e[19] = e[19] |= 8),
    (e[8] = e[13] = e[18] = e[23] = "-"),
    e.map((e) => e.toString(16)).join("")
  );
}
function Xe(e, t = !0) {
  return e && Object.keys(e).length && t
    ? Object.keys(e)
        .map((t) => ({ [Ge(t)]: e[t] }))
        .reduce((e, t) => $e($e({}, e), t))
    : e;
}
function Ge(e) {
  return e
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
}
function Ze(e) {
  return e.events.map((e) => {
    let t = !0,
      n = !0;
    return (
      e &&
        e.options &&
        Object.prototype.hasOwnProperty.call(e.options, "convertEventCase") &&
        (t = Boolean(e.options.convertEventCase)),
      e &&
        e.options &&
        Object.prototype.hasOwnProperty.call(
          e.options,
          "convertMetaDataCase"
        ) &&
        (n = Boolean(e.options.convertMetaDataCase)),
      $e(
        { schema_id: e.schemaId, payload: Xe(e.payload, t) },
        e.metadata && { metadata: Xe(e.metadata, n) }
      )
    );
  });
}
var Qe = class e extends Error {
    constructor(t) {
      super(
        `Error producing to the Monorail Edge. Response received: ${JSON.stringify(
          t
        )}`
      ),
        Ve(this, "name", "MonorailUnableToProduceError"),
        (this.response = t),
        Object.setPrototypeOf(this, e.prototype);
    }
  },
  Ye = class e extends Error {
    constructor(t) {
      super(
        `Response not from Monorail Edge. Response received: ${JSON.stringify(
          t
        )}`
      ),
        Ve(this, "name", "MonorailInterceptedProduceError"),
        (this.response = t),
        Object.setPrototypeOf(this, e.prototype);
    }
  },
  et = class e extends Error {
    constructor(t) {
      super(
        `Error producing to the Monorail Edge. Response received: ${JSON.stringify(
          t
        )}`
      ),
        Ve(this, "name", "MonorailBatchProduceError"),
        Object.setPrototypeOf(this, e.prototype),
        (this.response = t);
    }
  },
  tt = class e extends Error {
    constructor(t, n) {
      super(
        `Error completing request. A network failure may have prevented the request from completing. Error: ${t}. Schemas: ${Array.from(
          new Set(n)
        ).join(", ")}`
      ),
        Ve(this, "name", "MonorailRequestError"),
        Object.setPrototypeOf(this, e.prototype);
    }
  },
  nt = class e extends Error {
    constructor(t, n) {
      super(
        `Error reading response from Monorail Edge. Status: ${
          n || "unknown"
        }. Error: ${(null == t ? void 0 : t.message) || "Unknown error"}`
      ),
        Ve(this, "name", "MonorailResponseReadError"),
        (this.error = t),
        (this.status = n),
        Object.setPrototypeOf(this, e.prototype);
    }
  },
  rt = class e {
    static withEndpoint(t) {
      return new e(`https://${new URL(t).hostname}`);
    }
    constructor(e = qe, t = {}) {
      var n, r;
      if (
        ((this.edgeDomain = e),
        (this.optionsOrKeepalive = t),
        "boolean" == typeof t)
      )
        return (
          (this.keepalive = t), void (this.detectInterceptedErrorEnabled = !1)
        );
      (this.keepalive = null !== (n = t.keepalive) && void 0 !== n && n),
        (this.detectInterceptedErrorEnabled =
          null !== (r = t.detectInterceptedErrorEnabled) && void 0 !== r && r);
    }
    async produceBatch(e) {
      const t = { events: Ze(e), metadata: Xe(e.metadata) };
      let n, r;
      try {
        n = await fetch(this.produceBatchEndpoint(), {
          method: "post",
          headers: ot(e.metadata),
          body: JSON.stringify(t),
          keepalive: this.keepalive,
        });
      } catch (t) {
        throw new tt(
          t,
          e.events.map((e) => e.schemaId)
        );
      }
      if (207 === n.status) {
        const e = await n.json();
        throw new et(e);
      }
      try {
        r = await n.text();
      } catch (e) {
        throw new nt(e, n.status);
      }
      if (!n.ok) {
        if (
          !Boolean(n.headers.get("x-request-id")) &&
          this.detectInterceptedErrorEnabled
        )
          throw new Ye({ status: n.status, message: r });
        throw new Qe({ status: n.status, message: r });
      }
      return { status: n.status };
    }
    async produce(e) {
      let t,
        n,
        r = !0;
      e &&
        e.options &&
        Object.prototype.hasOwnProperty.call(e.options, "convertEventCase") &&
        (r = Boolean(e.options.convertEventCase));
      try {
        t = await (async function ({ endpoint: e, event: t, keepalive: n }) {
          var r, o, s, i, a;
          const c = t.metadata
            ? {
                clientMessageId:
                  null === (r = t.metadata) || void 0 === r
                    ? void 0
                    : r.clientMessageId,
                eventCreatedAtMs:
                  null === (o = t.metadata) || void 0 === o
                    ? void 0
                    : o.eventCreatedAtMs,
                consent:
                  null === (s = t.metadata) || void 0 === s
                    ? void 0
                    : s.consent,
                consent_provider:
                  null === (i = t.metadata) || void 0 === i
                    ? void 0
                    : i.consent_provider,
                consent_version:
                  null === (a = t.metadata) || void 0 === a
                    ? void 0
                    : a.consent_version,
              }
            : void 0;
          return fetch(null != e ? e : Fe + Ke, {
            method: "post",
            headers: ot(t.metadata),
            body: JSON.stringify({
              schema_id: t.schemaId,
              payload: t.payload,
              metadata: c && Xe(c, !0),
            }),
            keepalive: n,
          });
        })({
          endpoint: this.produceEndpoint(),
          keepalive: this.keepalive,
          event: $e($e({}, e), {}, { payload: Xe(e.payload, r) }),
        });
      } catch (t) {
        throw new tt(t, [e.schemaId]);
      }
      if (!t) throw new Qe({ message: "No response from edge" });
      try {
        n = await t.text();
      } catch (e) {
        throw new nt(e, t.status);
      }
      if (!t.ok) {
        if (
          !Boolean(t.headers.get("x-request-id")) &&
          this.detectInterceptedErrorEnabled
        )
          throw new Ye({ status: t.status, message: n });
        throw new Qe({ status: t.status, message: n });
      }
      return { status: t.status };
    }
    produceBatchEndpoint() {
      return this.edgeDomain + "/unstable/produce_batch";
    }
    produceEndpoint() {
      return this.edgeDomain + Ke;
    }
  };
function ot(e) {
  const t = {
    "Content-Type": "application/json; charset=utf-8",
    "X-Monorail-Edge-Event-Created-At-Ms": (
      (e && e.eventCreatedAtMs) ||
      Date.now()
    ).toString(),
    "X-Monorail-Edge-Event-Sent-At-Ms": Date.now().toString(),
    "X-Monorail-Edge-Client-Message-Id": (
      (e && e.clientMessageId) ||
      We()
    ).toString(),
  };
  return (
    e && e.userAgent && (t["User-Agent"] = e.userAgent),
    e && e.remoteIp && (t["X-Forwarded-For"] = e.remoteIp),
    e &&
      e.deviceInstallId &&
      (t["X-Monorail-Edge-Device-Install-Id"] = e.deviceInstallId),
    e && e.client && (t["X-Monorail-Edge-Client"] = e.client),
    e && e.clientOs && (t["X-Monorail-Edge-Client-OS"] = e.clientOs),
    t
  );
}
var st = class e {
    static printWelcomeMessage(e) {
      console.log(
        `%c👋 from Monorail%c\n\nWe've noticed that you're${
          e ? "" : " not"
        } running in debug mode. As such, we will ${
          e ? "produce" : "not produce"
        } Monorail events to the console. \n\nIf you want Monorail events to ${
          e ? "stop" : "start"
        } appearing here, %cset debugMode=${(!e).toString()}%c, for the Monorail Log Producer in your code.`,
        "font-size: large;",
        "font-size: normal;",
        "font-weight: bold;",
        "font-weight: normal;"
      );
    }
    constructor(t) {
      (this.sendToConsole = t), t && e.printWelcomeMessage(t);
    }
    async produce(e) {
      return (
        this.sendToConsole && console.log("Monorail event produced", e),
        new Promise((t) => {
          t(e);
        })
      );
    }
    produceBatch(e) {
      return (
        this.sendToConsole && console.log("Monorail Batch event produced", e),
        new Promise((t) => {
          t(e);
        })
      );
    }
  },
  it = class {
    constructor(e) {
      this.version = e.version;
    }
  },
  at = class {
    constructor(e, t = () => !1) {
      if ((Ve(this, "eventsAwaitingConsent", []), null == e || !e.provider))
        throw new ct(
          "ConsentTrackingMiddleware requires an instance of ConsentTrackingProvider"
        );
      (this.isStrictlyNecessary = t), (this.provider = e.provider);
    }
    async do(e, t) {
      if (ze(e)) {
        const n = await this.provider.annotateEvent(e);
        return this.isConsentGivenForEmission(n)
          ? (await this.processBufferedEvents(t), t(n))
          : this.isStrictlyNecessary(n)
          ? t(n)
          : (this.eventsAwaitingConsent.push(e),
            Promise.resolve({
              status: 0,
              message:
                "Consent not granted and event not marked strictly necessary, event not sent",
            }));
      }
      {
        if (
          this.isConsentGivenForEmission(
            await this.provider.annotateEvent(e.events[0])
          )
        ) {
          await this.processBufferedEvents(t);
          const n = await Promise.all(
            e.events.map((e) => this.provider.annotateEvent(e))
          );
          return t($e($e({}, e), {}, { events: n }));
        }
        const n = e.events.filter(
          (e) =>
            !!this.isStrictlyNecessary(e) ||
            (this.eventsAwaitingConsent.push(e), !1)
        );
        if (n.length > 0) {
          const r = await Promise.all(
            n.map((e) => this.provider.annotateEvent(e))
          );
          return t($e($e({}, e), {}, { events: r }));
        }
        return Promise.resolve({
          status: 0,
          message:
            "Consent not granted for any event, and no event marked strictly necessary, event batch not sent",
        });
      }
    }
    isConsentGivenForEmission(e) {
      var t;
      const n = null === (t = e.metadata) || void 0 === t ? void 0 : t.consent,
        r = this.provider.getRequiredConsentForEmission();
      return Boolean(Array.isArray(n) && n.some((e) => r.includes(e)));
    }
    async processBufferedEvents(e) {
      if (0 === this.eventsAwaitingConsent.length) return;
      const t = this.eventsAwaitingConsent;
      (this.eventsAwaitingConsent = []),
        await e({
          events: await Promise.all(
            t.map((e) => this.provider.annotateEvent(e))
          ),
        });
    }
  },
  ct = class e extends Error {
    constructor(t) {
      super(t), Object.setPrototypeOf(this, e.prototype);
    }
  };
function ut(e, t) {
  var n, r, o;
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (
    "function" == typeof e &&
    void 0 !==
      (null === (n = e.toString) || void 0 === n ? void 0 : n.call(e)) &&
    (null === (r = e.toString) || void 0 === r ? void 0 : r.call(e)) ===
      (null === (o = t.toString) || void 0 === o ? void 0 : o.call(t))
  )
    return !0;
  if (e && t && "object" == typeof e && "object" == typeof t) {
    if (e.constructor !== t.constructor) return !1;
    let n, r;
    const o = Object.keys(e);
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; 0 != r--; ) if (!ut(e[r], t[r])) return !1;
      return !0;
    }
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (((n = o.length), n !== Object.keys(t).length)) return !1;
    for (r = n; 0 != r--; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; 0 != r--; ) {
      const n = o[r];
      if (!ut(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e != e && t != t;
}
const lt = "",
  dt = "1",
  pt = "0",
  ht = "p",
  ft = "a",
  vt = "m",
  mt = "t",
  gt = "m",
  _t = "a",
  yt = "p",
  bt = "s",
  wt = () => "undefined" != typeof __CtaTestEnv__ && "true" === __CtaTestEnv__;
var kt = class {};
(kt.warn = (e) => {
  wt() || console.warn(e);
}),
  (kt.error = (e) => {
    wt() || console.error(e);
  }),
  (kt.info = (e) => {
    wt() || console.info(e);
  }),
  (kt.debug = (e) => {
    wt() || console.debug(e);
  }),
  (kt.trace = (e) => {
    wt() || console.trace(e);
  });
function Et(e) {
  try {
    return decodeURIComponent(e);
  } catch (e) {
    return "";
  }
}
function Pt(e, t = !1) {
  const n = (function () {
    try {
      return document.cookie;
    } catch {
      return !1;
    }
  })()
    ? document.cookie.split("; ")
    : [];
  for (let t = 0; t < n.length; t++) {
    const [r, o] = n[t].split("=");
    if (e === Et(r)) return Et(o);
  }
  if (
    t &&
    "_tracking_consent" === e &&
    !window.localStorage.getItem("tracking_consent_fetched")
  ) {
    if (wt()) return;
    return (
      console.debug("_tracking_consent missing"),
      (function (e = "/") {
        const t = new XMLHttpRequest();
        t.open("HEAD", e, !1), (t.withCredentials = !0), t.send();
      })(),
      window.localStorage.setItem("tracking_consent_fetched", "true"),
      Pt(e, !1)
    );
  }
}
function Ot() {
  const e =
    new URLSearchParams(window.location.search).get("_cs") ||
    Pt("_tracking_consent");
  if (void 0 !== e)
    return (function (e) {
      const t = e.slice(0, 1);
      if ("{" == t)
        return (function (e) {
          var t;
          let n;
          try {
            n = JSON.parse(e);
          } catch {
            return;
          }
          if ("2.1" !== n.v) return;
          if (null === (t = n.con) || void 0 === t || !t.CMP) return;
          return n;
        })(e);
      if ("3" == t)
        return (function (e) {
          const t = e.slice(1).split("_"),
            [n, r, o, s, i] = t;
          let a, c;
          try {
            a = t[5] ? JSON.parse(t.slice(5).join("_")) : void 0;
          } catch {}
          if (i) {
            const e = i.replace(/\*/g, "/").replace(/-/g, "+"),
              t = Array.from(atob(e))
                .map((e) => e.charCodeAt(0).toString(16).padStart(2, "0"))
                .join("");
            c = [8, 13, 18, 23].reduce(
              (e, t) => e.slice(0, t) + "-" + e.slice(t),
              t
            );
          }
          function u(e) {
            const t = n.split(".")[0];
            return t.includes(e.toLowerCase())
              ? pt
              : t.includes(e.toUpperCase())
              ? dt
              : lt;
          }
          function l(e) {
            return n.includes(e.replace("t", "s").toUpperCase());
          }
          return {
            v: "3",
            con: {
              CMP: { [_t]: u(_t), [yt]: u(yt), [gt]: u(gt), [bt]: u(bt) },
            },
            region: r || "",
            cus: a,
            purposes: { [ft]: l(ft), [ht]: l(ht), [vt]: l(vt), [mt]: l(mt) },
            sale_of_data_region: "t" == s,
            display_banner: "t" == o,
            consent_id: c,
          };
        })(e);
    })(e);
}
function It(e) {
  const t = Ot();
  if (!t || !t.purposes) return !0;
  const n = t.purposes[e];
  return "boolean" != typeof n || n;
}
function Mt() {
  return It(ft);
}
function St() {
  return It(ht);
}
function Ct() {
  return It(vt);
}
function jt() {
  return It(mt);
}
function At() {
  return Mt();
}
function xt() {
  const e = [];
  return (
    At() && e.push("analytics"),
    Ct() && e.push("marketing"),
    jt() && e.push("sale_of_data"),
    St() && e.push("preferences"),
    e
  );
}
var Tt,
  Bt = class extends it {
    async annotateEvent(e) {
      return Promise.resolve(
        (function (e, t) {
          if ("v1" === t) {
            const n = xt();
            return {
              ...e,
              metadata: {
                ...(null == e ? void 0 : e.metadata),
                consent: n,
                consent_provider: "consent-tracking-api",
                consent_version: t,
              },
            };
          }
          throw new Dt(t || "unknown");
        })(e, this.version)
      );
    }
    getRequiredConsentForEmission() {
      if ("v1" === this.version) return ["analytics", "marketing"];
      throw new Dt(this.version || "unknown");
    }
  },
  Dt = class e extends Error {
    constructor(t) {
      super(
        `Version ${t} is not supported by the consent-tracking-api provider`
      ),
        (this.name = "MonorailConsentTrackingApiProviderVersionError"),
        Object.setPrototypeOf(this, e.prototype);
    }
  };
function Nt() {
  var t;
  const n =
    null === (t = e.querySelector("script#shop-js-analytics")) || void 0 === t
      ? void 0
      : t.innerHTML;
  return n ? JSON.parse(n) : {};
}
function Ut() {
  return h(this, void 0, void 0, function* () {
    let e;
    return Promise.race([
      new Promise((t) => (e = setTimeout(() => t({}), 1e4))),
      new Promise((e) => {
        var n, r, o;
        const s =
          (null ===
            (r =
              null === (n = t.ShopifyAnalytics) || void 0 === n
                ? void 0
                : n.lib) || void 0 === r
            ? void 0
            : r.ready) ||
          (null === (o = t.analytics) || void 0 === o ? void 0 : o.ready);
        null == s ||
          s(() => {
            var n, r, o, s;
            const i =
              (null ===
                (r =
                  null === (n = t.ShopifyAnalytics) || void 0 === n
                    ? void 0
                    : n.lib) || void 0 === r
                ? void 0
                : r.trekkie) ||
              (null === (o = t.analytics) || void 0 === o ? void 0 : o.trekkie);
            e(
              null !== (s = null == i ? void 0 : i.defaultAttributes) &&
                void 0 !== s
                ? s
                : {}
            );
          });
      }),
    ]).finally(() => clearTimeout(e));
  });
}
function Ht(...e) {
  return h(this, void 0, void 0, function* () {
    var n;
    if (!t.ShopifyAnalytics && !t.analytics) return {};
    let r;
    Boolean(null === (n = t.trekkie) || void 0 === n ? void 0 : n.ready)
      ? (r = Ut())
      : ((t.trekkie = t.trekkie || []),
        (r = new Promise((e) => {
          t.trekkie.push([
            "ready",
            () => {
              e(Ut());
            },
          ]);
        })));
    const o = yield r;
    return e.reduce((e, t) => {
      const n = o[t];
      return void 0 !== n && (e[t] = n), e;
    }, {});
  });
}
const Lt = "unspecified",
  Vt = (function () {
    const e = new Bt({ version: "v1" });
    return [new at({ provider: e })];
  })(),
  Rt = [
    "completed",
    "emailsubmitted",
    "namesubmitted",
    "sheetmodalclosed",
    "sheetmodalopened",
  ],
  $t = class e {
    static createLogProducer(t) {
      return new e(new st(t.debugMode), t.middleware || []);
    }
    static createHttpProducerWithEndpoint(t, n = []) {
      return new e(rt.withEndpoint(t), n);
    }
    static createHttpProducer(t) {
      return new e(
        t.production ? new rt(Fe, t.options) : new rt(qe, t.options),
        t.middleware || []
      );
    }
    static buildMiddlewareChain(e, t = 0) {
      return t === e.length
        ? this.identityFn
        : (n) => e[t].do(n, this.buildMiddlewareChain(e, t + 1));
    }
    constructor(t, n) {
      (this.producer = t),
        (this.middleware = n),
        (this.executeChain = e.buildMiddlewareChain(
          this.middleware.concat(new Je(t))
        ));
    }
    produce(e) {
      return (
        (e.metadata = $e(
          { eventCreatedAtMs: Date.now(), clientMessageId: We() },
          e.metadata
        )),
        this.executeChain(e)
      );
    }
    produceBatch(e) {
      return this.executeChain(e);
    }
  }.createHttpProducer({ production: !0, middleware: Vt });
var qt = class {
  constructor({
    analyticsData: e,
    devMode: t = !1,
    notify: n,
    recordCounter: r,
  }) {
    var o;
    Tt.set(this, void 0),
      (this.featureInitializationEventAlreadyEmitted = !1),
      (this.trackedPageImpressions = new Set()),
      p(
        this,
        Tt,
        Object.assign(Object.assign({}, e), {
          flowVersion: null !== (o = e.flowVersion) && void 0 !== o ? o : Lt,
        }),
        "f"
      ),
      (this.devMode = t),
      (this.notify = n),
      (this.recordCounter = r),
      (this.clearTrackedPageImpressions =
        this.clearTrackedPageImpressions.bind(this)),
      (this.produceMonorailEvent = this.produceMonorailEvent.bind(this)),
      (this.trackFeatureInitialization =
        this.trackFeatureInitialization.bind(this)),
      (this.trackModalStateChange = this.trackModalStateChange.bind(this)),
      (this.trackPageImpression = this.trackPageImpression.bind(this)),
      (this.trackUserAction = this.trackUserAction.bind(this)),
      (this.trackPostMessageTransmission =
        this.trackPostMessageTransmission.bind(this));
  }
  get analyticsData() {
    return d(this, Tt, "f");
  }
  set analyticsData(e) {
    const t = Object.assign(Object.assign({}, d(this, Tt, "f")), e);
    ut(t, d(this, Tt, "f")) || p(this, Tt, t, "f");
  }
  clearTrackedPageImpressions() {
    this.trackedPageImpressions.clear();
  }
  produceMonorailEvent({ event: e, onError: t, trekkieAttributes: n }) {
    this.devMode ||
      (!n || Object.keys(n).length
        ? ((e.payload = Object.assign(e.payload, n)),
          $t.produce(e).catch((e) => {
            var n;
            if (
              (null == t || t(e),
              (function (e) {
                var t, n, r, o, s, i, a;
                const c = e instanceof nt && 200 === e.status;
                return !(
                  e instanceof tt ||
                  e instanceof Qe ||
                  (null === (t = null == e ? void 0 : e.message) || void 0 === t
                    ? void 0
                    : t.includes("Invalid agent:")) ||
                  (null === (n = null == e ? void 0 : e.message) || void 0 === n
                    ? void 0
                    : n.includes(".text is not a function")) ||
                  (null === (r = null == e ? void 0 : e.message) || void 0 === r
                    ? void 0
                    : r.includes(
                        "event_sent_at_ms metadata field cannot be empty"
                      )) ||
                  (null === (o = null == e ? void 0 : e.message) || void 0 === o
                    ? void 0
                    : o.includes(
                        "event_created_at_ms metadata field cannot be empty."
                      )) ||
                  (null === (s = null == e ? void 0 : e.message) || void 0 === s
                    ? void 0
                    : s.match(
                        /Cannot read properties of (null|undefined) \(reading 'status'\)/
                      )) ||
                  (null === (i = null == e ? void 0 : e.message) || void 0 === i
                    ? void 0
                    : i.match(
                        /(null|undefined) is not an object \(evaluating '[a-zA-Z]+\.status'\)/
                      )) ||
                  (null === (a = null == e ? void 0 : e.message) || void 0 === a
                    ? void 0
                    : a.match(/[a-zA-Z]+ is (null|undefined)/)) ||
                  c
                );
              })(e))
            ) {
              const t =
                e instanceof Error
                  ? e
                  : new Ie(String(e), "MonorailProducerError");
              if (
                (null === (n = this.notify) || void 0 === n || n.call(this, t),
                this.recordCounter)
              ) {
                const e = m(t);
                this.recordCounter("shop_js_monorail_producer_error", {
                  attributes: { error: e },
                });
              }
            }
          }))
        : null == t || t({ message: "trekkie attributes are empty" }));
  }
  trackFeatureInitialization() {
    return h(this, void 0, void 0, function* () {
      var e, n, r, o;
      const {
        analyticsTraceId: s,
        apiKey: i,
        checkoutToken: a,
        flow: c,
        flowVersion: u = Lt,
        shopId: l,
        source: d = "unspecified",
        uxMode: p,
      } = this.analyticsData;
      if (!c) return;
      this.featureInitializationEventAlreadyEmitted &&
        (null === (e = this.notify) ||
          void 0 === e ||
          e.call(
            this,
            new Ie(
              `Feature Initialize Event already emitted once for the feature ${c}`,
              "MonorailLogicError",
              s
            )
          ));
      const h = Nt(),
        f =
          null !== (n = null == h ? void 0 : h.pageType) && void 0 !== n
            ? n
            : "",
        v = yield Ht(
          "customerId",
          "isPersistentCookie",
          "path",
          "uniqToken",
          "visitToken"
        ),
        m = Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign({}, i && { apiKey: i }),
                a && { checkoutToken: a }
              ),
              l && { shopId: l }
            ),
            v
          ),
          {
            analyticsTraceId: s,
            flow: c,
            flowVersion: u,
            sdkVersion: "1.1.0-beta",
            shopPermanentDomain:
              null !==
                (o =
                  null === (r = t.Shopify) || void 0 === r ? void 0 : r.shop) &&
              void 0 !== o
                ? o
                : "",
            source: d,
            storefrontPageType: f,
            uxMode: p,
          }
        );
      (this.featureInitializationEventAlreadyEmitted = !0),
        this.produceMonorailEvent({
          event: {
            schemaId: "shopify_pay_login_with_shop_sdk_feature_initialize/1.1",
            payload: m,
          },
        });
    });
  }
  trackModalStateChange({ currentState: e, dismissMethod: n, reason: r }) {
    var o;
    const {
      analyticsTraceId: s,
      checkoutToken: i,
      flow: a,
      flowVersion: c = "unspecified",
    } = this.analyticsData;
    a &&
      (this.produceMonorailEvent({
        event: {
          schemaId: "shop_identity_modal_state_change/1.4",
          payload: {
            analyticsTraceId: s,
            checkoutToken: i,
            currentState: e,
            dismissMethod: n,
            flow: a,
            flowVersion: c,
            previousState: this.previousModalState,
            reason: r,
            zoom: `${
              null === (o = t.visualViewport) || void 0 === o ? void 0 : o.scale
            }`,
          },
        },
      }),
      (this.previousModalState = e));
  }
  trackPageImpression(e) {
    return h(
      this,
      arguments,
      void 0,
      function* ({
        allowDuplicates: e = !1,
        analyticsTraceId: n = this.analyticsData.analyticsTraceId,
        flow: r = this.analyticsData.flow,
        page: o,
        shopAccountUuid: s,
      }) {
        var i, a, c;
        if (!e && this.trackedPageImpressions.has(o)) return;
        const {
          apiKey: u,
          checkoutToken: l,
          flowVersion: d = Lt,
        } = this.analyticsData;
        if (!r) return;
        this.trackedPageImpressions.add(o);
        const p = Nt(),
          h =
            null !== (i = null == p ? void 0 : p.pageType) && void 0 !== i
              ? i
              : "",
          f = yield Ht(
            "customerId",
            "isPersistentCookie",
            "path",
            "uniqToken",
            "visitToken"
          ),
          v = Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign({}, u && { apiKey: u }),
                  l && { checkoutToken: l }
                ),
                s && { shopAccountUuid: s }
              ),
              f
            ),
            {
              analyticsTraceId: n,
              flow: r,
              flowVersion: d,
              pageName: o,
              sdkVersion: "1.1.0-beta",
              shopPermanentDomain:
                null !==
                  (c =
                    null === (a = t.Shopify) || void 0 === a
                      ? void 0
                      : a.shop) && void 0 !== c
                  ? c
                  : "",
              storefrontPageType: h,
            }
          );
        this.produceMonorailEvent({
          event: {
            payload: v,
            schemaId: "shopify_pay_login_with_shop_sdk_page_impressions/3.3",
          },
          onError: () => {
            this.trackedPageImpressions.delete(o);
          },
          trekkieAttributes: f,
        });
      }
    );
  }
  trackUserAction({ userAction: e }) {
    var n, r;
    const {
      analyticsTraceId: o,
      apiKey: s,
      checkoutToken: i,
      checkoutVersion: a,
      flow: c,
      flowVersion: u = Lt,
      shopId: l,
    } = this.analyticsData;
    if (!c) return;
    const d = Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign({}, s && { apiKey: s }),
            i && { checkoutToken: i }
          ),
          a && { checkoutVersion: a }
        ),
        l && { shopId: l }
      ),
      {
        analyticsTraceId: o,
        flow: c,
        flowVersion: u,
        sdkVersion: "1.1.0-beta",
        shopPermanentDomain:
          null !==
            (r = null === (n = t.Shopify) || void 0 === n ? void 0 : n.shop) &&
          void 0 !== r
            ? r
            : "",
        userAction: e,
      }
    );
    this.produceMonorailEvent({
      event: {
        schemaId: "shopify_pay_login_with_shop_sdk_user_actions/2.2",
        payload: d,
      },
    });
  }
  trackPostMessageTransmission({ direction: e, event: t }) {
    var n;
    const r = t.type;
    if (!Rt.includes(r)) return;
    const o = Date.now(),
      s = t.messageId,
      {
        analyticsTraceId: i,
        checkoutToken: a,
        shopPermanentDomain: c,
      } = this.analyticsData,
      u = (function (e) {
        return "email" in e;
      })(t)
        ? t.email
        : void 0,
      l = { eventType: r, direction: e, actor: "shop-js" };
    null === (n = this.recordCounter) ||
      void 0 === n ||
      n.call(this, "shop_js_post_message_transmission", { attributes: l }),
      this.produceMonorailEvent({
        event: {
          schemaId: "shop_identity_post_message_transmission/1.0",
          payload: {
            messageId: s,
            messageDirection: e,
            actor: "shop-js",
            payloadType: r,
            clientTimestampMs: o,
            analyticsTraceId: i,
            checkoutToken: a,
            shopifyDomain: c,
            email: u,
          },
        },
      });
  }
};
Tt = new WeakMap();
function Ft(e) {
  if (!e) return !1;
  try {
    return (
      Oe(e) &&
      4 ===
        (function (e) {
          if (!Oe(e)) throw TypeError("Invalid UUID");
          return parseInt(e.slice(14, 15), 16);
        })(e)
    );
  } catch (e) {
    return !1;
  }
}
const Kt = ({
  analyticsContext: e = "loginWithShop",
  apiKey: n,
  checkoutVersion: r,
  checkoutToken: o,
  children: s,
  flow: i,
  flowVersion: a,
  shopId: c = 0,
  shopPermanentDomain: u,
  source: l,
  uxMode: d,
}) => {
  const { notify: p } = Ee(),
    { recordCounter: h } = Ne(),
    { devMode: f, element: v, instanceId: m } = ee(),
    g = $(() => {
      const e =
        ((n = "analytics_trace_id"),
        new URLSearchParams(t.location.search).get(n));
      var n;
      return Ft(e) ? e : m;
    }, [m]);
  L(() => {
    if (v)
      return (
        (function (e, t) {
          Object.defineProperty(e, He, {
            configurable: !0,
            value: Object.freeze(Object.assign({}, t)),
          });
        })(v, { analyticsTraceId: g }),
        () => {
          !(function (e) {
            delete e[He];
          })(v);
        }
      );
  }, [g, v]);
  const _ = V({
      analyticsContext: e,
      analyticsTraceId: g,
      apiKey: n,
      checkoutVersion: r,
      checkoutToken: o,
      flow: i,
      flowVersion: a,
      shopId: c,
      shopPermanentDomain: u,
      source: l,
      uxMode: d,
    }),
    y = $(
      () =>
        new qt({
          analyticsData: _.current,
          devMode: f,
          notify: p,
          recordCounter: h,
        }),
      [f, p, h]
    );
  (y.analyticsData = Object.assign(Object.assign({}, _.current), {
    analyticsTraceId: g,
    analyticsContext: e,
    apiKey: n,
    checkoutVersion: r,
    checkoutToken: o,
    flow: i,
    flowVersion: a,
    shopId: c,
    shopPermanentDomain: u,
    source: l,
    uxMode: d,
  })),
    H(
      () => () => {
        y.clearTrackedPageImpressions();
      },
      [y]
    );
  const b = Se(() => {
    y.trackFeatureInitialization();
  }, 100);
  H(() => {
    b();
  }, [b]);
  const w = $(
    () => ({
      analyticsData: y.analyticsData,
      getTrekkieAttributes: Ht,
      produceMonorailEvent: y.produceMonorailEvent,
      trackModalStateChange: y.trackModalStateChange,
      trackPageImpression: y.trackPageImpression,
      trackUserAction: y.trackUserAction,
      trackPostMessageTransmission: y.trackPostMessageTransmission,
    }),
    [
      y.analyticsData,
      y.produceMonorailEvent,
      y.trackModalStateChange,
      y.trackPageImpression,
      y.trackUserAction,
      y.trackPostMessageTransmission,
    ]
  );
  return O(Ue.Provider, { value: w, children: s });
};
function zt({ children: e }) {
  const { featureName: t } = ee(),
    n = $(() => new he({ exporter: _() }), []),
    r = q(
      ({ body: e, attributes: r }) => {
        n.log({
          body: e,
          attributes: Object.assign({ beta: !0, feature: t }, r),
        });
      },
      [n, t]
    ),
    o = q(
      (e, r = {}) => {
        const { attributes: o, unit: s, value: i = 1 } = r;
        n.counter({
          attributes: Object.assign({ beta: !0, feature: t }, o),
          name: e,
          value: i,
          unit: s,
        });
      },
      [n, t]
    ),
    s = q(
      (e, r = {}) => {
        const { attributes: o, unit: s, value: i = 1 } = r;
        n.gauge({
          attributes: Object.assign({ beta: !0, feature: t }, o),
          name: e,
          value: i,
          unit: s,
        });
      },
      [n, t]
    ),
    i = q(
      (e, r = {}) => {
        const { attributes: o, unit: s, value: i = 1, bounds: a } = r;
        n.histogram({
          attributes: Object.assign({ beta: !0, feature: t }, o),
          bounds: a,
          name: e,
          value: i,
          unit: s,
        });
      },
      [n, t]
    ),
    a = $(
      () => ({
        client: n,
        log: r,
        recordCounter: o,
        recordGauge: s,
        recordHistogram: i,
      }),
      [n, r, o, s, i]
    );
  return O(De.Provider, { value: a, children: e });
}
function Jt({ children: e, monorailProps: t }) {
  return O(ke, {
    children: O(Me, {
      children: O(zt, {
        children: O(Kt, Object.assign({}, t, { children: e })),
      }),
    }),
  });
}
const Wt = ({ children: e, devMode: t = !1, element: n, featureName: r }) => {
    const o = $(() => y(), []);
    H(() => {
      n && n.setAttribute("data-instance-id", o);
    }, [n, o]);
    const s = $(
      () => ({ devMode: t, element: n, featureName: r, instanceId: o }),
      [t, n, r, o]
    );
    return O(Y.Provider, { value: s, children: e });
  },
  Xt = t.HTMLElement,
  Gt = (e) => {
    const n = t.HTMLElement;
    t.HTMLElement = Xt;
    const r = e();
    return (t.HTMLElement = n), r;
  },
  Zt = (t) => Gt(() => e.createElement(t)),
  Qt = {
    boolean: {
      stringify: (e) =>
        "" === e ? "true" : e ? /^[ty1-9]/i.test(e).toString() : "false",
      parse: (e, t, n) =>
        "" === e || (e ? /^[ty1-9]/i.test(e) : n.hasAttribute(t) && null === e),
    },
    function: {
      stringify: (e) =>
        "function" == typeof e
          ? e.name.replace("bound ", "")
          : "string" == typeof e
          ? e.replace("bound ", "")
          : e,
      parse: (e, t, n) => {
        if (!e) return null;
        const r =
          "undefined" != typeof window
            ? window[e]
            : "undefined" != typeof global
            ? global[e]
            : void 0;
        return "function" == typeof r ? r.bind(n) : void 0;
      },
    },
    number: {
      stringify: (e) => `${e}`,
      parse: (e) => {
        if (e) return parseFloat(e);
      },
    },
    string: {
      stringify: (e) => e,
      parse: (e) => {
        if (e) return e;
      },
    },
  };
function Yt(
  e,
  { getters: t, methods: o, name: a, props: c, shadow: u, singleton: d }
) {
  var p;
  if ("undefined" == typeof window) return;
  const { notify: h } = new be(a);
  function f() {
    const t = ((e) => Gt(() => Reflect.construct(HTMLElement, [], e)))(f);
    return (
      (t._eventListenerReadyPromise = new Promise((e) => {
        t._eventListenerReadyPromiseResolve = e;
      })),
      (t._vdomComponent = e),
      (t._root = u ? t.attachShadow({ mode: u }) : t),
      t
    );
  }
  const v = new Map();
  Object.entries(c || {}).forEach(([e, t]) => {
    const n = s(e);
    v.set(n, { attribute: n, preactProp: e, type: t });
  });
  const m = Array.from(v.values()).map(({ attribute: e }) => e);
  function g(e) {
    this.getChildContext = () => e.context;
    const { context: t, children: n } = e,
      r = l(e, ["context", "children"]);
    return i(n, r);
  }
  function _(e) {
    return n("slot", Object.assign({}, e));
  }
  function y(e, t) {
    if (3 === e.nodeType) return e.data;
    if (1 !== e.nodeType) return null;
    const r = {},
      o = [],
      { childNodes: s } = e;
    v.forEach(({ attribute: t, preactProp: n, type: o }) => {
      const s = Qt[o],
        i = e.getAttribute(t);
      let a = i;
      ("boolean" === o || i) && (a = s.parse(i, t, e)),
        null !== a && ((r[t] = a), (r[n] = a));
    });
    for (const e of s) {
      const t = y(e, null);
      o.push(t);
    }
    const i = t ? n(_, null, o) : o;
    return n(t, r, i);
  }
  return (
    (f.prototype = Object.create(HTMLElement.prototype)),
    (f.prototype.constructor = f),
    (f.observedAttributes = m),
    (f.prototype.attributeChangedCallback = function (e, t, n) {
      if (!this._vdom) return;
      const o = v.get(e);
      if (!o) return;
      const { preactProp: s, type: a } = o,
        c = Qt[a],
        u = {};
      if (n || "boolean" !== a) {
        if (a && n) {
          const t = c.parse(n, e, this);
          (u[e] = t), (u[s] = t);
        }
      } else {
        const t = c.parse(n, e, this);
        (u[e] = t), (u[s] = t);
      }
      (this._vdom = i(this._vdom, u)), r(this._vdom, this._root);
    }),
    (f.prototype.connectedCallback = function () {
      if (d && document.querySelectorAll(a).length > 1)
        return void this.remove();
      const e = new CustomEvent("_preact", {
        detail: {},
        bubbles: !0,
        cancelable: !0,
      });
      this.dispatchEvent(e);
      const t = e.detail.context;
      (this._vdom = n(
        g,
        Object.assign(Object.assign({}, this._props), {
          context: t,
          element: this,
        }),
        y(this, this._vdomComponent)
      )),
        r(this._vdom, this._root);
    }),
    null == o ||
      o.forEach((e) => {
        f.prototype[e] = function (t) {
          this._eventListenerReadyPromise
            .then(() => {
              this.dispatchEvent(new CustomEvent(e, { detail: t }));
            })
            .catch(() => {
              h(
                new Ie(
                  `Custom element ${a}: Error listening for methods`,
                  "CustomElementMethodListenerError"
                )
              );
            });
        };
      }),
    Object.entries(t || {}).forEach(([e, t]) => {
      e in HTMLElement.prototype || e in f.prototype
        ? h(
            new Ie(
              `Custom element ${a}: getter "${e}" collides with an existing property`,
              "CustomElementGetterCollisionError"
            )
          )
        : Object.defineProperty(f.prototype, e, {
            get: t,
            configurable: !0,
            enumerable: !0,
          });
    }),
    (f.prototype.disconnectedCallback = function () {
      r((this._vdom = null), this._root);
    }),
    v.forEach(({ attribute: e, preactProp: t, type: n }) => {
      const o = Qt[n];
      Object.defineProperty(f.prototype, e, {
        get() {
          return this._vdom && this._vdom.props ? this._vdom.props[e] : null;
        },
        set(t) {
          let r = t;
          this._vdom
            ? this.attributeChangedCallback(e, null, t)
            : (("boolean" === n || t) && (r = o.parse(t, e, this)),
              this._props || (this._props = {}),
              (this._props[e] = r),
              this.connectedCallback()),
            this.setAttribute(e, o.stringify(r));
        },
      }),
        "function" === n &&
          t !== e &&
          Object.defineProperty(f.prototype, t, {
            get() {
              return this._vdom && this._vdom.props
                ? this._vdom.props[t]
                : null;
            },
            set(n) {
              if ("function" != typeof n && null !== n) return;
              const o = {};
              (o[e] = n),
                (o[t] = n),
                this._vdom
                  ? ((this._vdom = i(this._vdom, o)), r(this._vdom, this._root))
                  : (this._props || (this._props = {}),
                    (this._props[e] = n),
                    (this._props[t] = n));
            },
            configurable: !0,
            enumerable: !0,
          });
    }),
    customElements.get(a)
      ? void 0
      : (null === (p = Reflect.defineProperty) ||
          void 0 === p ||
          p.call(Reflect, f, "componentVersion", { value: "preact" }),
        ((e, t) => {
          Gt(() => {
            customElements.define(e, t);
          });
        })(a, f))
  );
}
export {
  H as A,
  $ as C,
  U as D,
  K as E,
  q as O,
  R as S,
  N as T,
  Ee as _,
  qt as a,
  ee as b,
  Le as c,
  xe as d,
  Ae as f,
  Ie as g,
  Se as h,
  Jt as i,
  O as j,
  F as k,
  Ue as l,
  je as m,
  Zt as n,
  Ht as o,
  Ce as p,
  Wt as r,
  ut as s,
  Yt as t,
  Ne as u,
  be as v,
  L as w,
  V as x,
  he as y,
};
//# sourceMappingURL=chunk.register_Cxs_K5wz.esm.js.map
