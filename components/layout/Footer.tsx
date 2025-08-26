'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  FiLinkedin, 
  FiGithub, 
  FiInstagram, 
  FiYoutube, 
  FiTwitter 
} from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-background pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Footer with columns layout */}
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/mainlogo(white).png" 
                alt="Autriz Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="font-bold text-xl text-white">Autriz</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Code Meets Creativity.
              Crafted with passion by Mark Neil Autriz blending clean code, bold visuals, and
              strategic design to build digital experiences that stand out. Every pixel has a purpose.
            </p>
            <div className="flex space-x-4 mb-8">
              <Link href="https://www.linkedin.com/in/markneil-autriz/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <FiLinkedin size={20} />
              </Link>
              <Link href="https://github.com/NeilAutriz" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <FiGithub size={20} />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <FiInstagram size={20} />
              </Link>
              <Link href="https://www.youtube.com/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <FiYoutube size={20} />
              </Link>
              <Link href="https://twitter.com/" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                <FiTwitter size={20} />
              </Link>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#project-showcase" className="text-gray-400 hover:text-white transition-colors text-sm">
                  My Works
                </Link>
              </li>
              <li>
                <Link href="#skills-mastery" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Skills & Expertise
                </Link>
              </li>
              <li>
                <Link href="#journey-timeline" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Professional Journey
                </Link>
              </li>
              <li>
                <Link href="#by-the-numbers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  By The Numbers
                </Link>
              </li>
              <li>
                <Link href="#client-testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Engineering
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  DevOps Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  IT Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Software Architecture
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">
                Metro Manila, Philippines
              </li>
              <li>
                <Link href="mailto:autriz.markneil@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  autriz.markneil@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+639123456789" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +63 912 345 6789
                </Link>
              </li>
              <li className="pt-4">
                <Link 
                  href="#lets-connect"
                  className="px-5 py-2.5 bg-primary text-white font-medium rounded-md text-sm hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Mark Neil Autriz. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-80 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-white/20"></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full border border-white/10"></div>
        <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full border border-white/5"></div>
      </div>
    </footer>
  );
};

export default Footer;
