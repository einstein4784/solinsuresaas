/**
 * Mobile Navigation System
 * Simple, reliable mobile menu for all devices
 */

// Execute immediately when script loads
(function() {
  'use strict';
  
  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    console.log('Mobile menu script loaded');
    
    // Check if we should show mobile navigation
    var isMobile = window.innerWidth <= 1023 || 
                   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    console.log('Is mobile:', isMobile, 'Width:', window.innerWidth);
    
    if (isMobile) {
      setupMobileNavigation();
    }
    
    // Handle resize
    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        var nowMobile = window.innerWidth <= 1023;
        if (nowMobile && !document.getElementById('mobile-nav-container')) {
          setupMobileNavigation();
        }
      }, 250);
    });
  }
  
  function setupMobileNavigation() {
    console.log('Setting up mobile navigation...');
    
    // Hide desktop navigation elements
    hideDesktopNav();
    
    // Create mobile menu if it doesn't exist
    if (!document.getElementById('mobile-nav-container')) {
      createMobileMenu();
    }
  }
  
  function hideDesktopNav() {
    // List of selectors to hide
    var hideSelectors = [
      '#desktop-nav-links',
      '#desktop-login-btn', 
      '#desktop-cta-btn',
      '.desktop-nav-only',
      '.features-nav-links',
      '.features-nav-buttons',
      '.nav-buttons',
      '.hero-header-nav .hidden.lg\\:flex',
      '.hero-header-nav a.hidden.lg\\:inline-flex'
    ];
    
    hideSelectors.forEach(function(selector) {
      try {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(el) {
          el.style.cssText = 'display: none !important;';
        });
      } catch(e) {
        // Selector might be invalid, skip it
      }
    });
    
    // Show the hamburger toggle
    var toggles = document.querySelectorAll('.menu-toggle, button[aria-label="Toggle menu"]');
    toggles.forEach(function(toggle) {
      toggle.style.cssText = 'display: flex !important; visibility: visible !important;';
    });
    
    console.log('Desktop nav hidden');
  }
  
  function createMobileMenu() {
    // Remove existing if any
    var existing = document.getElementById('mobile-nav-container');
    if (existing) existing.remove();
    
    // Create container
    var container = document.createElement('div');
    container.id = 'mobile-nav-container';
    
    // Add the HTML
    container.innerHTML = '\
      <style>\
        #mobile-nav-container * { box-sizing: border-box; }\
        #mobile-nav-backdrop {\
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;\
          background: rgba(0,0,0,0.7); z-index: 99998;\
          opacity: 0; visibility: hidden; transition: all 0.3s;\
        }\
        #mobile-nav-backdrop.open { opacity: 1; visibility: visible; }\
        #mobile-nav-drawer {\
          position: fixed; top: 0; right: 0; bottom: 0; width: 85%; max-width: 320px;\
          background: linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%);\
          z-index: 99999; transform: translateX(100%); transition: transform 0.3s ease;\
          overflow-y: auto; display: flex; flex-direction: column;\
        }\
        #mobile-nav-drawer.open { transform: translateX(0); }\
        .mobile-drawer-header {\
          display: flex; justify-content: space-between; align-items: center;\
          padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);\
        }\
        .mobile-drawer-logo { height: 32px; }\
        .mobile-drawer-close {\
          width: 40px; height: 40px; border: none; border-radius: 8px;\
          background: rgba(255,255,255,0.1); color: white; cursor: pointer;\
          display: flex; align-items: center; justify-content: center;\
        }\
        .mobile-drawer-nav { flex: 1; padding: 20px; }\
        .mobile-drawer-link {\
          display: flex; align-items: center; gap: 12px; padding: 14px 16px;\
          color: rgba(255,255,255,0.9); text-decoration: none; font-size: 16px;\
          border-radius: 8px; margin-bottom: 4px; transition: background 0.2s;\
        }\
        .mobile-drawer-link:hover { background: rgba(99,102,241,0.2); }\
        .mobile-drawer-link svg { width: 20px; height: 20px; opacity: 0.7; }\
        .mobile-drawer-divider { height: 1px; background: rgba(255,255,255,0.1); margin: 12px 0; }\
        .mobile-drawer-cta {\
          padding: 20px; border-top: 1px solid rgba(255,255,255,0.1);\
          display: flex; flex-direction: column; gap: 10px;\
        }\
        .mobile-cta-btn {\
          display: block; padding: 14px; text-align: center; border-radius: 10px;\
          text-decoration: none; font-weight: 600; font-size: 15px;\
        }\
        .mobile-cta-login { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); }\
        .mobile-cta-start { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; }\
        #mobile-bottom-nav {\
          position: fixed; bottom: 0; left: 0; right: 0; height: 60px;\
          background: rgba(15,23,42,0.98); border-top: 1px solid rgba(255,255,255,0.1);\
          display: flex; z-index: 99990; padding-bottom: env(safe-area-inset-bottom, 0);\
        }\
        .mobile-bottom-link {\
          flex: 1; display: flex; flex-direction: column; align-items: center;\
          justify-content: center; gap: 3px; color: rgba(255,255,255,0.6);\
          text-decoration: none; font-size: 10px;\
        }\
        .mobile-bottom-link svg { width: 22px; height: 22px; }\
        .mobile-bottom-link.active { color: #818cf8; }\
        body.mobile-menu-open { overflow: hidden; }\
        @media (min-width: 1024px) { #mobile-nav-container { display: none !important; } }\
      </style>\
      <div id="mobile-nav-backdrop"></div>\
      <div id="mobile-nav-drawer">\
        <div class="mobile-drawer-header">\
          <img src="/global/LOGO233.png" alt="Sol-Insure" class="mobile-drawer-logo">\
          <button class="mobile-drawer-close" aria-label="Close menu">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\
              <path d="M6 18L18 6M6 6l12 12"/>\
            </svg>\
          </button>\
        </div>\
        <nav class="mobile-drawer-nav">\
          <a href="/" class="mobile-drawer-link">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>\
            Home\
          </a>\
          <a href="/work" class="mobile-drawer-link">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>\
            Features\
          </a>\
          <a href="/pricing" class="mobile-drawer-link">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>\
            Pricing\
          </a>\
          <a href="/project" class="mobile-drawer-link">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>\
            How It Works\
          </a>\
          <a href="/ai" class="mobile-drawer-link">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>\
            AI\
          </a>\
          <div class="mobile-drawer-divider"></div>\
          <a href="/about" class="mobile-drawer-link">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>\
            About\
          </a>\
          <a href="/contact" class="mobile-drawer-link">\
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>\
            Contact\
          </a>\
        </nav>\
        <div class="mobile-drawer-cta">\
          <a href="https://app.sol-insure.com/login" class="mobile-cta-btn mobile-cta-login">Login</a>\
          <a href="/contact" class="mobile-cta-btn mobile-cta-start">Get Started</a>\
        </div>\
      </div>\
      <nav id="mobile-bottom-nav">\
        <a href="/" class="mobile-bottom-link">\
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>\
          Home\
        </a>\
        <a href="/work" class="mobile-bottom-link">\
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>\
          Features\
        </a>\
        <a href="/pricing" class="mobile-bottom-link">\
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 10v1"/></svg>\
          Pricing\
        </a>\
        <a href="/ai" class="mobile-bottom-link">\
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>\
          AI\
        </a>\
        <a href="#" id="mobile-menu-toggle-btn" class="mobile-bottom-link">\
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>\
          Menu\
        </a>\
      </nav>\
    ';
    
    document.body.appendChild(container);
    
    // Add padding to body for bottom nav
    document.body.style.paddingBottom = '70px';
    
    // Setup event listeners
    setupMenuEvents();
    highlightCurrentPage();
    
    console.log('Mobile menu created successfully');
  }
  
  function setupMenuEvents() {
    var backdrop = document.getElementById('mobile-nav-backdrop');
    var drawer = document.getElementById('mobile-nav-drawer');
    var closeBtn = document.querySelector('.mobile-drawer-close');
    var menuToggleBtn = document.getElementById('mobile-menu-toggle-btn');
    var headerToggle = document.querySelector('.menu-toggle, button[aria-label="Toggle menu"]');
    
    function openMenu() {
      backdrop.classList.add('open');
      drawer.classList.add('open');
      document.body.classList.add('mobile-menu-open');
    }
    
    function closeMenu() {
      backdrop.classList.remove('open');
      drawer.classList.remove('open');
      document.body.classList.remove('mobile-menu-open');
    }
    
    // Menu toggle from bottom nav
    if (menuToggleBtn) {
      menuToggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openMenu();
      });
    }
    
    // Header toggle
    if (headerToggle) {
      headerToggle.addEventListener('click', function(e) {
        e.preventDefault();
        openMenu();
      });
    }
    
    // Close button
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }
    
    // Backdrop click
    if (backdrop) {
      backdrop.addEventListener('click', closeMenu);
    }
    
    // Close on link click
    var links = document.querySelectorAll('.mobile-drawer-link');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        setTimeout(closeMenu, 100);
      });
    });
    
    // ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeMenu();
    });
  }
  
  function highlightCurrentPage() {
    var path = window.location.pathname;
    var links = document.querySelectorAll('.mobile-bottom-link, .mobile-drawer-link');
    
    links.forEach(function(link) {
      var href = link.getAttribute('href');
      if (href === path || (path === '/' && href === '/') || 
          (path.indexOf(href) === 0 && href !== '/' && href !== '#')) {
        link.classList.add('active');
      }
    });
  }
})();
