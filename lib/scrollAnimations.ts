'use client';

/**
 * Utility functions for smooth scrolling and scroll-based animations
 * This helps create coordinated animations across the entire website
 * With performance optimizations to prevent lagging
 */

/**
 * Initialize scroll reveal animations for elements with the 'scroll-reveal' class
 */
export function initScrollReveal() {
  if (typeof window === 'undefined') return;

  // Use requestAnimationFrame to ensure smooth performance
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Use requestAnimationFrame for smoother animation triggering
        requestAnimationFrame(() => {
          entry.target.classList.add('active');
        });
      }
    });
  }, observerOptions);

  // Get all elements with the scroll-reveal class
  const elements = document.querySelectorAll('.scroll-reveal');
  elements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Initialize parallax scrolling effect for elements with the 'parallax' class
 * With performance optimizations to reduce lag
 */
export function initParallaxEffect() {
  if (typeof window === 'undefined') return;

  const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax');
  let ticking = false;
  let lastScrollY = window.scrollY;
  
  const updateParallaxElements = (scrollY: number) => {
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-speed') || '0.1';
      const offset = scrollY * parseFloat(speed);
      element.style.setProperty('--parallax-offset', `${offset}px`);
    });
  };
  
  const handleScroll = () => {
    lastScrollY = window.scrollY;
    
    // Use requestAnimationFrame to throttle scroll handling
    if (!ticking) {
      requestAnimationFrame(() => {
        updateParallaxElements(lastScrollY);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Initial update
  updateParallaxElements(lastScrollY);
  
  // Clean up
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Enhanced smooth scrolling to element with reduced jank
 */
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  // Check if locomotiveScroll instance exists in window
  if (typeof window !== 'undefined' && (window as any).locomotiveScroll) {
    // Use Locomotive Scroll for scrolling
    (window as any).locomotiveScroll.scrollTo(element, {
      offset: 0,
      duration: 1000,
      easing: [0.25, 0.0, 0.35, 1.0]
    });
  } else {
    // Fallback to native scrolling
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Initialize all scroll animations
 */
export function initAllScrollAnimations() {
  // Wrap in requestAnimationFrame for better performance
  requestAnimationFrame(() => {
    initScrollReveal();
    // Don't initialize parallax if using Locomotive Scroll
    // as it will handle the parallax effects
  });
}
