// Old address: clear cached app and hand over to the new link.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.map(x=>caches.delete(x)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate("https://adwiyati.github.io/"))));});
