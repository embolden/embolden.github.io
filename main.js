if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then((registration) => {
    console.log('yee', registration);
  })
  .catch((error) => {
    console.log('nee', error);
  });
}
