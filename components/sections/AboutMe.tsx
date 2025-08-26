'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";

const AboutMe = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-background overflow-hidden">
      {/* Absolutely no light effect background in this section - removed */}
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column - Simplified as requested */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto lg:mx-0">
              {/* Enhanced image container with professional border styling like reference site */}
              <div className="relative w-full h-full p-[3px] rounded-xl bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 shadow-lg shadow-primary/20">
                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/10 shine-effect">
                  <Image
                    src="/hero-vector.png"
                    alt="Mark Neil Autriz"
                    fill
                    className="object-cover object-center"
                    quality={100}
                  />
                  
                  {/* Light effect with enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Removed About Me and 50+ Projects badges as requested */}
            </div>
          </motion.div>
          
          {/* Content Column with improved styling exactly matching reference */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Added About Me subtitle above the heading */}
            <div className="section-subtitle mb-4">ABOUT ME</div>
            
            {/* Updated heading with "Crafting Digital Experiences" on a single line */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-[1.2]">
              <div className="text-white whitespace-nowrap">Crafting Digital Experiences</div>
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl mt-2">Since 2020</div>
            </h3>
            
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm a passionate Software Engineer who's deeply committed to bringing ideas to life through thoughtful, user-centered design. Every project I take on is built with care, creativity, and a clear understanding of what the client truly needs. My goal is always to create applications that not only look great but also work smoothly and deliver results.
              </p>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                What truly drives me is the satisfaction of solving problems and making a real impact for the people I work with. I believe in clean code, long-term value, and building strong relationships through trust and reliability. I also enjoy sharing what I learn along the way, helping others grow through collaboration and mentorship.
              </p>
            </div>
            
            {/* Learn More button - white button with white text as requested */}
            <div className="mt-10">
              <Link href="#project-showcase">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 bg-white text-primary font-medium rounded shadow-lg shadow-white/10 hover:bg-white/90 transition-all duration-300 text-[15px] flex items-center"
                >
                  <span>Learn More</span>
                  <MdArrowOutward className="ml-2" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Removed scrolling marquee text banner as requested */}
    </section>
  );
};

export default AboutMe;
