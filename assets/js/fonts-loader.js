(function () {
  if (!('fonts' in document)) return;

  Promise.race([
    document.fonts.load('1em "Montserrat"'),
    new Promise(function (resolve) {
      setTimeout(resolve, 800);
    })
  ]).then(function (res) {
    if (res && res.length) return;

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap';
    document.head.appendChild(link);
  });
})();
