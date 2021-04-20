'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "604f0cbaf7f92330ceb7e9bf5cdab479",
"index.html": "ea41386f0f2a4e6c04521bc143b06282",
"/": "ea41386f0f2a4e6c04521bc143b06282",
"manifest.json": "fa601d222387938b0b131fb540a61d1f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/fonts/zil.ttf": "06929d0268e6691ac8dfc3c661cda5b1",
"assets/assets/fonts/montserrat.otf": "4d17c0b5e95c89be0e1894ba27c78a36",
"assets/assets/fonts/MontserratAlternates-Regular.otf": "4d17c0b5e95c89be0e1894ba27c78a36",
"assets/assets/fonts/MontserratAlternates-Black.otf": "78bc56067742e60dab34672d751fc941",
"assets/assets/fonts/Gobold-Bold.ttf": "90fca1a98812288eb9b16117756e2483",
"assets/assets/images/game_won/nxt_button.png": "1488af1e93492c0d4361389a270eda23",
"assets/assets/images/game_won/total_savings.png": "0b7f0225af6a879ccaa1bc9c6c83c979",
"assets/assets/images/game_won/you_won.png": "238176d369ea6ee0f7e8e56b684e471d",
"assets/assets/images/winner_list/play_again_button.png": "0f90abf1be1d8eaa55164299f7f7fc0c",
"assets/assets/images/winner_list/top_winners_heading.png": "ae75d5ea1fca0aa8d91ae20cdeac4789",
"assets/assets/images/common/deal_destination.png": "6d8153505627059641ce121cd6e51e1a",
"assets/assets/images/common/app_title.png": "bb4dbc76b43d7ad4fa707057b3c57249",
"assets/assets/images/common/lulu_logo.png": "7557bda7d5fe3c69c9c7eb0e5bebd37d",
"assets/assets/images/common/positive.png": "8d04db403f2ac57e9bd1e26c5f2bb844",
"assets/assets/images/common/negative.png": "55ff2e243bda0aa7a80d7d9d51b777a4",
"assets/assets/images/common/timer_bg.png": "c032e104cb10ce074041074010f86553",
"assets/assets/images/common/bg.png": "f0bae06f238a9ed7c88a53946b47d5f6",
"assets/assets/images/splash/splash_bg.png": "a24bfa97b2ca6939e0a370b067b0ae95",
"assets/assets/images/splash/trolley_image.png": "d90e701151d828a798168c112e8f5275",
"assets/assets/images/splash/start_button.png": "4f7dc88b12fd0d3be45553a940e6e85b",
"assets/assets/images/instructions/play_button.png": "6b8358ca2e021c1a8bbb560b1688ccc6",
"assets/assets/images/instructions/instructions.png": "87e3c36346b46219aa8110963c1b6bec",
"assets/assets/images/home/peas_1.png": "ed5e8462f318d5d2f37ca58a2e492d70",
"assets/assets/images/home/bag_1.png": "2df9c82c566dc7ff7d4de1ecdd326a72",
"assets/assets/images/home/butter_2.png": "92763244f9eaa9b298cf97450518cf9b",
"assets/assets/images/home/pen_1.png": "caa2bb60d4c77620fe0b0f8fca2c498f",
"assets/assets/images/home/pencil_2.png": "7d4341ca90ba8c4891af9bc0b4606ea0",
"assets/assets/images/home/milk_1.png": "a082db71a468b5216fe61f7dbf0ac6ae",
"assets/assets/images/home/book_1.png": "4fcbc544d4d64c8f5ed92a5fefc42609",
"assets/assets/images/home/juice_2.png": "b7a457193b068280c461259aab50a01d",
"assets/assets/images/home/tuna_2.png": "65490296e330ad2775c5d600a7398cbf",
"assets/assets/images/home/soup_1.png": "0b4418be151a8a5df96a730091e3ad62",
"assets/assets/images/home/juice_1.png": "17862e274a981176906cd373a01abab8",
"assets/assets/images/home/ball_1.png": "e97acb8343b53df313f8958fac390189",
"assets/assets/images/home/milk_2.png": "53898b5cbeb5d4950b7892584d19bd1c",
"assets/assets/images/home/ball_2.png": "3b32be5bc46cba7f9ac056f230fa2cd4",
"assets/assets/images/home/bag_2.png": "660a44a7aa46f333c892008ff655fc30",
"assets/assets/images/home/apple_2.png": "6ad235e77a5a540044235a980115513e",
"assets/assets/images/home/soup_2.png": "6b8600e7388e35faceb1d602b556ae53",
"assets/assets/images/home/peas_2.png": "8c7b11ff4e1b8940f00372eabc42c84a",
"assets/assets/images/home/jelly_1.png": "5702ac6d858774568e5d877880f37692",
"assets/assets/images/home/apple_1.png": "29c17a62d801989d3e17f7c4c794ed32",
"assets/assets/images/home/jelly_2.png": "5f8688c2560e882b46cacb6425a9a131",
"assets/assets/images/home/jam_1.png": "d8d1d5ba3de80e446264b7136a304c27",
"assets/assets/images/home/tuna_1.png": "2252e49a92f2ecbd904e6c15d5bc554b",
"assets/assets/images/home/book_2.png": "64b9851b40bb5600e06cbdcf2888e8ac",
"assets/assets/images/home/pencil_1.png": "c12074e7f75fcf816f5b1639e7a2c735",
"assets/assets/images/home/color_pencil_1.png": "bc9b09f4934ead767c0261876fc5812a",
"assets/assets/images/home/jam_2.png": "e4925bb63585ed9808785c3934f47c95",
"assets/assets/images/home/trolley.png": "69aa6df5b7033fbc6e1c45e3e90ef36f",
"assets/assets/images/home/butter_1.png": "a2c8bef4af781fa7be9d31dd07421dc6",
"assets/assets/images/home/pen_2.png": "adba2b1c22a96900bf2b58db3ffce84d",
"assets/assets/images/home/color_pencil_2.png": "b2e096976aba77e91a9f99a4f40f3a19",
"assets/assets/images/user_details/enter_button.png": "e122f27c302e3988cfb4e423621d2b2d",
"assets/assets/images/user_details/enter_details_title.png": "30d2f150b29b4a9c83d60fd48884de7a",
"assets/NOTICES": "63c95c1c4acc91014ace61270f545aab",
"assets/AssetManifest.json": "f0d9e2d5027d4fd7bad44518014cf3a2",
"assets/FontManifest.json": "30e1dc95bc69074db01bedc1b01a07ff",
"icons/Icon-192.png": "08d83a5acbee2e3c68516b89dcc43b92",
"icons/Icon-512.png": "9545f35869874dd5495545ab4f94b720",
"main.dart.js": "68bcc6db9315e70d3ac635e0594ef953",
"favicon.png": "109244899a2704063a86bcc81b62ba4c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
