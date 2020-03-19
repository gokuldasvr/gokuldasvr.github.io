'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "f25d5a82de8597057395ba2605c320e0",
"/favicon.jpeg": "0ed895bddc2f8971109cf5b087e09e35",
"/main.dart.js": "9696bd163920a2281022914ff15c2295",
"/icons/Icon-512.jpeg": "df76f0ba7c567008bf5de6ebef9d5bb2",
"/icons/Icon-192.jpeg": "0ed895bddc2f8971109cf5b087e09e35",
"/manifest.json": "d3c274d7340a635f1e82fae9c76284bd",
"/assets/LICENSE": "5f7fa55feef3338a64e944ebfeb3e9a9",
"/assets/AssetManifest.json": "4311f4484335584946f1cf21c8866539",
"/assets/FontManifest.json": "514cf0c2611612726c1ab0c612c4d650",
"/assets/fonts/dancing_script/DancingScript-Bold.ttf": "76c145c2f3f1c17fd11ec9a3740521f6",
"/assets/fonts/dancing_script/DancingScript-Regular.ttf": "c4434ab21f7144bbcf88c9a35ae3f075",
"/assets/fonts/exo/Exo-Regular.ttf": "8bee4f80d69101a696aea9b436835337",
"/assets/fonts/exo/Exo-Light.ttf": "300557d530b5b680be682bb0f5611183",
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
