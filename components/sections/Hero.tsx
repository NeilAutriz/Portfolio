'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center hero-gradient overflow-hidden pt-0 pb-0 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0">
      {/* Background gradients with overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Gradient spots */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/15 to-accent/10 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-secondary/15 to-rose-400/10 rounded-full filter blur-[150px]"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 max-w-[1600px] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 xl:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[700px] lg:pr-6"
          >
            <h1 className="text-[2.8rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-[4.75rem] font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 lg:mb-7 leading-[1.05]">
              Mark Neil Autriz
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-5 max-w-xl leading-relaxed">
              Designing transformative digital experiences 
              with sleek interfaces, innovative solutions, and boundary-pushing creativity 
              that redefine what's possible.
            </p>
            <h2 className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10">Welcome to my World!</h2>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#project-showcase">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 bg-gradient-to-r from-primary to-blue-400 text-white font-medium rounded shadow-lg shadow-primary/20 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 text-[15px]"
                >
                  Explore Work
                </motion.button>
              </Link>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 bg-transparent border border-white/30 text-white font-medium rounded hover:bg-white/5 transition-all duration-300 text-[15px]"
                >
                  Download CV
                </motion.button>
              </Link>
              <Link href="#lets-connect">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-7 py-3.5 bg-gradient-to-r from-secondary to-rose-400 text-white font-medium rounded shadow-lg shadow-secondary/20 hover:from-rose-500 hover:to-rose-400 transition-all duration-300 text-[15px]"
                >
                  Hire Me
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-14 lg:mt-16 flex items-center gap-10 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="font-bold text-white text-xl lg:text-2xl mr-2">50+</span> Projects
              </div>
              <div className="flex items-center">
                <span className="font-bold text-white text-xl lg:text-2xl mr-2">99%</span> Success Rate
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex lg:justify-center lg:items-center"
          >
            <div className="relative w-[480px] h-[500px] xl:w-[520px] xl:h-[540px] rounded-lg overflow-hidden border-[2px] border-white/10 shadow-2xl">
              <Image
                src="/hero-avatar.jpg"
                alt="Avatar"
                width={600}
                height={650}
                className="object-cover w-full h-full"
                priority
                quality={100}
              />
              
              {/* Subtle inner shadow */}
              <div className="absolute inset-0 shadow-inner ring-1 ring-inset ring-white/5"></div>
            </div>
            
            {/* Light effect behind the avatar */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 rounded-lg filter blur-[100px] opacity-70"></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/20 -z-10 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/30 to-rose-400/20 -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-center z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 mb-2 text-sm font-medium tracking-wider">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="bg-dark-200/40 border border-white/10 backdrop-blur-md rounded-full p-2.5 shadow-lg hover:border-white/20 transition-all duration-300"
          >
            <FiArrowDown className="text-white text-xl opacity-90" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
