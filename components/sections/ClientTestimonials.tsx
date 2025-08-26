'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight, FiPause, FiPlay } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Felix Omondi Onyango',
    position: 'POD lead',
    company: 'Syncfusion',
    project: 'CV Analyzer',
    quote: "Working with Sunday was a game-changer. His full-stack development skills and attention to detail resulted in a product that exceeded our wildest dreams.",
    initials: 'FOO',
    rating: 5
  },
  {
    id: 2,
    name: 'Anthony Otieno Okoya',
    position: 'Pod lead',
    company: 'Syncfusion',
    project: 'Boldsign',
    quote: "Sunday not only built our MVP but also provided strategic technical guidance that helped us secure Series A top perfoming Website. Absolutely brilliant work!",
    initials: 'AOO',
    rating: 5
  },
  {
    id: 3,
    name: 'Bruce Odima',
    position: 'Pod lead',
    company: 'Syncfusion',
    project: 'BoldSign',
    quote: "Sunday delivered exceptional critical thinking and problem solving techniques. It was awesome working with a guy like him",
    initials: 'BO',
    rating: 5
  }
];

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [activeIndex, autoplay]);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="client-testimonials" className="py-20 md:py-28 lg:py-32 relative">
      {/* Enhanced background with animated gradients and patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/3 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 to-accent/10 rounded-full filter blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-secondary/15 to-rose-400/10 rounded-full filter blur-[120px] animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      {/* Dynamic mesh/grid background pattern */}
      <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-[0.03]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle particle-1" style={{ background: "rgba(14, 165, 233, 0.2)" }}></div>
        <div className="particle particle-2" style={{ background: "rgba(244, 63, 94, 0.15)" }}></div>
        <div className="particle particle-3" style={{ background: "rgba(255, 255, 255, 0.1)" }}></div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <h2 className="section-title mb-2 relative z-10">
              <span className="relative">Client Testimonials</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></span>
            </h2>
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/20 animate-float animation-delay-500"></div>
            <div className="absolute -bottom-4 -right-8 w-10 h-10 rounded-full bg-secondary/20 animate-float animation-delay-1000"></div>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mt-4 relative">
            <span>Don't just take my word for it. Here's what industry leaders and satisfied clients say about our collaborations.</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span>
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Enhanced dots navigation */}
          <div className="flex justify-center gap-3 mb-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-primary to-accent scale-125 shadow-glow-sm' 
                    : 'bg-dark-100 hover:bg-dark-50 hover:scale-110'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === activeIndex && (
                  <span className="absolute inset-0 rounded-full animate-ping opacity-75 bg-primary/40"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Enhanced active testimonial with 3D effects */}
          <div className="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 rounded-xl p-8 md:p-10 shadow-2xl backdrop-blur-md border border-white/5 transform-gpu perspective-card">
            {/* Shimmering border effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 rounded-xl border-2 border-primary/10 opacity-50"></div>
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shine-line"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent shine-line-delay"></div>
            </div>
            
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  {/* Rating stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-1">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-gray-400">
                      {testimonials[activeIndex].position}
                    </p>
                    <p className="bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent font-medium mt-1">
                      {testimonials[activeIndex].company}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      Project: {testimonials[activeIndex].project}
                    </p>
                  </div>
                  
                  {/* Enhanced client initials with 3D effect */}
                  <div className="hidden md:flex w-24 h-24 rounded-full bg-gradient-to-br from-dark-100/70 to-dark-300/70 text-gradient font-bold text-3xl items-center justify-center border border-primary/30 shadow-lg backdrop-blur-sm relative transform-gpu hover:scale-105 transition-transform duration-300 cursor-pointer perspective-element">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{testimonials[activeIndex].initials}</span>
                    
                    {/* Multiple gradient layers for depth effect */}
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-40 animate-pulse-slow"></div>
                      <div className="absolute inset-0 rounded-full border border-white/10"></div>
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-md opacity-40"></div>
                    </div>
                    
                    {/* Glowing dots around the circle */}
                    <div className="absolute h-2 w-2 rounded-full bg-primary/80 -top-1 left-1/2 -translate-x-1/2 shadow-glow-sm"></div>
                    <div className="absolute h-2 w-2 rounded-full bg-accent/80 -bottom-1 left-1/2 -translate-x-1/2 shadow-glow-sm"></div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <blockquote className="text-xl md:text-2xl text-white italic mb-10 relative leading-relaxed perspective-element">
                    {/* Enhanced quote marks with animations */}
                    <div className="text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-90 absolute -top-8 -left-2 animate-float animation-delay-700">"</div>
                    
                    {/* Quote text with highlight effect */}
                    <div className="relative">
                      <span className="relative z-10">{testimonials[activeIndex].quote}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 blur-lg -z-10 opacity-30"></div>
                    </div>
                    
                    {/* Subtle underline with gradient */}
                    <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-primary/40 to-transparent"></div>
                    
                    <div className="text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-90 absolute -bottom-12 -right-2 animate-float animation-delay-1500">"</div>
                  </blockquote>
                  
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex gap-4">
                      <button
                        onClick={prevTestimonial}
                        className="p-3 rounded-full bg-gradient-to-br from-dark-300 to-dark-400 text-white hover:from-primary/80 hover:to-primary transition-all duration-300 transform hover:scale-110 shadow-lg shadow-dark-500/20 hover:shadow-primary/20 backdrop-blur-sm border border-white/5"
                        aria-label="Previous testimonial"
                      >
                        <FiArrowLeft className="w-5 h-5" />
                        <span className="absolute inset-0 rounded-full bg-primary/20 opacity-0 hover:opacity-30 transition-opacity"></span>
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="p-3 rounded-full bg-gradient-to-br from-dark-300 to-dark-400 text-white hover:from-primary/80 hover:to-primary transition-all duration-300 transform hover:scale-110 shadow-lg shadow-dark-500/20 hover:shadow-primary/20 backdrop-blur-sm border border-white/5"
                        aria-label="Next testimonial"
                      >
                        <FiArrowRight className="w-5 h-5" />
                        <span className="absolute inset-0 rounded-full bg-primary/20 opacity-0 hover:opacity-30 transition-opacity"></span>
                      </button>
                    </div>
                    
                    <button
                      onClick={() => setAutoplay(!autoplay)}
                      className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-full transition-all duration-300 backdrop-blur-sm ${
                        autoplay 
                          ? 'bg-primary/10 text-primary border border-primary/30 shadow-glow-xs' 
                          : 'bg-dark-300/50 text-gray-400 border border-white/5'
                      }`}
                      aria-label={autoplay ? "Pause autoplay" : "Start autoplay"}
                    >
                      {autoplay ? (
                        <motion.div 
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <FiPause className="w-4 h-4" /> Auto-play ON
                        </motion.div>
                      ) : (
                        <motion.div 
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <FiPlay className="w-4 h-4" /> Auto-play OFF
                        </motion.div>
                      )}
                      <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 hover:opacity-30 transition-opacity"></span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
