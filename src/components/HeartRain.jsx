import React from 'react';
import { motion } from 'framer-motion';

const Heart = ({ delay }) => {
  const size = 10 + Math.random() * 20;
  const xStart = (Math.random() - 0.5) * 100;
  const xEnd = (Math.random() - 0.5) * 400;
  const duration = 4 + Math.random() * 4;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 0, 
        x: xStart, 
        scale: 0.5 
      }}
      animate={{ 
        opacity: [0, 1, 0], 
        y: -600, 
        x: xEnd,
        scale: [0.5, 1.2, 0.8],
        rotate: [0, 15, -15, 0]
      }}
      transition={{ 
        duration, 
        delay, 
        repeat: Infinity, 
        ease: "easeOut" 
      }}
      className="absolute text-pink-500 drop-shadow-lg"
      style={{ 
        fontSize: `${size}px`,
        willChange: 'transform, opacity'
      }}
    >
      ❤️
    </motion.div>
  );
};

const HeartRain = ({ active }) => {
  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[60]">
      {[...Array(25)].map((_, i) => (
        <Heart key={i} delay={i * 0.4} />
      ))}
    </div>
  );
};

export default HeartRain;
