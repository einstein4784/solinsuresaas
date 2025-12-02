/**
 * Mobile Floating Menu
 * Handles the floating bottom navigation for mobile devices
 */

document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on mobile/tablet
  if (window.innerWidth > 1023) return;

  // Create the mobile menu HTML
  const mobileMenuHTML = `
    <div class="mobile-floating-menu" id="mobileFloatingMenu">
      <div class="mobile-menu-backdrop"></div>
      
      <div class="mobile-menu-panel">
        <nav class="mobile-menu-nav">
          <a href="/" data-i18n="nav_home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </a>
          <a href="/work" data-i18n="nav_features">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Features</span>
          </a>
          <a href="/pricing" data-i18n="nav_pricing">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Pricing</span>
          </a>
          <a href="/project" data-i18n="nav_how_it_works">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span>How It Works</span>
          </a>
          <a href="/ai" data-i18n="nav_ai">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>AI</span>
          </a>
          
          <div class="mobile-menu-divider"></div>
          
          <a href="/about" data-i18n="nav_about">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>About</span>
          </a>
          <a href="/contact" data-i18n="nav_contact">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contact</span>
          </a>
        </nav>
        
        <div class="mobile-menu-cta">
          <a href="https://app.sol-insure.com/login" class="btn-login" data-i18n="nav_login">Login</a>
          <a href="/contact" class="btn-start" data-i18n="nav_get_started">Get Started</a>
        </div>
        
        <div class="mobile-menu-lang">
          <button class="mobile-lang-btn active" data-lang="en">English</button>
          <button class="mobile-lang-btn" data-lang="es">Español</button>
        </div>
      </div>
      
      <button class="mobile-menu-toggle" aria-label="Toggle menu">
        <div class="mobile-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  `;

  // Insert the mobile menu into the DOM
  document.body.insertAdjacentHTML('beforeend', mobileMenuHTML);

  // Get references
  const mobileMenu = document.getElementById('mobileFloatingMenu');
  const menuToggle = mobileMenu.querySelector('.mobile-menu-toggle');
  const backdrop = mobileMenu.querySelector('.mobile-menu-backdrop');
  const menuLinks = mobileMenu.querySelectorAll('.mobile-menu-nav a');
  const langButtons = mobileMenu.querySelectorAll('.mobile-lang-btn');

  // Toggle menu
  function toggleMenu() {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  }

  // Close menu
  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Event listeners
  menuToggle.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);

  // Close menu when clicking a link
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Language toggle
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Get language
      const lang = btn.dataset.lang;

      // Update main language toggle if exists
      const mainLangBtns = document.querySelectorAll('.language-toggle .lang-btn');
      mainLangBtns.forEach(mainBtn => {
        if (mainBtn.dataset.lang === lang) {
          mainBtn.click();
        }
      });

      // Close menu after language change
      setTimeout(closeMenu, 300);
    });
  });

  // Sync with main language toggle
  const mainLangBtns = document.querySelectorAll('.language-toggle .lang-btn');
  mainLangBtns.forEach(mainBtn => {
    mainBtn.addEventListener('click', () => {
      const lang = mainBtn.dataset.lang;
      langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Hide/show menu on scroll
  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide toggle slightly
          menuToggle.style.transform = 'scale(0.9)';
          menuToggle.style.opacity = '0.7';
        } else {
          // Scrolling up - show toggle
          menuToggle.style.transform = 'scale(1)';
          menuToggle.style.opacity = '1';
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    }
  });

  console.log('📱 Mobile floating menu initialized');
});

