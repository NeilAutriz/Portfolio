'use client';

import { useEffect } from 'react';

/**
 * A custom hook to ensure the navbar remains fixed at the top of the viewport
 * regardless of the scrolling behavior or animation libraries in use.
 */
export function useFixedNavbar(navbarRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!navbarRef.current) return;

    // Ensure the navbar remains fixed regardless of scroll behavior
    const ensureNavbarFixed = () => {
      if (!navbarRef.current) return;
      
      // Force the navbar to be fixed at the top
      navbarRef.current.style.position = 'fixed';
      navbarRef.current.style.top = '0';
      navbarRef.current.style.left = '0';
      navbarRef.current.style.width = '100%';
      navbarRef.current.style.zIndex = '9999';
    };

    // Apply styles immediately
    ensureNavbarFixed();

    // Also apply during scroll to override any locomotive scroll effects
    window.addEventListener('scroll', ensureNavbarFixed, { passive: true });
    
    // Apply after any possible render or animation
    const interval = setInterval(ensureNavbarFixed, 1000);

    return () => {
      window.removeEventListener('scroll', ensureNavbarFixed);
      clearInterval(interval);
    };
  }, [navbarRef]);
}
