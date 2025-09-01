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
    year: '2025-05 - Present',
    title: 'Software Engineer Intern',
    subtitle: 'P&G',
    location: 'BGC, Taguig, Philippines',
    logo: '/images/companyLogo/pg_logo.webp',
    description: 'Currently serving as a Software Engineering Intern at Procter & Gamble\'s Global Business Center, contributing to enterprise-level applications and digital transformation initiatives for one of the world\'s leading consumer goods companies.',
    achievements: [
      'Developing and maintaining key components of the company\'s global digital ecosystem',
      'Collaborating with international cross-functional teams to enhance digital solutions',
      'Implementing modern development practices in an enterprise setting using Azure DevOps',
      'Contributing to critical IT systems supporting P&G\'s global supply chain operations',
      'Participating in digital transformation projects that improve operational efficiency'
    ],
    technologies: ['Enterprise Software', 'Full-stack Development', 'Cloud Infrastructure', 'Agile Methodology', 'Azure', 'React', '.NET Core', 'SQL Server', 'Power Platform'],
    icon: FiCpu,
    type: 'work',
    color: 'blue'
  },
  {
    id: 'ethosbytes',
    year: '2024-06 - 2024-12',
    title: 'Software Engineer Intern',
    subtitle: 'Ethos Bytes Pty Ltd',
    location: 'Sydney, Australia',
    logo: '/images/companyLogo/ethos_bytes_logo.png',
    description: 'Worked as a Software Engineering Intern at Ethos Bytes, an innovative Australian tech company, contributing to the development of scalable web applications and participating in international tech projects focused on sustainable technology solutions.',
    achievements: [
      'Contributed to the development of client-facing web applications for sustainability tracking',
      'Implemented responsive and accessible user interfaces following WCAG guidelines',
      'Developed and integrated RESTful APIs for data analytics features',
      'Participated in agile development processes with international teams across time zones',
      'Optimized application performance resulting in 30% improved load times'
    ],
    technologies: ['JavaScript', 'React', 'TypeScript', 'AWS', 'CI/CD', 'Git', 'Responsive Design', 'Node.js', 'GraphQL', 'Docker'],
    icon: FiDatabase,
    type: 'work',
    color: 'green'
  },
  {
    id: 'befiedFullstack',
    year: '2023-10 - 2024-01',
    title: 'Full-stack Developer',
    subtitle: 'BeFied',
    location: 'Singapore, Singapore',
    logo: '/images/companyLogo/befied_logo.jpg',
    description: 'Promoted to Full-stack Developer role after demonstrating proficiency in both frontend and backend development. Expanded responsibilities to include API design, database management, and system architecture for the company\'s fitness technology platform.',
    achievements: [
      'Successfully transitioned from frontend-focused to full-stack development in an agile environment',
      'Implemented real-time fitness tracking features using WebSockets and Node.js',
      'Designed and optimized MongoDB schema for improved data retrieval performance',
      'Integrated payment gateways and subscription management systems',
      'Reduced API response times by 40% through query optimization and caching strategies'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'Redux', 'Tailwind CSS', 'Socket.io', 'AWS', 'Jest'],
    icon: FiLayers,
    type: 'work',
    color: 'purple'
  },
  {
    id: 'befiedFrontend',
    year: '2023-07 - 2023-10',
    title: 'Frontend Web Developer',
    subtitle: 'BeFied',
    location: 'Singapore, Singapore',
    logo: '/images/companyLogo/befied_logo.jpg',
    description: 'Started as a Frontend Web Developer at BeFied, a Singapore-based fitness technology startup, focusing on creating responsive and user-friendly interfaces for the company\'s fitness tracking web platform and mobile applications.',
    achievements: [
      'Developed and maintained frontend components using React and TypeScript for fitness tracking dashboards',
      'Implemented responsive design principles ensuring seamless experience across devices',
      'Built interactive data visualization components for workout and nutrition analytics',
      'Collaborated with designers to translate UI/UX wireframes into functional code',
      'Improved client-side performance by implementing code splitting and lazy loading'
    ],
    technologies: ['React', 'TypeScript', 'CSS3', 'HTML5', 'UI/UX', 'Responsive Design', 'Mobile-First Approach', 'Chart.js', 'Styled Components', 'Webpack'],
    icon: FiCode,
    type: 'work',
    color: 'amber'
  }
];

interface TypeIconProps {
  type: string;
}

const TypeIcon = ({ type }: TypeIconProps) => {
  // In our implementation, type is actually the item.id
  const item = timelineData.find(item => item.id === type);
  
  if (!item) {
    // Default fallback if item not found
    return (
      <div className="p-3 rounded-full flex items-center justify-center bg-gray-500/20">
        <FiBriefcase className="w-6 h-6 text-white" />
      </div>
    );
  }
  
  // Get color based on the item's ID
  const getIconColor = () => {
    switch (item.id) {
      case 'pngIntern':
        return '#60a5fa'; // Blue for P&G - match center node
      case 'befiedFullstack':
        return '#c084fc'; // Purple for BeFied Fullstack - match center node
      case 'befiedFrontend':
        return '#fbbf24'; // Amber for BeFied Frontend - match center node
      case 'ethosbytes':
        return '#34d399'; // Green for Ethos Bytes - match center node
      default:
        return '#ffffff';
    }
  };
  
  // Use the same background style as the center node
  const iconStyle = {
    background: `radial-gradient(circle at center, ${
      item.id === 'pngIntern' ? 'rgba(59, 130, 246, 0.3)' : 
      item.id === 'befiedFullstack' ? 'rgba(139, 92, 246, 0.3)' :
      item.id === 'befiedFrontend' ? 'rgba(251, 191, 36, 0.3)' :
      'rgba(16, 185, 129, 0.3)'
    }, transparent 70%)`,
    boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)'
  };
  
  // Use the item's icon
  const IconComponent = item.icon;
  
  return (
    <div className="p-3 rounded-full flex items-center justify-center" style={iconStyle}>
      <IconComponent className="w-6 h-6" style={{ color: getIconColor() }} />
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
          initial={{ opacity: 0, x: isEven ? -20 : 20, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.1, 0.25, 1.0],
            opacity: { duration: 0.8 },
            y: { duration: 0.5 }
          }}
          className={`relative cursor-pointer p-6 rounded-xl transition-all duration-300
            backdrop-blur-sm border hover:border-primary/50
            hover:shadow-lg hover:shadow-primary/10 card-fade-in
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
              // Hardcoded values for specific positions to ensure consistency
              if (item.id === 'pngIntern') {
                return 'May 2025 - Present';
              }
              if (item.id === 'ethosbytes') {
                return 'Jun 2024 - Dec 2024';
              }
              if (item.id === 'befiedFullstack') {
                return 'Oct 2023 - Jan 2024';
              }
              if (item.id === 'befiedFrontend') {
                return 'Jul 2023 - Oct 2023';
              }
              
              // Fallback to formatted date if needed
              if (!item.year.includes('-')) return item.year;
              
              // Format YYYY-MM to readable format
              if (item.year.includes('-')) {
                const parts = item.year.split(' - ');
                const startPart = parts[0].trim();
                const endPart = parts[1].trim();
                
                // Convert YYYY-MM to Month YYYY format
                const formatDate = (datePart: string) => {
                  if (datePart === 'Present') return 'Present';
                  
                  try {
                    const [year, monthStr] = datePart.split('-');
                    const month = parseInt(monthStr);
                    
                    const monthNames = [
                      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                    ];
                    
                    return `${monthNames[month-1]} ${year}`;
                  } catch (e) {
                    return datePart; // Return as is if parsing fails
                  }
                };
                
                return `${formatDate(startPart)} - ${formatDate(endPart)}`;
              }
              
              return item.year;
            })()}
          </div>
          
          {/* Duration badge */}
          <div className={`absolute -bottom-3 ${isEven ? 'right-5' : 'left-5'} bg-dark-100/90 border border-primary/20 text-primary/90 text-xs font-medium py-1 px-3 rounded-full shadow-sm`}>
            {(() => {
              // Parse the year string to calculate duration
              const calculateDuration = (yearString: string) => {
                if (!yearString || !yearString.includes(' - ')) {
                  return '1 mo';
                }
                
                const [startStr, endStr] = yearString.split(' - ');
                
                // Handle specific positions
                if (yearString.includes('2025-05 - Present')) {
                  // For P&G position
                  const currentDate = new Date();
                  const startDate = new Date(2025, 4); // May 2025 (months are 0-indexed)
                  
                  const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                                 (currentDate.getMonth() - startDate.getMonth());
                  
                  return `${months} mos+`;
                } else if (yearString.includes('2024-06 - 2024-12')) {
                  // For Ethos Bytes position - 7 months
                  return '7 mos';
                } else if (yearString.includes('2023-10 - 2024-01')) {
                  // For BeFied Full-stack - 4 months
                  return '4 mos';
                } else if (yearString.includes('2023-07 - 2023-10')) {
                  // For BeFied Frontend - 4 months
                  return '4 mos';
                }
                
                // Generic calculation as fallback
                try {
                  const [startYear, startMonthStr] = startStr.split('-');
                  const startMonth = parseInt(startMonthStr);
                  
                  let endYear, endMonth;
                  
                  if (endStr === 'Present') {
                    const now = new Date();
                    endYear = now.getFullYear();
                    endMonth = now.getMonth() + 1; // 1-indexed month
                  } else {
                    [endYear, endMonth] = endStr.split('-').map(num => parseInt(num));
                  }
                  
                  const monthDiff = (endYear - parseInt(startYear)) * 12 + 
                                   (endMonth - startMonth) + 1; // inclusive of start and end month
                  
                  if (monthDiff >= 12) {
                    const years = Math.floor(monthDiff / 12);
                    const months = monthDiff % 12;
                    return months > 0 
                      ? `${years} yr${years > 1 ? 's' : ''} ${months} mo${months > 1 ? 's' : ''}${endStr === 'Present' ? '+' : ''}` 
                      : `${years} yr${years > 1 ? 's' : ''}${endStr === 'Present' ? '+' : ''}`;
                  } else {
                    return `${monthDiff} mo${monthDiff > 1 ? 's' : ''}${endStr === 'Present' ? '+' : ''}`;
                  }
                } catch (e) {
                  // If parsing fails for any reason, return specific durations based on position
                  if (item.id === 'pngIntern') return '4 mos+';
                  if (item.id === 'ethosbytes') return '7 mos';
                  if (item.id === 'befiedFullstack') return '4 mos';
                  if (item.id === 'befiedFrontend') return '4 mos';
                  return '3 mos'; // Default fallback
                }
              };
              
              return calculateDuration(item.year);
            })()}
          </div>
          
          <div className="mt-6">
            {/* Title with icon and logo */}
            <div className={`flex items-center mb-2 ${!isEven && 'flex-row-reverse'}`}>
              <div className={`flex items-center ${!isEven && 'flex-row-reverse'}`}>
                <div className={`${isEven ? 'mr-2' : 'ml-2'}`}>
                  <TypeIcon type={item.id} />
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
            
            {/* Location and Time on a single horizontal line - Ensuring right alignment for odd cards */}
            <div className={`flex items-center mt-3 text-sm text-gray-400 ${!isEven ? 'justify-end' : ''}`}>
              <div className={`flex items-center`}>
                <FiMapPin className="mr-1" />
                <span>{item.location}</span>
              </div>
              <span className="mx-2">•</span>
              <div className={`flex items-center`}>
                <FiClock className="mr-1" />
                <span>
                  {(() => {
                    // Use hardcoded durations that match the badge duration
                    if (item.id === 'pngIntern') return '4 mos+';
                    if (item.id === 'ethosbytes') return '7 mos';
                    if (item.id === 'befiedFullstack') return '4 mos';
                    if (item.id === 'befiedFrontend') return '4 mos';
                    
                    if (!item.year.includes('-')) return '1 mo';
                    
                    const parts = item.year.split(' - ');
                    const startPart = parts[0].trim();
                    const endPart = parts[1].trim();
                    
                    // Calculate duration based on specific dates
                    if (startPart === 'May 2025' && endPart === 'Present') return '4 mos+';
                    if (startPart === 'Jun 2024' && endPart === 'Dec 2024') return '7 mos';
                    if (startPart === 'Oct 2023' && endPart === 'Jan 2024') return '4 mos';
                    if (startPart === 'Jul 2023' && endPart === 'Oct 2023') return '4 mos';
                    
                    return '3 mos'; // Default fallback
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
      
      {/* Center timeline dot with improved animation */}
      <div className="w-2/12 flex justify-center relative">
        {/* Node with white glowing border and floating particle */}
        <motion.div
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 15,
              duration: 0.3
            }
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.5
            }
          }}
          className="w-12 h-12 rounded-full bg-dark-200 border-2 border-white/90 shadow-md z-20 flex items-center justify-center relative overflow-hidden timeline-node"
          style={{ 
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.6)',
            background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 1))'
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
            className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto m-4 p-8 rounded-xl bg-gradient-to-br from-dark-100/95 to-dark-200/95 backdrop-blur-xl border border-white/10 shadow-2xl fade-in"
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
              <motion.h4 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
              >
                Key Achievements:
              </motion.h4>
              <ul className="space-y-3">
                {item.achievements.map((achievement: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
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
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.6 + i * 0.05,
                        scale: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm hover:bg-primary/20 hover:shadow-md transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
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
    <section id="experience" className="py-12 md:py-16 lg:py-20 relative">
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.25, 0.1, 0.25, 1.0],
            staggerChildren: 0.2
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-14"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Experience
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Professional Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto text-lg"
          >
            My work experience journey through various roles and companies.
            Click on any milestone to explore detailed information.
          </motion.p>
        </motion.div>
        
        {/* Vertical timeline with alternating items */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line with subtle glow extending to the very bottom - with animation */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-[2px] transform -translate-x-1/2 z-10"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ 
              height: "100%", 
              opacity: 1,
              transition: { 
                height: { duration: 1.5, ease: "easeOut" },
                opacity: { duration: 0.8, ease: "easeOut" }
              }
            }}
            viewport={{ once: true }}
            style={{ 
              background: 'rgba(255, 255, 255, 0.7)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)'
            }}
          ></motion.div>
               
          {/* Start point at top of timeline - separate from the line */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white shadow-lg animate-timeline-pulse"
                 style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)' }}></div>
          </div>
                
          {/* End point at bottom of timeline - separate from the line */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white shadow-lg animate-timeline-pulse"
                 style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)' }}></div>
          </div>
          
          {/* Timeline items with staggered fade-in animations */}
          <div className="relative space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28 stagger-timeline mt-8 mb-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
                className="timeline-item-container"
              >
                <TimelineCard
                  item={item}
                  index={index}
                  onClick={() => handleOpenModal(item)}
                />
              </motion.div>
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
