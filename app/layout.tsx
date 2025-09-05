'use client';

import './globals.css';
import { ReactNode, useEffect, useState } from 'react';
import Footer from '../components/layout/Footer';
import NavbarNew from '../components/layout/NavbarNew';
import { initAllScrollAnimations } from '../lib/scrollAnimations';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [locomotiveScrollInstance, setLocomotiveScrollInstance] = useState<any>(null);

  // Initialize smooth scrolling and animations when the component mounts
  useEffect(() => {
    // Ensure all animations initialize first
    initAllScrollAnimations();
    
    if (typeof window === 'undefined') return;
    
    // Preload key elements to prevent layout shifts
    if (typeof window !== 'undefined') {
      const preloadLinks = [
        '/images/grid-pattern.svg',
        '/images/starry-night.avif'
      ];
      
      preloadLinks.forEach(link => {
        const preloadLink = document.createElement('link');
        preloadLink.href = link;
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        document.head.appendChild(preloadLink);
      });
    }
    
    // Prevent scroll restoration causing jumps
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Single requestAnimationFrame for cleaner initialization
    requestAnimationFrame(async () => {
      try {
        // Dynamically import locomotive scroll to avoid SSR issues
        const { initLocomotiveScroll } = await import('../lib/locomotiveScroll');
        
        // Disable native smooth scrolling to avoid conflicts
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Initialize locomotive scroll
        const scrollInstance = initLocomotiveScroll();
        setLocomotiveScrollInstance(scrollInstance);
        
        // Add scroll event listener for custom effects
        if (scrollInstance) {
          scrollInstance.on('scroll', (args: any) => {
            // Add custom scroll-based effects here if needed
            document.documentElement.classList.add('is-scrolling');
            
            // Remove scrolling class after slight delay
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
              document.documentElement.classList.remove('is-scrolling');
            }, 150);
          });
        }
        
        // Reveal content with slight delay for smoother transition
        setTimeout(() => {
          setLoading(false);
        }, 100);
      } catch (error) {
        console.error('Error initializing locomotive scroll:', error);
        setLoading(false);
      }
    });
    
    return () => {
      // Clean up locomotive-scroll when the component unmounts
      if (locomotiveScrollInstance) {
        locomotiveScrollInstance.destroy();
      }
      // Clear any remaining timeouts
      if (typeof window !== 'undefined' && window.scrollTimeout) {
        clearTimeout(window.scrollTimeout);
      }
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body 
        className={`antialiased ${loading ? 'overflow-hidden' : ''}`} 
        data-scroll-container
        style={{ 
          transform: 'translateZ(0)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      >
        <NavbarNew />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow pt-0"> {/* Removed padding-top as Navbar is fixed */}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
