(function () {
  var preconnectOrigins = ["https://cdn.shopify.com"];
  var scripts = [
    "/cdn/shopifycloud/checkout-web/assets/c1/polyfills.BiBIAYYj.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/app.YmvH25zM.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/2c1ab0fe.Bf8FS-kA.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.BI_f58i8.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/4b4bc88f.C6QXxWcp.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/2495faa4.1SnUZiCo.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/cf29e63b.CtJxXaRc.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/9dba8418.bYtorePf.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/cb38e5c2.BLx6hoEY.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/2255f8fa.DUHS0BsP.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/d25d1b95.Dqt_DMcu.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/f67abd2c.DVYhtaBv.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/b8733b27.C_NeDjpK.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/e39bc11c.Bx_088n_.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/08a3b809.D-4ETdQe.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.BPEX42uv.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/d0bb51ec.3dWJ276v.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/60a453ce.Boic_DNC.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/e12db40c.2vh-yzuN.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/f4abf1ad.D1XivcyB.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/f8706cb6.Df5JHh90.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/dffdfb34.BRT241wm.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/3ca8ef7e.BS-l2zDp.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/1f5e7811.Dor9SUuC.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/c6c0cbda.BXj5YQC9.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/2fdb3dd3.XqxrAL2n.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/22345fd4.BoFvu5gm.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/0e67bd3b.DmiPwvo_.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/74835653.CoZYi26f.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/a9fa9fda.BdhYcFOq.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/ca3e798e.Dc6mNaNz.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/47b970b2.BE-srlol.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/064f6ac1.CjuMIPLF.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/efa0389a.BZyYBSt1.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/4b1c22b7.BRxY0LFs.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/17425706.B-zCsrR4.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/55098bf1.Bnc0Yrr2.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/cb5cf153.BwijbKWu.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/e3e348f2.B6iohKT0.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/71ae3d5c.D57ySY2w.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/78ab3dd0.CCnSg37g.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/ed9f2238.hc0X2InV.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/6fb6f9d8.BB_H_Bk-.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/1444e6bd.KejVbUCp.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/0b8657b8.DD4TEsqt.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/a422df8c.DsXWNeDU.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/79974aab.D-fRdmAW.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/7b0c98ea.DpTJ94IC.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/d22d2b80.BtsULFzN.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/f49d4216.D1vUwDVr.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/0e9ee714.CVeLAF7t.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/39921a74.ClSag2sM.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/ccdf3592.B6dL1W27.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/71b60e0a.DfPLdYsH.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/24773686.Dfu7aqGb.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/ec391382.DlSolCJn.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/6bfea526.BGTIgUKP.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/ac5a19ff.BwF5gbBK.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/598fef4e.CwwcNWfh.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/e77f7fe0.Bh87uBLY.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/cc6ff67d.ByeLM9gx.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/bf513f9c.CUPvu1Jq.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/7a8217fd.Dj-7R-cN.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/8599b02a.D0GeWg8T.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/dfca5da5.CI0gcS7f.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/dae24aab.CuEJarRZ.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/a25deb9a.CoEu-Jrd.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/01973ac7.B_QqB4K7.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/58314944.BWsAsbec.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/945a08d6.DTHINaGv.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/7bc8057b.jddC4XZe.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/f1968089.BhnVC5sC.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/2b89a178.B4v9_7Xr.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/b684bff6.E2ycQGNh.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/910cd6e2.BCZyIOoV.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/347b440c.C3t324ZC.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/9ce08e25.CRWptBwE.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/181d38d3.qcHmFj23.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/792bb671.B3OvVnSg.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/d6447d9e.F_W1qOuz.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/f51e663e.DxzeGMMB.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/64de7b49.D8OK5RTA.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/8e79be58.C_bfAran.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/90e26f5f.gWyS5URn.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/31cc568e.95lmLO5k.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/65f3d4da.Bb3QiqCm.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/ca5e9c49.JbDLXziC.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/f3e117aa.zUS6ly-9.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.BtB9vp7y.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/b3389d5c.C-1ZWGRn.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/73a9b0a0.BVjQrEBe.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/81e109b1.DOkM2TK2.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/86720dbb.D41JzRG7.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/f692f62f.XMvhXleh.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/9babe369.Bsq76oiT.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/434e3b0a.oup8Ur0H.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/e0989459.CmOXKWrV.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/cdfd59e6.BaiEhbwb.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/fc21c11a.BfsITP9M.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/e129c76e.DNxEmmXO.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/d4ea2faa.D788KbGc.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/fe885b80.CdgyPrIB.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/f78726c8.Cgllqgei.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/e477f96c.C3EBEawv.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/1ed8f5e3.C6sGDuqU.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/7ee73f43.B_sw68j1.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/0c0ad074.Cn2Cehf1.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/87bfafec.CxwEzGHg.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/d2e6a587.BSqegp8v.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/c10167e6.2LEzdTuK.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/b9c0319a.DiDmMaMW.js",
    "/cdn/shopifycloud/checkout-web/assets/c1/17e57de1.Dh6ifiWc.js",
  ];
  var styles = [
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CcGlIMpn.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/wallet-prefilled-guest-return.BJvF0-q4.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/hydrate.sZExiEG5.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.B-NX-U9c.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/VatNumberValidationField.CYhzzEkL.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.Cv62Qqkq.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/Tipping.BcTJoNaV.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.DT05kVlY.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.CrYuHUmO.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/constants.xO_7ctnq.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/useHasViolations.BnDF3H7t.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.87JMHPUK.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/TransitionHeight.CuRoM9zv.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CyS-bj2t.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.CZuxzxFG.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.DjDhVpQB.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/hooks.CKE1iCma.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.C0BOgdmL.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/floating-layer.DfWUBaTh.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css",
    "/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.DgiInWJ-.css",
  ];
  var fontPreconnectUrls = [];
  var fontPrefetchUrls = [];
  var imgPrefetchUrls = [];

  function preconnect(url, callback) {
    var link = document.createElement("link");
    link.rel = "dns-prefetch preconnect";
    link.href = url;
    link.crossOrigin = "";
    link.onload = link.onerror = callback;
    document.head.appendChild(link);
  }

  function preconnectAssets() {
    var resources = preconnectOrigins.concat(fontPreconnectUrls);
    var index = 0;
    (function next() {
      var res = resources[index++];
      if (res) preconnect(res, next);
    })();
  }

  function prefetch(url, as, callback) {
    var link = document.createElement("link");
    if (link.relList.supports("prefetch")) {
      link.rel = "prefetch";
      link.fetchPriority = "low";
      link.as = as;
      if (as === "font") link.type = "font/woff2";
      link.href = url;
      link.crossOrigin = "";
      link.onload = link.onerror = callback;
      document.head.appendChild(link);
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onloadend = callback;
      xhr.send();
    }
  }

  function prefetchAssets() {
    var resources = [].concat(
      scripts.map(function (url) {
        return [url, "script"];
      }),
      styles.map(function (url) {
        return [url, "style"];
      }),
      fontPrefetchUrls.map(function (url) {
        return [url, "font"];
      }),
      imgPrefetchUrls.map(function (url) {
        return [url, "image"];
      })
    );
    var index = 0;
    function run() {
      var res = resources[index++];
      if (res) prefetch(res[0], res[1], next);
    }
    var next = (self.requestIdleCallback || setTimeout).bind(self, run);
    next();
  }

  function onLoaded() {
    try {
      if (
        parseFloat(navigator.connection.effectiveType) > 2 &&
        !navigator.connection.saveData
      ) {
        preconnectAssets();
        prefetchAssets();
      }
    } catch (e) {}
  }

  if (document.readyState === "complete") {
    onLoaded();
  } else {
    addEventListener("load", onLoaded);
  }
})();
