if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then((registration) => {
    // console.log('yee', registration);
  })
  .catch((error) => {
    console.log('nee', error);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var doc = document.querySelector('html');

  if (localStorage.getItem('use-dark-color-scheme') === null) {
    if (window.matchMedia) {
      localStorage.setItem('use-dark-color-scheme', window.matchMedia("(prefers-color-scheme: dark)").matches);
    } else {
      localStorage.setItem('use-dark-color-scheme', 'true');
    }
  }

  doc.setAttribute('dark', localStorage.getItem('use-dark-color-scheme'));

  window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => {
    localStorage.setItem('use-dark-color-scheme', e.matches);
    doc.setAttribute('dark', localStorage.getItem('use-dark-color-scheme'));
  });

  var gem = document.getElementById('gem');

  gem.addEventListener('click', () => {
    if (doc.getAttribute('dark') === 'true') {
      localStorage.setItem('use-dark-color-scheme', 'false');
    } else {
      localStorage.setItem('use-dark-color-scheme', 'true');
    }

    doc.setAttribute('dark', localStorage.getItem('use-dark-color-scheme')) ;
  }, false);
});
