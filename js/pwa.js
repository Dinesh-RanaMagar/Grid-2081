(() => {
  "use strict";

  const DEBUG = false;
  let registration = null;
  let updateRequested = false;
  let reloadStarted = false;
  let deferredInstallPrompt = null;
  let toast = null;
  let toastTimer = 0;

  function logDebug(...args) {
    if (DEBUG) console.debug("[Janajyoti PWA]", ...args);
  }

  function ensureToast() {
    if (toast) return toast;

    const style = document.createElement("style");
    style.textContent = `
      .pwa-toast{position:fixed;z-index:10000;left:16px;right:16px;bottom:16px;
        display:flex;align-items:center;justify-content:space-between;gap:16px;
        max-width:620px;margin:0 auto;padding:14px 16px;border-radius:12px;
        background:#0b1437;color:#fff;box-shadow:0 8px 28px rgba(0,0,0,.24);
        font:500 14px/1.4 system-ui,-apple-system,"Segoe UI",sans-serif}
      .pwa-toast[hidden]{display:none}
      .pwa-toast button{border:0;border-radius:8px;padding:9px 13px;background:#4f8bf9;
        color:#fff;font:600 14px system-ui,-apple-system,"Segoe UI",sans-serif;cursor:pointer}
      .pwa-toast button:focus-visible{outline:3px solid #fff;outline-offset:2px}
      @media(max-width:480px){.pwa-toast{align-items:flex-start;flex-direction:column}}
    `;
    document.head.appendChild(style);

    toast = document.createElement("div");
    toast.className = "pwa-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.hidden = true;
    document.body.appendChild(toast);
    return toast;
  }

  function hideToast() {
    if (!toast) return;
    toast.hidden = true;
    toast.replaceChildren();
  }

  function showToast(message, buttonLabel, action, duration = 6000) {
    const container = ensureToast();
    container.replaceChildren();

    const text = document.createElement("span");
    text.textContent = message;
    container.appendChild(text);

    if (buttonLabel && action) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = buttonLabel;
      button.addEventListener("click", action, { once: true });
      container.appendChild(button);
    }

    container.hidden = false;
    window.clearTimeout(toastTimer);
    if (duration > 0) toastTimer = window.setTimeout(hideToast, duration);
  }

  function showUpdateAvailable(worker) {
    showToast("A new version is available.", "Update now", () => {
      const waitingWorker = registration && (registration.waiting || worker);
      if (!waitingWorker || waitingWorker.state !== "installed") {
        showToast("The update is no longer waiting. Reload the page to check again.");
        return;
      }
      updateRequested = true;
      waitingWorker.postMessage({ type: "ACTIVATE_UPDATE" });
      showToast("Updating… this page will reload once when the update is ready.", null, null, 0);
    }, 0);
    logDebug("Update waiting", worker && worker.state);
  }

  function watchRegistration(reg) {
    registration = reg;
    if (reg.waiting) {
      showUpdateAvailable(reg.waiting);
    }

    reg.addEventListener("updatefound", () => {
      const installing = reg.installing;
      if (!installing) return;

      installing.addEventListener("statechange", () => {
        logDebug("Worker state:", installing.state);
        if (installing.state === "installed" && navigator.serviceWorker.controller) {
          showUpdateAvailable(installing);
        }
      });
    });

    const checkForUpdate = () => {
      if (document.visibilityState !== "visible" || !navigator.onLine) return;
      reg.update().catch(error => {
        console.error("[Janajyoti PWA] Could not check for an update.", error);
      });
    };
    window.addEventListener("focus", checkForUpdate);
    window.addEventListener("online", checkForUpdate);
    document.addEventListener("visibilitychange", checkForUpdate);
  }

  function registerWorker() {
    if (!("serviceWorker" in navigator)) {
      showToast("Offline support is not available in this browser.");
      return;
    }

    navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none"
    }).then(watchRegistration).catch(error => {
      console.error("[Janajyoti PWA] Service worker registration failed.", error);
      showToast("Offline support could not be enabled. Online browsing is still available.");
    });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!updateRequested || reloadStarted) return;
      reloadStarted = true;
      window.location.reload();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    registerWorker();
    if (!navigator.onLine) {
      showToast("You are offline. Previously saved pages and smaller documents may still be available.", null, null, 9000);
    }
  }, { once: true });

  window.addEventListener("online", () => {
    showToast("You are online.");
  });
  window.addEventListener("offline", () => {
    showToast("You are offline. Previously saved pages and smaller documents may still be available.", null, null, 9000);
  });

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    showToast("Install श्री जनज्योति नमूना मा.वि for offline access.", "Install", async () => {
      const installEvent = deferredInstallPrompt;
      deferredInstallPrompt = null;
      try {
        await installEvent.prompt();
        const choice = await installEvent.userChoice;
        showToast(choice.outcome === "accepted" ? "Installation started." : "Installation dismissed.");
      } catch (error) {
        console.error("[Janajyoti PWA] Installation prompt failed.", error);
        showToast("The app could not be installed. Please try again from your browser menu.");
      }
    });
  });
})();
