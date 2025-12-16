const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const viewBtn = document.getElementById("viewBtn");
if (viewBtn) {
  viewBtn.addEventListener("click", () => {
    document.body.classList.toggle("timeline-large");
    const on = document.body.classList.contains("timeline-large");
    viewBtn.textContent = on ? "Grid view" : "Large view";
    viewBtn.setAttribute("aria-pressed", String(on));
  });
}

const topBtn = document.getElementById("topBtn");
if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  const root = document.documentElement;

  if (!root.getAttribute("data-theme")) {
    root.setAttribute("data-theme", "dark");
  }

  themeBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    themeBtn.setAttribute("aria-pressed", String(next === "light"));
  });
}
