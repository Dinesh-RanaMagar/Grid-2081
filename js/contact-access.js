(() => {
  "use strict";

  const form = document.getElementById("contactLoginForm");
  const message = document.getElementById("contactLoginMessage");
  const password = document.getElementById("passwordInput");
  const submitButton = form && form.querySelector('button[type="submit"]');

  if (!form || !message || !password || !submitButton) return;
  submitButton.disabled = false;

  let legacyStateCleared = true;
  for (const key of [
    "grid2081-contact-auth",
    "grid2081-contact-teacher-name",
    "grid2081-contact-role",
    "grid2081-contact-staff-data"
  ]) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      legacyStateCleared = false;
      console.error("[Janajyoti contacts] Could not clear legacy client-side contact state.", error);
      message.textContent = "Old local contact access data could not be cleared. Please enable site storage and reload this page.";
      message.classList.add("login-message--error");
    }
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    password.value = "";
    if (!legacyStateCleared) return;
    message.textContent = "Secure contact access is not configured on this static site. No contact records are available here; please contact the school office.";
    message.classList.add("login-message--error");
  });
})();
