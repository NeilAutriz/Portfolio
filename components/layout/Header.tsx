'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-300/90 backdrop-blur-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 xl:px-8 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-10 w-auto">
            <img 
              src="/mainlogo(white).png"
              alt="Autriz Portfolio" 
              className="h-full w-auto"
            />
          </div>
          <span className="text-white font-semibold hidden sm:block">Autriz</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {['Projects', 'Skills', 'Experience', 'Let\'s Connect'].map((item) => (
            <Link 
              key={item} 
              href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all text-sm font-medium tracking-wide"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="w-5 h-5" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full md:w-80 bg-gradient-to-br from-dark-300/95 to-background/90 backdrop-blur-md z-50 shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-auto">
                  <img 
                    src="/mainlogo(white).png" 
                    alt="Autriz Portfolio" 
                    className="h-full w-auto"
                  />
                </div>
                <span className="text-white font-semibold">Autriz</span>
              </div>
              <button 
                className="text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex flex-col p-6 space-y-2">
              {['Projects', 'Skills', 'Experience', 'Let\'s Connect'].map((item, index) => (
                <Link 
                  key={item} 
                  href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-200 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg font-medium flex items-center justify-between"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item}</span>
                  <motion.span 
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    →
                  </motion.span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
