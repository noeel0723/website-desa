function initImageFallbacks() {
  const images = [
    [".hero__image", ".hero__visual", "hero__visual--image-missing"],
    [".profile__image", ".profile__image-wrap", "profile__image-wrap--image-missing"],
  ];

  images.forEach(([imageSelector, containerSelector, fallbackClass]) => {
    const image = document.querySelector(imageSelector);
    const container = document.querySelector(containerSelector);
    if (!image || !container) return;

    const showFallback = () => container.classList.add(fallbackClass);
    image.addEventListener("error", showFallback);
    if (image.complete && image.naturalWidth === 0) showFallback();
  });

  document.querySelectorAll(".umkm__visual .umkm__image").forEach((image) => {
    const container = image.closest(".umkm__visual");
    const showFallback = () => container.classList.add("umkm__visual--image-missing");
    image.addEventListener("error", showFallback);
    if (image.complete && image.naturalWidth === 0) showFallback();
  });
}

initNavbar();
initAnimations();
initUmkmTabs();
initImageFallbacks();

const footerYear = document.getElementById("footer-year");
if (footerYear) footerYear.textContent = String(new Date().getFullYear());
