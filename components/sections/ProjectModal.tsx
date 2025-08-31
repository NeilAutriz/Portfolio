'use client';

import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiX, FiChevronRight, FiLayers, FiCode, FiDatabase, FiServer, FiTarget, FiPackage } from 'react-icons/fi';

// Define Project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
  technologies: string[];
  details: {
    implementation: string;
    features: string[];
    objective: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!project) return null;
  
  // Select the icon based on project category
  const getProjectIcon = () => {
    switch (project.category) {
      case 'AI/ML':
        return <FiServer className="w-6 h-6" />;
      case 'FinTech':
        return <FiDatabase className="w-6 h-6" />;
      case '3D/AR':
        return <FiLayers className="w-6 h-6" />;
      case 'Web':
        return <FiCode className="w-6 h-6" />;
      case 'Mobile':
        return <FiPackage className="w-6 h-6" />;
      case 'SaaS':
        return <FiTarget className="w-6 h-6" />;
      default:
        return <FiCode className="w-6 h-6" />;
    }
  };
  
  // Get background color based on category
  const getCategoryColor = () => {
    switch (project.category) {
      case 'AI/ML':
        return 'bg-blue-500/20 text-blue-400';
      case 'FinTech':
        return 'bg-green-500/20 text-green-400';
      case '3D/AR':
        return 'bg-purple-500/20 text-purple-400';
      case 'Web':
        return 'bg-cyan-500/20 text-cyan-400';
      case 'Mobile':
        return 'bg-orange-500/20 text-orange-400';
      case 'SaaS':
        return 'bg-rose-500/20 text-rose-400';
      default:
        return 'bg-blue-500/20 text-blue-400';
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto m-4 rounded-xl bg-gradient-to-br from-dark-100/95 to-dark-200/95 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            {/* Project image header */}
            <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-100/90"></div>
              
              {/* Project category badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-primary/80 to-blue-400/80 text-xs text-white px-3 py-1.5 rounded-md z-10 backdrop-blur-sm shadow-md font-medium">
                {project.category}
              </div>
              
              {/* Project status badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary/80 to-rose-400/80 text-xs text-white px-3 py-1.5 rounded-md z-10 backdrop-blur-sm shadow-md font-medium">
                {project.status}
              </div>
            </div>
            
            <div className="p-8">
              {/* Close button */}
              <motion.button 
                onClick={onClose} 
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-20"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX className="w-5 h-5" />
              </motion.button>
              
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full ${getCategoryColor()}`}>
                  {getProjectIcon()}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-lg">{project.description}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Project Objective:
                </h4>
                <p className="text-gray-300 mb-8 leading-relaxed">{project.details.objective}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Technical Implementation:
                </h4>
                <p className="text-gray-300 mb-8 leading-relaxed">{project.details.implementation}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent">
                  Key Features:
                </h4>
                <ul className="space-y-3">
                  {project.details.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start group"
                    >
                      <div className="p-1 mt-1 mr-3 rounded-full bg-primary/20 text-primary group-hover:bg-primary/40 transition-all duration-300">
                        <FiChevronRight className="w-3 h-3" />
                      </div>
                      <span className="text-white/80 group-hover:text-white transition-colors duration-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm hover:bg-primary/20 hover:shadow-md transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 flex gap-4 justify-center">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/90 hover:bg-primary text-white rounded-md transition-colors duration-300"
                >
                  <FiGithub className="w-4 h-4" /> View Code
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-200/90 hover:bg-dark-200 text-white rounded-md border border-white/10 transition-colors duration-300"
                >
                  <FiExternalLink className="w-4 h-4" /> Live Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
