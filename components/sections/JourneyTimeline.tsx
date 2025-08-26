'use client';

import { useState, useRef, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiBriefcase, FiAward, FiArrowUpRight, FiUser, FiX, FiChevronRight, 
         FiCode, FiBookOpen, FiClipboard, FiServer, FiStar, FiHash, FiMapPin, FiLink, FiClock,
         FiLayers, FiMonitor, FiCpu, FiDatabase } from 'react-icons/fi';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: React.ElementType;
  type: string;
  color: string;
  logo?: string; // Optional logo URL for organizations
}

const timelineData: TimelineItem[] = [
  {
    id: 'pngIntern',
    year: '2025-05 - 2025-10',
    title: 'Software Engineer Intern',
    subtitle: 'P&G',
    location: 'BGC, Taguig, Philippines',
    logo: '/images/companyLogo/pg_logo.webp',
    description: 'Currently serving as a Software Engineering Intern at Procter & Gamble\'s Global Business Center, contributing to enterprise-level applications and digital transformation initiatives.',
    achievements: [
      'Working with cross-functional teams to develop and enhance digital solutions',
      'Applying modern development practices in an enterprise setting',
      'Learning industry-standard software engineering processes and methodologies'
    ],
    technologies: ['Enterprise Software', 'Full-stack Development', 'Cloud Infrastructure', 'Agile Methodology'],
    icon: FiCpu,
    type: 'work',
    color: 'blue'
  },
  {
    id: 'befiedFullstack',
    year: '2025-05 - 2025-07',
    title: 'Full-stack Developer',
    subtitle: 'BeFied',
    location: 'Singapore, Singapore',
    logo: '/images/companyLogo/befied_logo.jpg',
    description: 'Promoted to Full-stack Developer role after demonstrating proficiency in both frontend and backend development. Expanded responsibilities to include API design, database management, and system architecture.',
    achievements: [
      'Successfully transitioned from frontend-focused to full-stack development',
      'Implemented new backend features and integrated them with existing frontend components',
      'Collaborated with the design team to ensure seamless user experiences across the platform'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Redux'],
    icon: FiLayers,
    type: 'work',
    color: 'purple'
  },
  {
    id: 'ethosbytes',
    year: '2024-12 - 2025-04',
    title: 'Software Engineer Intern',
    subtitle: 'Ethos Bytes Pty Ltd',
    location: 'Sydney, Australia',
    logo: '/images/companyLogo/ethos_bytes_logo.png',
    description: 'Worked as a Software Engineering Intern at Ethos Bytes, contributing to the development of scalable web applications and gaining experience in the Australian tech industry.',
    achievements: [
      'Contributed to the development of client-facing web applications',
      'Collaborated with senior developers on feature implementation and bug fixes',
      'Participated in code reviews and agile development processes'
    ],
    technologies: ['JavaScript', 'React', 'TypeScript', 'AWS', 'CI/CD', 'Git'],
    icon: FiDatabase,
    type: 'work',
    color: 'green'
  },
  {
    id: 'befiedFrontend',
    year: '2024-12 - 2025-05',
    title: 'Frontend Web Developer',
    subtitle: 'BeFied',
    location: 'Singapore, Singapore',
    logo: '/images/companyLogo/befied_logo.jpg',
    description: 'Started as a Frontend Web Developer at BeFied, focusing on creating responsive and user-friendly interfaces for the company\'s web platform.',
    achievements: [
      'Developed and maintained frontend components using React and TypeScript',
      'Implemented responsive design principles for cross-device compatibility',
      'Collaborated with designers to translate UI/UX wireframes into functional code'
    ],
    technologies: ['React', 'TypeScript', 'CSS3', 'HTML5', 'UI/UX', 'Responsive Design'],
    icon: FiCode,
    type: 'work',
    color: 'amber'
  }
];

interface TypeIconProps {
  type: string;
}

const TypeIcon = ({ type }: TypeIconProps) => {
  // Get the specific icon based on the item's ID (passed in the 'type' prop as a hack)
  const getIcon = () => {
    // We use the type parameter to pass the item id for specific icons
    switch (type) {
      case 'pngIntern':
        return <FiCpu className="w-6 h-6" />; // P&G - Server/Enterprise - CPU icon for software engineering
      case 'befiedFullstack':
        return <FiLayers className="w-6 h-6" />; // BeFied - Fullstack - Layers icon for full-stack
      case 'ethosbytes':
        return <FiDatabase className="w-6 h-6" />; // Ethos Bytes - Software Engineer - Database icon
      case 'befiedFrontend':
        return <FiCode className="w-6 h-6" />; // BeFied - Frontend - Code icon for frontend
      default:
        return <FiBriefcase className="w-6 h-6" />; // Default fallback
    }
  };

  // Get color based on the item's ID
  const getIconColor = () => {
    switch (type) {
      case 'pngIntern':
        return 'text-blue-400'; // Blue for P&G
      case 'befiedFullstack':
        return 'text-purple-400'; // Purple for BeFied Fullstack
      case 'befiedFrontend':
        return 'text-amber-400'; // Amber for BeFied Frontend
      case 'ethosbytes':
        return 'text-green-400'; // Green for Ethos Bytes
      default:
        return 'text-gray-400';
    }
  };

  // Get background color based on the item's ID
  const getIconBg = () => {
    switch (type) {
      case 'pngIntern':
        return 'bg-blue-500/20'; // Blue for P&G
      case 'befiedFullstack':
        return 'bg-purple-500/20'; // Purple for BeFied Fullstack
      case 'befiedFrontend':
        return 'bg-amber-500/20'; // Amber for BeFied Frontend
      case 'ethosbytes':
        return 'bg-green-500/20'; // Green for Ethos Bytes
      default:
        return 'bg-gray-500/20';
    }
  };

  return (
    <div className={`p-3 rounded-full ${getIconBg()} ${getIconColor()}`}>
      {getIcon()}
    </div>
  );
};

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  onClick: () => void;
}

interface TimelineModalProps {
  item: TimelineItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const TimelineCard = ({ item, index, onClick }: TimelineCardProps) => {
  // Determine if this card should be on the left or right side
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex w-full items-center justify-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content */}
      <div className={`w-5/12`}>
        <motion.div
          whileHover={{ 
            y: -3, 
            scale: 1.01, 
            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(56, 189, 248, 0.3)'
          }}
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`relative cursor-pointer p-6 rounded-xl transition-all duration-200
            backdrop-blur-sm border hover:border-primary/50
            hover:shadow-lg hover:shadow-primary/10
            ${isEven ? 'mr-auto text-left' : 'ml-auto text-right'}`}
          style={{
            background: 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))',
            borderImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)) 1',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.07)'
          }}
          onClick={onClick}
        >
          {/* Top badge for type */}
          <div className={`absolute -top-3 ${isEven ? 'left-5' : 'right-5'} rounded-full px-3 py-1 text-xs font-bold`} 
            style={{
              background: item.type === 'work' ? 'rgba(59, 130, 246, 0.2)' : 
                       item.type === 'education' ? 'rgba(16, 185, 129, 0.2)' : 
                       'rgba(139, 92, 246, 0.2)',
              color: item.type === 'work' ? '#3b82f6' : 
                   item.type === 'education' ? '#10b981' : 
                   '#8b5cf6'
            }}
          >
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </div>
          
          {/* Year badge */}
          <div className={`absolute -top-3 ${isEven ? 'right-5' : 'left-5'} bg-primary/90 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md`}>
            {(() => {
              if (!item.year.includes('-')) return item.year;
              
              // Format YYYY-MM to readable format
              if (item.year.includes('-')) {
                const parts = item.year.split('-');
                const startPart = parts[0].trim();
                const endPart = parts[1].trim();
                
                // Convert YYYY-MM to Month YYYY format
                const formatDate = (datePart: string) => {
                  if (datePart === 'Present') return 'Present';
                  
                  const year = datePart.split('-')[0];
                  const month = parseInt(datePart.split('-')[1]);
                  
                  const monthNames = [
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                  ];
                  
                  return `${monthNames[month-1]} ${year}`;
                };
                
                return `${formatDate(startPart)} - ${formatDate(endPart)}`;
              }
              
              return item.year;
            })()}
          </div>
          
          {/* Duration badge */}
          <div className={`absolute -bottom-3 ${isEven ? 'right-5' : 'left-5'} bg-dark-100/90 border border-primary/20 text-primary/90 text-xs font-medium py-1 px-3 rounded-full shadow-sm`}>
            {(() => {
              if (!item.year.includes('-')) return '1 mo';
              
              const parts = item.year.split('-');
              const startPart = parts[0].trim();
              const endPart = parts[1].trim();
              
              // Handle YYYY-MM format
              if (startPart.includes('-')) {
                const startYear = parseInt(startPart.split('-')[0]);
                const startMonth = parseInt(startPart.split('-')[1]);
                
                const endYear = endPart === 'Present' 
                  ? new Date().getFullYear() 
                  : parseInt(endPart.split('-')[0]);
                const endMonth = endPart === 'Present' 
                  ? new Date().getMonth() + 1 
                  : parseInt(endPart.split('-')[1]);
                
                const monthDiff = (endYear - startYear) * 12 + (endMonth - startMonth);
                
                if (monthDiff >= 12) {
                  const years = Math.floor(monthDiff / 12);
                  return `${years} yr${years > 1 ? 's' : ''}${endPart === 'Present' ? '+' : ''}`;
                } else {
                  return `${monthDiff} mo${monthDiff > 1 ? 's' : ''}${endPart === 'Present' ? '+' : ''}`;
                }
              }
              
              // Fallback for other formats
              return '6 mos';
            })()}
          </div>
          
          <div className="mt-6">
            {/* Title with icon and logo */}
            <div className={`flex items-center mb-2 ${!isEven && 'flex-row-reverse'}`}>
              <div className={`flex items-center ${!isEven && 'flex-row-reverse'}`}>
                <div className={`${isEven ? 'mr-2' : 'ml-2'}`}>
                  <TypeIcon type={item.type} />
                </div>
                {item.logo && (
                  <div className={`w-6 h-6 bg-white/5 rounded-md p-0.5 flex items-center justify-center ${isEven ? 'ml-1' : 'mr-1'} border border-white/10`}>
                    <img 
                      src={item.logo} 
                      alt={`${item.subtitle} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </div>
              <div className={`${isEven ? 'ml-2' : 'mr-2'}`}>
                <h3 className="font-bold text-base text-white">
                  {item.title || item.subtitle}
                </h3>
                {item.title && <p className="text-gray-400 text-xs font-normal mt-0.5">{item.subtitle}</p>}
              </div>
            </div>
            
            {/* Location and Time on a single horizontal line */}
            <div className={`flex items-center mt-3 text-sm text-gray-400 ${!isEven && 'flex-row-reverse justify-end'} ${isEven ? 'space-x-4' : 'space-x-reverse space-x-4'}`}>
              <div className="flex items-center">
                <FiMapPin className={`${isEven ? 'mr-1' : 'ml-1 order-2'}`} />
                <span>{item.location}</span>
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <FiClock className={`${isEven ? 'mr-1' : 'ml-1 order-2'}`} />
                <span>
                  {(() => {
                    if (!item.year.includes('-')) return '1 mo';
                    
                    const parts = item.year.split('-');
                    const startPart = parts[0].trim();
                    const endPart = parts[1].trim();
                    
                    // Handle YYYY-MM format
                    if (startPart.includes('-')) {
                      const startYear = parseInt(startPart.split('-')[0]);
                      const startMonth = parseInt(startPart.split('-')[1]);
                      
                      const endYear = endPart === 'Present' 
                        ? new Date().getFullYear() 
                        : parseInt(endPart.split('-')[0]);
                      const endMonth = endPart === 'Present' 
                        ? new Date().getMonth() + 1 
                        : parseInt(endPart.split('-')[1]);
                      
                      const monthDiff = (endYear - startYear) * 12 + (endMonth - startMonth);
                      
                      if (monthDiff >= 12) {
                        const years = Math.floor(monthDiff / 12);
                        return `${years} yr${years > 1 ? 's' : ''}${endPart === 'Present' ? '+' : ''}`;
                      } else {
                        return `${monthDiff} mo${monthDiff > 1 ? 's' : ''}${endPart === 'Present' ? '+' : ''}`;
                      }
                    }
                    
                    // Fallback for other formats
                    return '6 mos';
                  })()}
                </span>
              </div>
            </div>
            
            {/* Description preview */}
            <p className="text-gray-400 text-sm mt-3 line-clamp-2">
              {item.description.substring(0, 80)}...
            </p>
            
            <div className="mt-4 flex items-center justify-between">
              {/* Experience fields tags in a single line with overflow hidden */}
              <div className={`flex gap-2 overflow-x-hidden ${!isEven && 'flex-row-reverse'}`}>
                <div className={`flex gap-2 ${!isEven ? 'flex-row-reverse' : ''}`}>
                  {item.technologies.slice(0, 2).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 text-xs bg-dark-300/60 text-primary/80 rounded-md border border-primary/10 whitespace-nowrap hover:bg-primary/20 hover:text-primary transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 2 && (
                    <span className="px-2 py-0.5 text-xs bg-dark-300/60 text-gray-400 rounded-md border border-white/5 whitespace-nowrap">
                      +{item.technologies.length - 2}
                    </span>
                  )}
                </div>
              </div>
              
              {/* View More button */}
              <div className={`flex ${!isEven && 'justify-end'}`}>
                <motion.button
                  whileHover={{ x: isEven ? 3 : -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="text-sm md:text-xs flex items-center font-medium text-gray-400 hover:text-white hover:bg-primary/20 py-1 px-2 md:py-0.5 md:px-1.5 rounded-md transition-all duration-200"
                >
                  {!isEven && <FiArrowUpRight className="mr-1 rotate-180" />}
                  View More
                  {isEven && <FiArrowUpRight className="ml-1" />}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Center timeline dot */}
      <div className="w-2/12 flex justify-center relative">
        {/* Node with white glowing border and floating particle */}
        <motion.div
          whileHover={{ 
            scale: 1.1,
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 15,
              duration: 0.2
            }
          }}
          className="w-12 h-12 rounded-full bg-dark-200 border-2 border-white/90 shadow-md z-20 flex items-center justify-center relative overflow-hidden"
          style={{ 
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.6)'
          }}
        >
          {/* Floating particle inside the node */}
          <div className="absolute w-2 h-2 bg-white/70 rounded-full animate-float" 
               style={{ 
                 left: '30%', 
                 top: '30%',
                 boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
                 animationDuration: '3s'
               }}></div>
          <div className="absolute w-1 h-1 bg-white/60 rounded-full animate-float" 
               style={{ 
                 left: '70%', 
                 top: '60%',
                 boxShadow: '0 0 3px rgba(255, 255, 255, 0.6)',
                 animationDuration: '2.5s',
                 animationDelay: '0.5s'
               }}></div>

          {/* Icon with job-specific styling - Using the actual icon from the item */}
          <div className={`w-9 h-9 rounded-full flex items-center justify-center z-10`} style={{
            background: `radial-gradient(circle at center, ${
              item.id === 'pngIntern' ? 'rgba(59, 130, 246, 0.3)' : 
              item.id === 'befiedFullstack' ? 'rgba(139, 92, 246, 0.3)' :
              item.id === 'befiedFrontend' ? 'rgba(251, 191, 36, 0.3)' :
              'rgba(16, 185, 129, 0.3)'
            }, transparent 70%)`
          }}>
            {(() => {
              const IconComponent = item.icon;
              return <IconComponent className="w-6 h-6" style={{
                color: item.id === 'pngIntern' ? '#60a5fa' : 
                      item.id === 'befiedFullstack' ? '#c084fc' :
                      item.id === 'befiedFrontend' ? '#fbbf24' :
                      '#34d399'
              }} />;
            })()}
          </div>
        </motion.div>
      </div>
      
      {/* Empty space opposite to content */}
      <div className="w-5/12"></div>
    </div>
  );
};

const TimelineModal = ({ item, isOpen, onClose }: TimelineModalProps) => {
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
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  if (!item) return null;
  
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
            className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto m-4 p-8 rounded-xl bg-gradient-to-br from-dark-100/95 to-dark-200/95 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            {/* Close button */}
            <motion.button 
              onClick={onClose} 
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX className="w-5 h-5" />
            </motion.button>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${
                  item.id === 'pngIntern' ? 'bg-blue-500/20 text-blue-400' : 
                  item.id === 'befiedFullstack' ? 'bg-purple-500/20 text-purple-400' :
                  item.id === 'befiedFrontend' ? 'bg-amber-500/20 text-amber-400' : 
                  'bg-green-500/20 text-green-400'
                }`}>
                  {(() => {
                    const IconComponent = item.icon;
                    return <IconComponent className="w-6 h-6" />;
                  })()}
                </div>
                {item.logo && (
                  <div className="ml-3 w-10 h-10 bg-white/5 rounded-lg p-1 flex items-center justify-center">
                    <img 
                      src={item.logo} 
                      alt={`${item.subtitle} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">{item.title || item.subtitle}</h3>
                {item.title && <p className="text-gray-400 text-lg">{item.subtitle}</p>}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>{item.year}</span>
              </div>
              <span>•</span>
              <span>{item.location}</span>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">{item.description}</p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Key Achievements:
              </h4>
              <ul className="space-y-3">
                {item.achievements.map((achievement: string, i: number) => (
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
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {item.technologies.length > 0 && (
              <div>
                <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech: string, i: number) => (
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
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const JourneyTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = (item: TimelineItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <section id="journey" className="py-20 md:py-32 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30 overflow-hidden">
        <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute -bottom-[300px] -right-[300px] w-[600px] h-[600px] bg-gradient-to-br from-secondary/20 to-transparent rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Journey</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            My work experience journey through various roles and companies.
            Click on any milestone to explore detailed information.
          </p>
        </motion.div>
        
        {/* Vertical timeline with alternating items */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line with subtle glow extending to the very bottom */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] transform -translate-x-1/2 z-10" 
               style={{ 
                 background: 'rgba(255, 255, 255, 0.7)',
                 boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)', 
                 height: '100%' 
               }}></div>
               
          {/* No decorative dots along the timeline as requested */}
          
          {/* Timeline items */}
          <div className="relative space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
            {timelineData.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => handleOpenModal(item)}
              />
            ))}
            
            {/* No final dot at the bottom */}
          </div>
        </div>
      </div>
      
      {/* Modal for detailed view */}
      <TimelineModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default JourneyTimeline;
