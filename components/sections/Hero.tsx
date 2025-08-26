'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';
import ParticlesBackground from '../ui/ParticlesBackground';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-0 pb-0 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0 bg-background">
      {/* Starry background animation - lowest layer */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground type="stars" />
      </div>
      
      {/* Background overlay to darken and add depth */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        {/* Subtle gradient accents for depth - much more subtle than before */}
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-primary/8 to-accent/3 rounded-full filter blur-[200px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-secondary/8 to-rose-400/3 rounded-full filter blur-[200px]"></div>
        
        {/* Dark overlay to ensure text readability with the particles */}
        <div className="absolute inset-0 bg-background/70"></div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 max-w-[1600px] z-20">
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
            <div className="flex items-center text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-10">
              <span className="mr-2">Hello! I'm a</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-mono font-semibold" style={{ letterSpacing: '0.05em' }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Software Engineer')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('Fullstack Developer')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('AI Engineer')
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString('IT Manager')
                      .pauseFor(1500)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    loop: true,
                    delay: 80,
                    deleteSpeed: 50
                  }}
                />
              </span>
            </div>
            
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
              <Link href="/Autriz_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
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
            className="relative hidden lg:flex lg:justify-center lg:items-center z-30"
          >
            <div className="relative w-[480px] h-[500px] xl:w-[520px] xl:h-[540px] rounded-lg overflow-hidden border-[2px] border-white/10 shadow-2xl z-40">
              <Image
                src="/hero-avatar.jpg"
                alt="Avatar"
                width={600}
                height={650}
                className="object-cover w-full h-full relative z-50"
                priority
                quality={100}
              />
              
              {/* Subtle inner shadow */}
              <div className="absolute inset-0 shadow-inner ring-1 ring-inset ring-white/5"></div>
            </div>
            
            {/* Light effect behind the avatar */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20 rounded-lg filter blur-[80px] opacity-50 z-10"></div>
            
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/20 z-5 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/30 to-rose-400/20 z-5 blur-xl"></div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 md:bottom-10 left-0 right-0 mx-auto flex justify-center items-center z-20"
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
            className="bg-background/50 border border-white/20 backdrop-blur-md rounded-full p-2.5 shadow-lg hover:border-white/30 transition-all duration-300"
          >
            <FiArrowDown className="text-white text-xl opacity-90" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
