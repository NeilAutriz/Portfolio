'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-out ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-9 w-auto">
              <img 
                src="/mainlogo(white).png"
                alt="Mark Neil Autriz" 
                className="h-full w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8">
            {[
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Skills", href: "#skills" },
              { name: "Experience", href: "#experience" },
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="#contact" 
              className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-md hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            >
              Hire Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
