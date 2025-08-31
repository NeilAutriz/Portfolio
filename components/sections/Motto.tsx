'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Motto = () => {
  // State for the changing label text
  const [displayText, setDisplayText] = useState('MOTTO');
  const words = ['MOTTO', 'VISION', 'GOAL', 'WORK'];
  const [wordIndex, setWordIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [charIndex, setCharIndex] = useState(5); // Start with full "MOTTO"
  const typingSpeed = 150; // ms per character
  const erasingSpeed = 100; // ms per character
  const wordPauseTime = 1000; // time to pause on complete word
  const typewriterTimeout = useRef<NodeJS.Timeout | null>(null);

  // Typewriter effect
  useEffect(() => {
    // Clear any existing timeout to prevent memory leaks
    if (typewriterTimeout.current) {
      clearTimeout(typewriterTimeout.current);
    }
    
    const currentWord = words[wordIndex];
    
    if (isErasing) {
      // Erasing text
      if (charIndex > 0) {
        // Continue erasing
        typewriterTimeout.current = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, erasingSpeed);
      } else {
        // Done erasing, start typing next word
        setIsErasing(false);
        setIsTyping(true);
        // Move to next word
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    } else if (isTyping) {
      // Typing text
      const nextWord = words[(wordIndex) % words.length];
      if (charIndex < nextWord.length) {
        // Continue typing
        typewriterTimeout.current = setTimeout(() => {
          setDisplayText(nextWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Done typing
        setIsTyping(false);
        // Pause before erasing
        typewriterTimeout.current = setTimeout(() => {
          setIsErasing(true);
        }, wordPauseTime);
      }
    } else {
      // Initial state or after reset
      typewriterTimeout.current = setTimeout(() => {
        setIsErasing(true);
      }, wordPauseTime);
    }
    
    // Cleanup function
    return () => {
      if (typewriterTimeout.current) {
        clearTimeout(typewriterTimeout.current);
      }
    };
  }, [wordIndex, charIndex, isErasing, isTyping, words]);
  return (
    <section className="w-full py-28 md:py-36 lg:py-44 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-300/90 z-10"></div>
        {/* Using a background color gradient as fallback if image is not available */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-blue-900/30 z-0"></div>
        {/* Starry night background image */}
        {
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/starry-night.avif" 
            alt="Starry sky background"
            fill
            quality={100}
            className="object-cover object-center opacity-30"
            priority
          />
        </div>
        }
      </div>
      
      {/* Banner notification removed as requested */}
      
      {/* Animated background with subtle patterns - improved motion effect */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        {/* Large curved shape at the bottom */}
        <div className="absolute w-[150%] h-[55%] left-[50%] bottom-[-20%] -translate-x-1/2 rounded-[100%_100%_0_0] bg-gradient-to-t from-blue-500/5 via-blue-400/3 to-transparent"></div>
        
        {/* Subtle background patterns - using only blue and white without animations */}
        <div 
          className="absolute w-[140%] h-[140%] left-[30%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-to-tr from-blue-500/10 via-white/5 to-transparent blur-[120px]"
        ></div>
        
        {/* Additional animated element for more movement - Removed for more uniform background */}
      </div>
      
      {/* Main content container - maximized full width */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20 w-full max-w-[2000px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] // Enhanced easing curve for smoother animation
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full mx-auto relative"
        >
          {/* Clean design without rectangular container - maximized */}
          <div className="relative px-4 py-16 md:py-24 overflow-hidden w-full">
            {/* Completely removed any box or gradient in the middle */}
            
            {/* Motto label with blinking effect - made larger with shine effect */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-12 flex justify-center"
            >
              <div className="inline-flex items-center justify-center px-6 py-2.5 md:px-8 md:py-3 rounded-full border border-primary/30 bg-primary/5 relative overflow-hidden group shine-effect shadow-lg shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 opacity-50"></div>
                <span className="relative text-base md:text-lg font-medium text-white tracking-wider z-10 flex items-center">
                  <span className="min-w-[5rem] md:min-w-[5.5rem] text-center">
                    {displayText}
                  </span>
                  <span className="w-1.5 h-5 bg-primary ml-1.5 animate-blink"></span>
                </span>
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-center">
              {/* First line of the motto with "into" moved to first line - smoother animations */}
              <div className="flex flex-wrap justify-center items-baseline gap-x-2 md:gap-x-3 lg:gap-x-4 mb-4 md:mb-5">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.1,
                    ease: [0.25, 0.1, 0.25, 1] // Smoother cubic bezier curve
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  className="inline-block text-foreground stagger-item"
                >
                  I help turn
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  className="inline-block bg-gradient-to-r from-blue-400 to-primary bg-clip-text text-transparent stagger-item"
                >
                  ideas
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  className="inline-block text-foreground stagger-item"
                >
                  into
                </motion.span>
              </div>
              
              {/* Second line of the motto - seamless digital experiences - enhanced animations */}
              <div className="flex flex-wrap justify-center items-baseline gap-x-2 md:gap-x-3 lg:gap-x-4">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.4,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  className="inline-block text-white stagger-item" 
                >
                  seamless
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.5,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  className="inline-block font-alegreya text-[1.3em] font-bold italic bg-gradient-to-br from-blue-300 via-white to-primary bg-clip-text text-transparent px-1 relative stagger-item"
                  style={{ fontFamily: 'Alegreya, serif', letterSpacing: '0.02em' }}
                  whileHover={{ scale: 1.05 }}
                >
                  digital experiences
                  {/* Animated underline effect that appears on scroll - enhanced */}
                  <motion.div 
                    className="absolute bottom-[-2px] left-0 h-[2px] bg-gradient-to-r from-blue-400 via-white to-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.7,
                      ease: "easeInOut"
                    }}
                    viewport={{ once: false, margin: "-50px" }}
                  />
                </motion.span>
              </div>
            </h2>
            
            {/* Enhanced Let's connect section with email - better aligned and with effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: false, margin: "-50px" }}
              className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
            >
              <Link href="/contact" className="group transition-smooth">
                <div className="flex items-center justify-center py-3.5 px-8 bg-gradient-to-r from-primary/40 via-primary/30 to-primary/20 backdrop-blur-sm rounded-full border border-primary/50 hover:border-primary/90 transition-all duration-500 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden">
                  {/* Subtle shine effect - smoother and more responsive */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  </div>
                  
                  <span className="text-lg md:text-xl text-white group-hover:text-white transition-colors duration-500 font-medium tracking-wide">
                    Let's connect
                  </span>
                  <span className="ml-3 text-white transition-transform duration-500 ease-in-out group-hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
              
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 1.2, 
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: false, margin: "-50px" }}
                className="flex items-center justify-center"
              >
                <Link 
                  href="mailto:mngautriz@gmail.com" 
                  className="group relative flex items-center py-3 px-6 rounded-full bg-white/5 hover:bg-white/15 transition-all duration-500 border border-white/10 hover:border-white/30 overflow-hidden transition-smooth"
                >
                  {/* Animated background effect for email - enhanced smoothness */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Animated shine effect - more fluid motion */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                  
                  <motion.div 
                    className="flex items-center relative z-10"
                    whileHover={{ 
                      x: [0, -2, 0, -2, 0], 
                      scale: 1.02,
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-200 text-sm md:text-base transition-all duration-500 font-medium bg-gradient-to-r from-blue-200 to-white bg-clip-text group-hover:text-transparent">mngautriz@gmail.com</span>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Motto;