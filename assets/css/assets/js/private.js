// NOTE: This is NOT “secure” protection. It’s a privacy gate for a static site.
(() => {
  const PASSWORD = "Eden2026!"; // <-- change this

  const gate = document.getElementById("gate");
  const gallery = document.getElementById("gallery");
  const pw = document.getElementById("pw");
  const enter = document.getElementById("enter");
  const hint = document.getElementById("hint");

  const KEY = "eep_private_ok";

  function unlock() {
    gate.classList.add("hidden");
    gallery.classList.remove("hidden");
    gallery.setAttribute("aria-hidden", "false");
  }

  // Remember for 7 days
  const ok = localStorage.getItem(KEY);
  const ts = Number(localStorage.getItem(KEY + "_ts") || "0");
  const sevenDays = 7 * 24 * 60 * 60 * 1000;

  if (ok === "true" && Date.now() - ts < sevenDays) unlock();

  function check() {
    if ((pw.value || "").trim() === PASSWORD) {
      localStorage.setItem(KEY, "true");
      localStorage.setItem(KEY + "_ts", String(Date.now()));
      unlock();
    } else {
      hint.textContent = "Incorrect password.";
      pw.value = "";
      pw.focus();
    }
  }

  enter?.addEventListener("click", check);
  pw?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") check();
  });
})();
