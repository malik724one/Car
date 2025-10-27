document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");

  if (!btn) { console.error("menu-toggle not found"); return; }
  if (!nav) { console.error("nav-menu not found"); return; }

  btn.addEventListener("click", function () {
    nav.classList.toggle("active");
    const expanded = nav.classList.contains("active");
    btn.setAttribute("aria-expanded", expanded ? "true" : "false");
    console.log("Toggle button clicked. Menu visible:", expanded);
  });

  // Close menu when any nav link clicked (mobile friendly)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });
});
