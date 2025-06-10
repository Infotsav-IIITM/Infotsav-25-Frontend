import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 23, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 23, 68, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Scanlines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0px 0px', '0px 100px'],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'linear',
        }}
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 50%, rgba(0, 229, 255, 0.03) 50%)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon-cyan rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-darker-gray/50" />
    </div>
  );
};

export default BackgroundEffects;