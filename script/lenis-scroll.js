import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", () => {
  let isMobile = window.innerWidth <= 900;
  let lenis = null;

  const initLenis = () => {
    // Destroy existing instance if it exists
    if (lenis) {
      lenis.destroy();
      lenis = null;
    }

    // Don't initialize Lenis on mobile - use native scroll
    if (isMobile) {
      return;
    }

    const scrollSettings = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.1,
      wheelMultiplier: 1,
      orientation: "vertical",
      smoothWheel: true,
      syncTouch: true,
    };

    lenis = new Lenis(scrollSettings);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  };

  // Initial init
  initLenis();

  const handleResize = () => {
    const wasMobile = isMobile;
    isMobile = window.innerWidth <= 900;

    if (wasMobile !== isMobile) {
      initLenis();
    }
  };

  window.addEventListener("resize", handleResize);
});
