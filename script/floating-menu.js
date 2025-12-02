import gsap from "gsap";

export function initFloatingMenu() {
  // inject styles if not present (though we will add to CSS file, this is backup/dynamic)
  
  const floatingHeaderHTML = `
    <div class="floating-header">
      <div class="floating-container">
        <a href="/" class="floating-logo">
          <img src="/global/LOGO233.png" alt="Sol-Insure" />
        </a>
        
        <nav class="floating-nav">
          <a href="/">Home</a>
          <a href="/work">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/project">How It Works</a>
          <a href="/ai">AI</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        
        <div class="floating-actions">
          <a href="/login" class="floating-login">Login</a>
          <a href="/contact" class="floating-cta">Get Started</a>
          
          <button class="floating-menu-toggle" aria-label="Toggle Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  // Inject HTML
  if (!document.querySelector('.floating-header')) {
    document.body.insertAdjacentHTML('beforeend', floatingHeaderHTML);
  }

  const header = document.querySelector('.floating-header');
  const toggle = header.querySelector('.floating-menu-toggle');
  
  // Initial state
  gsap.set(header, { yPercent: -100, opacity: 0 });

  // Scroll Handler
  let isVisible = false;
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.8; // 80% of viewport height threshold

    if (scrollY > heroHeight) {
      if (!isVisible) {
        isVisible = true;
        header.classList.add('visible');
        gsap.to(header, { 
          yPercent: 0, 
          opacity: 1, 
          duration: 0.4, 
          ease: "power2.out" 
        });
      }
    } else {
      if (isVisible) {
        isVisible = false;
        header.classList.remove('visible');
        gsap.to(header, { 
          yPercent: -100, 
          opacity: 0, 
          duration: 0.3, 
          ease: "power2.in" 
        });
      }
    }
  });

  // Mobile Menu Toggle Logic (Reuses existing menu overlay if available, or simple toggle)
  toggle.addEventListener('click', () => {
    // Try to click the main mobile menu toggle if it exists
    const mainToggle = document.querySelector('.menu-toggle, .mobile-menu-toggle, .mobile-menu-btn');
    if (mainToggle && mainToggle.offsetParent !== null) {
      mainToggle.click();
    } else {
      // Fallback if no main menu toggle is found/visible
      window.location.href = '/contact'; // Or navigate/open fallback
    }
  });
}

