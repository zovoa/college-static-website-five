import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-eco-blue-900 via-eco-blue-800 to-eco-green-900"></div>
      
      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const opacity = Math.random() * 0.7 + 0.3;
          const animationDelay = Math.random() * 5;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          
          return (
            <div
              key={i}
              className="absolute rounded-full animate-pulse-slow"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: 'white',
                opacity,
                animationDelay: `${animationDelay}s`,
              }}
            ></div>
          );
        })}
      </div>
      
      {/* Far clouds layer */}
      <motion.div 
        className="absolute w-full"
        style={{ y: y1, opacity: opacity1 }}
      >
        <svg viewBox="0 0 1440 320" className="w-full text-white/10" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
      
      {/* Middle clouds layer */}
      <motion.div 
        className="absolute w-full"
        style={{ y: y2 }}
      >
        <svg viewBox="0 0 1440 320" className="w-full text-white/20" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
      
      {/* Near clouds layer */}
      <motion.div 
        className="absolute w-full"
        style={{ y: y3 }}
      >
        <svg viewBox="0 0 1440 320" className="w-full text-white/30" preserveAspectRatio="none">
          <path 
            fill="currentColor" 
            d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,170.7C672,160,768,96,864,90.7C960,85,1056,139,1152,160C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default ParallaxBackground;