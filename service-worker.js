const cacheName = 'audioguida-cache-v1';
const filesToCache = [
  'index.html',
  'audio.html',
  'mappa.html',
  'style.css',
  'app.js',
  'audio/museo.mp3',
  'audio/piazza.mp3',
  'audio/monumento.mp3'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
