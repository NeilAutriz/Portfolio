'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiLayout, FiCloud, FiTool } from 'react-icons/fi';
import CircularProgress from '../ui/CircularProgress';

const skills = [
  {
    id: 'frontend',
    title: 'Frontend',
    percentage: 95,
    description: 'React, Vue, Angular, TypeScript',
    icon: FiCode,
    color: '#0ea5e9', // Primary blue
    textColor: 'text-blue-500',
    subskills: [
      { name: 'React', level: 96 },
      { name: 'TypeScript', level: 92 },
      { name: 'Vue', level: 85 },
      { name: 'Angular', level: 78 }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    percentage: 88,
    description: 'Node.js, Python, Java, PostgreSQL',
    icon: FiServer,
    color: '#10b981', // Green
    textColor: 'text-green-500',
    subskills: [
      { name: 'Node.js', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'Java', level: 82 },
      { name: 'PostgreSQL', level: 90 }
    ]
  },
  {
    id: 'aiml',
    title: 'AI/ML',
    percentage: 82,
    description: 'TensorFlow, PyTorch, OpenAI APIs',
    icon: FiDatabase,
    color: '#8b5cf6', // Purple
    textColor: 'text-purple-500',
    subskills: [
      { name: 'OpenAI APIs', level: 90 },
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 78 },
      { name: 'ML Ops', level: 75 }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    percentage: 75,
    description: 'Figma, Adobe Suite, UI/UX Principles',
    icon: FiLayout,
    color: '#ec4899', // Pink
    textColor: 'text-pink-500',
    subskills: [
      { name: 'Figma', level: 85 },
      { name: 'UI/UX', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'Adobe Suite', level: 70 }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    percentage: 78,
    description: 'AWS, Docker, Kubernetes, CI/CD',
    icon: FiCloud,
    color: '#f97316', // Orange
    textColor: 'text-orange-500',
    subskills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 78 },
      { name: 'Kubernetes', level: 70 }
    ]
  },
  {
    id: 'itmanagement',
    title: 'IT Management',
    percentage: 85,
    description: 'Jira, Atlassian, Agile, Scrum',
    icon: FiTool,
    color: '#0891b2', // Cyan
    textColor: 'text-cyan-500',
    subskills: [
      { name: 'Jira', level: 90 },
      { name: 'Atlassian Suite', level: 88 },
      { name: 'Agile/Scrum', level: 92 },
      { name: 'IT Service Management', level: 80 }
    ]
  }
];

// Tech stack logos with color information
const techLogos = [
  { name: 'React', image: '/images/logos/react.svg', color: '#61DAFB', background: 'rgba(97, 218, 251, 0.1)' },
  { name: 'TypeScript', image: '/images/logos/typescript.svg', color: '#3178C6', background: 'rgba(49, 120, 198, 0.1)' },
  { name: 'Node.js', image: '/images/logos/nodejs.svg', color: '#68A063', background: 'rgba(104, 160, 99, 0.1)' },
  { name: 'Python', image: '/images/logos/python.svg', color: '#306998', background: 'rgba(48, 105, 152, 0.1)' },
  { name: 'Next.js', image: '/images/logos/nextjs.svg', color: '#FFFFFF', background: 'rgba(255, 255, 255, 0.08)' },
  { name: 'Vue', image: '/images/logos/vue.svg', color: '#42B883', background: 'rgba(66, 184, 131, 0.1)' },
  { name: 'MySQL', image: '/images/logos/mysql.svg', color: '#00618A', background: 'rgba(0, 97, 138, 0.1)' },
  { name: 'PHP', image: '/images/logos/php.svg', color: '#6181B6', background: 'rgba(97, 129, 182, 0.1)' },
  { name: 'Docker', image: '/images/logos/docker.svg', color: '#00AADA', background: 'rgba(0, 170, 218, 0.1)' },
  { name: 'AWS', image: '/images/logos/aws.svg', color: '#FF9900', background: 'rgba(255, 153, 0, 0.1)' },
  { name: 'Bootstrap', image: '/images/logos/bootstrap.svg', color: '#5B4282', background: 'rgba(91, 66, 130, 0.1)' },
  { name: 'Git', image: '/images/logos/git.svg', color: '#F34F29', background: 'rgba(243, 79, 41, 0.1)' },
  { name: 'Ubuntu', image: '/images/logos/ubuntu.svg', color: '#DD4814', background: 'rgba(221, 72, 20, 0.1)' },
];

const SkillsMastery = () => {
  const [activeSkill, setActiveSkill] = useState(skills[0].id);
  const [isHovered, setIsHovered] = useState(false);
  
  // Double the tech logos for seamless infinite scrolling
  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <section id="skills" className="pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/15 to-primary/10 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-r from-secondary/15 to-purple-500/10 rounded-full filter blur-[120px]"></div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-center">
            <h2 className="section-title">Skills Mastery</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Crafting digital experiences with a versatile tech stack and a focus on innovation.
            </p>
          </div>
        </motion.div>
        
        {/* Tech Stack Logos - Infinite Scrolling Carousel */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Edge fading effect */}
            <div className="absolute left-0 top-0 -z-10 h-full w-28 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 -z-10 h-full w-28 bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none"></div>
            
            {/* Moving light strip overlay */}
            <div className="absolute inset-0 z-5 overflow-hidden opacity-10">
              <div className="light-strip"></div>
            </div>
            
            {/* Truly infinite scrolling tech stack - using CSS animation approach */}
            <div className="flex items-center py-8 justify-center overflow-hidden">
              <div className="flex w-full relative">
                {/* This wrapper creates an infinite loop effect */}
                <div 
                  className="flex gap-12 animate-scroll"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                >
                  {/* All logos */}
                  {duplicatedLogos.map((logo, index) => (
                    <motion.div
                      key={`logo-${logo.name}-${index}`}
                      className="logo-item flex items-center w-24 h-24 transform preserve-3d flex-shrink-0"
                      whileHover={{ 
                        y: -5, 
                        scale: 1.08,
                        rotateY: 5,
                        zIndex: 20,
                        transition: { type: "spring", stiffness: 400, damping: 12, duration: 0.2 }
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div 
                        className="relative w-24 h-24 rounded-2xl backdrop-blur-xl flex items-center justify-center p-4 shadow-xl group transform hover:rotate-y-5 transition-all duration-300"
                        style={{ 
                          background: logo.background || 'rgba(30, 41, 59, 0.7)',
                          borderColor: `${logo.color}30` || 'rgba(255, 255, 255, 0.05)',
                          borderWidth: '1px',
                          boxShadow: `0 8px 30px ${logo.color}15, inset 0 1px 1px rgba(255,255,255,0.1)`
                        }}
                      >
                        {/* Prism reflection effect */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 rounded-full blur-sm animate-float opacity-0 group-hover:opacity-70 transition-opacity"></div>
                        
                        {/* Hover effects with enhanced gradients */}
                        <div 
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                          style={{ background: `linear-gradient(135deg, ${logo.color}30, transparent 80%)` }}
                        ></div>
                        
                        {/* Enhanced glow effect on hover */}
                        <div 
                          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-60 blur-md transition-all duration-500 -z-10 animate-pulse-slow"
                          style={{ background: `radial-gradient(circle at center, ${logo.color}40, transparent 70%)` }}
                        ></div>
                        
                        {/* Shine effect that moves on hover */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                          <div className="absolute -top-full -left-full w-[200%] h-[200%] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-shine"></div>
                        </div>
                        
                        <div className="w-full h-full relative flex items-center justify-center z-10">
                          <img 
                            src={logo.image} 
                            alt={`${logo.name} logo`} 
                            className="w-full h-full object-contain transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:brightness-125 drop-shadow-xl"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            {/* Skill Select Cards */}
            <div className="space-y-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  className={`bg-dark-100/50 backdrop-blur-lg rounded-xl border p-4 flex items-center gap-4 cursor-pointer transition-all hover:bg-dark-100/80 ${
                    activeSkill === skill.id 
                      ? 'border-primary shadow-glow' 
                      : 'border-white/5 shadow-xl'
                  }`}
                  onClick={() => setActiveSkill(skill.id)}
                  style={
                    activeSkill === skill.id 
                      ? { borderColor: skill.color, boxShadow: `0 10px 30px ${skill.color}20` } 
                      : {}
                  }
                >
                  <div 
                    className={`p-3.5 rounded-full backdrop-blur-sm border shadow-lg ${skill.textColor}`}
                    style={{ 
                      background: activeSkill === skill.id 
                        ? `linear-gradient(135deg, ${skill.color}20, ${skill.color}05)` 
                        : 'linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(30, 41, 59, 0.2))',
                      borderColor: activeSkill === skill.id ? `${skill.color}40` : 'rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${activeSkill === skill.id ? 'text-white' : 'text-gray-200'}`}>{skill.title}</h3>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Active Skill Details with Graph */}
            {skills.map((skill) => (
              activeSkill === skill.id && (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-dark-100/50 backdrop-blur-md p-8 rounded-lg border border-white/5 shadow-xl overflow-hidden h-full flex flex-col"
                >
                  {/* Decorative background elements */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary/5 blur-3xl"></div>
                  
                  {/* Skill header with fancy CircularProgress */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <motion.h3 
                      className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    >
                      {skill.title}
                    </motion.h3>
                    
                    <motion.div 
                      className="h-20 w-20 relative"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full blur-md" style={{ 
                        background: `radial-gradient(circle, ${skill.color || '#0ea5e9'}30 0%, transparent 70%)`
                      }}></div>
                      
                      <CircularProgress
                        progress={skill.percentage}
                        size={80}
                        strokeWidth={6}
                        showPercentage={true}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Enhanced detailed skill graph */}
                  <motion.div 
                    className="mb-6 relative z-10 flex-grow"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                        Detailed Proficiency
                      </h4>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    </div>
                    
                    <div className="space-y-5">
                      {skill.subskills.map((subskill, index) => (
                        <motion.div 
                          key={`${skill.id}-${index}`} 
                          className="space-y-2"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        >
                          <div className="flex justify-between items-center">
                            <div className="text-sm font-medium text-gray-200">{subskill.name}</div>
                            <div className="text-sm font-bold text-white">{subskill.level}%</div>
                          </div>
                          <div className="h-2 bg-dark-200/60 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full rounded-full"
                              style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}90)` }}
                              initial={{ width: 0 }}
                              animate={{ width: `${subskill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Professional applications */}
                  <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                        Professional Application
                      </h4>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    </div>
                    <div className="bg-gradient-to-br from-dark-100/50 to-dark-100/30 border border-white/5 rounded-lg p-4">
                      <ul className="space-y-2 text-sm text-gray-300 list-disc pl-4">
                        {skill.id === 'frontend' && (
                          <>
                            <li>Built responsive web interfaces</li>
                            <li>Developed SPAs with React and TypeScript</li>
                            <li>Created complex animations and interactive UIs</li>
                          </>
                        )}
                        {skill.id === 'backend' && (
                          <>
                            <li>Designed RESTful and GraphQL APIs</li>
                            <li>Implemented microservices architectures</li>
                            <li>Set up database design and optimization</li>
                          </>
                        )}
                        {skill.id === 'aiml' && (
                          <>
                            <li>Developed ML models for data analysis</li>
                            <li>Built recommendation systems</li>
                            <li>Integrated with OpenAI services</li>
                          </>
                        )}
                        {skill.id === 'design' && (
                          <>
                            <li>Designed component libraries</li>
                            <li>Created design systems</li>
                            <li>Implemented motion design patterns</li>
                          </>
                        )}
                        {skill.id === 'devops' && (
                          <>
                            <li>Set up Docker containerization</li>
                            <li>Managed AWS cloud resources</li>
                            <li>Implemented CI/CD pipelines</li>
                          </>
                        )}
                        {skill.id === 'itmanagement' && (
                          <>
                            <li>Led Agile development teams using Jira</li>
                            <li>Implemented IT service management processes</li>
                            <li>Optimized project workflows with Atlassian suite</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              )
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMastery;
