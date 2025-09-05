'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LaunchWebsite = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#161A1D] relative overflow-hidden">
      {/* Container with margins for the gradient box */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-[90%] mx-auto rounded-3xl overflow-hidden">
          {/* Blue gradient rectangular background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 via-blue-600/30 to-indigo-900/40 rounded-3xl"></div>
          
          {/* Content wrapper */}
          <div className="relative py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 lg:px-20 z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16">
              {/* Left side content */}
              <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
                {/* Section label - Moved here from above */}
                <div className="mb-6">
                  <span className="inline-block py-1.5 px-4 rounded-full text-sm font-medium bg-white/20 text-white">
                    Start your website
                  </span>
                </div>
                
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Launch Your Website or Online Business with Confidence
                </motion.h2>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Have an idea? Looking to sell services or products? Whether it's a portfolio, blog, or eCommerce store, I help turn your vision into a fully functional website that stands out in today's competitive digital landscape.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-base font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 text-center"
                  >
                    Launch Now
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/50 hover:border-white/70 text-white hover:text-gray-100 text-base font-medium rounded-md transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
              
              {/* Right side video/animation */}
              <motion.div 
                className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mx-auto lg:mx-0 z-10"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-blue-900/40 border border-white/20 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  {/* Digital cosmos animation - Updated to whitish gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100/80 via-white/70 to-blue-50/80"></div>
                  
                  {/* Stars background */}
                  <div className="absolute inset-0">
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[15%] animate-pulse"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[15%] left-[25%] animate-pulse animation-delay-300"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[25%] left-[35%] animate-pulse animation-delay-700"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[45%] left-[20%] animate-pulse animation-delay-500"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[65%] left-[35%] animate-pulse"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[75%] left-[15%] animate-pulse animation-delay-300"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[85%] left-[25%] animate-pulse animation-delay-500"></div>
                    
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[55%] animate-pulse animation-delay-700"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[75%] animate-pulse"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[30%] left-[65%] animate-pulse animation-delay-500"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[50%] left-[80%] animate-pulse animation-delay-300"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[65%] animate-pulse"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[80%] left-[75%] animate-pulse animation-delay-700"></div>
                    <div className="absolute w-1 h-1 bg-white rounded-full top-[90%] left-[55%] animate-pulse animation-delay-500"></div>
                  </div>
                  
                  {/* Central floating device */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="relative w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-[70%] sm:h-[75%] md:h-[80%] rounded-xl overflow-hidden"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1.5, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      {/* Device frame */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-slate-100/80 to-blue-50/70 backdrop-blur-md border border-white/50 rounded-xl shadow-xl"></div>
                      
                      {/* Digital elements */}
                      <div className="absolute inset-0 p-4 flex flex-col">
                        {/* Header bar */}
                        <motion.div 
                          className="h-8 w-full bg-gray-200/50 rounded-md mb-3 flex items-center px-3"
                          initial={{ x: -50, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-[70%] h-3 bg-blue-400/50 rounded-full"></div>
                        </motion.div>
                        
                        {/* Main content */}
                        <div className="flex-1 flex flex-col sm:flex-row">
                          {/* Left sidebar */}
                          <motion.div 
                            className="w-full sm:w-1/4 space-y-2 sm:space-y-3 pr-0 sm:pr-2 mb-3 sm:mb-0"
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                          >
                            <div className="h-3 sm:h-4 w-full bg-blue-200/40 rounded-md"></div>
                            <div className="h-3 sm:h-4 w-[80%] bg-blue-200/30 rounded-md"></div>
                            <div className="h-3 sm:h-4 w-[90%] bg-blue-300/30 rounded-md"></div>
                            <div className="h-3 sm:h-4 w-[75%] bg-blue-200/40 rounded-md"></div>
                            <div className="h-12 sm:h-16 md:h-20 w-full bg-blue-300/20 rounded-md mt-4 sm:mt-6 shine-effect"></div>
                          </motion.div>
                          
                          {/* Main content area */}
                          <motion.div 
                            className="w-full sm:w-3/4 pl-0 sm:pl-2 space-y-2 sm:space-y-3"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                          >
                            <div className="h-4 sm:h-6 w-[60%] bg-gray-400/20 rounded-md"></div>
                            <div className="h-3 sm:h-4 w-[90%] bg-gray-400/10 rounded-md"></div>
                            <div className="h-3 sm:h-4 w-[80%] bg-gray-400/10 rounded-md"></div>
                            <div className="flex flex-wrap sm:flex-nowrap space-y-2 sm:space-y-0 space-x-0 sm:space-x-3 mt-3 sm:mt-5">
                              <div className="h-16 sm:h-20 md:h-24 w-full sm:w-[32%] bg-blue-200/40 rounded-md shine-effect"></div>
                              <div className="h-16 sm:h-20 md:h-24 w-full sm:w-[32%] bg-blue-300/30 rounded-md animation-delay-300 shine-effect"></div>
                              <div className="h-16 sm:h-20 md:h-24 w-full sm:w-[32%] bg-blue-200/40 rounded-md animation-delay-700 shine-effect"></div>
                            </div>
                            <div className="h-8 sm:h-10 w-[30%] bg-blue-400/30 rounded-md mt-3 sm:mt-4"></div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Orbiting code elements - make responsive and adjust positioning */}
                  <div className="absolute inset-0">
                    {/* HTML tag */}
                    <motion.div 
                      className="absolute top-[10%] sm:top-[15%] left-[10%] sm:left-[15%] h-6 sm:h-8 px-2 sm:px-3 py-1 bg-blue-300/30 backdrop-blur-md rounded-md border border-blue-100/50 text-[10px] sm:text-xs font-mono text-gray-700"
                      initial={{ scale: 0, opacity: 0, rotate: -10 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.7, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      &lt;html&gt;
                    </motion.div>
                    
                    {/* CSS rule */}
                    <motion.div 
                      className="absolute top-[25%] sm:top-[30%] right-[8%] sm:right-[12%] h-6 sm:h-8 px-2 sm:px-3 py-1 bg-purple-200/30 backdrop-blur-md rounded-md border border-purple-100/50 text-[10px] sm:text-xs font-mono text-gray-700"
                      initial={{ scale: 0, opacity: 0, rotate: 10 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.7, delay: 1.5 }}
                      viewport={{ once: true }}
                    >
                      .css { }
                    </motion.div>
                    
                    {/* JavaScript */}
                    <motion.div 
                      className="absolute bottom-[15%] sm:bottom-[20%] right-[12%] sm:right-[20%] h-6 sm:h-8 px-2 sm:px-3 py-1 bg-yellow-200/30 backdrop-blur-md rounded-md border border-yellow-100/50 text-[10px] sm:text-xs font-mono text-gray-700"
                      initial={{ scale: 0, opacity: 0, rotate: -15 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.7, delay: 1.8 }}
                      viewport={{ once: true }}
                    >
                      function() { }
                    </motion.div>
                    
                    {/* React */}
                    <motion.div 
                      className="absolute bottom-[20%] sm:bottom-[25%] left-[10%] sm:left-[18%] h-6 sm:h-8 px-2 sm:px-3 py-1 bg-cyan-200/30 backdrop-blur-md rounded-md border border-cyan-100/50 text-[10px] sm:text-xs font-mono text-gray-700"
                      initial={{ scale: 0, opacity: 0, rotate: 15 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.7, delay: 2.1 }}
                      viewport={{ once: true }}
                    >
                      &lt;Component /&gt;
                    </motion.div>
                  </div>
                  
                  {/* Glowing orbs - adjusted for responsive design */}
                  <div className="absolute top-[15%] sm:top-[20%] left-[20%] sm:left-[25%] w-10 sm:w-16 h-10 sm:h-16 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-[25%] sm:bottom-[30%] right-[15%] sm:right-[20%] w-12 sm:w-20 h-12 sm:h-20 bg-indigo-200/30 rounded-full blur-xl animate-pulse animation-delay-700"></div>
                  
                  {/* Floating labels - responsive adjustments */}
                  <motion.div 
                    className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white/30 backdrop-blur-md px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.4 }}
                    viewport={{ once: true }}
                  >
                    Modern Design
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/30 backdrop-blur-md px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.6 }}
                    viewport={{ once: true }}
                  >
                    Optimized Performance
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchWebsite;
