'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bfbf61d4ee33827b51d34285f24a6855",
".git/config": "c34a33a95f357a950964b5413ee5caf8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ff52b48ca77c48a0a7309a00836f7b7d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac6a6031f01b1f1f880561e5d471ece1",
".git/logs/refs/heads/main": "909bc9a79db07b5abd922ee59ccffb3f",
".git/logs/refs/remotes/origin/main": "3daebf18f36e8f303ad6c01de7351900",
".git/objects/05/356d3e52f9ecdc0716c6aaae40e09cd22074e7": "3e934ad91ca3f6bf2c8ed35b77dc14ab",
".git/objects/0a/1dbeac173cbc747f182959e13def32bcd5243d": "8978cf043d34dfb9a19ae7996e4b9c0c",
".git/objects/13/2c8327053ddf85713c44a0004700621dc77042": "6b8e4a296fdb1c33c21d5918c52d2f31",
".git/objects/15/a994ef3d6217540bcb45c81a0c4d2e44c0a06f": "4787ba871042fc68217bd8bf56f7e324",
".git/objects/16/98e7ecf0f53e0fbe457319efe0b3755e01a92d": "05c0e9c557e68d31b8c37ed27e80fe2b",
".git/objects/1c/23746e27d48451a6b235f86f3036a33a03af11": "ab9a4dd414c1d5f382f160b7f039561a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/1923ee8120eaebba12a1bcdec139e13e889ae6": "d784dd426a25f0c0fa30cddaa8e25150",
".git/objects/21/fbb5057c04747e5033633a2a38ad17f17dc150": "ec3c465e01fea244a52d2e58ab7553ac",
".git/objects/2e/34c733bfd5380ccaf108f59b52992bd8e78601": "33af7c74720d1f4b86aa83e9a1374dfc",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/38/09a267cea122dd61040c917d03cdcc5cbf65dc": "6c92bf434c22d32c61167b963e350aca",
".git/objects/3a/6f41bfa130d364099b9a6065fe641eecc91d43": "7beb95c20dc0e053969ac02791ddcea8",
".git/objects/41/8b60b7b540b013fd0f0fde8bde7a94ccca50c1": "1ce0a922def7df575e4e7083d7921441",
".git/objects/41/e6ca61a4e5df82783c1de9e9f36db7839e4296": "a148bb76ef7474969ff6e7181157a8b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/fd49c2cd90b3dd416a45da8c44d1f65a5e7e0e": "39deb4475ec1eca7a80b3b75383837d6",
".git/objects/59/463a996798fd62122a0b72aedd06214717b17c": "1127e8cf9b196e9116f78be24cbfbdc6",
".git/objects/5b/2a6d284ece49d68af4319001aa79b191e45f8e": "5878a281c4a60cfaac33c38887e8b84b",
".git/objects/5e/691d1e6a21cb706aaa22bca652ff2be39aabb0": "80d609253f43b7936f80d5e9ce0d3aae",
".git/objects/5f/6d3d2ebd85860c1c42544f1716d51dfd3f8ec7": "9a01ce4d5aac25d0eaf3216885fa05f3",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/80/9d26041fbdcae1d1a5f72e221b1d2588918582": "2895010c8df8c9c69d0fc06172398605",
".git/objects/84/9a26619172e20cf2a9174462fd0bd69f2d7950": "e3ba957fc9e99505598a63afefce7b0e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/07879de983f8f36973cac78b08e73f4b3d2630": "38377ded5ce7816a98c64d0af8837f56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/4fcba918caf0313ddaa35ab89fd4b4ebfb5984": "59e6766062fabf64ee9ebd0e3139ecac",
".git/objects/8d/de45714ee36d1023b207be837d6b02ae8ab751": "9d2f5574cac95f48fce77c42f792470a",
".git/objects/90/0885ad069d50a953a811e15b289b8dd1223db0": "70f5c3b142c099d2f88e745d703bf6d5",
".git/objects/9b/834992ba894599b76fd6d1d084dcd95142a8b6": "82897603a3ce353029e92f3dd70b73d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/cd/975ad2427719cc100d8894430b49ad9c030088": "c39d6e85d2dfc7d051c672c279260e78",
".git/objects/d1/663e47016527f2d2d5a6b114d5158244a6cc16": "988849cf93dd800fabd5f7305f877773",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dd/6799616ffeea7cf5cd1a41a9d68ffb98b587c6": "f8fa94a35b474a1d23b0c54767358b1a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/de5a35fbca22bc09e106e0d4be0061eecf0f78": "9d31b3d144eeb0e989b580f99b31fb2c",
".git/objects/e4/e0076dc406dc0f40125dd377e09f2836c21e55": "e3029381c6f99d81ec17f4cdb7dab080",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "921761efa910a1e9e50ef88f82da360b",
".git/refs/remotes/origin/main": "921761efa910a1e9e50ef88f82da360b",
"assets/AssetManifest.bin": "c55adc33b8bf094f058609108447453d",
"assets/AssetManifest.bin.json": "881f41c5201e6240e3eb284809af6ac9",
"assets/AssetManifest.json": "92feed37af3f82d06b3b704071812d32",
"assets/assets/image/fundo.jpg": "a7ed4c2b574ff70bfe59a1a4d4f47ad4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "539ee629761b1f532fb5a9d96f5138c1",
"assets/NOTICES": "3b1c0d130ff84204a296bc731d0870ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "ebec2180c8fd2244c0b887fe4abd79a5",
"canvaskit/canvaskit.wasm": "b730404c3182c77feae53f97aeab7247",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "85af9a3ce602e02632c701fa742320cb",
"canvaskit/chromium/canvaskit.wasm": "e85c2054a44abc8e393f58b32c1a4a8e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "4ff83c62a0243119b7245316356685e7",
"canvaskit/skwasm.wasm": "0a5c4a5d97a16304b3e4d1a4c4a24b9c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4d222cdffcab1532a8fc2b561b706626",
"/": "4d222cdffcab1532a8fc2b561b706626",
"main.dart.js": "a34e1c8187f5100b19f7d6290bba95ff",
"manifest.json": "10424162e14126ace7b37ab9fcf464ae",
"version.json": "51c09bfd5681646f5edee4af569381f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
