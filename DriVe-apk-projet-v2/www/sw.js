// Service worker minimal — juste ce qu'il faut pour que Chrome
// considère le site comme "installable" (condition requise en plus du manifest).
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
