/**
 * Mexico Landing Page - Form Handling & Analytics
 * Sol-Insure LATAM Campaign
 */

// ====================================
// ANALYTICS HELPER
// ====================================
function trackEvent(eventName, eventParams = {}) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        page: 'es_seguro_landing',
        ...eventParams
      });
    }
    
    // Also support dataLayer for GTM
    if (typeof window.dataLayer !== 'undefined' && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        page: 'es_seguro_landing',
        ...eventParams
      });
    }
  } catch (error) {
    console.warn('Analytics tracking error:', error);
  }
}

// ====================================
// LEAD SUBMISSION PLACEHOLDER
// ====================================
async function submitLead(formData) {
  // Simulate API call - replace with actual endpoint
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success (90% success rate for testing)
      if (Math.random() > 0.1) {
        resolve({ success: true, message: 'Lead submitted successfully' });
      } else {
        reject(new Error('Submission failed'));
      }
    }, 1500);
  });
  
  // TODO: Replace with actual API call
  // const response = await fetch('/api/leads', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(formData)
  // });
  // 
  // if (!response.ok) {
  //   throw new Error('Submission failed');
  // }
  // 
  // return response.json();
}

// ====================================
// FORM VALIDATION
// ====================================
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(formData) {
  const errors = [];
  
  if (!formData.nombre || formData.nombre.trim().length < 2) {
    errors.push('Por favor ingrese su nombre completo');
  }
  
  if (!formData.compania || formData.compania.trim().length < 2) {
    errors.push('Por favor ingrese el nombre de su compañía');
  }
  
  if (!formData.email || !validateEmail(formData.email)) {
    errors.push('Por favor ingrese un correo electrónico válido');
  }
  
  if (!formData.pais) {
    errors.push('Por favor seleccione su país');
  }
  
  return errors;
}

// ====================================
// FORM HANDLER
// ====================================
function initFormHandler() {
  const form = document.getElementById('leadForm');
  const submitBtn = document.getElementById('submitBtn');
  const messageEl = document.getElementById('formMessage');
  
  if (!form || !submitBtn || !messageEl) return;
  
  const btnText = submitBtn.querySelector('.mx-btn-text');
  const btnLoading = submitBtn.querySelector('.mx-btn-loading');
  
  function showMessage(type, message) {
    messageEl.className = 'mx-form-message ' + type;
    messageEl.textContent = message;
    messageEl.style.display = 'block';
  }
  
  function hideMessage() {
    messageEl.style.display = 'none';
  }
  
  function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    if (btnText) btnText.style.display = isLoading ? 'none' : 'inline';
    if (btnLoading) btnLoading.style.display = isLoading ? 'inline-flex' : 'none';
  }
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    hideMessage();
    
    // Collect form data
    const formData = {
      nombre: form.nombre.value.trim(),
      compania: form.compania.value.trim(),
      email: form.email.value.trim(),
      telefono: form.telefono.value.trim(),
      pais: form.pais.value
    };
    
    // Validate
    const errors = validateForm(formData);
    if (errors.length > 0) {
      showMessage('error', errors[0]);
      return;
    }
    
    // Submit
    setLoading(true);
    
    try {
      await submitLead(formData);
      
      // Success
      showMessage('success', 'Gracias. Nos pondremos en contacto con usted en breve.');
      
      // Track successful submission
      trackEvent('lead_submit', {
        country: formData.pais,
        has_phone: !!formData.telefono
      });
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      showMessage('error', 'Hubo un error al enviar su solicitud. Por favor intente nuevamente.');
      
      // Track failed submission
      trackEvent('lead_submit_error', {
        error: error.message
      });
    } finally {
      setLoading(false);
    }
  });
  
  // Track form field interactions
  const formFields = form.querySelectorAll('input, select');
  formFields.forEach(field => {
    field.addEventListener('focus', function() {
      trackEvent('form_field_focus', { field: this.name });
    }, { once: true });
  });
}

// ====================================
// FAQ ACCORDION
// ====================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.mx-faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.mx-faq-question');
    const answer = item.querySelector('.mx-faq-answer');
    
    if (!question || !answer) return;
    
    question.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Close all other items
      faqItems.forEach(otherItem => {
        const otherQuestion = otherItem.querySelector('.mx-faq-question');
        const otherAnswer = otherItem.querySelector('.mx-faq-answer');
        if (otherItem !== item && otherQuestion && otherAnswer) {
          otherQuestion.setAttribute('aria-expanded', 'false');
          otherAnswer.classList.remove('open');
        }
      });
      
      // Toggle current item
      this.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('open', !isExpanded);
      
      // Track FAQ interaction
      if (!isExpanded) {
        const questionText = this.querySelector('span')?.textContent?.substring(0, 50);
        trackEvent('faq_open', { question: questionText });
      }
    });
  });
}

// ====================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ====================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        const navHeight = document.querySelector('.mx-nav')?.offsetHeight || 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Track CTA click
        if (targetId === '#demo-form') {
          trackEvent('cta_click', { location: 'inline' });
        }
      }
    });
  });
}

// ====================================
// TRACK PAGE VIEW
// ====================================
function trackPageView() {
  trackEvent('page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });
}

// ====================================
// SCROLL DEPTH TRACKING
// ====================================
function initScrollTracking() {
  let maxScrollPercent = 0;
  const milestones = [25, 50, 75, 100];
  const trackedMilestones = new Set();
  
  function getScrollPercent() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return 100;
    return Math.round((window.scrollY / docHeight) * 100);
  }
  
  function checkMilestones() {
    const scrollPercent = getScrollPercent();
    
    if (scrollPercent > maxScrollPercent) {
      maxScrollPercent = scrollPercent;
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
          trackedMilestones.add(milestone);
          trackEvent('scroll_depth', { percent: milestone });
        }
      });
    }
  }
  
  // Throttled scroll handler
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      checkMilestones();
      scrollTimeout = null;
    }, 100);
  }, { passive: true });
}

// ====================================
// VIDEO PLACEHOLDER CLICK
// ====================================
function initVideoPlaceholder() {
  const videoPlaceholder = document.querySelector('.mx-video-placeholder');
  
  if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
      trackEvent('video_placeholder_click');
      
      // TODO: Replace with actual video embed when ready
      // For now, show an alert or modal
      alert('¡Próximamente! El video de demostración estará disponible muy pronto.');
    });
  }
}

// ====================================
// INITIALIZE ALL
// ====================================
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all features
  initFormHandler();
  initFaqAccordion();
  initSmoothScroll();
  initVideoPlaceholder();
  initScrollTracking();
  
  // Track page view
  trackPageView();
  
  // Track initial landing
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');
  
  if (utmSource || utmMedium || utmCampaign) {
    trackEvent('campaign_landing', {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign
    });
  }
});

// ====================================
// VISIBILITY CHANGE TRACKING
// ====================================
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    trackEvent('page_hidden');
  } else {
    trackEvent('page_visible');
  }
});

// Export for potential external use
window.MexicoLanding = {
  trackEvent,
  submitLead
};

