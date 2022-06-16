'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cedcbfa9e7669032bae2c7ea7b3f15d5",
"assets/FontManifest.json": "d8d2d0ef8251dc82cc4fd8e499b2680b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
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
"assets/images/creditcard.png": "6d35cdbf8911f657c6d913803933d018",
"assets/images/facebook-blue.svg": "5b4d1de7f598ab3ef1627923f1a4084c",
"assets/images/google-color.svg": "a06736a988863aad08707477edd7f54b",
"assets/images/laptop-with-blank-screen-isolated-transparent-background_150973-4.jpg": "769c89659ad76e26da7d1035278d0f0d",
"assets/images/loan.png": "8fc14a06f5467777264b657d7c1ad4bc",
"assets/images/login.png": "44bdb33474133bfd7e9cb674bbcd7bec",
"assets/images/logo.png": "fc139cdbe6deb1b8ca2a16641043e3e9",
"assets/images/logo_icono_aqua.png": "5e312b8c0268f37217315d03ca1548b4",
"assets/images/logo_icono_azul.png": "baab99d7e141f44f33c86af486f75288",
"assets/images/logo_icono_morado.png": "025b13b2e188d81761c2e952c63de369",
"assets/images/logo_icono_naranja.png": "931f26d5084c69500f94ccd81ba0dfb8",
"assets/images/logo_icono_rojo.png": "62e10c1cadbfde973f655c412767d7dd",
"assets/images/logo_icono_rosado.png": "cf163aa8631d5fc2f10bae4c2485aafc",
"assets/images/logo_icono_verde.png": "3e592fad815bdf2421181bf418ab5a2a",
"assets/images/newprofile.jpg": "0f38a5cd8ca1504bfb46bf64ce91f120",
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
"assets/images/profile2.jpg": "3bc281e1079b3341055cc6241a10c750",
"assets/images/Untitled.png": "dbea34f99363f2ce99abc98e73004639",
"assets/images/user.png": "1300018473cc0038187aaa0e2604fa27",
"assets/images/wallet.png": "27cea0268c2f0cdcbab2365fa24ec204",
"assets/images/wallet_2.png": "a954a065707f58e73c95b781e4d96791",
"assets/images/wallet_3.png": "ca0e983b463780c6710fec9479b9c7f2",
"assets/images/wallet_4.png": "886c960550bef37453707fe2c26d9db7",
"assets/images/wallet_5.png": "ea36b9c413476fce024181f926322b80",
"assets/NOTICES": "09a5ec7af408ba1b7a3b00899708b696",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/android-chrome-192x192.png": "e0fbed6d36f6264488f93f57c85ef4fc",
"icons/android-chrome-512x512.png": "2fc4eed6c0bc19982bfeba5ae571c9cc",
"icons/apple-touch-icon.png": "5daf508785fd6fa68761fafa47842047",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "76d78eec977d62a6e926c8f50069a1d5",
"/": "76d78eec977d62a6e926c8f50069a1d5",
"logo.png": "e0fbed6d36f6264488f93f57c85ef4fc",
"main.dart.js": "f635637882b300e1c951dd09405cc484",
"manifest.json": "f8f3c1c226f3b4b0d7db86b076bfdd7a",
"sql-wasm.js": "04b960431ad6c0314a115558cff07880",
"sql-wasm.wasm": "ea7edc8cc0702b48cc93bf41e5b6cc61",
"version.json": "54738893742ee4dedc90c41e484718bb"
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
