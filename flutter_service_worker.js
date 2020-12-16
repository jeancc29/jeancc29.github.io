'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6477aac742f5c3096bdb0b8cef88fc10",
"assets/FontManifest.json": "d8d2d0ef8251dc82cc4fd8e499b2680b",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/fonts/OpenSans-BoldItalic.ttf": "3a8113737b373d5bccd6f71d91408d16",
"assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/fonts/OpenSans-ExtraBoldItalic.ttf": "37f52104364c2eb5482fd85777bda0ac",
"assets/fonts/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/fonts/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/fonts/OpenSans-LightItalic.ttf": "c147d1302b974387afd38590072e7294",
"assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/fonts/OpenSans-SemiBoldItalic.ttf": "4f04fe541ca8be9b60b500e911b75fb5",
"assets/fonts/ProductSans-Black.ttf": "909eeb19f58cc8c0bc45422f2745cc8a",
"assets/fonts/ProductSans-BlackItalic.ttf": "d165693949a2366b8baef8ec592417dd",
"assets/fonts/ProductSans-Bold.ttf": "a19a7b108b2e3961fc855c6ea5a6546f",
"assets/fonts/ProductSans-BoldItalic.ttf": "281acf49bbcece01beff18a4a59f9bfd",
"assets/fonts/ProductSans-Italic.ttf": "af05b47de35fd5a5960ad1e440a4c0c7",
"assets/fonts/ProductSans-Light.ttf": "5ea2ab343da06f7eb96ea959895665ea",
"assets/fonts/ProductSans-LightItalic.ttf": "a7b47650ea4bfb29cc284c9d383a4db1",
"assets/fonts/ProductSans-Medium.ttf": "9c51beb79b8ab173abd924ce39178f0b",
"assets/fonts/ProductSans-MediumItalic.ttf": "b7efc2304b5103df6a75befa88d42d40",
"assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/fonts/ProductSans-Thin.ttf": "3c36b2574c62d41428b496b7512e952d",
"assets/fonts/ProductSans-ThinItalic.ttf": "4b3b9e82158bd2a00b97eba4dd8d6cfa",
"assets/fonts/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"assets/fonts/Roboto-BlackItalic.ttf": "99682a78fa4fe61e1177b94757336bbf",
"assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/fonts/Roboto-BoldItalic.ttf": "5b44818d2b9eda3e23cd5edd7b49b7d5",
"assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/fonts/Roboto-LightItalic.ttf": "a3ce4440f2abf76f4a1b14b83920138c",
"assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/fonts/Roboto-MediumItalic.ttf": "cf23e1bb619029496260760b72aebd30",
"assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/fonts/Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"assets/fonts/Roboto-ThinItalic.ttf": "35a9c89aff1396595ad345e378a32aca",
"assets/images/logo.png": "fc139cdbe6deb1b8ca2a16641043e3e9",
"assets/images/logo_icono_aqua.png": "5e312b8c0268f37217315d03ca1548b4",
"assets/images/logo_icono_azul.png": "baab99d7e141f44f33c86af486f75288",
"assets/images/logo_icono_morado.png": "025b13b2e188d81761c2e952c63de369",
"assets/images/logo_icono_naranja.png": "931f26d5084c69500f94ccd81ba0dfb8",
"assets/images/logo_icono_rojo.png": "62e10c1cadbfde973f655c412767d7dd",
"assets/images/logo_icono_rosado.png": "cf163aa8631d5fc2f10bae4c2485aafc",
"assets/images/logo_icono_verde.png": "3e592fad815bdf2421181bf418ab5a2a",
"assets/images/p1.jpeg": "a12a6a8ded0c41eab514ce60a6f92fa9",
"assets/images/p1_sin_fondo.png": "c2dfc16238c50fce5e0926a4b6e02c30",
"assets/images/p2.jpeg": "57cc6bc6cd1d600e27332baecccaabd8",
"assets/images/p2_sin_fondo.png": "abc6062f730f927d1a3f0d9cc9f543f6",
"assets/images/p3.jpeg": "9eac240308ceb130080c804aeb176d06",
"assets/images/p4.jpeg": "8fa18405e18a6485e7a496a2bc279d7f",
"assets/images/p5.jpeg": "1ec246a20260fbd298299f5ed32a107b",
"assets/images/p5_sin_fondo.png": "2ecae6b2738c33696366b6d94396b872",
"assets/images/p6.jpeg": "bb209549eacc2304cce431e1a35dd400",
"assets/images/p7.jpeg": "faa1186f8264d78acab6f90220935cb7",
"assets/images/Untitled.png": "dbea34f99363f2ce99abc98e73004639",
"assets/images/user.png": "1300018473cc0038187aaa0e2604fa27",
"assets/NOTICES": "5b7f1cfb58f6b26a1fa25b6daa4d2e9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3be8111e3ac7f2a7a3cba2af98e5aedb",
"/": "3be8111e3ac7f2a7a3cba2af98e5aedb",
"main.dart.js": "3ff57a5cd67d8f76b6a5a002e1bd1437",
"manifest.json": "5dbaea48922ffe61c3abf6843474db1c",
"version.json": "cf161938966a973e5d4ed5c18749ba07"
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
