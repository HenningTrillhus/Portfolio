// Language and theme switches for the privacy page (the text itself is written out in both languages in privacy.html).
(() => {
  "use strict";

  const root = document.documentElement;
  const langBtn = document.getElementById("lang-toggle");
  const themeBtn = document.getElementById("theme-toggle");
  const media = matchMedia("(prefers-color-scheme: dark)");

  const TEXT = {
    en: { title: "Privacy policy – Henning Trillhus", langSwitch: "Bytt til norsk", toLight: "Switch to light theme", toDark: "Switch to dark theme" },
    no: { title: "Personvernerklæring – Henning Trillhus", langSwitch: "Switch to English", toLight: "Bytt til lyst tema", toDark: "Bytt til mørkt tema" },
  };

  let lang = root.dataset.lang === "no" ? "no" : "en";
  let hasSavedTheme = false;
  try { hasSavedTheme = !!localStorage.getItem("theme"); } catch { /* storage blocked */ }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeBtn.setAttribute("aria-label", TEXT[lang][theme === "dark" ? "toLight" : "toDark"]);
  }

  function applyLanguage(next, persist) {
    lang = next;
    root.dataset.lang = next;
    root.lang = next === "no" ? "nb" : "en";
    document.title = TEXT[next].title;
    langBtn.setAttribute("aria-label", TEXT[next].langSwitch);
    langBtn.setAttribute("lang", next === "no" ? "en" : "nb");
    applyTheme(root.dataset.theme);
    if (persist) {
      try { localStorage.setItem("lang", next); } catch { /* storage blocked */ }
    }
  }

  langBtn.addEventListener("click", () => applyLanguage(lang === "en" ? "no" : "en", true));
  themeBtn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    hasSavedTheme = true;
    try { localStorage.setItem("theme", next); } catch { /* storage blocked */ }
  });
  media.addEventListener("change", (e) => {
    if (!hasSavedTheme) applyTheme(e.matches ? "dark" : "light");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  applyLanguage(lang, false);
})();
