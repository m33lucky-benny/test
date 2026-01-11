---
layout: page
title: Contact Us
description: Get a quote for SEO, a new website, or ongoing maintenance.
permalink: /contact/
---

<div class="contact-wrap">
  <div class="contact-intro">
    <p>
      Looking to improve your search rankings, website performance, or online visibility?
      Send a message below and we'll reply within 1–2 business days.
    </p>

    <p class="contact-note">
      Fields marked <span class="required" aria-hidden="true">*</span>
      <span class="sr-only">are required</span>.
    </p>
  </div>

  <form
    id="contact-form"
    action="https://formspree.io/f/mykgqeew"
    method="POST"
    class="contact-form"
    target="hidden_iframe"
    novalidate
  >
    <div class="form-row">
      <div class="form-group">
        <label for="name">
          Name <span class="required" aria-hidden="true">*</span>
          <span class="sr-only">required</span>
        </label>
        <input type="text" id="name" name="entry.1655243000" autocomplete="name" required>
      </div>

      <div class="form-group">
        <label for="email">
          Email <span class="required" aria-hidden="true">*</span>
          <span class="sr-only">required</span>
        </label>
        <input type="email" id="email" name="entry.2083704905" autocomplete="email" required>
      </div>
    </div>

    <div class="form-group">
      <label for="contact-method">Preferred contact method</label>
      <select id="contact-method" name="entry.162991437">
        <option value="email">Email</option>
        <option value="whatsapp">WhatsApp</option>
        <option value="instagram">Instagram</option>
        <option value="tiktok">TikTok</option>
      </select>
    </div>

    <div class="form-group">
      <label for="message">
        Message <span class="required" aria-hidden="true">*</span>
        <span class="sr-only">required</span>
      </label>
      <textarea id="message" name="entry.1755926505" rows="7" required></textarea>
    </div>

    <input type="hidden" name="_subject" value="New contact from ebiya.sg">
    <input type="text" name="_gotcha" style="display:none">

    <div class="form-actions">
      <button type="submit" class="submit-btn">Send message</button>
      <div id="form-status" class="form-status" role="status" aria-live="polite"></div>
    </div>
  </form>
</div>

<style>
/* COMPLETE: All layout + your neon pink button */
.contact-wrap {
  max-width: 720px;
  margin: 0 auto;
}

.contact-intro p {
  margin: 0 0 0.75rem 0;
}

.contact-note {
  font-size: 0.95rem;
  opacity: 0.85;
}

.contact-form {
  margin-top: 1.25rem;
  padding: 1.25rem;
  border: 1px solid var(--border, rgba(0,0,0,0.10));
  border-radius: 12px;
  background: var(--surface2, rgba(0,0,0,0.02));
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}

@media (max-width: 720px) {
  .form-row { 
    grid-template-columns: 1fr; 
  }
}

.form-group {
  margin: 0 0 0.9rem 0;
}

label {
  display: block;
  font-weight: 600;
  margin: 0 0 0.35rem 0;
  color: var(--text);
}

input, select, textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 0.7rem 0.8rem;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--light, #fff);
  color: var(--dark1);
}

input::placeholder, textarea::placeholder {
  color: var(--muted);
}

input:focus, select:focus, textarea:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-color: var(--primary);
}

.required { 
  color: var(--brand-kieron1, #32CD32); 
}

.form-actions {
  display: flex;
  justify-content: center;      /* Centers button */
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
}

/* NEON PINK BUTTON - matches your CSS vars */
.submit-btn {
  padding: 0.9rem 2rem;
  border: 2px solid var(--primary);
  border-radius: 999px;
  background: transparent;
  color: var(--primary);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submit-btn:hover:not(:disabled) {
  background: var(--primary);
  color: var(--dark1);
  box-shadow: 
    0 0 20px var(--primary),
    0 0 40px var(--secondary);
  transform: translateY(-2px);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

.form-status {
  display: none;
  padding: 0.6rem 0.75rem;
  border-radius: 10px;
  font-size: 0.95rem;
}

.form-status.success {
  display: block;
  background: rgba(50, 205, 50, 0.10);  /* lime green */
  border: 1px solid var(--brand-kieron1);
  color: var(--brand-kieron1);
}

.form-status.error {
  display: block;
  background: rgba(176, 0, 32, 0.10);
  border: 1px solid #b00020;
  color: #b00020;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>

<script>
(function () {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  if (!form || !statusDiv) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    statusDiv.style.display = 'none';
    statusDiv.className = 'form-status';
    statusDiv.textContent = '';

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (!response.ok) throw new Error('Form failed');
        return response.json();
      })
      .then(() => {
        statusDiv.className = 'form-status success';
        statusDiv.textContent = "Thank you—message received. We'll get back to you soon.";
        statusDiv.style.display = 'block';
        form.reset();
      })
      .catch(() => {
        statusDiv.className = 'form-status error';
        statusDiv.textContent =
          'Something went wrong. Please try again, or contact us via social media.';
        statusDiv.style.display = 'block';
      })
      .finally(() => {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      });
  });
})();
</script>
