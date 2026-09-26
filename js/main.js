import { initNavbar } from "./navbar.js";
import { initAnimations } from "./animation.js";

function initHeroImageFallback() {
  const image = document.querySelector(".hero__image");
  const visual = document.querySelector(".hero__visual");
  if (!image || !visual) return;

  const showFallback = () => visual.classList.add("hero__visual--image-missing");
  image.addEventListener("error", showFallback);
  if (image.complete && image.naturalWidth === 0) showFallback();
}

initNavbar();
initAnimations();
initHeroImageFallback();
