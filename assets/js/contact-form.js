<script>
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const iframe = document.getElementById('hidden_iframe');
  let isSubmitting = false;

  let lastSubmitTime = 0;
  const SUBMIT_COOLDOWN = 3000; // 3 seconds

  form.addEventListener('submit', function (e) {

    /* =========================
       STEP 2: Honeypot check
    ========================= */
    const honeypot = form.querySelector('input[name="website"]');
    if (honeypot && honeypot.value !== '') {
      e.preventDefault();
      return false;
    }

    /* =========================
       STEP 3: Rate limiting
    ========================= */
    const now = Date.now();
    if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
      e.preventDefault();
      return false;
    }

    /* =========================
       STEP 4: Client-side validation
    ========================= */
    if (!validateForm(form)) {
      e.preventDefault();
      return false;
    }

    /* =========================
       STEP 5: Input sanitization (XSS)
    ========================= */
    sanitizeFormInputs(form);

    /* =========================
       STEP 6: Hidden iframe submission lock
    ========================= */
    isSubmitting = true;
    lastSubmitTime = now;
  });

  /* =========================
     STEP 6 (continued):
     Detect successful iframe submission
  ========================= */
  if (iframe) {
    iframe.addEventListener('load', function () {
      if (!isSubmitting) return;

      // Submission completed inside iframe
      isSubmitting = false;

      // Optional hooks (safe to leave empty)
      // form.reset();
      // console.log('Form submitted successfully');
    });
  }

  /* =========================
     Validation helpers
  ========================= */

  function validateForm(form) {
    const name = form.querySelector('input[name="entry.1655243000"]');
    const email = form.querySelector('input[name="entry.2083704905"]');
    const contact = form.querySelector('select[name="entry.162991437"]');
    const message = form.querySelector('textarea[name="entry.1755926505"]');

    if (
      !name.value.trim() ||
      !email.value.trim() ||
      !contact.value ||
      !message.value.trim()
    ) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      return false;
    }

    const nameRegex = /^[A-Za-z\s\-']+$/;
    if (!nameRegex.test(name.value)) {
      return false;
    }

    return true;
  }

  function sanitizeFormInputs(form) {
    const fields = form.querySelectorAll(
      'input[type="text"], input[type="email"], textarea'
    );

    fields.forEach(field => {
      field.value = sanitizeInput(field.value);
    });
  }

  function sanitizeInput(value) {
    const div = document.createElement('div');
    div.textContent = value;
    let clean = div.innerHTML;

    clean = clean.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ''
    );
    clean = clean.replace(/javascript:/gi, '');
    clean = clean.replace(/on\w+\s*=/gi, '');
    clean = clean.replace(/<iframe|<object|<embed/gi, '');

    return clean.trim();
  }
});
</script>
