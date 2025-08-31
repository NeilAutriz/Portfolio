'use client';

/**
 * Utility functions for smooth scrolling and scroll-based animations
 * This helps create coordinated animations across the entire website
 */

/**
 * Initialize scroll reveal animations for elements with the 'scroll-reveal' class
 */
export function initScrollReveal() {
  if (typeof window === 'undefined') return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
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
 */
export function initParallaxEffect() {
  if (typeof window === 'undefined') return;

  const parallaxElements = document.querySelectorAll<HTMLElement>('.parallax');
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-speed') || '0.1';
      const offset = scrollY * parseFloat(speed);
      element.style.setProperty('--parallax-offset', `${offset}px`);
    });
  };

  window.addEventListener('scroll', handleScroll);
  
  // Clean up
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Enhanced smooth scrolling to element
 */
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

/**
 * Initialize all scroll animations
 */
export function initAllScrollAnimations() {
  initScrollReveal();
  initParallaxEffect();
}
