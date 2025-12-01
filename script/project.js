/**
 * How It Works Page - Interactive Animations
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initI18n } from "./i18n.js";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initCustomCursor();
  initParticles();
  initProgressTracker();
  initStepNavigation();
  initScrollAnimations();
  initHeroAnimations();
});

/**
 * Custom Cursor
 */
function initCustomCursor() {
  const cursor = document.querySelector('.hiw-cursor');
  if (!cursor || window.innerWidth < 768) return;
  
  const dot = cursor.querySelector('.hiw-cursor-dot');
  const ring = cursor.querySelector('.hiw-cursor-ring');
  
  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;
  let ringX = 0, ringY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animate() {
    // Dot follows immediately
    dotX += (mouseX - dotX) * 0.5;
    dotY += (mouseY - dotY) * 0.5;
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;
    
    // Ring follows with delay
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    
    requestAnimationFrame(animate);
  }
  animate();
  
  // Hover effects
  document.querySelectorAll('a, button, .hiw-progress-node, .magnetic-element').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
      ring.style.borderColor = 'var(--hiw-accent-2)';
      dot.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.borderColor = 'var(--hiw-accent-1)';
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}

/**
 * Floating Particles
 */
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: rgba(99, 102, 241, ${Math.random() * 0.3 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      pointer-events: none;
    `;
    container.appendChild(particle);
    
    gsap.to(particle, {
      y: `${Math.random() * 100 - 50}px`,
      x: `${Math.random() * 100 - 50}px`,
      opacity: Math.random() * 0.5,
      duration: Math.random() * 10 + 5,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    });
  }
}

/**
 * Progress Tracker for Process Steps
 */
function initProgressTracker() {
  const progressFill = document.getElementById('progressFill');
  const nodes = document.querySelectorAll('.hiw-progress-node');
  const cards = document.querySelectorAll('.hiw-step-card');
  
  if (!progressFill || nodes.length === 0) return;
  
  let currentStep = 1;
  
  function updateProgress(step) {
    currentStep = step;
    const progress = ((step - 1) / (nodes.length - 1)) * 100;
    progressFill.style.width = `${progress}%`;
    
    nodes.forEach((node, index) => {
      const nodeStep = index + 1;
      node.classList.remove('active', 'completed');
      
      if (nodeStep < step) {
        node.classList.add('completed');
      } else if (nodeStep === step) {
        node.classList.add('active');
      }
    });
    
    cards.forEach((card, index) => {
      const cardStep = parseInt(card.dataset.step);
      card.classList.remove('active');
      
      if (cardStep === step) {
        card.classList.add('active');
        
        // Animate card content
        gsap.fromTo(card, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
        
        // Animate visual elements
        const visual = card.querySelector('.hiw-step-visual');
        if (visual) {
          gsap.fromTo(visual,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
          );
        }
        
        // Animate content elements
        const details = card.querySelectorAll('.hiw-detail-list li, .hiw-doc-type, .hiw-rule-cat');
        gsap.fromTo(details,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, delay: 0.3, ease: 'power2.out' }
        );
      }
    });
  }
  
  // Click navigation
  nodes.forEach((node, index) => {
    node.addEventListener('click', () => {
      updateProgress(index + 1);
    });
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentStep < nodes.length) {
      updateProgress(currentStep + 1);
    } else if (e.key === 'ArrowLeft' && currentStep > 1) {
      updateProgress(currentStep - 1);
    }
  });
  
  // Auto-advance (optional - uncomment to enable)
  // setInterval(() => {
  //   updateProgress(currentStep < nodes.length ? currentStep + 1 : 1);
  // }, 8000);
  
  // Initialize
  updateProgress(1);
}

/**
 * Step Card Navigation with Smooth Transitions
 */
function initStepNavigation() {
  const container = document.querySelector('.hiw-steps-container');
  if (!container) return;
  
  // Add swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    const nodes = document.querySelectorAll('.hiw-progress-node');
    const activeNode = document.querySelector('.hiw-progress-node.active');
    
    if (!activeNode) return;
    
    const currentStep = parseInt(activeNode.dataset.step);
    
    if (diff > 50 && currentStep < nodes.length) {
      // Swipe left - next
      nodes[currentStep].click();
    } else if (diff < -50 && currentStep > 1) {
      // Swipe right - previous
      nodes[currentStep - 2].click();
    }
  }
}

/**
 * Scroll-Based Animations
 */
function initScrollAnimations() {
  // Header scroll effect
  const header = document.querySelector('.hiw-header');
  if (header) {
    ScrollTrigger.create({
      start: 'top -100',
      onUpdate: (self) => {
        if (self.scroll() > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });
  }
  
  // Process section reveal
  gsap.fromTo('.hiw-process-header > *', 
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hiw-process-header',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
  
  // Progress track reveal
  gsap.fromTo('.hiw-progress-track', 
    { opacity: 0, scaleX: 0 },
    {
      opacity: 1,
      scaleX: 1,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hiw-progress-track',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
  
  gsap.fromTo('.hiw-progress-node', 
    { opacity: 0, scale: 0 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: '.hiw-progress-track',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
  
  // IFRS section
  gsap.fromTo('.hiw-ifrs-header > *', 
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hiw-ifrs-header',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );
  
  gsap.fromTo('.hiw-flow-source, .hiw-flow-engine, .hiw-flow-output', 
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hiw-ifrs-flow',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    }
  );
  
  // CTA section
  gsap.fromTo('.hiw-cta-content > *', 
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.hiw-cta-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
      }
    }
  );
  
  // Stat counters
  document.querySelectorAll('.hiw-stat-value, .hiw-metric-value').forEach(el => {
    const text = el.textContent;
    const numMatch = text.match(/[\d.]+/);
    if (!numMatch) return;
    
    const num = parseFloat(numMatch[0]);
    const prefix = text.split(numMatch[0])[0];
    const suffix = text.split(numMatch[0])[1] || '';
    
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo(el, 
          { textContent: prefix + '0' + suffix },
          {
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              const current = Math.round(gsap.utils.interpolate(0, num, this.progress()));
              el.textContent = prefix + current + suffix;
            },
            onComplete: () => {
              el.textContent = text;
            }
          }
        );
      },
      once: true
    });
  });
}

/**
 * Hero Section Animations
 */
function initHeroAnimations() {
  // Magnetic effect for buttons
  document.querySelectorAll('.magnetic-element').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(el, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  });
  
  // Parallax orbs
  document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.hiw-orb');
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    
    orbs.forEach((orb, index) => {
      const factor = (index + 1) * 15;
      gsap.to(orb, {
        x: x * factor,
        y: y * factor,
        duration: 1,
        ease: 'power2.out'
      });
    });
  });
  
  // AI typing effect in mockups
  const aiTyping = document.querySelectorAll('.hiw-ai-typing');
  aiTyping.forEach(dot => {
    gsap.to(dot, {
      scale: 1.2,
      opacity: 1,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  });
  
  // Continuous engine rotation
  const engineRings = document.querySelectorAll('.hiw-engine-ring');
  engineRings.forEach((ring, index) => {
    const duration = 8 + index * 2;
    const direction = index % 2 === 0 ? 360 : -360;
    
    gsap.to(ring, {
      rotation: direction,
      duration: duration,
      repeat: -1,
      ease: 'none'
    });
  });
  
  // Globe badge rotation
  const globeBadges = document.querySelectorAll('.hiw-badge-item');
  if (globeBadges.length > 0) {
    gsap.to('.hiw-compliance-badges', {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'none'
    });
    
    // Counter-rotate badges to keep them upright
    globeBadges.forEach(badge => {
      gsap.to(badge, {
        rotation: -360,
        duration: 60,
        repeat: -1,
        ease: 'none'
      });
    });
  }
}

// Export for module usage
export { initProgressTracker, initScrollAnimations, initHeroAnimations };
