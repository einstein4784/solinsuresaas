import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initI18n } from "./i18n";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initThemeToggle();
  initAboutPage();
  initImmersiveValues();
});

// ====================================
// THEME TOGGLE
// ====================================

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem("aboutTheme");
  if (savedTheme === "dark") {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  }
  
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = body.classList.contains("dark-theme");
      
      if (isDark) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        localStorage.setItem("aboutTheme", "light");
      } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        localStorage.setItem("aboutTheme", "dark");
      }
      
      // Animate theme change
      gsap.to("body", {
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
}

// ====================================
// IMMERSIVE VALUES SECTION ANIMATIONS
// ====================================

function initImmersiveValues() {
  const valuesSection = document.querySelector(".values-immersive");
  if (!valuesSection) return;
  
  // Animate header on scroll
  gsap.from(".values-header-immersive", {
    scrollTrigger: {
      trigger: ".values-immersive",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1
  });
  
  // Animate eyebrow lines
  gsap.from(".eyebrow-line", {
    scrollTrigger: {
      trigger: ".values-header-immersive",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    width: 0,
    duration: 0.8,
    stagger: 0.2
  });
  
  // Animate value cards with stagger
  const valueCards = document.querySelectorAll(".value-immersive");
  valueCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power3.out"
    });
    
    // Animate icon container
    const iconContainer = card.querySelector(".icon-container");
    if (iconContainer) {
      gsap.from(iconContainer, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        scale: 0,
        rotation: -180,
        duration: 0.6,
        delay: index * 0.15 + 0.3,
        ease: "back.out(1.7)"
      });
    }
    
    // Animate value number watermark
    const valueNumber = card.querySelector(".value-number");
    if (valueNumber) {
      gsap.from(valueNumber, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        x: 100,
        opacity: 0,
        duration: 1,
        delay: index * 0.15 + 0.2
      });
    }
  });
  
  // Animate metrics counting
  const metrics = document.querySelectorAll(".metric-value");
  metrics.forEach(metric => {
    const target = parseFloat(metric.dataset.count) || 0;
    
    ScrollTrigger.create({
      trigger: metric,
      start: "top 90%",
      onEnter: () => {
        gsap.to(metric, {
          innerText: target,
          duration: 2,
          snap: { innerText: target % 1 === 0 ? 1 : 0.01 },
          ease: "power2.out"
        });
      }
    });
  });
  
  // Animate manifesto footer
  gsap.from(".values-manifesto-footer", {
    scrollTrigger: {
      trigger: ".values-manifesto-footer",
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  });
  
  // 3D tilt effect on value cards
  valueCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    });
  });
  
  // Innovation item hover effects
  const innovationItems = document.querySelectorAll(".innovation-item");
  innovationItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      gsap.to(item.querySelector(".innovation-icon"), {
        scale: 1.15,
        rotation: 10,
        duration: 0.3
      });
    });
    
    item.addEventListener("mouseleave", () => {
      gsap.to(item.querySelector(".innovation-icon"), {
        scale: 1,
        rotation: 0,
        duration: 0.3
      });
    });
  });
  
  // Animate uptime bar
  const uptimeBar = document.querySelector(".uptime-fill");
  if (uptimeBar) {
    ScrollTrigger.create({
      trigger: uptimeBar,
      start: "top 90%",
      onEnter: () => {
        gsap.to(uptimeBar, {
          width: "99.99%",
          duration: 2,
          ease: "power2.out"
        });
      }
    });
  }
  
  // Parallax effect on cinema orbs
  gsap.to(".orb-1", {
    y: -100,
    scrollTrigger: {
      trigger: ".values-immersive",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
  
  gsap.to(".orb-2", {
    y: 80,
    scrollTrigger: {
      trigger: ".values-immersive",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
  
  gsap.to(".orb-3", {
    y: -60,
    x: 40,
    scrollTrigger: {
      trigger: ".values-immersive",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });
}

function initAboutPage() {
  // ====================================
  // HERO SECTION ANIMATIONS
  // ====================================
  
  // Animate hero elements on load
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
  
  heroTimeline
    .from(".hero-badge", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3
    })
    .from(".title-line", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    }, "-=0.4")
    .from(".hero-subtitle", {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, "-=0.5")
    .from(".stat-item, .stat-divider", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1
    }, "-=0.3")
    .from(".scroll-indicator", {
      y: -20,
      opacity: 0,
      duration: 0.6
    }, "-=0.2");

  // Animate gradient orbs
  gsap.to(".hero-gradient-orb", {
    y: "random(-30, 30)",
    x: "random(-20, 20)",
    duration: "random(4, 6)",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: {
      each: 0.5,
      from: "random"
    }
  });

  // ====================================
  // STORY INTRO ANIMATIONS
  // ====================================
  
  gsap.from(".intro-eyebrow", {
    scrollTrigger: {
      trigger: ".story-intro",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 0.8
  });

  gsap.from(".intro-title", {
    scrollTrigger: {
      trigger: ".story-intro",
      start: "top 75%",
      toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    duration: 1
  });

  gsap.from(".intro-content p", {
    scrollTrigger: {
      trigger: ".intro-content",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });

  gsap.from(".intro-quote", {
    scrollTrigger: {
      trigger: ".intro-quote",
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // ====================================
  // CINEMATIC HORIZONTAL TIMELINE
  // ====================================
  
  const timelineViewport = document.querySelector(".timeline-viewport");
  const eraCards = document.querySelectorAll(".era-card");
  const progressFill = document.querySelector(".progress-fill");
  const progressYears = document.querySelectorAll(".progress-years span");
  const journeyPath = document.querySelector(".path-progress");
  
  // Horizontal scroll progress
  if (timelineViewport) {
    timelineViewport.addEventListener("scroll", () => {
      const scrollLeft = timelineViewport.scrollLeft;
      const maxScroll = timelineViewport.scrollWidth - timelineViewport.clientWidth;
      const progress = (scrollLeft / maxScroll) * 100;
      
      // Update progress bar
      if (progressFill) {
        progressFill.style.width = `${progress}%`;
      }
      
      // Update journey path
      if (journeyPath) {
        const pathLength = 3000;
        const dashOffset = pathLength - (progress / 100) * pathLength;
        journeyPath.style.strokeDashoffset = dashOffset;
      }
      
      // Update year highlights
      const activeIndex = Math.round((progress / 100) * (eraCards.length - 1));
      progressYears.forEach((year, index) => {
        year.classList.toggle("current", index === Math.min(activeIndex, progressYears.length - 1));
      });
    });
  }
  
  // Progress year click navigation
  progressYears.forEach((yearEl) => {
    yearEl.addEventListener("click", () => {
      const year = yearEl.dataset.year;
      const targetCard = document.querySelector(`.era-card[data-year="${year}"]`);
      if (targetCard && timelineViewport) {
        targetCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });
  });
  
  // Animate era cards on scroll into view
  eraCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "left 90%",
        end: "left 10%",
        horizontal: true,
        scroller: ".timeline-viewport",
        toggleActions: "play none none reverse"
      },
      y: 60,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      delay: index * 0.1,
      ease: "power3.out"
    });
    
    // Animate visual ring
    const ring = card.querySelector(".visual-ring");
    if (ring) {
      gsap.from(ring, {
        scrollTrigger: {
          trigger: card,
          start: "left 80%",
          horizontal: true,
          scroller: ".timeline-viewport",
          toggleActions: "play none none reverse"
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "back.out(1.7)"
      });
    }
  });
  
  // Animate timeline intro on scroll
  gsap.from(".timeline-intro", {
    scrollTrigger: {
      trigger: ".cinematic-timeline",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    duration: 1
  });
  
  // Card hover effects
  eraCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card.querySelector(".visual-icon"), {
        scale: 1.15,
        rotation: -5,
        duration: 0.3
      });
      gsap.to(card.querySelector(".visual-ring"), {
        scale: 1.2,
        borderColor: "rgba(99, 102, 241, 0.4)",
        duration: 0.3
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card.querySelector(".visual-icon"), {
        scale: 1,
        rotation: 0,
        duration: 0.3
      });
      gsap.to(card.querySelector(".visual-ring"), {
        scale: 1,
        borderColor: "rgba(99, 102, 241, 0.2)",
        duration: 0.3
      });
    });
  });

  // ====================================
  // VALUES SECTION
  // ====================================
  
  gsap.from(".values-header", {
    scrollTrigger: {
      trigger: ".values-section",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    duration: 0.8
  });

  gsap.from(".value-card", {
    scrollTrigger: {
      trigger: ".values-grid",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
  });

  // Add hover effects to value cards
  document.querySelectorAll(".value-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card.querySelector(".value-icon"), {
        scale: 1.1,
        rotation: 5,
        duration: 0.3
      });
    });
    
    card.addEventListener("mouseleave", () => {
      gsap.to(card.querySelector(".value-icon"), {
        scale: 1,
        rotation: 0,
        duration: 0.3
      });
    });
  });

  // ====================================
  // CTA SECTION
  // ====================================
  
  gsap.from(".cta-content", {
    scrollTrigger: {
      trigger: ".about-cta",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    duration: 1
  });

  // ====================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ====================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ====================================
  // PARALLAX EFFECTS
  // ====================================
  
  // Hero orbs parallax
  gsap.to(".hero-gradient-orb.orb-1", {
    scrollTrigger: {
      trigger: ".about-hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 1
    },
    y: -100
  });

  gsap.to(".hero-gradient-orb.orb-2", {
    scrollTrigger: {
      trigger: ".about-hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 1
    },
    y: -150
  });

  // ====================================
  // CARD HOVER EFFECTS
  // ====================================
  
  document.querySelectorAll(".timeline-card").forEach(card => {
    card.addEventListener("mouseenter", function() {
      const icon = this.querySelector(".card-icon");
      if (icon) {
        gsap.to(icon, {
          scale: 1.1,
          rotation: -5,
          duration: 0.3
        });
      }
    });
    
    card.addEventListener("mouseleave", function() {
      const icon = this.querySelector(".card-icon");
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3
        });
      }
    });
  });

  // ====================================
  // COUNTER ANIMATION FOR STATS
  // ====================================
  
  const statNumbers = document.querySelectorAll(".stat-number");
  
  statNumbers.forEach(stat => {
    const text = stat.textContent;
    const hasPlus = text.includes("+");
    const hasPercent = text.includes("%");
    const number = parseInt(text.replace(/[^0-9]/g, ""));
    
    if (!isNaN(number)) {
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        innerText: 0,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        onUpdate: function() {
          const current = Math.round(this.targets()[0].innerText);
          stat.textContent = current + (hasPlus ? "+" : "") + (hasPercent ? "%" : "");
        }
      });
    }
  });

  console.log("✨ About page initialized with interactive timeline!");
}
