export function initAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll(".info-card, .stats__card, .profile__header, .profile__image-wrap, .profile__summary, .population__header, .population__total, .population__stat-card, .population__age-panel");
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
