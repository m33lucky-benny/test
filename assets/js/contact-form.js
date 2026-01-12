document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  let lastSubmitTime = 0;
  const SUBMIT_COOLDOWN = 3000; // 3 seconds

  form.addEventListener('submit', function (e) {
    /* =========================
       Honeypot check
    ========================= */

    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value !== '') {
      e.preventDefault();
      return false;
    }

    /* =========================
       Rate limiting
    ========================= */

    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
      e.preventDefault();
      return false;
    }

    lastSubmitTime = now;
  });
});
