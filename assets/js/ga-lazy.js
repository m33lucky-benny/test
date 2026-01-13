(function () {
  var loaded = false;

  function loadGA() {
    if (loaded) return;
    loaded = true;

    var s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XTNWTH95L0';
    s.async = true;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-XTNWTH95L0');
  }

  ['scroll', 'mousemove', 'touchstart'].forEach(function (evt) {
    window.addEventListener(evt, loadGA, { once: true });
  });
})();
