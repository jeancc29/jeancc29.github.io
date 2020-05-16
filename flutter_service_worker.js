'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "42b4deeda360f46739ef7a9fa9c079d1",
"assets/assets/images/cat.jpg": "a5054e7ec1cefc57f7955fb3524ea7f5",
"assets/assets/images/ic_launcher.png": "3092c2d9273916fa03590776674f9a05",
"assets/assets/images/ic_loterias.png": "7a71736e0854622060fe5b0d0fb461d7",
"assets/assets/images/login.jpg": "59fc83e26c663ade5dcae6e7d56ca970",
"assets/assets/images/loterias_dominicanas.png": "31615f761ccd1698aad7bfb5ba938633",
"assets/assets/images/loterias_dominicanas_sin_letras.png": "7adab70973b93df249267c261c2c53cf",
"assets/assets/images/loterias_dominicanas_sin_letras_editada.png": "5c2942d32007e705385a39356e9ef72e",
"assets/assets/images/Pictures%2520-%2520Shortcut.lnk": "be8acb750e6604eaab397e6a799bfd74",
"assets/assets/images/plate1.png": "3d0a5ebe07467e186a103b5879022c40",
"assets/FontManifest.json": "18eda8e36dfa64f14878d07846d6e17f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "58f573f01243b27c6d86e254677b2aba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "42c214fbdd6cac4f2ccf724dc2a12140",
"/": "42c214fbdd6cac4f2ccf724dc2a12140",
"main.dart.js": "aa66e9e812fbfa7cffe6f349388c84ce",
"manifest.json": "624456151c0a0b311be49ff12acbd747"
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
