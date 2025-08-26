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
        isScrolled ? 'bg-dark-300/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 xl:px-8 flex items-center justify-between max-w-7xl">
        <Link href="/">
          <div className="text-3xl font-bold text-white flex items-center space-x-1">
            <span className="text-primary">S</span>
            <span className="text-white/80">|</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {['Featured Work', 'Project Showcase', 'Skills Mastery', 'Journey Timeline', 'By the Numbers', 'Client Testimonials', 'Let\'s Connect'].map((item) => (
            <Link 
              key={item} 
              href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="w-6 h-6" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full md:w-80 bg-dark-300/95 backdrop-blur-md z-50 shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="text-2xl font-bold text-white">Menu</span>
              <button 
                className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col p-6">
              {['Featured Work', 'Project Showcase', 'Skills Mastery', 'Journey Timeline', 'By the Numbers', 'Client Testimonials', 'Let\'s Connect'].map((item, index) => (
                <Link 
                  key={item} 
                  href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-200 hover:text-primary transition-colors py-4 border-b border-white/10 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
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
