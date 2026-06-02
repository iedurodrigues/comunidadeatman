// Importa as funções de notificação do OneSignal
importScripts('OneSignalSDKWorker.js');

const CACHE_NAME = 'atman-v4';

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
