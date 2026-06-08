/* ============================================================
   LANGUAGE — i18n switching with persistence
   ============================================================ */
(function () {
  var DEFAULT = "en";
  var dict = window.translations || {};

  function getLang() {
    try {
      var saved = localStorage.getItem("lang");
      if (saved && dict[saved]) return saved;
    } catch (e) {}
    return DEFAULT;
  }

  function translate(key, lang) {
    return (dict[lang] && dict[lang][key]) || (dict[DEFAULT] && dict[DEFAULT][key]) || null;
  }

  function applyLang(lang) {
    if (!dict[lang]) lang = DEFAULT;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = translate(el.getAttribute("data-i18n"), lang);
      if (val !== null) el.textContent = val;
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(getLang());
})();
