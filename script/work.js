import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initI18n } from "./i18n";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  initI18n(); // Initialize language system

  // Hero animations
  initHeroAnimations();
  
  // Feature cards animations
  initFeatureCards();
  
  // Benefits cards animations
  initBenefitsCards();
  
  // Compliance section animations
  initComplianceAnimations();
  
  // Integration section animations
  initIntegrationAnimations();
  
  // Lifecycle timeline animations
  initLifecycleAnimations();
  
  // CTA section animations
  initCtaAnimations();
});

function initHeroAnimations() {
  const heroContent = document.querySelector(".features-hero-content");
  if (!heroContent) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Badge animation
  tl.from(".features-hero-badge", {
    opacity: 0,
    y: 30,
    duration: 0.8,
  });

  // Title animations
  tl.from(".features-hero-title .title-line", {
    opacity: 0,
    y: 50,
    duration: 1,
  }, "-=0.4");

  tl.from(".features-hero-title .title-gradient", {
    opacity: 0,
    y: 50,
    duration: 1,
  }, "-=0.7");

  // Subtitle animation
  tl.from(".features-hero-subtitle", {
    opacity: 0,
    y: 30,
    duration: 0.8,
  }, "-=0.5");

  // Stats animation
  tl.from(".hero-stat", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.15,
  }, "-=0.3");

  // Floating orbs continuous animation
  gsap.to(".feature-orb-1", {
    x: 30,
    y: 20,
    duration: 8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(".feature-orb-2", {
    x: -25,
    y: 35,
    duration: 10,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  gsap.to(".feature-orb-3", {
    x: 20,
    y: -25,
    duration: 12,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });
}

function initFeatureCards() {
  const featureCards = document.querySelectorAll(".feature-card");
  if (featureCards.length === 0) return;

  featureCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: (index % 4) * 0.1,
      ease: "power3.out",
    });

    // Hover animations
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(card.querySelector(".feature-icon-wrapper"), {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(card.querySelector(".feature-icon-wrapper"), {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

function initBenefitsCards() {
  const benefitCards = document.querySelectorAll(".benefit-card");
  if (benefitCards.length === 0) return;

  benefitCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power3.out",
    });

    // Animate icon on scroll
    gsap.from(card.querySelector(".benefit-icon"), {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      scale: 0,
      rotation: -180,
      duration: 0.8,
      delay: index * 0.15 + 0.2,
      ease: "back.out(1.7)",
    });
  });
}

function initComplianceAnimations() {
  const complianceSection = document.querySelector(".compliance-section");
  if (!complianceSection) return;

  // Main content animation
  gsap.from(".compliance-main", {
    scrollTrigger: {
      trigger: ".compliance-main",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out",
  });

  // Compliance features staggered animation
  gsap.from(".compliance-feature", {
    scrollTrigger: {
      trigger: ".compliance-features",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });

  // Sidebar stat cards animation
  gsap.from(".compliance-stat-card", {
    scrollTrigger: {
      trigger: ".compliance-sidebar",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
  });
}

function initIntegrationAnimations() {
  const integrationSection = document.querySelector(".integration-section");
  if (!integrationSection) return;

  // Database diagram animation
  gsap.from(".db-node.central", {
    scrollTrigger: {
      trigger: ".database-diagram",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    scale: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
  });

  gsap.from(".db-node:not(.central)", {
    scrollTrigger: {
      trigger: ".database-diagram",
      start: "top 75%",
      toggleActions: "play none none none",
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    delay: 0.3,
    ease: "back.out(1.7)",
  });

  gsap.from(".connection-line", {
    scrollTrigger: {
      trigger: ".database-diagram",
      start: "top 75%",
      toggleActions: "play none none none",
    },
    scaleX: 0,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.5,
    ease: "power3.out",
  });

  // Integration features animation
  gsap.from(".int-feature", {
    scrollTrigger: {
      trigger: ".integration-features",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: "power3.out",
  });

  // API note animation
  gsap.from(".api-note", {
    scrollTrigger: {
      trigger: ".api-note",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  });
}

function initLifecycleAnimations() {
  const lifecycleSection = document.querySelector(".lifecycle-section");
  if (!lifecycleSection) return;

  // Timeline track animation
  gsap.from(".timeline-track", {
    scrollTrigger: {
      trigger: ".lifecycle-timeline",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    scaleX: 0,
    duration: 1.5,
    ease: "power3.inOut",
  });

  // Stage markers animation
  gsap.from(".stage-marker", {
    scrollTrigger: {
      trigger: ".lifecycle-timeline",
      start: "top 75%",
      toggleActions: "play none none none",
    },
    scale: 0,
    duration: 0.6,
    stagger: 0.2,
    delay: 0.5,
    ease: "back.out(1.7)",
  });

  // Stage content animation
  gsap.from(".stage-content", {
    scrollTrigger: {
      trigger: ".lifecycle-timeline",
      start: "top 75%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.7,
    ease: "power3.out",
  });
}

function initCtaAnimations() {
  const ctaSection = document.querySelector(".features-cta-section");
  if (!ctaSection) return;

  // CTA content animation
  gsap.from(".cta-content", {
    scrollTrigger: {
      trigger: ctaSection,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out",
  });

  // CTA stats animation
  gsap.from(".cta-stat", {
    scrollTrigger: {
      trigger: ".cta-stats",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)",
  });

  // Counter animation for stats
  const statValues = ctaSection.querySelectorAll(".cta-stat .value");
  statValues.forEach((stat) => {
    const value = stat.textContent;
    if (value.includes("%")) {
      const num = parseInt(value);
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        textContent: "0%",
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate: function() {
          const current = Math.round(gsap.getProperty(stat, "textContent") || 0);
          stat.textContent = current + "%";
        },
      });
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: target,
        ease: "power3.inOut",
      });
    }
  });
});
