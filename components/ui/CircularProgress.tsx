'use client';

import { motion } from 'framer-motion';

interface CircularProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  primaryColor?: string;
  secondaryColor?: string;
  showPercentage?: boolean;
  className?: string;
}

const CircularProgress = ({
  progress,
  size = 100,
  strokeWidth = 8,
  primaryColor = 'url(#gradient-stroke)',
  secondaryColor = '#1e293b',
  showPercentage = true,
  className = '',
}: CircularProgressProps) => {
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`relative w-${size} h-${size} ${className}`} style={{ width: size, height: size }}>
      {/* Background circle */}
      <div className="absolute inset-0 rounded-full border-[6px] border-dark-300/50"></div>
      
      {/* Progress circle - using stroke dash properties */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
        <circle 
          cx={center} 
          cy={center} 
          r={radius} 
          fill="none" 
          stroke={secondaryColor} 
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
        <circle 
          cx={center} 
          cy={center} 
          r={radius} 
          fill="none" 
          stroke={primaryColor} 
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transform transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>
      
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
            style={{ fontSize: size <= 64 ? '0.875rem' : '1.125rem' }}
          >
            {progress}%
          </motion.span>
        </div>
      )}
    </div>
  );
};

export default CircularProgress;
