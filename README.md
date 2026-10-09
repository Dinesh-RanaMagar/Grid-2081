# श्री जनज्योति नमूना मा.वि

## PWA and deployment

- The application worker is `sw.js`; `service-worker.js` is a compatibility entry point for previously installed versions. Both use the same worker implementation and cache policy.
- Increase `CACHE_VERSION` in `sw.js` whenever a deployment changes the precached HTML, JavaScript, CSS, manifest, or other shell resources. Do not reuse a cache version for incompatible files.
- The app shell and its public pages are precached. Pages otherwise use network-first navigation with an offline-page fallback. PDFs are fetched on demand and only small full responses are retained; the document cache is bounded.
- Netlify reads `_headers` from the publish root. Deploy the full repository root over HTTPS so the worker, migration entry point, headers, pages, and assets are published together.
- Existing installations migrate from the previous `jananamuna-*` caches when they receive the updated worker. A legacy-controlled page may reload once as part of that migration; subsequent updates wait for the user to choose **Update now**.

## Contact directory

This repository is a static site and has no authentication service or private database. The Contacts page therefore fails closed and serves no directory records. Do not add contact data or credentials to HTML, JavaScript, JSON, or other public assets. Restore directory access only after connecting a real server-side authentication and authorized data service; store its secrets and records outside the public deploy.