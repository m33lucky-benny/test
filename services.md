---
layout: service
title: Website Audit & SEO Services
description: Free tools to reveal slow speed, SEO errors, and Google issues. Get expert fixes via contact.
permalink: /services/
schema: services
---


<style>
/* =========================
   SERVICES PAGE (SCOPED)
   ========================= */

.services-page {
  background: #0a0a0a;
  color: #fff;
}

/* Hero */
.services-hero {
  padding: 3rem 1rem;
  text-align: center;
}

.services-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.services-page h2 {
  font-size: 2rem;
  margin: 3rem 0 1rem;
  text-align: center;
}

.services-page p {
  font-size: 1.1rem;
  max-width: 650px;
  margin: 0 auto 1.5rem;
  text-align: center;
  color: #ccc;
}

/* CTA Button */
.cta-btn {
  background: #FF10F0;
  color: #fff;
  padding: 1.3rem 3rem;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin: 2rem auto;
  transition: all 0.3s;
}

.cta-btn:hover {
  box-shadow: 0 0 25px #FF10F0;
  transform: scale(1.05);
}

/* =========================
   TOOL GRID
   ========================= */

.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.tool-btn {
  background: #FF10F0;
  color: #fff !important;
  padding: 1.5rem 2rem;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 8px 25px rgba(255,16,240,0.3);
  transition: all 0.3s;
  height: 50px;
}

.tool-btn small {
  font-size: 0.85rem;
  font-weight: normal;
  opacity: 0.9;
  margin-top: 0.5rem;
}

.tool-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(255,16,240,0.6);
}

/* =========================
   RESULTS SECTION
   ========================= */

.results-section {
  max-width: 1000px;
  margin: 4rem auto;
  text-align: center;
  padding: 0 1rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.result-card {
  padding: 2rem;
  border-radius: 15px;
}

.result-before {
  background: rgba(255, 0, 0, 0.1);
  border-left: 5px solid #ff4444;
}

.result-after {
  background: rgba(0, 255, 0, 0.1);
  border-left: 5px solid #44ff44;
}

.result-before h3 {
  color: #ff4444;
}

.result-after h3 {
  color: #44ff44;
}

.result-card a {
  color: #FF10F0;
  font-weight: bold;
  font-size: 1.2rem;
  display: inline-block;
  margin-bottom: 1rem;
}

.result-card img {
  max-width: 100%;
  border-radius: 10px;
  margin-top: 1rem;
}

/* Mobile */
@media (max-width: 768px) {
  .services-page h1 { font-size: 2rem; }
}
</style>

<div class="services-page">

  <!-- HERO -->
  <div class="services-hero">
    <h1>Is Your Website Losing Customers?</h1>
    <p>
      Slow speed, SEO errors, and Google issues silently kill traffic and sales.
      Test your site for free below.
    </p>

   
  </div>

  <!-- TOOLS -->
  <h2>Test Your Website Performance</h2>

  <div class="tool-grid">
    <a
      href="https://pagespeed.web.dev/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
      class="tool-btn"
    >
      ⚡ PageSpeed Insights
      <small>Mobile & Desktop Scores</small>
    </a>

    <a
      href="https://gtmetrix.com/"
      target="_blank"
      rel="noopener noreferrer"
      class="tool-btn"
    >
      📊 GTmetrix
      <small>Detailed Waterfall Analysis</small>
    </a>

    <a
      href="https://www.webpagetest.org/"
      target="_blank"
      rel="noopener noreferrer"
      class="tool-btn"
    >
      🚀 WebPageTest
      <small>Global Test Locations</small>
    </a>
  </div>

  <!-- RESULTS -->
  <div class="results-section">
    <h2>Real Results: Before → After Our Fixes</h2>
    <p>Singapore business site — Mobile PageSpeed</p>

    <div class="results-grid">

      <div class="result-card result-before">
        <h3>🚨 BEFORE (Slow)</h3>
        <a
          href="https://pagespeed.web.dev/analysis/https-consultant-ebiya-sg/378aufb42z?form_factor=mobile"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Test Results
        </a>

        <img
          src="/assets/images/before.png"
          alt="Before optimization: poor PageSpeed score"
          loading="lazy"
        >
      </div>

      <div class="result-card result-after">
        <h3>✅ AFTER (Fast)</h3>
        <a
          href="https://pagespeed.web.dev/analysis/https-consultant-ebiya-sg/zg5gta45t6?form_factor=mobile"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 Test Results
        </a>

        <img
          src="/assets/images/after.png"
          alt="After optimization: excellent PageSpeed score"
          loading="lazy"
        >
      </div>

    </div>

    <a href="/contact/" class="cta-btn">
      Get Your 90+ Score → Free Audit
    </a>
  </div>

</div>
