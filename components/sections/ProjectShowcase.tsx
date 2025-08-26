'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const categories = ['All', 'AI/ML', 'FinTech', '3D/AR', 'SaaS', 'Mobile', 'Web'];

const projects = [
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
      ]
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
      ]
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
      ]
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
      ]
    }
  }
];

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="project-showcase" className="py-24 md:py-36 relative">
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
          className="text-center mb-16"
        >
          <h2 className="section-title">Project Showcase</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover my latest and upcoming projects, showcasing innovative front-end solutions,
            seamless user interfaces, and transformative digital experiences built with modern technologies.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-100/70 backdrop-blur-sm rounded-lg overflow-hidden project-card border border-white/5 shadow-lg hover:shadow-xl hover:border-primary/10 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute top-4 left-4 bg-gradient-to-r from-primary/80 to-blue-400/80 text-xs text-white px-3 py-1.5 rounded-md z-10 backdrop-blur-sm shadow-md font-medium">
                  {project.category}
                </div>
                <div className="h-[300px] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-2">
                  {project.title} <span className="bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent">{project.status}</span>
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-dark-200/70 text-gray-300 px-3 py-1.5 rounded-full border border-white/5 hover:border-primary/20 hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <FiGithub className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <FiExternalLink className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="ml-auto bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent hover:from-blue-500 hover:to-blue-400 font-medium flex items-center"
                  >
                    Project Details
                    <svg className={`ml-1 w-4 h-4 transition-transform ${selectedProject === project.id ? 'rotate-180' : ''}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d={selectedProject === project.id ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}></path>
                    </svg>
                  </button>
                </div>
                
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-700"
                  >
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-3">Technical Implementation</h4>
                    <p className="text-gray-400 mb-4">{project.details.implementation}</p>
                    
                    <h5 className="text-md font-semibold bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent mb-3">Key Features:</h5>
                    <ul className="list-disc list-inside text-gray-400">
                      {project.details.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
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
    </section>
  );
};

export default ProjectShowcase;
