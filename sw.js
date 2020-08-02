const CACHE = 'themattfiles';

var app = [
  '404.html',
  'assets/icons/icon-128x128.png',
  'assets/icons/icon-144x144.png',
  'assets/icons/icon-152x152.png',
  'assets/icons/icon-192x192.png',
  'assets/icons/icon-384x384.png',
  'assets/icons/icon-512x512.png',
  'assets/icons/icon-72x72.png',
  'assets/icons/icon-96x96.png',
  'assets/img/penpen.svg',
  'main.js',
  'favicon.ico',
  'index.html',
];

self.addEventListener('install', (event) => {
  console.log('Installed.');

  event.waitUntil(
    caches.open(CACHE)
    .then((cache) => {
      console.log('Cache all.');
      return cache.addAll(app);
    })
  );
});


self.addEventListener('activate', () => {
  console.log('Activated.');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((req) => {
      console.log('Fetching: ', event.request.url);

      return req ||
        fetch(event.request)
        .then((res) => {
          return caches.open(CACHE)
                .then((cache) => {
                  console.log('Caching: ', event.request.url);
                  cache.put(event.request, res.clone());
                  return res;
                });
        });
    })
  );
});
