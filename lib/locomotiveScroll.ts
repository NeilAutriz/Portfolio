'use client';

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

/**
 * Initialize Locomotive Scroll for smooth scrolling effects
 */
export function initLocomotiveScroll() {
  // Make sure we're in the browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return null;
  }
  
  // Get the scroll container
  const scrollContainer = document.querySelector('[data-scroll-container]') || document.documentElement;
  
  // Create a new LocomotiveScroll instance with ultra-smooth settings inspired by asharkamran.netlify.app
  const locomotiveScroll = new LocomotiveScroll({
    el: scrollContainer as HTMLElement,
    smooth: true,
    smoothMobile: true,     // Enable on mobile for consistent experience
    multiplier: 0.45,       // Lower multiplier for extremely smooth scrolling
    lerp: 0.095,            // Higher lerp for butter-smooth transitions with minimal lag
    getDirection: true,     // Enable direction detection for animations
    getSpeed: true,         // Enable speed detection for dynamic effects
    inertia: 0.3,           // Add inertia for natural deceleration
    touchMultiplier: 2,     // Enhanced touch sensitivity
    smartphone: {
      smooth: true,         // Enable smooth scrolling on smartphones
      multiplier: 0.5,      // Optimized for touch devices
      breakpoint: 768
    },
    tablet: {
      smooth: true,
      multiplier: 0.5,      // Consistent experience across devices
      breakpoint: 1024
    },
    class: 'is-revealed',
    reloadOnContextChange: false,
    resetNativeScroll: false
  });

  // Update scroll position on page refresh with optimized timing
  setTimeout(() => {
    // Force a layout recalculation before updating scroll
    document.body.offsetHeight;
    locomotiveScroll.update();
    
    // Fix for navbar to ensure it's properly positioned with locomotive scroll
    const navbar = document.querySelector('.sticky-navbar');
    if (navbar) {
      // Ensure the navbar stays at the top regardless of locomotive scroll
      navbar.classList.add('sticky-navbar');
    }
  }, 300); // Reduced for faster initialization

  // Add smooth scroll updates on image/asset load
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      locomotiveScroll.update();
    });
  });

  // Optimize scroll updates during interaction
  document.addEventListener('mousemove', () => {
    if (!document.documentElement.classList.contains('is-scrolling')) {
      requestAnimationFrame(() => {
        locomotiveScroll.update();
      });
    }
  }, { passive: true });

  // Update scroll on window resize with highly optimized debouncing
  let resizeTimer: NodeJS.Timeout;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    document.documentElement.classList.add('is-resizing');
    
    resizeTimer = setTimeout(() => {
      // Force layout recalculation before updating
      document.body.offsetHeight;
      locomotiveScroll.update();
      document.documentElement.classList.remove('is-resizing');
    }, 150); // Ultra-responsive resize handling
  };
  
  window.addEventListener('resize', handleResize);
  
  // Update on images/content load to prevent layout shifts
  window.addEventListener('load', () => {
    locomotiveScroll.update();
    
    // Fix for navbar to ensure it's properly positioned with locomotive scroll
    const navbar = document.querySelector('.sticky-navbar');
    if (navbar) {
      // Ensure the navbar stays at the top regardless of locomotive scroll
      navbar.classList.add('sticky-navbar');
    }
  });

  return locomotiveScroll;
}
