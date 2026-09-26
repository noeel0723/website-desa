export function initNavbar() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".navbar__toggle");
  const mobileMenu = document.querySelector(".navbar__mobile");
  if (!header || !toggle || !mobileMenu) return;

  const setScrolled = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  const setMenuOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.inert = !open;
  };

  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });
  toggle.addEventListener("click", () => setMenuOpen(toggle.getAttribute("aria-expanded") !== "true"));

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (toggle.getAttribute("aria-expanded") === "true" && !header.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  window.matchMedia("(min-width: 769px)").addEventListener("change", (event) => {
    if (event.matches) setMenuOpen(false);
  });
}
