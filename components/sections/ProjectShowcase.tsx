'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiX, FiChevronRight, FiLayers, FiCode, FiDatabase, FiServer, FiTarget, FiPackage } from 'react-icons/fi';
import ProjectModal from './ProjectModal';

const categories = ['All', 'AI/ML', 'FinTech', '3D/AR', 'SaaS', 'Mobile', 'Web', 'Agriculture'];

export const projects = [
  {
    id: 1,
    title: 'AI-Powered Analytics Dashboard',
    description: 'A comprehensive analytics platform with machine learning insights and real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    category: 'AI/ML',
    status: 'Coming Soon!',
    technologies: ['React', 'TypeScript', 'TensorFlow', 'D3.js'],
    details: {
      implementation: 'Built using React with TypeScript for type safety, integrated with Python backend using Flask. Implemented machine learning models for predictive analytics and used D3.js for advanced data visualizations.',
      features: [
        'Responsive design with mobile optimization',
        'Advanced state management',
        'Real-time data synchronization',
        'Optimized performance metrics'
      ],
      objective: 'Create an intuitive analytics platform that leverages machine learning to provide actionable insights from complex datasets, enabling businesses to make data-driven decisions more effectively.'
    }
  },
  {
    id: 2,
    title: 'Crypto Trading Platform',
    description: 'Full-stack cryptocurrency trading platform with real-time market data and advanced charting.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
    category: 'FinTech',
    status: 'Coming Soon!',
    technologies: ['Next.js', 'Node.js', 'WebSocket', 'Redis', 'PostgreSQL'],
    details: {
      implementation: 'Developed with Next.js for optimal performance, real-time WebSocket connections for live trading data, Redis for caching, and PostgreSQL for transaction management with advanced security measures.',
      features: [
        'Responsive design with mobile optimization',
        'Advanced state management',
        'Real-time data synchronization',
        'Optimized performance metrics'
      ],
      objective: 'Develop a secure and scalable cryptocurrency trading platform that provides real-time market data, advanced charting capabilities, and intuitive trading interfaces to both novice and experienced traders.'
    }
  },
  {
    id: 3,
    title: '3D Product Configurator',
    description: 'Interactive 3D product customization tool with AR preview capabilities and real-time rendering.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
    category: '3D/AR',
    status: 'Coming Soon!',
    technologies: ['Three.js', 'React', 'WebGL', 'AR.js', 'Blender'],
    details: {
      implementation: 'Created using Three.js for 3D rendering, implemented AR capabilities with AR.js, optimized WebGL shaders for performance, and integrated with Blender pipeline for 3D asset management.',
      features: [
        'Responsive design with mobile optimization',
        'Advanced state management',
        'Real-time data synchronization',
        'Optimized performance metrics'
      ],
      objective: 'Build an immersive 3D product configuration experience that allows customers to customize and visualize products in real-time with augmented reality capabilities for enhanced shopping experiences.'
    }
  },
  {
    id: 4,
    title: 'Social Media Management Suite',
    description: 'Comprehensive social media management platform with AI-powered content generation and analytics.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
    category: 'SaaS',
    status: 'Coming Soon!',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'OpenAI', 'Chart.js'],
    details: {
      implementation: 'Built with Vue.js for reactive UI components, Express.js backend with MongoDB for data persistence, integrated OpenAI API for content generation, and Chart.js for comprehensive analytics dashboards.',
      features: [
        'Responsive design with mobile optimization',
        'Advanced state management',
        'Real-time data synchronization',
        'Optimized performance metrics'
      ],
      objective: 'Develop a comprehensive social media management platform that streamlines content creation, scheduling, and analytics while leveraging AI to generate engaging content and provide actionable insights.'
    }
  },
  {
    id: 5,
    title: 'AgriConnect Platform',
    description: 'A web-based platform connecting farmers to markets, resources, and agricultural experts with real-time data integration.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=300&fit=crop',
    category: 'Web',
    status: 'Completed',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebSockets'],
    details: {
      implementation: 'Developed using the MERN stack (MongoDB, Express.js, React, Node.js) with RESTful API architecture. Implemented real-time notifications and weather alerts using WebSockets. Integrated with agricultural APIs for crop pricing and weather forecasting.',
      features: [
        'Marketplace for farmers to sell produce directly',
        'Real-time weather alerts and forecasting',
        'Expert consultation scheduling system',
        'Resource library with farming techniques',
        'Mobile-responsive design for field use'
      ],
      objective: 'Create a comprehensive web platform that connects farmers with markets, resources, and agricultural experts, while providing real-time data and tools to enhance productivity and profitability in farming operations.'
    }
  },
  {
    id: 6,
    title: 'Donation System',
    description: 'A cross-platform mobile application facilitating secure charitable donations with transparent fund allocation tracking.',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=500&h=300&fit=crop',
    category: 'Mobile',
    status: 'Completed',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe API', 'Google Maps'],
    details: {
      implementation: 'Built with Flutter and Dart for cross-platform compatibility (iOS/Android). Used Firebase for authentication, real-time database, and cloud functions. Integrated Stripe API for secure payment processing and Google Maps for location-based features.',
      features: [
        'Biometric authentication for secure access',
        'Real-time donation tracking dashboard',
        'Transparent fund allocation visualization',
        'Digital receipts for tax purposes',
        'Location-based charity discovery'
      ],
      objective: 'Develop a secure, transparent mobile application that simplifies charitable donations and provides donors with real-time tracking of how their contributions are being used, enhancing trust in the donation process.'
    }
  }
];

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalProject, setModalProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);
    
  const handleOpenModal = (project: typeof projects[0]) => {
    setModalProject(project);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 to-blue-400/10 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-to-r from-secondary/15 to-rose-400/10 rounded-full filter blur-[120px]"></div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-subtitle">My Works</div>
          <h2 className="section-title">Project Showcase</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover my latest and upcoming projects, showcasing innovative front-end solutions,
            seamless user interfaces, and <span className="relative">
              transformative digital experiences
            </span> built with modern technologies.
          </p>
        </motion.div>
        
        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-md transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-blue-400 text-white shadow-lg shadow-primary/20 border-primary/20'
                  : 'bg-dark-100/50 text-gray-300 hover:bg-dark-200/70 border-white/5 hover:border-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-100/70 backdrop-blur-sm rounded-lg overflow-hidden project-card border border-white/5 shadow-lg hover:shadow-xl hover:border-primary/10 transition-all duration-300 scale-100 group relative"
              whileHover={{ 
                y: -5, 
                scale: 0.98, 
                transition: { duration: 0.3 } 
              }}
            >
              <div className="relative">
                <div className="absolute top-2 left-2 bg-gradient-to-r from-primary/80 to-blue-400/80 text-xs text-white px-2 py-1 rounded-md z-10 backdrop-blur-sm shadow-md font-medium">
                  {project.category}
                </div>
                <div className="h-[200px] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  
                  {/* Dark overlay with improved hover effect */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <motion.button
                      onClick={() => handleOpenModal(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1.5 bg-primary text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 font-medium text-xs"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-blue-300 transition-all duration-300">
                    {project.title}
                  </h3>
                  <span className="bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent ml-1 text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300 text-sm line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-dark-200/70 text-gray-300 px-2 py-0.5 rounded-full border border-white/5 hover:border-primary/20 hover:text-primary transition-colors duration-300 hover:bg-dark-300/70"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-dark-200/70 text-gray-300 px-2 py-0.5 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 justify-end">
                  <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                    <FiGithub className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="ml-auto bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-blue-400 font-medium flex items-center text-xs"
                  >
                    Details
                    <svg className="ml-1 w-3 h-3" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-gradient-to-r from-primary to-blue-400 text-white font-medium rounded shadow-lg shadow-primary/20 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 border border-white/10"
          >
            Load More Projects
          </motion.button>
        </div>
      </div>
      
      {/* Project Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default ProjectShowcase;
