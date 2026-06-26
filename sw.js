const CACHE_NAME = 'cat-game-v2'; // バージョンを少し上げました
const ASSETS = [
  './',
  './index.html',
  './start.png',
  './panic.png',
  './gameover.png',
  './clear.png',
  './icon.png', // 🐱 アイコン画像を追加！
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});