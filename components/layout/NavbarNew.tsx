'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { scrollToElement } from '../../lib/scrollAnimations';

const NAV_LINKS = [
  { name: 'Home', href: '#top' },
  { name: 'About Me', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
];

// Smooth scroll function that works with both native and Locomotive Scroll
const handleScrollTo = (elementId: string) => {
  // If it's a hash link, get the element ID without the #
  const targetId = elementId.replace('#', '');
  
  // Close any mobile menu if open
  const mobileNav = document.getElementById('mobile-nav');
  if (mobileNav && !mobileNav.classList.contains('hidden')) {
    mobileNav.classList.add('hidden');
    mobileNav.classList.add('opacity-0');
    mobileNav.classList.add('translate-y-2');
  }
  
  // Update URL in browser without triggering a jump
  if (history && history.pushState) {
    if (targetId === 'top') {
      history.pushState(null, '', window.location.pathname);
    } else {
      history.pushState(null, '', `#${targetId}`);
    }
  }
  
  // Direct instant scrolling for better user experience
  if (targetId === 'top') {
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    // Then try locomotive scroll for any effects
    if (typeof window !== 'undefined' && (window as any).locomotiveScroll) {
      try {
        (window as any).locomotiveScroll.scrollTo(0, {
          duration: 50,
          disableLerp: true
        });
      } catch (error) {
        console.error('Error scrolling to top with Locomotive Scroll:', error);
      }
    }
  } else {
    // Scroll to other elements immediately
    scrollToElement(targetId);
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll position from either native scroll or locomotive scroll
      const scrollY = window.scrollY || (document.querySelector('[data-scroll-container]')?.scrollTop || 0);
      setScrolled(scrollY > 10);
    };

    // Listen to both native scroll and locomotive scroll events
    window.addEventListener('scroll', handleScroll);
    
    // For Locomotive Scroll compatibility
    const initLocomotiveScrollListener = async () => {
      try {
        // Wait for locomotive scroll to initialize
        setTimeout(() => {
          const scrollContainer = document.querySelector('[data-scroll-container]');
          if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
          }
        }, 500);
      } catch (error) {
        console.error('Error setting up locomotive scroll listener:', error);
      }
    };
    
    initLocomotiveScrollListener();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const scrollContainer = document.querySelector('[data-scroll-container]');
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Handle hash change in URL (for browser back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # and scroll to the element
        const elementId = hash.substring(1);
        
        // DIRECT IMMEDIATE SCROLL - no delays
        const element = document.getElementById(elementId);
        if (element) {
          // Scroll immediately with native scrolling
          const targetPos = element.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({ top: targetPos, behavior: 'auto' });
          
          // Then use our scrollToElement function for any additional positioning
          scrollToElement(elementId);
        }
      } else {
        // No hash, scroll to top immediately
        window.scrollTo({ top: 0, behavior: 'auto' });
        
        // Then try locomotive scroll if available
        if (typeof window !== 'undefined' && (window as any).locomotiveScroll) {
          try {
            (window as any).locomotiveScroll.scrollTo(0, {
              duration: 50,
              disableLerp: true
            });
          } catch (error) {
            console.error('Error scrolling to top with Locomotive Scroll:', error);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    // Listen for hashchange events (browser back/forward)
    window.addEventListener('hashchange', handleHashChange);
    
    // Check hash on initial load
    if (window.location.hash) {
      // Small delay to ensure the page is fully loaded
      setTimeout(handleHashChange, 100);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="sticky-navbar">
      <nav
        className={`w-full transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl shadow-xl py-3' 
            : 'bg-black/60 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
          <button 
            onClick={() => handleScrollTo('#top')}
            className="flex items-center group"
          >
            <div className="relative">
              <img 
                src="/mainlogo(white).png" 
                alt="Neil Autriz Logo" 
                className="h-14 object-contain transition-all duration-300" 
              />
            </div>
          </button>
          
          <div className="hidden md:flex items-center">
            <ul className="flex gap-8 items-center">
              {NAV_LINKS.map((link, index) => (
                <li key={link.name}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleScrollTo(link.href)}
                      className={`relative text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 text-white hover:text-blue-300`}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative text-base font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 text-white hover:text-blue-300`}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => handleScrollTo('#contact')}
              className="ml-8 px-6 py-2.5 rounded-full font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 bg-white/15 backdrop-blur text-white border border-white/20 hover:bg-white/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>
          </div>
          
          <button
            className="md:hidden flex items-center p-2.5 rounded-lg transition-all duration-300 text-white hover:text-blue-300 hover:bg-white/10"
            aria-label="Toggle menu"
            onClick={() => {
              const mobileNav = document.getElementById('mobile-nav');
              mobileNav?.classList.toggle('hidden');
              mobileNav?.classList.toggle('opacity-0');
              mobileNav?.classList.toggle('translate-y-2');
            }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          id="mobile-nav" 
          className="md:hidden hidden opacity-0 translate-y-2 transition-all duration-300 ease-out bg-black/95 backdrop-blur-xl fixed top-[71px] left-0 right-0 z-50 shadow-2xl border-t border-white/10"
        >
          <div className="px-6 py-6 space-y-3">
            {NAV_LINKS.map((link, index) => (
              <div key={link.name} className="border-b border-white/10 last:border-b-0">
                {link.href.startsWith('#') ? (
                  <button
                    onClick={() => {
                      handleScrollTo(link.href);
                      const mobileNav = document.getElementById('mobile-nav');
                      mobileNav?.classList.add('hidden');
                      mobileNav?.classList.add('opacity-0');
                      mobileNav?.classList.add('translate-y-2');
                    }}
                    className="block w-full text-left px-4 py-4 rounded-lg font-medium text-lg transition-all duration-300 text-white hover:text-blue-300 hover:bg-white/10"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-4 rounded-lg font-medium text-lg transition-all duration-300 text-white hover:text-blue-300 hover:bg-white/10"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                    }}
                    onClick={() => {
                      const mobileNav = document.getElementById('mobile-nav');
                      mobileNav?.classList.add('hidden');
                      mobileNav?.classList.add('opacity-0');
                      mobileNav?.classList.add('translate-y-2');
                    }}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2">
              <button 
                onClick={() => {
                  handleScrollTo('#contact');
                  const mobileNav = document.getElementById('mobile-nav');
                  mobileNav?.classList.add('hidden');
                  mobileNav?.classList.add('opacity-0');
                  mobileNav?.classList.add('translate-y-2');
                }}
                className="w-full text-center px-4 py-4 mt-2 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center gap-2 bg-white/15 backdrop-blur text-white border border-white/20 hover:bg-white/25"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
