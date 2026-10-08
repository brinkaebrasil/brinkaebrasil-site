(() => {
  "use strict";

  const form = document.querySelector("#checkout-form");
  const params = new URLSearchParams(location.search);
  const PIX_KEY = "44769766000100";
  const PIX_MERCHANT = "BRINKAE BRINQUEDOS";
  const PIX_CITY = "SAO PAULO";
  const cartMatch = (params.get("c") || "50073265668338:1:super-buzz-drone-com-controle-remoto").match(/^(\d+):(\d+):([a-z0-9-]+)/i);
  const item = {
    variant: cartMatch ? cartMatch[1] : "50073265668338",
    quantity: cartMatch ? Math.max(1, Number(cartMatch[2])) : 1,
    handle: cartMatch ? cartMatch[3] : "super-buzz-drone-com-controle-remoto",
    price: 169.9,
  };

  const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const digits = value => value.replace(/\D/g, "");
  const emv = (id, value) => `${id}${String(value.length).padStart(2, "0")}${value}`;

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
    document.querySelector(".card-fields").hidden = input.value !== "card";
    if (input.value === "card") document.querySelector("#payment-error").hidden = true;
    renderTotals();
  }));

  const cardNumber = document.querySelector('[data-card-field="number"]');
  const expiry = document.querySelector('[data-card-field="expiry"]');
  const cvv = document.querySelector('[data-card-field="cvv"]');
  const cpf = document.querySelector('[data-card-field="cpf"]');
  cardNumber.addEventListener("input", event => event.target.value = digits(event.target.value).slice(0, 19).replace(/(\d{4})(?=\d)/g, "$1 "));
  expiry.addEventListener("input", event => event.target.value = digits(event.target.value).slice(0, 4).replace(/(\d{2})(?=\d)/, "$1/"));
  cvv.addEventListener("input", event => event.target.value = digits(event.target.value).slice(0, 4));
  cpf.addEventListener("input", event => event.target.value = digits(event.target.value).slice(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4"));

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!validateStep(1) || !validateStep(2)) return;
    if (form.payment.value === "card") {
      const pix = form.querySelector('input[name="payment"][value="pix"]');
      pix.checked = true;
      pix.dispatchEvent(new Event("change", { bubbles: true }));
      const paymentError = document.querySelector("#payment-error");
      paymentError.hidden = false;
      paymentError.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (form.payment.value === "pix") {
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
    document.querySelector("#pix-status").textContent = "Pagamento informado. Assim que o Pix for confirmado, o pedido seguirá para preparação.";
    document.querySelector("#pix-finished").disabled = true;
    document.querySelector("#pix-finished").textContent = "Pagamento informado ✓";
  });

  renderTotals();
})();
