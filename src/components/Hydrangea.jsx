import React from 'react';
import { motion } from 'framer-motion';

const Hydrangea = ({ scale = 1, rotation = 0, delay = 0, zIndex = 1 }) => {
  const petals = Array.from({ length: 30 }, (_, i) => ({
    x: (Math.random() - 0.5) * 80,
    y: (Math.random() - 0.5) * 80,
    s: 0.4 + Math.random() * 0.4,
    d: i * 0.05
  }));

  return (
    <motion.div
      style={{ zIndex, scale, rotate: rotation, bottom: '120px', transformOrigin: 'bottom center' }}
      className="absolute flex items-center justify-center w-32 h-64 group"
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 140 }}
        transition={{ duration: 2, delay }}
        className="absolute bottom-0 w-3 bg-gradient-to-t from-green-900 to-green-800 rounded-full opacity-60"
      />

      <div className="absolute bottom-[140px] w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        {petals.map((p, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
            animate={{ scale: p.s, opacity: 1, x: p.x, y: p.y }}
            transition={{ duration: 3, delay: delay + p.d, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: 'absolute',
              width: '18px',
              height: '18px',
              background: `radial-gradient(circle at center, #A5B4FC, #6366F1)`,
              borderRadius: '4px',
              rotate: '45deg',
              boxShadow: '0 0 8px rgba(99, 102, 241, 0.4)'
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Hydrangea;
