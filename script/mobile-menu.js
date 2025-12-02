/**
 * Mobile Navigation System
 * Complete navigation drawer and bottom bar for mobile devices
 */

(function() {
  // Only initialize on mobile/tablet
  if (window.innerWidth > 1023) return;

  document.addEventListener('DOMContentLoaded', initMobileNav);

  function initMobileNav() {
    createMobileDrawer();
    createBottomBar();
    setupEventListeners();
    highlightCurrentPage();
    console.log('📱 Mobile navigation initialized');
  }

  function createMobileDrawer() {
    const drawerHTML = `
      <div class="mobile-nav-drawer" id="mobileNavDrawer">
        <div class="mobile-nav-backdrop"></div>
        <div class="mobile-nav-panel">
          <div class="mobile-nav-header">
            <img src="/global/LOGO233.png" alt="Sol-Insure" class="mobile-nav-logo" />
            <button class="mobile-nav-close" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav class="mobile-nav-links">
            <a href="/" class="mobile-nav-link" data-page="home">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span data-i18n="nav_home">Home</span>
            </a>
            
            <a href="/work" class="mobile-nav-link" data-page="work">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span data-i18n="nav_features">Features</span>
            </a>
            
            <a href="/pricing" class="mobile-nav-link" data-page="pricing">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span data-i18n="nav_pricing">Pricing</span>
            </a>
            
            <a href="/project" class="mobile-nav-link" data-page="project">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span data-i18n="nav_how_it_works">How It Works</span>
            </a>
            
            <a href="/ai" class="mobile-nav-link" data-page="ai">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span data-i18n="nav_ai">AI</span>
            </a>
            
            <div class="mobile-nav-divider"></div>
            
            <a href="/about" class="mobile-nav-link" data-page="about">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span data-i18n="nav_about">About</span>
            </a>
            
            <a href="/contact" class="mobile-nav-link" data-page="contact">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span data-i18n="nav_contact">Contact</span>
            </a>
          </nav>
          
          <div class="mobile-nav-cta">
            <a href="https://app.sol-insure.com/login" class="mobile-nav-btn mobile-nav-btn-login">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span data-i18n="nav_login">Login</span>
            </a>
            <a href="/contact" class="mobile-nav-btn mobile-nav-btn-start">
              <span data-i18n="nav_get_started">Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          
          <div class="mobile-nav-lang">
            <button class="mobile-nav-lang-btn active" data-lang="en">English</button>
            <button class="mobile-nav-lang-btn" data-lang="es">Español</button>
          </div>
          
          <div class="mobile-nav-footer">
            <p>&copy; 2025 Sol-Insure</p>
            <p><a href="mailto:saas@solace-systems.com">saas@solace-systems.com</a></p>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', drawerHTML);
  }

  function createBottomBar() {
    const bottomBarHTML = `
      <div class="mobile-bottom-bar" id="mobileBottomBar">
        <a href="/" data-page="home">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Home</span>
        </a>
        <a href="/work" data-page="work">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span>Features</span>
        </a>
        <a href="/pricing" data-page="pricing">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Pricing</span>
        </a>
        <a href="/ai" data-page="ai">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>AI</span>
        </a>
        <a href="#" class="mobile-menu-btn" id="mobileMenuBtn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Menu</span>
        </a>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', bottomBarHTML);
  }

  function setupEventListeners() {
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = drawer.querySelector('.mobile-nav-backdrop');
    const closeBtn = drawer.querySelector('.mobile-nav-close');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const langBtns = drawer.querySelectorAll('.mobile-nav-lang-btn');
    const navLinks = drawer.querySelectorAll('.mobile-nav-link');

    // Open drawer from header menu toggle
    if (menuToggle) {
      menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        openDrawer();
      });
    }

    // Open drawer from bottom bar menu button
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openDrawer();
      });
    }

    // Close drawer
    closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);

    // Close drawer on navigation
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        setTimeout(closeDrawer, 100);
      });
    });

    // Language toggle
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const lang = btn.dataset.lang;
        
        // Trigger main language toggle if exists
        const mainLangBtn = document.querySelector(`.language-toggle .lang-btn[data-lang="${lang}"]`);
        if (mainLangBtn) {
          mainLangBtn.click();
        }
      });
    });

    // Sync with main language toggle
    const mainLangBtns = document.querySelectorAll('.language-toggle .lang-btn');
    mainLangBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        langBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.lang === lang);
        });
      });
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  function openDrawer() {
    const drawer = document.getElementById('mobileNavDrawer');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    const drawer = document.getElementById('mobileNavDrawer');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  function highlightCurrentPage() {
    const path = window.location.pathname;
    let currentPage = 'home';
    
    if (path.includes('/work')) currentPage = 'work';
    else if (path.includes('/pricing')) currentPage = 'pricing';
    else if (path.includes('/project')) currentPage = 'project';
    else if (path.includes('/ai')) currentPage = 'ai';
    else if (path.includes('/about')) currentPage = 'about';
    else if (path.includes('/contact')) currentPage = 'contact';
    else if (path.includes('/features')) currentPage = 'work';
    else if (path === '/' || path === '/index.html') currentPage = 'home';

    // Highlight in drawer
    const drawerLinks = document.querySelectorAll('.mobile-nav-link');
    drawerLinks.forEach(link => {
      if (link.dataset.page === currentPage) {
        link.classList.add('active');
      }
    });

    // Highlight in bottom bar
    const bottomLinks = document.querySelectorAll('.mobile-bottom-bar a');
    bottomLinks.forEach(link => {
      if (link.dataset.page === currentPage) {
        link.classList.add('active');
      }
    });
  }
})();
