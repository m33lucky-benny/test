/**
 * Mobile navigation toggle
 * - Handles hamburger open/close
 * - Updates aria-expanded for accessibility
 * - Closes menu on outside click or link click
 */

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      navLinks.classList.toggle('active');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = navToggle.contains(event.target) || navLinks.contains(event.target);
    if (!isClickInside && navLinks.classList.contains('active')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('active');
    }
  });

  // Close menu when clicking a link
  const navLinkElements = document.querySelectorAll('.nav-link');
  navLinkElements.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
});
