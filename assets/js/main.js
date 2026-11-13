(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
  }

  const form = document.getElementById("feedback-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("visitor-name").value.trim();
      const topic = document.getElementById("visitor-topic").value.trim();
      const message = document.getElementById("visitor-message").value.trim();
      const body = `Nama: ${name}\nTopik: ${topic}\nPesan: ${message}`;
      const status = document.getElementById("form-status");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(body).then(() => {
          status.textContent = "Pesan berhasil disalin. Kamu dapat menempelkannya ke email atau kanal kontak Amar Tech setelah tersedia.";
        }).catch(() => {
          status.textContent = "Form demo: data tidak dikirim. Silakan salin pesan secara manual.";
        });
      } else {
        status.textContent = "Form demo: data tidak dikirim atau disimpan. Silakan salin pesan secara manual.";
      }
    });
  }
})();
