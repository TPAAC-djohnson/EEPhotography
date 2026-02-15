(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // Footer year (safe)
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // Age Gate
    const gate = document.getElementById("ageGate");
    const enterBtn = document.getElementById("enterBtn");

    const KEY = "eveseden_age_ok";
    const ok = localStorage.getItem(KEY);

    // If previously accepted, hide the gate
    if (ok === "true" && gate) gate.style.display = "none";

    // Attach click handler safely
    if (enterBtn && gate) {
      enterBtn.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.setItem(KEY, "true");
        gate.style.display = "none";
      });
    }

    // Booking form -> mailto (optional)
    const form = document.getElementById("bookingForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(form);

        const to = "info@eepatl.com"; // change if needed
        const subject = encodeURIComponent(`Booking Request — ${data.get("type") || "Session"}`);
        const body = encodeURIComponent(
`Name: ${data.get("name")}
Email: ${data.get("email")}
Session: ${data.get("type")}
Location: ${data.get("location")}

Vision:
${data.get("vision")}`
        );

        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      });
    }
  });
})();
