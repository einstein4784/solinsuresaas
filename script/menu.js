import gsap from "gsap";
import { initI18n } from "./i18n";
import { initFloatingMenu } from "./floating-menu.js";

// Initialize i18n on all pages (menu.js is loaded on every page)
document.addEventListener("DOMContentLoaded", () => {
  initI18n();
});

// SplitText is premium - using fallback
let SplitText = null;

const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const menuHeader = document.querySelector(".menu-header");
const menuOverlay = document.querySelector(".menu-overlay");
const menuItems = document.querySelectorAll(".menu-nav li");
const menuFooter = document.querySelector(".menu-footer");
const menuLogo = document.querySelector(".menu-logo img");
const hamburgerMenu = document.querySelector(".menu-hamburger-icon");

let isOpen = false;
let lastScrollY = window.scrollY;
let isMenuVisible = true;
let isAnimating = false;
let splitTexts = [];
let footerSplitTexts = [];

function scrambleText(elements, duration = 0.4) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  elements.forEach((char, index) => {
    const originalText = char.textContent;
    let iterations = 0;
    const maxIterations = Math.floor(Math.random() * 6) + 3;

    gsap.set(char, { opacity: 1 });

    const scrambleInterval = setInterval(() => {
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      iterations++;

      if (iterations >= maxIterations) {
        clearInterval(scrambleInterval);
        char.textContent = originalText;
      }
    }, 25);

    setTimeout(() => {
      clearInterval(scrambleInterval);
      char.textContent = originalText;
    }, duration * 1000);
  });
}

function initMenu() {
  if (!menuOverlay) return;
  
  gsap.set(menuOverlay, {
    scaleY: 0,
    transformOrigin: "top center",
  });

  menuItems.forEach((item, index) => {
    const link = item.querySelector("a");
    if (link) {
      // Only split text on desktop for performance
      if (window.innerWidth > 768) {
        // Create fallback split text manually
        const text = link.textContent;
        const words = text.split(/\s+/);
        const wordSpans = [];
        link.innerHTML = '';
        words.forEach((word, i) => {
          const span = document.createElement('span');
          span.style.display = 'inline-block';
          span.textContent = word + (i < words.length - 1 ? ' ' : '');
          link.appendChild(span);
          wordSpans.push(span);
        });
        
        const split = { words: wordSpans, element: link };
        splitTexts.push(split);
  
        gsap.set(split.words, {
          yPercent: 120,
        });
      }
    }
  });

  const footerElements = document.querySelectorAll(
    ".menu-social a, .menu-social span, .menu-time"
  );
  footerElements.forEach((element) => {
    const text = element.textContent;
    const chars = text.split('');
    const charSpans = [];
    element.innerHTML = '';
    chars.forEach(char => {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.textContent = char;
      element.appendChild(span);
      charSpans.push(span);
    });
    
    const split = { chars: charSpans, element: element };
    footerSplitTexts.push(split);

    gsap.set(split.chars, {
      opacity: 0,
    });

    if (element.classList.contains("menu-time")) {
      gsap.set(element, { opacity: 0 });
    }
  });

  gsap.set(menuItems, {
    opacity: 1,
  });

  if (menuFooter) {
    gsap.set(menuFooter, {
      opacity: 1,
      y: 20,
    });
  }
}

function toggleMenu() {
  if (isAnimating) return;

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

function openMenu() {
  isOpen = true;
  isAnimating = true;
  if (hamburgerMenu) {
    hamburgerMenu.classList.add("open");
  }
  if (menuLogo) {
    menuLogo.classList.add("rotated");
  }

  const tl = gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    },
  });

  tl.to(menuOverlay, {
    duration: 0.5,
    scaleY: 1,
    ease: "power3.out",
  });

  const allWords = splitTexts.reduce((acc, split) => {
    if (split && split.words && Array.isArray(split.words)) {
      return acc.concat(split.words);
    }
    return acc;
  }, []);

  if (allWords.length > 0) {
    tl.to(
      allWords,
      {
        duration: 0.75,
        yPercent: 0,
        stagger: 0.05,
        ease: "power4.out",
      },
      "-=0.3"
    );
  } else {
    // Mobile fallback: animate items directly if no split text
    tl.fromTo(
      menuItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.3"
    );
  }

  tl.to(
    menuFooter,
    {
      duration: 0.3,
      y: 0,
      ease: "power2.out",
      onComplete: () => {
        const timeElement = document.querySelector(".menu-time");
        if (timeElement) {
          gsap.set(timeElement, { opacity: 1 });
        }

      const allFooterChars = footerSplitTexts.reduce((acc, split) => {
        if (split && split.chars && Array.isArray(split.chars)) {
          return acc.concat(split.chars);
        }
        return acc;
      }, []);

        allFooterChars.forEach((char, index) => {
          setTimeout(() => {
            scrambleText([char], 0.4);
          }, index * 30);
        });
      },
    },
    "-=1"
  );
}

function closeMenu() {
  isOpen = false;
  isAnimating = true;
  if (hamburgerMenu) {
    hamburgerMenu.classList.remove("open");
  }
  if (menuLogo) {
    menuLogo.classList.remove("rotated");
  }

  const tl = gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    },
  });

  const allWords = splitTexts.reduce((acc, split) => {
    if (split && split.words && Array.isArray(split.words)) {
      return acc.concat(split.words);
    }
    return acc;
  }, []);

  tl.to([menuFooter], {
    duration: 0.3,
    y: 20,
    ease: "power2.in",
    onStart: () => {
      const timeElement = document.querySelector(".menu-time");
      if (timeElement) {
        gsap.set(timeElement, { opacity: 0 });
      }

      const allFooterChars = footerSplitTexts.reduce((acc, split) => {
        if (split && split.chars && Array.isArray(split.chars)) {
          return acc.concat(split.chars);
        }
        return acc;
      }, []);
      if (allFooterChars.length > 0) {
        gsap.set(allFooterChars, { opacity: 0 });
      }
    },
  });

  if (allWords.length > 0) {
    tl.to(
      allWords,
      {
        duration: 0.25,
        yPercent: 120,
        stagger: -0.025,
        ease: "power2.in",
      },
      "-=0.25"
    );
  } else {
    // Mobile fallback
    tl.to(
      menuItems,
      {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
      },
      "-=0.25"
    );
  }

  tl.to(
    menuOverlay,
    {
      duration: 0.5,
      scaleY: 0,
      ease: "power3.inOut",
    },
    "-=0.2"
  );
}

function handleScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    if (isOpen) {
      closeMenu();
    }
    if (isMenuVisible) {
      menu.classList.add("hidden");
      isMenuVisible = false;
    }
  } else if (currentScrollY < lastScrollY) {
    if (!isMenuVisible) {
      menu.classList.remove("hidden");
      isMenuVisible = true;
    }
  }

  lastScrollY = currentScrollY;
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour12: false,
  });
  const timeElement = document.querySelector(".menu-time");
  if (timeElement) {
    if (!isOpen) {
      timeElement.textContent = `${timeString} LOCAL`;
    } else {
      const timeSplit = footerSplitTexts.find(
        (split) => split && split.element === timeElement
      );

      if (timeSplit && timeSplit.chars && Array.isArray(timeSplit.chars)) {
        const newText = `${timeString} LOCAL`;
        const oldChars = timeSplit.chars;

        newText.split("").forEach((char, index) => {
          if (oldChars[index]) {
            oldChars[index].textContent = char;
          }
        });
      } else {
        // Fallback: just update text directly
        timeElement.textContent = `${timeString} LOCAL`;
      }
    }
  }
}

function init() {
  // Initialize floating menu first (independent of overlay menu)
  initFloatingMenu();

  if (!menu || !menuToggle) {
    console.warn("Menu elements not found - overlay menu skipped");
    return;
  }
  
  initMenu();

  // Add click listener to the toggle button
  if (menuToggle) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  // Also allow clicking the header to toggle
  if (menuHeader) {
    menuHeader.addEventListener("click", (e) => {
      // Only toggle if not clicking the toggle button itself
      if (e.target !== menuToggle && !menuToggle.contains(e.target)) {
        toggleMenu();
      }
    });
  }

  menuItems.forEach((item) => {
    const link = item.querySelector("a");
    if (link) {
      link.addEventListener("click", () => {
        if (isOpen) {
          closeMenu();
        }
      });
    }
  });

  window.addEventListener("scroll", handleScroll);

  updateTime();
  setInterval(updateTime, 1000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
