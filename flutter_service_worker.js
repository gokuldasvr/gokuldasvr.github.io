'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "9cb336b304e97a85033ad00f7dff6512",
"/main.dart.js": "663be839b96948f505a6adf62447b55f",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "9b2c6709bd2845ee1054a4d37f427087",
"/assets/LICENSE": "305a2fac8def79acdd1f039fe8646f3d",
"/assets/AssetManifest.json": "d3995406e6bc75c11b5d4216917c44d3",
"/assets/FontManifest.json": "bfe53b2ad00884e9b5fb3187b6a76654",
"/assets/fonts/dancing_script/DancingScript-Bold.ttf": "76c145c2f3f1c17fd11ec9a3740521f6",
"/assets/fonts/dancing_script/DancingScript-Regular.ttf": "c4434ab21f7144bbcf88c9a35ae3f075",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
