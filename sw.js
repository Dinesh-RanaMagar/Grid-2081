importScripts("https://cdn.pushalert.co/sw-82467.js");

const CACHE_VERSION = "v6";
const CACHE_PREFIX = "janajyoti-";
const LEGACY_CACHE_PREFIX = "jananamuna-";
const STATIC_CACHE = `${CACHE_PREFIX}static-${CACHE_VERSION}`;
const PAGE_CACHE = `${CACHE_PREFIX}pages-${CACHE_VERSION}`;
const RUNTIME_CACHE = `${CACHE_PREFIX}runtime-${CACHE_VERSION}`;
const DOCUMENT_CACHE = `${CACHE_PREFIX}documents-${CACHE_VERSION}`;
const OFFLINE_PAGE = new URL("offline.html", self.registration.scope).href;
const APP_ORIGIN = self.location.origin;
const DEBUG = false;

const APP_PAGES = [
  "./",
  "./index.html",
  "./offline.html",
  "./html/nur.html",
  "./html/kg.html",
  "./html/class1.html",
  "./html/class2.html",
  "./html/class3.html",
  "./html/class4.html",
  "./html/class5.html",
  "./html/class6.html",
  "./html/class7.html",
  "./html/class8.html",
  "./html/class9.html",
  "./html/class10.html",
  "./html/specificgrid.html",
  "./html/Certificate.html",
  "./html/Contact.html",
  "./TeacherGuidebook/html/class1.html",
  "./TeacherGuidebook/html/class2.html",
  "./TeacherGuidebook/html/class3.html",
  "./TeacherGuidebook/html/class4.html",
  "./TeacherGuidebook/html/class5.html",
  "./TeacherGuidebook/html/class6.html",
  "./TeacherGuidebook/html/class7.html",
  "./TeacherGuidebook/html/class8.html",
  "./TeacherGuidebook/html/class9.html",
  "./TeacherGuidebook/html/class10.html"
];

const PRECACHE_URLS = [
  ...APP_PAGES,
  "./style.css",
  "./css/class-page.css",
  "./html/StyleCertificate.css",
  "./html/ScriptCertificate.js",
  "./js/pwa.js",
  "./js/contact-access.js",
  "./manifest.json",
  "./articles.json",
  "./image/logo.png",
  "./image/icon.png"
].map(path => new URL(path, self.registration.scope).href);

const OWNED_CACHES = [STATIC_CACHE, PAGE_CACHE, RUNTIME_CACHE, DOCUMENT_CACHE];
const PRIVATE_PATH = /(?:^|\/)(?:api\/)?(?:contacts?|students?|private)(?:\.json|[-_\/]|$)|(?:^|\/)student[-_]?contacts?(?:\.json|[-_\/]|$)/i;
const MAX_PAGE_ENTRIES = 50;
const MAX_RUNTIME_ENTRIES = 80;
const MAX_RUNTIME_BYTES = 16 * 1024 * 1024;
const MAX_DOCUMENT_ENTRIES = 3;
const MAX_DOCUMENT_BYTES = 8 * 1024 * 1024;
const MAX_DOCUMENT_SIZE = 4 * 1024 * 1024;

function logDebug(...args) {
  if (DEBUG) console.debug("[Janajyoti SW]", ...args);
}

function isPrivateRequest(request, url) {
  return PRIVATE_PATH.test(url.pathname)
    || request.headers.has("Authorization")
    || url.pathname === "/sw.js"
    || url.pathname === "/service-worker.js";
}

function canCache(request, response, url) {
  if (!response || response.status !== 200 || (response.type !== "basic" && response.type !== "cors")) {
    return false;
  }

  const cacheControl = response.headers.get("Cache-Control") || "";
  return url.origin === APP_ORIGIN
    && !isPrivateRequest(request, url)
    && !response.headers.has("Set-Cookie")
    && !/\b(?:private|no-store)\b/i.test(cacheControl);
}

async function trimCache(cacheName, maxEntries, maxBytes = Infinity) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  let totalBytes = 0;
  const entries = [];

  for (const request of keys) {
    const response = await cache.match(request);
    const size = Number(response && response.headers.get("Content-Length")) || 0;
    entries.push({ request, size });
    totalBytes += size;
  }

  while (entries.length > maxEntries || totalBytes > maxBytes) {
    const oldest = entries.shift();
    if (!oldest) break;
    await cache.delete(oldest.request);
    totalBytes -= oldest.size;
  }
}

async function cacheResponse(cacheName, request, response, limits) {
  const url = new URL(request.url);
  if (!canCache(request, response, url)) return;

  try {
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
    await trimCache(cacheName, limits.entries, limits.bytes);
  } catch (error) {
    console.error("[Janajyoti SW] Could not store a response in Cache Storage.", error);
  }
}

async function matchCached(request) {
  for (const cacheName of OWNED_CACHES) {
    try {
      const cache = await caches.open(cacheName);
      const response = await cache.match(request);
      if (response) return response;
    } catch (error) {
      console.error(`[Janajyoti SW] Cache "${cacheName}" could not be read; removing that cache.`, error);
      try {
        await caches.delete(cacheName);
      } catch (deleteError) {
        console.error(`[Janajyoti SW] Corrupted cache "${cacheName}" could not be removed.`, deleteError);
      }
    }
  }
  return null;
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    await cacheResponse(PAGE_CACHE, request, response, { entries: MAX_PAGE_ENTRIES });
    return response;
  } catch (error) {
    logDebug("Navigation request failed; checking offline copies.", request.url);
    const cached = await matchCached(request);
    if (cached) return cached;

    let offlinePage = null;
    try {
      offlinePage = await caches.open(STATIC_CACHE).then(cache => cache.match(OFFLINE_PAGE));
    } catch (cacheError) {
      console.error("[Janajyoti SW] The offline fallback cache could not be read.", cacheError);
    }
    if (offlinePage) return offlinePage;
    console.error("[Janajyoti SW] No cached page or offline page is available.", error);
    return new Response("You are offline and this page has not been saved yet.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }
}

async function cacheFirst(request) {
  const cached = await matchCached(request);
  if (cached) return cached;

  const response = await fetch(request);
  await cacheResponse(RUNTIME_CACHE, request, response, {
    entries: MAX_RUNTIME_ENTRIES,
    bytes: MAX_RUNTIME_BYTES
  });
  return response;
}

function documentUnavailable() {
  return new Response("This document is not available offline. Open it while online to save a small copy.", {
    status: 503,
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}

async function handleDocument(request) {
  let cached = null;
  try {
    const cache = await caches.open(DOCUMENT_CACHE);
    cached = await cache.match(new Request(request.url));
  } catch (error) {
    console.error("[Janajyoti SW] The saved document cache could not be read.", error);
  }
  if (request.headers.has("Range")) {
    try {
      return await fetch(request);
    } catch (error) {
      logDebug("Ranged document request failed.", request.url);
      return cached || documentUnavailable();
    }
  }

  try {
    const response = await fetch(request);
    const length = Number(response.headers.get("Content-Length"));

    if (Number.isFinite(length) && length > 0 && length <= MAX_DOCUMENT_SIZE) {
      await cacheResponse(DOCUMENT_CACHE, request, response, {
        entries: MAX_DOCUMENT_ENTRIES,
        bytes: MAX_DOCUMENT_BYTES
      });
    }
    return response;
  } catch (error) {
    logDebug("Document request failed.", request.url);
    return cached || documentUnavailable();
  }
}

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    let cache;
    try {
      cache = await caches.open(STATIC_CACHE);
      await cache.addAll(PRECACHE_URLS);
    } catch (error) {
      try {
        await caches.delete(STATIC_CACHE);
      } catch (deleteError) {
        console.error("[Janajyoti SW] An incomplete install cache could not be removed.", deleteError);
      }
      console.error("[Janajyoti SW] Required offline resources could not be installed.", error);
      throw error;
    }

    const oldWorker = self.registration.active;
    const oldScript = oldWorker ? new URL(oldWorker.scriptURL).pathname : "";
    let cacheNames = [];
    try {
      cacheNames = await caches.keys();
    } catch (error) {
      console.error("[Janajyoti SW] Cache migration could not inspect the existing caches.", error);
    }
    const hasLegacyCaches = cacheNames.some(name => name.startsWith(LEGACY_CACHE_PREFIX));

    if (oldScript.endsWith("/service-worker.js") || hasLegacyCaches) {
      logDebug("Activating once to migrate the previous service worker and caches.");
      await self.skipWaiting();
    }
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    let cacheNames = [];
    try {
      cacheNames = await caches.keys();
    } catch (error) {
      console.error("[Janajyoti SW] Obsolete caches could not be inspected during activation.", error);
    }
    const obsoleteCaches = cacheNames.filter(name =>
      (name.startsWith(CACHE_PREFIX) || name.startsWith(LEGACY_CACHE_PREFIX))
      && !OWNED_CACHES.includes(name)
    );

    await Promise.all(obsoleteCaches.map(async name => {
      try {
        await caches.delete(name);
      } catch (error) {
        console.error(`[Janajyoti SW] Could not remove obsolete cache "${name}".`, error);
      }
    }));

    await self.clients.claim();
    logDebug("Activated cache version", CACHE_VERSION);
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== APP_ORIGIN || isPrivateRequest(request, url)) return;

  if (url.pathname.toLowerCase().endsWith(".pdf")) {
    event.respondWith(handleDocument(request));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  if (url.pathname.toLowerCase().endsWith(".json")) {
    if (url.pathname.toLowerCase().endsWith("/articles.json")) {
      event.respondWith(cacheFirst(request));
    }
    return;
  }

  if (["style", "script", "image", "font"].includes(request.destination)) {
    event.respondWith(cacheFirst(request));
  }
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "ACTIVATE_UPDATE") {
    self.skipWaiting();
  }
});