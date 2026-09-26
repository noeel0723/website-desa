import { initNavbar } from "./navbar.js";
import { initAnimations } from "./animation.js";

function initImageFallbacks() {
  const images = [
    [".hero__image", ".hero__visual", "hero__visual--image-missing"],
    [".profile__image", ".profile__image-wrap", "profile__image-wrap--image-missing"],
    [".umkm__image", ".umkm__visual", "umkm__visual--image-missing"],
  ];

  images.forEach(([imageSelector, containerSelector, fallbackClass]) => {
    const image = document.querySelector(imageSelector);
    const container = document.querySelector(containerSelector);
    if (!image || !container) return;

    const showFallback = () => container.classList.add(fallbackClass);
    image.addEventListener("error", showFallback);
    if (image.complete && image.naturalWidth === 0) showFallback();
  });
}

initNavbar();
initAnimations();
initImageFallbacks();
