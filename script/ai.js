/**
 * Sol-Insure AI Page - Clean Corporate JavaScript
 * Smooth animations and subtle interactions
 */

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ================================================
// LANGUAGE TOGGLE
// ================================================
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Language switching logic handled by i18n.js
  });
});

// ================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ================================================
// HERO ANIMATIONS
// ================================================
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
  .fromTo('.hero-badge', 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 }
  )
  .fromTo('.hero-title', 
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8 },
    '-=0.3'
  )
  .fromTo('.hero-subtitle', 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 },
    '-=0.4'
  )
  .fromTo('.hero-cta-row', 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 },
    '-=0.3'
  )
  .fromTo('.hero-stats-row .stat-item', 
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
    '-=0.3'
  )
  .fromTo('.ai-dashboard-preview', 
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration: 0.8 },
    '-=0.5'
  );

// ================================================
// SCROLL-TRIGGERED ANIMATIONS
// ================================================

// Section headers
gsap.utils.toArray('.section-header').forEach(header => {
  gsap.fromTo(header,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        once: true
      }
    }
  );
});

// Benefit cards
gsap.utils.toArray('.benefit-card').forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true
      }
    }
  );
});

// Capability cards
gsap.utils.toArray('.capability-card').forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: i * 0.15,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true
      }
    }
  );
});

// Dashboard showcase
gsap.fromTo('.showcase-content',
  { opacity: 0, x: -30 },
  {
    opacity: 1,
    x: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.dashboard-showcase',
      start: 'top 70%',
      once: true
    }
  }
);

gsap.fromTo('.dashboard-mockup-clean',
  { opacity: 0, x: 30 },
  {
    opacity: 1,
    x: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.dashboard-showcase',
      start: 'top 70%',
      once: true
    }
  }
);

// Roadmap items
gsap.utils.toArray('.roadmap-item').forEach((item, i) => {
  gsap.fromTo(item,
    { opacity: 0, x: -20 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      delay: i * 0.15,
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        once: true
      }
    }
  );
});

// Impact stats
gsap.utils.toArray('.impact-stat').forEach((stat, i) => {
  gsap.fromTo(stat,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: i * 0.15,
      scrollTrigger: {
        trigger: stat,
        start: 'top 85%',
        once: true
      }
    }
  );
});

// Explainable AI cards
gsap.utils.toArray('.explain-card').forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        once: true
      }
    }
  );
});

// CTA section
gsap.fromTo('.cta-content',
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: '.ai-cta-section',
      start: 'top 70%',
      once: true
    }
  }
);

gsap.fromTo('.cta-stat',
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.cta-stats',
      start: 'top 85%',
      once: true
    }
  }
);

// ================================================
// ANIMATED COUNTERS
// ================================================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
    const current = Math.floor(start + (target - start) * easeProgress);
    
    if (element.dataset.suffix) {
      element.textContent = current + element.dataset.suffix;
    } else if (element.dataset.prefix) {
      element.textContent = element.dataset.prefix + current;
    } else {
      element.textContent = current;
    }
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// Trigger counter animations on scroll
const statNumbers = document.querySelectorAll('.stat-number[data-target]');
statNumbers.forEach(stat => {
  ScrollTrigger.create({
    trigger: stat,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      const target = parseInt(stat.dataset.target);
      animateCounter(stat, target);
    }
  });
});

// ================================================
// CHART BAR ANIMATION
// ================================================
const chartBars = document.querySelectorAll('.chart-bar');
if (chartBars.length > 0) {
  ScrollTrigger.create({
    trigger: '.chart-area',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      chartBars.forEach((bar, i) => {
        setTimeout(() => {
          bar.style.transform = 'scaleY(1)';
        }, i * 150);
      });
    }
  });
}

// ================================================
// HEADER SCROLL EFFECT
// ================================================
let lastScroll = 0;
const header = document.querySelector('.ai-header-clean');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.background = 'rgba(15, 15, 26, 0.95)';
  } else {
    header.style.background = 'rgba(15, 15, 26, 0.8)';
  }
  
  lastScroll = currentScroll;
});

// ================================================
// DASHBOARD METRIC ANIMATION
// ================================================
const dashMetrics = document.querySelectorAll('.dash-metric');
if (dashMetrics.length > 0) {
  ScrollTrigger.create({
    trigger: '.ai-dashboard-preview',
    start: 'top 80%',
    once: true,
    onEnter: () => {
      dashMetrics.forEach((metric, i) => {
        setTimeout(() => {
          const barFill = metric.querySelector('.bar-fill');
          if (barFill) {
            barFill.style.transition = 'width 1s ease-out';
          }
        }, i * 200);
      });
    }
  });
}

// ================================================
// CIRCLE PROGRESS ANIMATION
// ================================================
const statCircles = document.querySelectorAll('.stat-circle circle:last-of-type');
statCircles.forEach(circle => {
  const originalOffset = circle.getAttribute('stroke-dashoffset');
  circle.setAttribute('stroke-dashoffset', '283'); // Full circumference
  
  ScrollTrigger.create({
    trigger: circle,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(circle, {
        strokeDashoffset: originalOffset,
        duration: 1.5,
        ease: 'power2.out'
      });
    }
  });
});

// ================================================
// HOVER EFFECTS FOR CARDS
// ================================================
const cards = document.querySelectorAll('.benefit-card, .capability-card, .explain-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      y: -4,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// ================================================
// INITIALIZATION
// ================================================
console.log('🤖 Sol-Insure AI Page - Clean Corporate Design Loaded');
console.log('📊 All animations initialized');
