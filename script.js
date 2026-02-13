(function () {
  const gate = document.getElementById("ageGate");
  const enterBtn = document.getElementById("enterBtn");
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();

  // Age gate remembered for 30 days
  const KEY = "eveseden_age_ok";
  const ok = localStorage.getItem(KEY);

  if (ok === "true") gate.style.display = "none";

  enterBtn?.addEventListener("click", () => {
    localStorage.setItem(KEY, "true");
    gate.style.display = "none";
  });

  // Booking form -> mailto
  const form = document.getElementById("bookingForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const type = data.get("type");
    const location = data.get("location");
    const vision = data.get("vision");

    // TODO: replace with your email
    const to = "youremail@domain.com";
    const subject = encodeURIComponent(`Booking Request — ${type}`);
    const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Session: ${type}
Location: ${location}

Vision:
${vision}

(Confirmed 18+ / consent-forward)`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
})();
