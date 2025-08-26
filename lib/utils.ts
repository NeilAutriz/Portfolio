// This file contains types and utility functions for the portfolio website

// Motion variants
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Class name merging utility
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Types
export type Project = {
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
  };
};

export type Skill = {
  id: string;
  title: string;
  percentage: number;
  description: string;
  icon: any;
  color: string;
};

export type TimelineItem = {
  id: string;
  type: 'Education' | 'Work' | 'Achievement' | 'About';
  icon: any;
  period: string;
  location: string;
  title: string;
  subtitle?: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  project: string;
  quote: string;
  initials: string;
  rating: number;
};
