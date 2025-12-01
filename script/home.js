import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initAnimations } from "./anime";
import { initI18n } from "./i18n";
import lottie from "lottie-web";

document.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  initI18n(); // Initialize language system

  gsap.registerPlugin(ScrollTrigger);
  
  // SplitText is premium - using fallback
  let SplitText = null;
  
  // Initialize Lottie animation as background
  const lottieContainer = document.getElementById("hero-lottie");
  if (lottieContainer) {
    const animation = lottie.loadAnimation({
      container: lottieContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/earth-connections.json"
    });
    
    // Make the SVG fill the entire hero background
    animation.addEventListener('DOMLoaded', () => {
      const svg = lottieContainer.querySelector('svg');
      if (svg) {
        svg.style.width = '120%';
        svg.style.height = '120%';
        svg.setAttribute('preserveAspectRatio', 'xMidYMid cover');
        svg.style.position = 'absolute';
        svg.style.top = '50%';
        svg.style.left = '50%';
        svg.style.transform = 'translate(-50%, -50%) scale(1.1)';
      }
    });
    
    // Fade in the background animation
    gsap.fromTo(lottieContainer, 
      { 
        opacity: 0
      },
      { 
        opacity: 0.15,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
      }
    );
  }

  // Initialize World Map Lottie animation for home-about section
  const homeAboutWorldMap = document.getElementById("home-about-world-map");
  if (homeAboutWorldMap) {
    const worldMapAnimation = lottie.loadAnimation({
      container: homeAboutWorldMap,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/World map pinging and searching.json"
    });
    
    // Make the SVG fill the entire background
    worldMapAnimation.addEventListener('DOMLoaded', () => {
      const svg = homeAboutWorldMap.querySelector('svg');
      if (svg) {
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.setAttribute('preserveAspectRatio', 'xMidYMid cover');
      }
    });
    
    // Fade in the world map animation
    gsap.fromTo(homeAboutWorldMap, 
      { 
        opacity: 0
      },
      { 
        opacity: 0.15,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
      }
    );
  }

  // Initialize Family Insurance Lottie animation for home-services section
  const familyInsuranceContainer = document.getElementById("home-services-family-insurance");
  if (familyInsuranceContainer) {
    const familyInsuranceAnimation = lottie.loadAnimation({
      container: familyInsuranceContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Family Insurance.json"
    });
    
    // Make the SVG fill the container
    familyInsuranceAnimation.addEventListener('DOMLoaded', () => {
      const svg = familyInsuranceContainer.querySelector('svg');
      if (svg) {
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      }
    });
    
    // Fade in the family insurance animation
    gsap.fromTo(familyInsuranceContainer, 
      { 
        opacity: 0
      },
      { 
        opacity: 0.2,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
      }
    );
  }

  // Initialize World Map Lottie animation (legacy - keep for backwards compatibility)
  const worldMapContainer = document.getElementById("world-map-lottie");
  if (worldMapContainer) {
    const worldMapAnimation = lottie.loadAnimation({
      container: worldMapContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/World map pinging and searching.json"
    });
    
    // Make the SVG fill the container
    worldMapAnimation.addEventListener('DOMLoaded', () => {
      const svg = worldMapContainer.querySelector('svg');
      if (svg) {
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      }
    });
    
    // Fade in the world map animation
    gsap.fromTo(worldMapContainer, 
      { 
        opacity: 0
      },
      { 
        opacity: 0.3,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
      }
    );
  }

  gsap.set(".hero .hero-cards .card", { transformOrigin: "center center" });

  gsap.to(".hero .hero-cards .card", {
    scale: 1,
    duration: 0.75,
    delay: 0.25,
    stagger: 0.1,
    ease: "power4.out",
    onComplete: () => {
      gsap.set("#hero-card-1", { transformOrigin: "top right" });
      gsap.set("#hero-card-3", { transformOrigin: "top left" });
    },
  });

  const smoothStep = (p) => p * p * (3 - 2 * p);

  if (window.innerWidth > 1000) {
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "75% top",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        const heroCardsContainerOpacity = gsap.utils.interpolate(
          1,
          0.5,
          smoothStep(progress)
        );
        gsap.set(".hero-cards", {
          opacity: heroCardsContainerOpacity,
        });

        ["#hero-card-1", "#hero-card-2", "#hero-card-3"].forEach(
          (cardId, index) => {
            const delay = index * 0.9;
            const cardProgress = gsap.utils.clamp(
              0,
              1,
              (progress - delay * 0.1) / (1 - delay * 0.1)
            );

            const y = gsap.utils.interpolate(
              "0%",
              "400%",
              smoothStep(cardProgress)
            );
            const scale = gsap.utils.interpolate(
              1,
              0.75,
              smoothStep(cardProgress)
            );

            let x = "0%";
            let rotation = 0;
            if (index === 0) {
              x = gsap.utils.interpolate("0%", "90%", smoothStep(cardProgress));
              rotation = gsap.utils.interpolate(
                0,
                -15,
                smoothStep(cardProgress)
              );
            } else if (index === 2) {
              x = gsap.utils.interpolate(
                "0%",
                "-90%",
                smoothStep(cardProgress)
              );
              rotation = gsap.utils.interpolate(
                0,
                15,
                smoothStep(cardProgress)
              );
            }

            gsap.set(cardId, {
              y: y,
              x: x,
              rotation: rotation,
              scale: scale,
            });
          }
        );
      },
    });

    ScrollTrigger.create({
      trigger: ".home-services",
      start: "top top",
      end: `+=${window.innerHeight * 4}px`,
      pin: ".home-services",
      pinSpacing: true,
    });

    ScrollTrigger.create({
      trigger: ".home-services",
      start: "top bottom",
      end: `+=${window.innerHeight * 4}`,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        const headerProgress = gsap.utils.clamp(0, 1, progress / 0.9);
        const headerY = gsap.utils.interpolate(
          "300%",
          "0%",
          smoothStep(headerProgress)
        );
        gsap.set(".home-services-header", {
          y: headerY,
        });

        ["#card-1", "#card-2", "#card-3"].forEach((cardId, index) => {
          const delay = index * 0.5;
          const cardProgress = gsap.utils.clamp(
            0,
            1,
            (progress - delay * 0.1) / (0.9 - delay * 0.1)
          );

          const innerCard = document.querySelector(
            `${cardId} .flip-card-inner`
          );

          let y;
          if (cardProgress < 0.4) {
            const normalizedProgress = cardProgress / 0.4;
            y = gsap.utils.interpolate(
              "-100%",
              "50%",
              smoothStep(normalizedProgress)
            );
          } else if (cardProgress < 0.6) {
            const normalizedProgress = (cardProgress - 0.4) / 0.2;
            y = gsap.utils.interpolate(
              "50%",
              "0%",
              smoothStep(normalizedProgress)
            );
          } else {
            y = "0%";
          }

          let scale;
          if (cardProgress < 0.4) {
            const normalizedProgress = cardProgress / 0.4;
            scale = gsap.utils.interpolate(
              0.25,
              0.75,
              smoothStep(normalizedProgress)
            );
          } else if (cardProgress < 0.6) {
            const normalizedProgress = (cardProgress - 0.4) / 0.2;
            scale = gsap.utils.interpolate(
              0.75,
              1,
              smoothStep(normalizedProgress)
            );
          } else {
            scale = 1;
          }

          let opacity;
          if (cardProgress < 0.2) {
            const normalizedProgress = cardProgress / 0.2;
            opacity = smoothStep(normalizedProgress);
          } else {
            opacity = 1;
          }

          let x, rotate, rotationY;
          if (cardProgress < 0.6) {
            x = index === 0 ? "100%" : index === 1 ? "0%" : "-100%";
            rotate = index === 0 ? -5 : index === 1 ? 0 : 5;
            rotationY = 0;
          } else if (cardProgress < 1) {
            const normalizedProgress = (cardProgress - 0.6) / 0.4;
            x = gsap.utils.interpolate(
              index === 0 ? "100%" : index === 1 ? "0%" : "-100%",
              "0%",
              smoothStep(normalizedProgress)
            );
            rotate = gsap.utils.interpolate(
              index === 0 ? -5 : index === 1 ? 0 : 5,
              0,
              smoothStep(normalizedProgress)
            );
            rotationY = smoothStep(normalizedProgress) * 180;
          } else {
            x = "0%";
            rotate = 0;
            rotationY = 180;
          }

          gsap.set(cardId, {
            opacity: opacity,
            y: y,
            x: x,
            rotate: rotate,
            scale: scale,
          });

          gsap.set(innerCard, {
            rotationY: rotationY,
          });
        });
      },
    });
  }

  const spotlightImages = document.querySelector(".home-spotlight-images");
  const containerHeight = spotlightImages.offsetHeight;
  const viewportHeight = window.innerHeight;

  const initialOffset = containerHeight * 0.05;
  const totalMovement = containerHeight + initialOffset + viewportHeight;

  const spotlightHeader = document.querySelector(".spotlight-mask-header h3");
  let headerSplit = null;

  if (spotlightHeader) {
    // Try to use SplitText, fallback to simple text if not available
    try {
      if (SplitText) {
        headerSplit = SplitText.create(spotlightHeader, {
          type: "words",
          wordsClass: "spotlight-word",
        });
        if (headerSplit && headerSplit.words) {
          gsap.set(headerSplit.words, { opacity: 0 });
        }
      } else {
        gsap.set(spotlightHeader, { opacity: 0 });
        gsap.to(spotlightHeader, { opacity: 1, duration: 1, delay: 0.75 });
      }
    } catch (e) {
      gsap.set(spotlightHeader, { opacity: 0 });
      gsap.to(spotlightHeader, { opacity: 1, duration: 1, delay: 0.75 });
    }
  }

  ScrollTrigger.create({
    trigger: ".home-spotlight",
    start: "top top",
    end: `+=${window.innerHeight * 7}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      if (progress <= 0.5) {
        const animationProgress = progress / 0.5;

        const startY = 5;
        const endY = -(totalMovement / containerHeight) * 100;

        const currentY = startY + (endY - startY) * animationProgress;

        gsap.set(spotlightImages, {
          y: `${currentY}%`,
        });
      }

      const maskContainer = document.querySelector(
        ".spotlight-mask-image-container"
      );
      const maskImage = document.querySelector(".spotlight-mask-image");

      if (maskContainer && maskImage) {
        if (progress >= 0.25 && progress <= 0.75) {
          const maskProgress = (progress - 0.25) / 0.5;
          const maskSize = `${maskProgress * 475}%`;

          const imageScale = 1.25 - maskProgress * 0.25;

          maskContainer.style.setProperty("-webkit-mask-size", maskSize);
          maskContainer.style.setProperty("mask-size", maskSize);

          gsap.set(maskImage, {
            scale: imageScale,
          });
        } else if (progress < 0.25) {
          maskContainer.style.setProperty("-webkit-mask-size", "0%");
          maskContainer.style.setProperty("mask-size", "0%");

          gsap.set(maskImage, {
            scale: 1.25,
          });
        } else if (progress > 0.75) {
          maskContainer.style.setProperty("-webkit-mask-size", "475%");
          maskContainer.style.setProperty("mask-size", "475%");

          gsap.set(maskImage, {
            scale: 1,
          });
        }
      }

      if (headerSplit && headerSplit.words && headerSplit.words.length > 0) {
        if (progress >= 0.75 && progress <= 0.95) {
          const textProgress = (progress - 0.75) / 0.2;
          const totalWords = headerSplit.words.length;

          headerSplit.words.forEach((word, index) => {
            const wordRevealProgress = index / totalWords;

            if (textProgress >= wordRevealProgress) {
              gsap.set(word, { opacity: 1 });
            } else {
              gsap.set(word, { opacity: 0 });
            }
          });
        } else if (progress < 0.75) {
          gsap.set(headerSplit.words, { opacity: 0 });
        } else if (progress > 0.95) {
          gsap.set(headerSplit.words, { opacity: 1 });
        }
      }
    },
  });

  const outroHeader = document.querySelector(".outro h3");
  let outroSplit = null;

  if (outroHeader) {
    try {
      if (SplitText) {
        outroSplit = SplitText.create(outroHeader, {
          type: "words",
          wordsClass: "outro-word",
        });
        if (outroSplit && outroSplit.words) {
          gsap.set(outroSplit.words, { opacity: 0 });
        }
      } else {
        gsap.set(outroHeader, { opacity: 0 });
        gsap.to(outroHeader, { opacity: 1, duration: 1, delay: 0.25 });
      }
    } catch (e) {
      gsap.set(outroHeader, { opacity: 0 });
      gsap.to(outroHeader, { opacity: 1, duration: 1, delay: 0.25 });
    }
  }

  const outroStrips = document.querySelectorAll(".outro-strip");
  const stripSpeeds = [0.3, 0.4, 0.25, 0.35, 0.2, 0.25];

  ScrollTrigger.create({
    trigger: ".outro",
    start: "top top",
    end: `+=${window.innerHeight * 3}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      if (outroSplit && outroSplit.words && outroSplit.words.length > 0) {
        if (progress >= 0.25 && progress <= 0.75) {
          const textProgress = (progress - 0.25) / 0.5;
          const totalWords = outroSplit.words.length;

          outroSplit.words.forEach((word, index) => {
            const wordRevealProgress = index / totalWords;

            if (textProgress >= wordRevealProgress) {
              gsap.set(word, { opacity: 1 });
            } else {
              gsap.set(word, { opacity: 0 });
            }
          });
        } else if (progress < 0.25) {
          gsap.set(outroSplit.words, { opacity: 0 });
        } else if (progress > 0.75) {
          gsap.set(outroSplit.words, { opacity: 1 });
        }
      }
    },
  });

  ScrollTrigger.create({
    trigger: ".outro",
    start: "top bottom",
    end: `+=${window.innerHeight * 6}px`,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      outroStrips.forEach((strip, index) => {
        if (stripSpeeds[index] !== undefined) {
          const speed = stripSpeeds[index];
          const movement = progress * 100 * speed;

          gsap.set(strip, {
            x: `${movement}%`,
          });
        }
      });
    },
  });

  // ====================================
  // GOD-LEVEL INTERACTIVE EFFECTS
  // ====================================

  // Create Custom Cursor
  const customCursor = document.createElement('div');
  customCursor.className = 'custom-cursor';
  document.body.appendChild(customCursor);

  // Create Cursor Glow
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);

  // Create Scroll Progress Indicator
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);

  // Create Noise Overlay
  const noiseOverlay = document.createElement('div');
  noiseOverlay.className = 'noise-overlay';
  document.body.appendChild(noiseOverlay);

  // Mouse position tracking
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  // Smooth cursor following
  function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.15;
    cursorY += dy * 0.15;
    
    customCursor.style.left = cursorX + 'px';
    customCursor.style.top = cursorY + 'px';
    
    cursorGlow.style.left = mouseX + 'px';
    cursorGlow.style.top = mouseY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Mouse move handler
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update CSS variables for spotlight effects
    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
  });

  // Cursor hover states
  const hoverElements = document.querySelectorAll('a, button, .user-centric-card, .home-about-card, .flip-card-inner, .hero-card-inner');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      customCursor.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      customCursor.classList.remove('hovering');
    });
  });

  // Click effect
  document.addEventListener('mousedown', () => {
    customCursor.classList.add('clicking');
  });
  document.addEventListener('mouseup', () => {
    customCursor.classList.remove('clicking');
  });

  // Scroll Progress
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  });

  // Ripple Effect on Buttons
  document.querySelectorAll('button, .inline-flex, .magnetic-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = e.clientX - rect.left - size/2 + 'px';
      ripple.style.top = e.clientY - rect.top - size/2 + 'px';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // 3D Tilt Effect on Cards
  const tiltCards = document.querySelectorAll('.user-centric-card, .home-about-card, .hero-card-inner');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      
      // Update glow position
      card.style.setProperty('--mouse-x', (x / rect.width) * 100 + '%');
      card.style.setProperty('--mouse-y', (y / rect.height) * 100 + '%');
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });

  // Magnetic Button Effect
  document.querySelectorAll('.hero .inline-flex').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // Reveal on Scroll with Intersection Observer
  const revealElements = document.querySelectorAll('.user-centric-card, .home-about-card, .user-centric-header, .home-about-header-section');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(el);
  });

  // Parallax Effect on Scroll
  const parallaxElements = document.querySelectorAll('.orb, .ambient-orb, .liquid-shape, .particle');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach((el, index) => {
      const speed = 0.1 + (index * 0.05);
      const yPos = -(scrollY * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  });

  // Text Scramble Effect
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
    
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => this.resolve = resolve);
      this.queue = [];
      
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    
    update() {
      let output = '';
      let complete = 0;
      
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.chars[Math.floor(Math.random() * this.chars.length)];
            this.queue[i].char = char;
          }
          output += `<span class="scramble-char">${char}</span>`;
        } else {
          output += from;
        }
      }
      
      this.el.innerHTML = output;
      
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  }

  // Text scramble on hero title disabled per user request
  // const heroTitle = document.querySelector('.hero h1');
  // if (heroTitle) {
  //   const originalText = heroTitle.innerText;
  //   const fx = new TextScramble(heroTitle);
  //   heroTitle.addEventListener('mouseenter', () => {
  //     fx.setText(originalText);
  //   });
  // }

  // Create Floating Particles
  function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.zIndex = '0';
    particlesContainer.style.pointerEvents = 'none';
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-dot';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (15 + Math.random() * 20) + 's';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      particlesContainer.appendChild(particle);
    }
  }
  createParticles();

  // Smooth Section Color Transition
  const sections = document.querySelectorAll('section');
  const colors = [
    { primary: '#44b0ff', secondary: '#a855f7' },
    { primary: '#a855f7', secondary: '#6366f1' },
    { primary: '#6366f1', secondary: '#44b0ff' },
    { primary: '#44b0ff', secondary: '#6366f1' },
    { primary: '#a855f7', secondary: '#44b0ff' }
  ];

  const colorObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);
        const color = colors[index % colors.length];
        
        document.documentElement.style.setProperty('--scroll-color-1', color.primary);
        document.documentElement.style.setProperty('--scroll-color-2', color.secondary);
        
        gsap.to(scrollProgress, {
          background: `linear-gradient(90deg, ${color.primary} 0%, ${color.secondary} 100%)`,
          duration: 0.5
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => colorObserver.observe(section));

  // Breathing Animation for Hero Elements
  const breathingElements = document.querySelectorAll('.hero-card-inner, .orb');
  breathingElements.forEach(el => {
    el.classList.add('breathing-glow');
  });

  // Add Holographic Shine to Cards
  document.querySelectorAll('.flip-card-front, .hero-card-inner').forEach(card => {
    card.classList.add('holographic');
  });

  // Easter Egg - Konami Code
  let konamiCode = [];
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  
  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
      // Trigger rainbow mode!
      document.body.style.animation = 'rainbowBg 5s linear infinite';
      
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes rainbowBg {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
      
      setTimeout(() => {
        document.body.style.animation = '';
      }, 10000);
    }
  });

  // Performance: Pause animations when tab is not visible
  document.addEventListener('visibilitychange', () => {
    const animations = document.querySelectorAll('[style*="animation"]');
    animations.forEach(el => {
      if (document.hidden) {
        el.style.animationPlayState = 'paused';
      } else {
        el.style.animationPlayState = 'running';
      }
    });
  });

  // Add liquid shapes to sections
  function addLiquidShapes() {
    const sectionsWithLiquid = ['.hero', '.user-centric-section', '.home-about'];
    
    sectionsWithLiquid.forEach((selector, index) => {
      const section = document.querySelector(selector);
      if (section) {
        const liquid = document.createElement('div');
        liquid.className = 'liquid-shape';
        liquid.style.top = (20 + index * 30) + '%';
        liquid.style.left = index % 2 === 0 ? '-10%' : '60%';
        liquid.style.animationDelay = -(index * 5) + 's';
        liquid.style.zIndex = '0';
        section.style.position = 'relative';
        section.insertBefore(liquid, section.firstChild);
      }
    });
  }
  addLiquidShapes();

  // Scroll-triggered counter animation
  function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
      start += increment;
      if (start < target) {
        el.textContent = Math.floor(start);
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target;
      }
    }
    updateCounter();
  }

  // Add gradient border to cards
  document.querySelectorAll('.user-centric-card').forEach(card => {
    card.classList.add('gradient-border');
  });

  // ====================================
  // NEXT-LEVEL CINEMATIC ENHANCEMENTS
  // ====================================

  // Create Global Floating Orbs
  const globalOrbs = ['global-orb-1', 'global-orb-2', 'global-orb-3'];
  globalOrbs.forEach(orbClass => {
    const orb = document.createElement('div');
    orb.className = `global-orb ${orbClass}`;
    document.body.appendChild(orb);
  });

  // Create Cinematic Vignette
  const vignette = document.createElement('div');
  vignette.className = 'cinematic-vignette';
  document.body.appendChild(vignette);

  // Create Section Navigation Dots
  const sectionCounter = document.createElement('div');
  sectionCounter.className = 'section-counter';
  const allSections = document.querySelectorAll('section');
  allSections.forEach((section, index) => {
    const dot = document.createElement('div');
    dot.className = 'section-dot';
    dot.dataset.section = index;
    dot.addEventListener('click', () => {
      section.scrollIntoView({ behavior: 'smooth' });
    });
    sectionCounter.appendChild(dot);
  });
  document.body.appendChild(sectionCounter);

  // Update Active Section Dot
  const sectionDots = document.querySelectorAll('.section-dot');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(allSections).indexOf(entry.target);
        sectionDots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
    });
  }, { threshold: 0.3 });
  allSections.forEach(section => sectionObserver.observe(section));

  // Create Scroll Indicator
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'scroll-indicator';
  scrollIndicator.innerHTML = `
    <span class="scroll-indicator-text">Scroll</span>
    <div class="scroll-indicator-icon"></div>
  `;
  document.body.appendChild(scrollIndicator);

  // Hide scroll indicator on scroll
  let scrollIndicatorHidden = false;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100 && !scrollIndicatorHidden) {
      scrollIndicator.classList.add('hidden');
      scrollIndicatorHidden = true;
    } else if (window.scrollY <= 100) {
      scrollIndicator.classList.remove('hidden');
      scrollIndicatorHidden = false;
    }
  });

  // Create Sound Wave Visualization
  const soundWave = document.createElement('div');
  soundWave.className = 'sound-wave';
  for (let i = 0; i < 12; i++) {
    const bar = document.createElement('div');
    bar.className = 'sound-bar';
    soundWave.appendChild(bar);
  }
  document.body.appendChild(soundWave);

  // Create DNA Helix
  const dnaHelix = document.createElement('div');
  dnaHelix.className = 'dna-helix';
  const dnaStrand = document.createElement('div');
  dnaStrand.className = 'dna-strand';
  for (let i = 0; i < 10; i++) {
    const dot = document.createElement('div');
    dot.className = 'dna-dot';
    dot.style.top = (i * 20) + 'px';
    dot.style.animationDelay = (i * 0.2) + 's';
    dnaStrand.appendChild(dot);
  }
  dnaHelix.appendChild(dnaStrand);
  document.body.appendChild(dnaHelix);

  // Create Glow Trail
  const glowTrail = document.createElement('div');
  glowTrail.className = 'glow-trail';
  document.body.appendChild(glowTrail);

  // Smooth glow trail following
  let glowX = 0;
  let glowY = 0;
  function animateGlowTrail() {
    const dx = mouseX - glowX;
    const dy = mouseY - glowY;
    glowX += dx * 0.05;
    glowY += dy * 0.05;
    glowTrail.style.left = glowX + 'px';
    glowTrail.style.top = glowY + 'px';
    requestAnimationFrame(animateGlowTrail);
  }
  animateGlowTrail();

  // Add Flow Connectors to Sections
  allSections.forEach((section, index) => {
    if (index < allSections.length - 1) {
      const connector = document.createElement('div');
      connector.className = 'flow-connector';
      section.appendChild(connector);
    }
  });

  // Smooth Scroll with Momentum
  let scrollMomentum = 0;
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    scrollMomentum = currentScroll - lastScrollTop;
    lastScrollTop = currentScroll;

    // Apply scroll-based effects
    const scrollPercent = currentScroll / (document.documentElement.scrollHeight - window.innerHeight);
    
    // Scale global orbs based on scroll
    document.querySelectorAll('.global-orb').forEach((orb, index) => {
      const scale = 1 + (scrollPercent * 0.3) * (index + 1) * 0.2;
      orb.style.transform = `scale(${scale})`;
    });
  });

  // Card Entrance Animation on Scroll
  const cardElements = document.querySelectorAll('.user-centric-card, .home-about-card');
  cardElements.forEach(card => {
    card.classList.add('card-entrance');
  });

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  cardElements.forEach(card => cardObserver.observe(card));

  // Interactive Glow Effect
  document.querySelectorAll('.user-centric-card, .home-about-card').forEach(el => {
    el.classList.add('interactive-glow');
    
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mouse-x', x + '%');
      el.style.setProperty('--mouse-y', y + '%');
    });
  });

  // Ambient Pulse Effect
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('ambient-pulse');
  });

  // Flowing Gradient Background
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('flowing-gradient');
  });

  // Dynamic Parallax on Scroll
  const parallaxMultipliers = [0.1, 0.15, 0.2, 0.25, 0.3];
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    document.querySelectorAll('.global-orb').forEach((orb, index) => {
      const speed = parallaxMultipliers[index % parallaxMultipliers.length];
      orb.style.transform = `translateY(${scrollY * speed}px)`;
    });

    document.querySelectorAll('.liquid-shape').forEach((shape, index) => {
      const speed = parallaxMultipliers[(index + 2) % parallaxMultipliers.length];
      shape.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`;
    });
  });

  // Smooth Section Transitions with GSAP
  gsap.utils.toArray('section').forEach((section, index) => {
    gsap.fromTo(section, 
      { opacity: 0.8 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      }
    );
  });

  // Header text animation
  gsap.utils.toArray('.user-centric-title, .home-about-title').forEach(title => {
    gsap.fromTo(title,
      { 
        y: 50, 
        opacity: 0,
        filter: 'blur(10px)'
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Staggered card animations
  gsap.utils.toArray('.user-centric-cards-grid, .home-about-cards-grid').forEach(grid => {
    const cards = grid.querySelectorAll('.user-centric-card, .home-about-card');
    
    gsap.fromTo(cards,
      { 
        y: 80, 
        opacity: 0,
        scale: 0.9,
        rotateX: 15
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Color shift based on scroll position
  window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    // Shift hue slightly based on scroll
    const hueShift = scrollPercent * 30; // Max 30 degree shift
    document.documentElement.style.setProperty('--dynamic-hue', hueShift + 'deg');
    
    // Update progress bar color
    const colors = [
      { r: 68, g: 176, b: 255 },   // Blue
      { r: 168, g: 85, b: 247 },   // Purple
      { r: 99, g: 102, b: 241 }    // Indigo
    ];
    
    const colorIndex = Math.floor(scrollPercent * (colors.length - 1));
    const nextColorIndex = Math.min(colorIndex + 1, colors.length - 1);
    const colorProgress = (scrollPercent * (colors.length - 1)) % 1;
    
    const currentColor = colors[colorIndex];
    const nextColor = colors[nextColorIndex];
    
    const r = Math.round(currentColor.r + (nextColor.r - currentColor.r) * colorProgress);
    const g = Math.round(currentColor.g + (nextColor.g - currentColor.g) * colorProgress);
    const b = Math.round(currentColor.b + (nextColor.b - currentColor.b) * colorProgress);
    
    scrollProgress.style.background = `linear-gradient(90deg, rgb(${r}, ${g}, ${b}) 0%, rgba(${r}, ${g}, ${b}, 0.5) 100%)`;
    scrollProgress.style.boxShadow = `0 0 20px rgba(${r}, ${g}, ${b}, 0.8), 0 0 40px rgba(${r}, ${g}, ${b}, 0.5)`;
  });

  // Mouse velocity effect
  let lastMouseX = 0;
  let lastMouseY = 0;
  let mouseVelocity = 0;

  document.addEventListener('mousemove', (e) => {
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    mouseVelocity = Math.sqrt(dx * dx + dy * dy);
    
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    // Scale cursor based on velocity
    const scale = 1 + Math.min(mouseVelocity * 0.01, 0.5);
    customCursor.style.transform = `translate(-50%, -50%) scale(${scale})`;

    // Glow trail opacity based on velocity
    const glowOpacity = Math.min(mouseVelocity * 0.02, 0.8);
    glowTrail.style.opacity = glowOpacity;
  });

  console.log('🚀 NEXT-LEVEL cinematic effects initialized!');
  console.log('✨ Site flow enhanced to maximum engagement!');
});
