// Service worker mínimo — só existe para tornar o app instalável.
// O app sempre busca dados novos do Airtable, então não guarda nada em cache.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
