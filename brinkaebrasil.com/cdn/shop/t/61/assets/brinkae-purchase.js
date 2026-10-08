(() => {
  "use strict";
  const states = new WeakMap();
  async function jsonRequest(url, options = {}) {
    const controller = new AbortController(),
      timer = setTimeout(() => controller.abort(), 25e3);
    try {
      const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        }),
        data = await response.json();
      if (!response.ok || data.status >= 400)
        throw new Error(
          data.description ||
            data.message ||
            "N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o."
        );
      return data;
    } finally {
      clearTimeout(timer);
    }
  }
  function setup(host) {
    if (states.has(host)) return states.get(host);
    const state = { busy: !1, pendingCheckout: null };
    states.set(host, state);
    const primary = host.querySelector(".product-form__submit"),
      secondary = host.querySelector("[data-brinkae-add]"),
      sync = () => {
        secondary.disabled =
          primary.disabled || primary.getAttribute("aria-disabled") === "true";
        const label = primary.querySelector(".main-atc__label__text");
        !secondary.disabled &&
          label &&
          label.textContent.trim() !== "Comprar agora com desconto" &&
          (label.textContent = "Comprar agora com desconto");
      };
    return (
      sync(),
      new MutationObserver(sync).observe(primary, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["disabled", "aria-disabled"],
      }),
      state
    );
  }
  async function purchase(host, checkout) {
    const state = setup(host),
      form = host.querySelector("form"),
      primary = host.querySelector(".product-form__submit");
    if (
      state.busy ||
      primary.disabled ||
      primary.getAttribute("aria-disabled") === "true" ||
      !form.reportValidity() ||
      Number(primary.dataset.requiredFields || 0) >
        Number(primary.dataset.validFields || 0)
    )
      return;
    if (window.location.hostname.endsWith(".github.io")) {
      const data = new FormData(form),
        variantId = Number(data.get("id")),
        quantity = Math.max(1, Number(data.get("quantity")) || 1),
        status = host.querySelector(".brinkae-purchase-status");
      if (variantId) {
        state.busy = !0;
        host.setAttribute("aria-busy", "true");
        status.hidden = !1;
        status.textContent = "Abrindo checkout seguro\u2026";
        const checkoutUrl = new URL("../../checkout/", window.location.href);
        checkoutUrl.searchParams.set(
          "c",
          `${variantId}:${quantity}:super-buzz-drone-com-controle-remoto`
        );
        checkoutUrl.searchParams.set("v", "202610081400");
        const trackingKeys = [
          "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term",
          "src", "sck", "fbclid", "gclid", "ttclid"
        ];
        new URLSearchParams(window.location.search).forEach((value, key) => {
          if (trackingKeys.includes(key)) checkoutUrl.searchParams.set(key, value);
        });
        const cookie = name => {
          const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
          return match ? decodeURIComponent(match[1]) : "";
        };
        if (cookie("_fbp")) checkoutUrl.searchParams.set("fbp", cookie("_fbp"));
        if (cookie("_fbc")) checkoutUrl.searchParams.set("fbc", cookie("_fbc"));
        window.location.assign(checkoutUrl.href);
        return;
      }
    }
    const status = host.querySelector(".brinkae-purchase-status"),
      cartLink = host.querySelector(".brinkae-cart-link"),
      secondary = host.querySelector("[data-brinkae-add]");
    clearTimeout(state.feedbackTimer),
      (secondary.dataset.feedback = checkout ? "" : "loading"),
      (secondary.textContent = checkout
        ? "Comprar agora com desconto"
        : "Adicionando\u2026");
    const data = new FormData(form),
      signature = JSON.stringify(Array.from(data.entries()));
    data.delete("sections"),
      data.delete("sections_url"),
      data.set("sections", "cart-icon-bubble"),
      data.set("sections_url", window.location.pathname),
      (state.busy = !0),
      host.setAttribute("aria-busy", "true"),
      (status.hidden = !1),
      (cartLink.hidden = !0),
      (status.textContent = checkout
        ? "Preparando sua compra\u2026"
        : "Adicionando ao carrinho\u2026");
    let added = checkout && state.pendingCheckout === signature;
    try {
      if (!added) {
        const root2 = window.Shopify?.routes?.root || "/",
          result = await jsonRequest(root2 + "cart/add.js", {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
          });
        if (
          ((added = !0),
          (state.pendingCheckout = checkout ? signature : null),
          result.sections?.["cart-icon-bubble"])
        ) {
          const parsed = new DOMParser().parseFromString(
              result.sections["cart-icon-bubble"],
              "text/html"
            ),
            bubble = document.getElementById("cart-icon-bubble"),
            content = parsed.querySelector(".shopify-section");
          bubble && content && (bubble.innerHTML = content.innerHTML);
        }
      }
      if (!checkout) {
        (secondary.dataset.feedback = "success"),
          (secondary.textContent = "\u2713 Adicionado ao carrinho"),
          (state.feedbackTimer = setTimeout(() => {
            (secondary.dataset.feedback = ""),
              (secondary.textContent = "Adicionar ao carrinho");
          }, 3e3)),
          (status.textContent = "Produto adicionado ao carrinho."),
          (cartLink.hidden = !1);
        return;
      }
      status.textContent = "Abrindo checkout seguro\u2026";
      const root = window.Shopify?.routes?.root || "/",
        cart = await jsonRequest(root + "cart.json");
      if (!window.LordPay || !cart.item_count)
        throw new Error("Checkout indispon\xEDvel no momento.");
      window.location.assign(window.LordPay.checkoutUrl(cart));
    } catch (error) {
      (secondary.dataset.feedback = ""),
        (secondary.textContent = "Adicionar ao carrinho"),
        (status.textContent = added
          ? "O produto est\xE1 no carrinho, mas n\xE3o foi poss\xEDvel abrir o checkout. Tente Comprar agora novamente ou acesse o carrinho."
          : error.name === "AbortError" || error instanceof TypeError
          ? "N\xE3o foi poss\xEDvel confirmar a inclus\xE3o. Confira o carrinho antes de tentar novamente."
          : error.message),
        (cartLink.hidden = !1);
    } finally {
      (state.busy = !1), host.removeAttribute("aria-busy");
    }
  }
  document.addEventListener(
    "submit",
    (event) => {
      const host = event.target.closest("[data-brinkae-purchase]");
      host &&
        (event.preventDefault(),
        event.stopImmediatePropagation(),
        purchase(host, !0));
    },
    !0
  ),
    document.addEventListener(
      "click",
      (event) => {
        const button = event.target.closest(
          "[data-brinkae-add], [data-brinkae-purchase] .product-form__submit"
        );
        button &&
          (event.preventDefault(),
          event.stopImmediatePropagation(),
          purchase(
            button.closest("[data-brinkae-purchase]"),
            !button.hasAttribute("data-brinkae-add")
          ));
      },
      !0
    );
  function init() {
    document.querySelectorAll("[data-brinkae-purchase]").forEach(setup);
  }
  init(), document.addEventListener("shopify:section:load", init);
})();
//# sourceMappingURL=/cdn/shop/t/61/assets/brinkae-purchase.js.map?v=50791434450105487511791164981
