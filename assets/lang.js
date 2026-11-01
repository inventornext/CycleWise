(function () {
  var btn = document.getElementById("langBtn");
  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-en]").forEach(function (el) {
      var t = el.getAttribute("data-" + lang);
      if (t !== null) el.innerHTML = t;
    });
    if (btn) btn.textContent = lang === "en" ? "हिंदी" : "English";
    try { localStorage.setItem("cw-lang", lang); } catch (e) {}
  }
  var saved = "en";
  try { saved = localStorage.getItem("cw-lang") || "en"; } catch (e) {}
  if (saved === "hi") apply("hi");
  if (btn) btn.addEventListener("click", function () {
    apply(document.documentElement.lang === "en" ? "hi" : "en");
  });
})();
