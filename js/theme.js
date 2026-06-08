/* ============================================================
   THEME — dark / light with system detection + persistence
   ============================================================ */
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function current() {
    return root.getAttribute("data-theme") || "dark";
  }

  function apply(theme, animate) {
    if (animate) {
      root.classList.add("theme-anim");
      window.setTimeout(function () { root.classList.remove("theme-anim"); }, 320);
    }
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#fafafa" : "#09090b");
    if (toggle) toggle.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      apply(current() === "light" ? "dark" : "light", true);
    });
  }

  // React to OS changes only when the user hasn't set a manual preference
  try {
    var mq = window.matchMedia("(prefers-color-scheme: light)");
    mq.addEventListener("change", function (e) {
      if (!localStorage.getItem("theme")) apply(e.matches ? "light" : "dark", true);
    });
  } catch (e) {}

  // Set correct aria-label on load (theme already applied by inline bootstrap)
  apply(current(), false);
})();
