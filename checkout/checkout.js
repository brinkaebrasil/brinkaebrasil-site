(() => {
  "use strict";

  const form = document.querySelector("#checkout-form");
  const params = new URLSearchParams(location.search);
  const cartMatch = (params.get("c") || "50073265668338:1:super-buzz-drone-com-controle-remoto").match(/^(\d+):(\d+):([a-z0-9-]+)/i);
  const item = {
    variant: cartMatch ? cartMatch[1] : "50073265668338",
    quantity: cartMatch ? Math.max(1, Number(cartMatch[2])) : 1,
    handle: cartMatch ? cartMatch[3] : "super-buzz-drone-com-controle-remoto",
    price: 169.9,
  };

  const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const digits = value => value.replace(/\D/g, "");

  function renderTotals() {
    const subtotal = item.price * item.quantity;
    document.querySelector("#quantity").textContent = item.quantity;
    document.querySelector("#product-total").textContent = money(subtotal);
    document.querySelector("#subtotal").textContent = money(subtotal);
    document.querySelector("#total").textContent = money(subtotal);
    document.querySelector("#pix-total").textContent = money(subtotal * 0.9);
  }

  function showStep(number) {
    document.querySelectorAll(".step").forEach(step => step.classList.toggle("active", Number(step.dataset.step) === number));
    document.querySelectorAll("[data-progress]").forEach(progress => {
      const current = Number(progress.dataset.progress);
      progress.classList.toggle("active", current === number);
      progress.classList.toggle("done", current < number);
    });
    scrollTo({ top: 0, behavior: "smooth" });
  }

  function validateStep(number) {
    const fields = [...document.querySelector(`[data-step="${number}"]`).querySelectorAll("input[required]")];
    let valid = true;
    fields.forEach(field => {
      const fieldValid = field.checkValidity() && (!field.name.includes("phone") || digits(field.value).length >= 10);
      field.classList.toggle("invalid", !fieldValid);
      if (!fieldValid && valid) field.focus();
      valid = valid && fieldValid;
    });
    return valid;
  }

  document.addEventListener("click", event => {
    const next = event.target.closest("[data-next]");
    const back = event.target.closest("[data-back]");
    const qty = event.target.closest("[data-qty]");
    if (next) {
      const current = Number(next.closest("[data-step]").dataset.step);
      if (validateStep(current)) showStep(Number(next.dataset.next));
    }
    if (back) showStep(Number(back.dataset.back));
    if (qty) {
      item.quantity = Math.min(20, Math.max(1, item.quantity + Number(qty.dataset.qty)));
      renderTotals();
    }
  });

  form.phone.addEventListener("input", event => {
    const value = digits(event.target.value).slice(0, 11);
    event.target.value = value.length > 10
      ? value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
      : value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  });

  form.zipcode.addEventListener("input", async event => {
    const cep = digits(event.target.value).slice(0, 8);
    event.target.value = cep.replace(/(\d{5})(\d{0,3})/, "$1-$2");
    if (cep.length !== 8) return;
    const status = document.querySelector(".cep-status");
    status.textContent = "Buscando endereço…";
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const address = await response.json();
      if (address.erro) throw new Error();
      form.street.value = address.logradouro || "";
      form.neighborhood.value = address.bairro || "";
      form.city.value = address.localidade || "";
      form.state.value = address.uf || "";
      status.textContent = "Endereço encontrado.";
      form.number.focus();
    } catch {
      status.textContent = "Preencha o endereço manualmente.";
    }
  });

  document.querySelectorAll('input[name="payment"]').forEach(input => input.addEventListener("change", () => {
    document.querySelectorAll(".payment").forEach(option => option.classList.toggle("selected", option.contains(input) && input.checked));
  }));

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!validateStep(1) || !validateStep(2)) return;
    const destination = new URL("https://pagamento.brinkaebrasil.com/checkout");
    destination.searchParams.set("loja", "brinkae");
    destination.searchParams.set("c", `${item.variant}:${item.quantity}:${item.handle}`);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "sck", "fbclid", "gclid", "ttclid", "fbp", "fbc"].forEach(key => {
      if (params.get(key)) destination.searchParams.set(key, params.get(key));
    });
    destination.searchParams.set("metodo", new FormData(form).get("payment"));
    document.querySelector(".loading").hidden = false;
    location.assign(destination.href);
  });

  renderTotals();
})();
