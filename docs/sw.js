const CACHE = "floke-v14";
const ASSETS = [
  "./index.html",
  "./manifest.webmanifest",
  "./assets/favicon.svg",
  "./assets/icons/floke-studio.svg",
  "./assets/icons/engine.svg",
  "./assets/icons/senza.svg",
  "./assets/icons/cultiva.svg",
  "./assets/icons/blip.svg",
  "./assets/icons/flint.svg",
  "./assets/icons/glyph.svg",
  "./assets/icons/mnemo.svg",
  "./assets/pixel_space/menu-bg.png",
  "./assets/pixel_space/menu-bg.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && shouldCache(url.pathname)) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});

function shouldCache(path){
  return path.endsWith(".html") || path.endsWith(".webmanifest") || path.endsWith(".svg")
    || path.endsWith(".jpg") || path.endsWith(".png") || path.endsWith(".js");
}
