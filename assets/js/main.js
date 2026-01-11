document.addEventListener('DOMContentLoaded', function () {

  /* =========================
     MOBILE NAVIGATION
  ========================= */

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!isExpanded));
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (
        !navToggle.contains(event.target) &&
        !navLinks.contains(event.target) &&
        navLinks.classList.contains('active')
      ) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
      }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =========================
     FOOTER EMAIL HANDLER
     (CSP-safe replacement for onclick)
  ========================= */

  document.querySelectorAll('.footer-email').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const email = this.dataset.email;
      if (!email) return;

      if (window.innerWidth < 768) {
        // Mobile → default mail app
        window.location.href = `mailto:${email}`;
      } else {
        // Desktop → Gmail compose
        window.open(
          `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`,
          '_blank',
          'noopener'
        );
      }
    });
  });

});



// document.addEventListener('DOMContentLoaded', function() {
//   const navToggle = document.querySelector('.nav-toggle');
//   const navLinks = document.querySelector('.nav-links');
  
//   if (navToggle) {
//     navToggle.addEventListener('click', function() {
//       const isExpanded = this.getAttribute('aria-expanded') === 'true';
//       this.setAttribute('aria-expanded', !isExpanded);
//       navLinks.classList.toggle('active');
//     });
//   }

//   // Close menu when clicking outside
//   document.addEventListener('click', function(event) {
//     const isClickInside = navToggle.contains(event.target) || navLinks.contains(event.target);
//     if (!isClickInside && navLinks.classList.contains('active')) {
//       navToggle.setAttribute('aria-expanded', 'false');
//       navLinks.classList.remove('active');
//     }
//   });

//   // Close menu when clicking a link
//   const navLinkElements = document.querySelectorAll('.nav-link');
//   navLinkElements.forEach(link => {
//     link.addEventListener('click', function() {
//       navLinks.classList.remove('active');
//       navToggle.setAttribute('aria-expanded', 'false');
//     });
//   });
// });
