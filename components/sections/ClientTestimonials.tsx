'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight, FiCheck } from 'react-icons/fi';

// Client testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Katherine Johnson',
    position: 'Senior Frontend Developer',
    company: 'The Big Retreat Festival',
    image: '/images/clients/avatar1.jpeg',
    quote: "Mark delivered an exceptional scheduling tool for our festival. The interface was smooth, filters worked flawlessly, and the printable view was a game changer for attendees.",
    rating: 5
  },
  {
    id: 2,
    name: 'Benjamin Smith',
    position: 'Tech Lead',
    company: 'Manna Bitcoin Wallet',
    image: '/images/clients/avatar2.jpg',
    quote: "Mark provided excellent work. He was very fast and knowledgeable. He responded very quickly and was always available. I would definitely hire him again.",
    rating: 5
  },
  {
    id: 3,
    name: 'Nicole D.',
    position: 'Project Manager',
    company: 'Apex Forge',
    image: '/images/clients/avatar3.jpeg',
    quote: "Not only listened well, but followed instructions incredibly well, implementing changes rapidly and overcoming any obstacle in his way.",
    rating: 5
  },
  {
    id: 4,
    name: 'Elena Morgan',
    position: 'Product Owner',
    company: 'Jennera Beauty Clinic',
    image: '/images/clients/avatar4.jpg',
    quote: "Mark transformed our outdated website into a stunning, modern platform that truly reflects our brand. The clean design and fast loading exceeded our expectations.",
    rating: 5
  },
  {
    id: 5,
    name: 'Muhammad Mobeen',
    position: 'Senior Developer',
    company: 'The Muscle MOB',
    image: '/images/clients/avatar5.jpg',
    quote: "He brought my vision to life with a powerful, professional website that perfectly captures our mission. Everything runs smoothly and looks amazing.",
    rating: 5
  },
  {
    id: 6,
    name: 'Stuart Thompson',
    position: 'UI/UX Designer',
    company: 'SOK Academy',
    image: '/images/clients/avatar6.avif',
    quote: "He turned our vision into a powerful, high-performance training platform. From flawless animations to the dashboards, every detail was executed with precision.",
    rating: 5
  }
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate total testimonials and visible items
  const itemsPerPage = 3;
  const totalItems = testimonials.length;
  
  // Get current testimonials to display (sliding window of 3)
  const getCurrentTestimonials = () => {
    let items = [];
    for (let i = 0; i < itemsPerPage; i++) {
      // Calculate the actual index with wrapping
      const actualIndex = (currentIndex + i) % totalItems;
      items.push(testimonials[actualIndex]);
    }
    return items;
  };
  
  // Navigation functions
  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };
  
  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };
  
  // Auto-advance items (7 seconds)
  useEffect(() => {
    // Clear any existing timeout
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
    
    // Set new timeout - 7000ms (7 seconds)
    autoplayTimeoutRef.current = setTimeout(() => {
      nextItem();
    }, 7000);
    
    // Cleanup on unmount or when page changes
    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [currentIndex]);
  
  return (
    <section className="py-24 bg-[#0f1115] relative overflow-hidden min-h-[90vh] flex items-center" id="testimonials">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#0a0c0e]/50 to-[#0a0c0e]/80"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Glowing orbs in background */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center mb-16"
        >
          <div className="section-subtitle">Feedback</div>
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Don't just take my word for it. Hear what my clients have to say about working with me. 
            Their success stories and genuine experiences speak volumes about my dedication, expertise, and commitment to excellence.
          </p>
        </motion.div>
        
        {/* Testimonials carousel with 3 visible items */}
        <div className="relative" ref={testimonialsRef}>
          {/* Side Navigation Arrows */}
          <button 
            onClick={prevItem}
            className="absolute left-3 md:left-5 lg:left-10 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#1e293b] hover:bg-[#3b82f6] text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20 transform hover:-translate-x-0.5"
            aria-label="Previous testimonial"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="overflow-hidden px-8 md:px-12 lg:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-4"
              >
                {getCurrentTestimonials().map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    className="bg-[#151922] rounded-lg overflow-hidden shadow-lg hover:shadow-blue-900/20 hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-blue-500/40 h-full flex flex-col relative before:absolute before:inset-0 before:border-t-2 before:border-blue-500/0 before:hover:border-blue-500/40 before:transition-all before:duration-300"
                  >
                    <div className="p-6 flex flex-col h-full">
                      {/* Star Rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Quote content */}
                      <div className="relative flex-grow">
                        <svg className="absolute -top-2 left-0 w-10 h-10 text-[#3b82f6]/20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        
                        <p className="text-white text-sm leading-relaxed italic mt-5 mb-8 line-clamp-4">
                          {testimonial.quote}
                        </p>
                      </div>
                      
                      {/* Client info */}
                      <div className="mt-auto pt-5 border-t border-white/5 flex items-center">
                        <div className="relative w-12 h-12 overflow-hidden rounded-full border border-white/10">
                          <Image 
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <h4 className="text-white text-base font-semibold">{testimonial.name}</h4>
                          <div className="flex flex-col text-xs">
                            <span className="text-gray-400">{testimonial.position}</span>
                            <span className="text-blue-400">{testimonial.company}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            onClick={nextItem}
            className="absolute right-3 md:right-5 lg:right-10 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-[#1e293b] hover:bg-[#3b82f6] text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20 transform hover:translate-x-0.5"
            aria-label="Next testimonial"
          >
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex || 
                index === (currentIndex + 1) % totalItems || 
                index === (currentIndex + 2) % totalItems
                  ? 'bg-[#3b82f6] scale-125 shadow-sm shadow-blue-500/50' 
                  : 'bg-[#334155] hover:bg-[#475569] hover:scale-110'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        
        {/* View all testimonials link */}
        <div className="text-center mt-8">
          <Link 
            href="#testimonials" 
            className="inline-flex items-center text-[#3b82f6] hover:text-[#60a5fa] text-sm font-medium transition-all duration-300 hover:underline underline-offset-4 group"
          >
            View All Testimonials
            <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
