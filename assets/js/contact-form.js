document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    const honeypot = form.querySelector('input[name="website"]');

    if (honeypot && honeypot.value !== '') {
      e.preventDefault();
      return false;
    }
  });
});
