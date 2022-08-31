'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8240ef9184fd62b92c516bbfa106c8cf",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/andina.ttf": "2349c4ffb7293b5f88e8538ec577a8d4",
"assets/assets/fonts/googlesansebold.ttf": "4457817ac2b9993c65e81aa05828fe9c",
"assets/assets/fonts/googlesansmedium.ttf": "8d57e4014b18edef070d285746485115",
"assets/assets/fonts/googlesansregular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/images/appic.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/images/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/images/c1.png": "5b014d66e3c217ea69f470f70b75aa1d",
"assets/assets/images/c2.jpg": "af54aeb7f7b3bfb069d9a5216edd19df",
"assets/assets/images/c3.jpg": "658ab6b645b9f638892eae3b96b56d0e",
"assets/assets/images/c4.jpg": "381481354a37afae8c42e08efd3366fc",
"assets/assets/images/calc.png": "998b52d3c40ca1fc5fca60c77a45e8da",
"assets/assets/images/currency.png": "9dd74339c1e42131af21994673c9c331",
"assets/assets/images/EasyGo.png": "6ef6595ade8c704c506b5af290e2ca48",
"assets/assets/images/eddiehub.png": "02015c2c25dcc83de511b35fc6026e6f",
"assets/assets/images/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/images/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/images/hospital.png": "e1002717e2045e266b7a61399f3ee6ba",
"assets/assets/images/instafood.png": "b58841f6163c96010e1c05029aa5bbb9",
"assets/assets/images/jarvis.png": "2b9fac08f6f25e24439e2452a6f4398f",
"assets/assets/images/library.png": "7910b981d00fab69a1ec7283e239b25f",
"assets/assets/images/logo.png": "4471ba26c65793c8991ab088629841a8",
"assets/assets/images/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/images/p2.png": "e43cea13b331418a1870d800c7ef5dba",
"assets/assets/images/p3.png": "2ba1c2816b72a6a6f2e2b8b905c9362f",
"assets/assets/images/p4.png": "641d9a46918e5f7ab336fb935fa3023c",
"assets/assets/images/p5.png": "4c84b6a418f3e52ebdddb5d04e001ef7",
"assets/assets/images/p6.png": "af29d9044fe78eae804473b8ac657e66",
"assets/assets/images/p7.png": "9c559847edab9042a9fc527e586e5bbd",
"assets/assets/images/port.png": "8254821d702a4d9107c5719be2fb2ccf",
"assets/assets/images/pro1.png": "c37e6803ebef5841579786befb3ae2dc",
"assets/assets/images/pro2.png": "eb8b5b82ed8cf594dde530f9dd5187b7",
"assets/assets/images/pro3.jpg": "93a17ad216e1828b624dc476f234ac9f",
"assets/assets/images/pro4.jpg": "9f5dba9a9dea11c590715f1ad79bea24",
"assets/assets/images/pro5.png": "f9e135ff39da1826183b699f647643ec",
"assets/assets/images/pro6.png": "6bc0fbdb970d824b22037f934d839f1d",
"assets/assets/images/pro7.jpg": "c3d8afedc20e20137430bc92caec7fab",
"assets/assets/images/pro8.jpg": "a9ef69461ca4b862fe7ff3907e6fdf60",
"assets/assets/images/pro9.png": "732df9731d60122ffcad454f07998c48",
"assets/assets/images/Programmer.png": "87f2b0153f021771d64fe1ec20076855",
"assets/assets/images/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/images/tic.png": "1debee4b7e20cff4e761f132b54638d5",
"assets/assets/images/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/images/weather.png": "daedbb912c6234b29acfdd98ad428100",
"assets/FontManifest.json": "50389afa4e0404af28f102c32df25430",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a55e076b07120a93b56e5bf641726135",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "d7bb083cb11b7da711751673bd5da9a4",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "d7bb083cb11b7da711751673bd5da9a4",
"icons/Icon-512.png": "d7bb083cb11b7da711751673bd5da9a4",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "506dfdf82edf162b455da0ed6daa5c40",
"/": "506dfdf82edf162b455da0ed6daa5c40",
"loader.css": "29080fd324f6faab93cf2518ace66ae9",
"main.dart.js": "53b44e13978be1b5adf2dbc816970e38",
"manifest.json": "3d9b369265eb00a2b9f833c932327313",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
