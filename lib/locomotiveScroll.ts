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
  
  // Create a new LocomotiveScroll instance with optimized settings for stability
  const locomotiveScroll = new LocomotiveScroll({
    el: scrollContainer as HTMLElement,
    smooth: true,
    smoothMobile: false,    // Disable on mobile for better performance
    multiplier: 1,          // Default multiplier for more natural scrolling
    lerp: 0.05,             // Lower lerp value for more stability and less lag
    getDirection: true,     // Enable direction detection for animations
    getSpeed: false,        // Disable speed detection to reduce calculation overhead
    inertia: 0,             // Disable inertia completely to prevent bounce-back effect
    touchMultiplier: 1.5,   // More controlled touch sensitivity
    smartphone: {
      smooth: false,        // Disable smooth scrolling on smartphones for stability
      breakpoint: 768
    },
    tablet: {
      smooth: false,        // Disable on tablets as well for consistency
      breakpoint: 1024
    },
    class: 'is-revealed',
    reloadOnContextChange: true,
    resetNativeScroll: true
  });

  // Set up proper event listeners for smooth scrolling
  
  // Update scroll only when needed, not on every event
  let hasPageLoaded = false;
  
  // Force update when the page has fully loaded all assets
  window.addEventListener('load', () => {
    hasPageLoaded = true;
    // Delay the update to ensure everything is rendered
    setTimeout(() => {
      locomotiveScroll.update();
    }, 300);
  }, { once: true });
  
  // Update on image load to prevent layout shifts
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    let loadedImagesCount = 0;
    
    const imageLoadHandler = () => {
      loadedImagesCount++;
      if (loadedImagesCount === images.length) {
        locomotiveScroll.update();
      }
    };
    
    images.forEach(img => {
      if (img.complete) {
        imageLoadHandler();
      } else {
        img.addEventListener('load', imageLoadHandler);
      }
    });
  }, { once: true });
  
  // Handle resize events with proper debouncing
  let resizeTimer: NodeJS.Timeout;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    
    resizeTimer = setTimeout(() => {
      if (hasPageLoaded) {
        locomotiveScroll.update();
      }
    }, 250);
  };
  
  window.addEventListener('resize', handleResize, { passive: true });
  
  // Stop scroll restoration on page reload
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  // Make the instance globally available for other functions
  if (typeof window !== 'undefined') {
    (window as any).locomotiveScroll = locomotiveScroll;
  }

  return locomotiveScroll;
}
