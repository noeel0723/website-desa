function initAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll(".stats__card, .profile__header, .profile__image-wrap, .profile__summary, .umkm__header, .umkm__tabs, .structure__header, .structure-card, .contact__header, .contact__feature, .contact-card, .profile-page__overview, .profile-page__section, .profile-page__next");
  if (!targets.length) return;

  document.documentElement.classList.add("reveal-ready");
  targets.forEach((target) => target.classList.add("reveal-on-scroll"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  targets.forEach((target) => observer.observe(target));
}
