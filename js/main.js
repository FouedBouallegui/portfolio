/* ============================================================
   MAIN — nav, scroll reveal, mobile menu, certificate modal
   ============================================================ */
(function () {
  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Navbar shadow on scroll
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  }
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in-view"); });
  }

  // Certificate modal
  var modal = document.getElementById("cert-modal");
  var modalImg = document.getElementById("modal-img");
  var lastFocus = null;

  function openModal(src, alt) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    modalImg.alt = alt || "Certificate full preview";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    lastFocus = document.activeElement;
    var closeBtn = modal.querySelector(".modal-close");
    if (closeBtn) closeBtn.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll("[data-cert]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var img = btn.querySelector("img");
      openModal(btn.getAttribute("data-cert"), img ? img.alt : "");
    });
  });
  if (modal) {
    modal.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
    });
  }
})();
