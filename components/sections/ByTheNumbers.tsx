'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import CircularProgress from '../ui/CircularProgress';

const stats = [
  {
    value: 50,
    label: 'Projects Completed',
    subtext: 'Successful deliveries',
    progress: 85,
  },
  {
    value: 40,
    label: 'Happy Clients',
    subtext: '98% satisfaction rate',
    progress: 98,
  },
  {
    value: 5000,
    label: 'Hours Coded',
    subtext: 'Lines of dedication',
    progress: 92,
  },
];

const achievements = [
  'Leet Code GURU',
  'Professional Software Developer',
  'CCNA Certified',
];

const quality = {
  codeQuality: {
    testCoverage: 94,
    codeReviewScore: 4.8,
  },
  performance: {
    deliveryRate: 99.2,
    clientRetention: 91,
  },
};

interface CounterProps {
  value: number;
  duration?: number;
}

const Counter = ({ value, duration = 2000 }: CounterProps) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(counterRef, { once: true });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, type: "spring", stiffness: 100 }
      });
    }
  }, [isInView, controls]);
  
  return (
    <motion.span
      ref={counterRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
    >
      {isInView ? (
        <>
          {value}
          {typeof value === 'number' && value >= 1000 ? 'h' : '+'}
        </>
      ) : '0'}
    </motion.span>
  );
};

const ByTheNumbers = () => {
  return (
    <section id="by-the-numbers" className="py-20 md:py-32 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-accent/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-secondary/15 to-rose-400/10 rounded-full filter blur-[100px]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">By the Numbers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A quantified look at my journey, achievements, and the impact I've made in the tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-100/50 backdrop-blur-md rounded-lg p-6 text-center border border-white/5 shadow-lg hover:shadow-xl hover:border-primary/10 transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-full blur-lg opacity-70"></div>
                  <div className="relative bg-gradient-to-br from-dark-100/90 to-dark-200/90 backdrop-blur-sm p-4 rounded-full border border-primary/20 shadow-lg">
                    <Counter value={stat.value} />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mt-3 mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-400 mb-4">{stat.subtext}</p>
              
              <div className="mx-auto mt-2 mb-4">
                <CircularProgress 
                  progress={stat.progress} 
                  size={112} 
                  strokeWidth={8}
                  showPercentage={true}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-100/50 backdrop-blur-md rounded-lg p-8 border border-white/5 shadow-xl"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-6">Notable Achievements</h3>
            <div className="flex flex-wrap gap-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary/10 to-blue-400/10 px-4 py-2 rounded-full text-primary border border-primary/20 shadow-sm shadow-primary/10"
                >
                  {achievement}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-100/50 backdrop-blur-md rounded-lg p-8 border border-white/5 shadow-xl"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent mb-6">Quality Metrics</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-white mb-4">Code Quality</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-200/50 p-4 rounded-lg border border-white/5">
                  <p className="text-sm text-gray-400 mb-1">Test Coverage</p>
                  <p className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{quality.codeQuality.testCoverage}%</p>
                </div>
                <div className="bg-dark-200/50 p-4 rounded-lg border border-white/5">
                  <p className="text-sm text-gray-400 mb-1">Code Review Score</p>
                  <p className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{quality.codeQuality.codeReviewScore}/5</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Performance</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-200/50 p-4 rounded-lg border border-white/5">
                  <p className="text-sm text-gray-400 mb-1">Delivery Rate</p>
                  <p className="text-xl font-semibold bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent">{quality.performance.deliveryRate}%</p>
                </div>
                <div className="bg-dark-200/50 p-4 rounded-lg border border-white/5">
                  <p className="text-sm text-gray-400 mb-1">Client Retention</p>
                  <p className="text-xl font-semibold bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent">{quality.performance.clientRetention}%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;
