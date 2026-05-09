import React from 'react';
import { motion } from 'framer-motion';

export const EucalyptusLeaf = ({ scale = 1, rotation = 0, delay = 0, zIndex = 1 }) => {
  return (
    <motion.div
      style={{ zIndex, scale, rotate: rotation, bottom: '120px', transformOrigin: 'bottom center' }}
      className="absolute flex items-center justify-center w-20 h-48 pointer-events-none"
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 160 }}
        transition={{ duration: 1.5, delay }}
        className="absolute bottom-0 w-1 bg-green-800 rounded-full opacity-40"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ delay: delay + 0.5, duration: 1 }}
        style={{
          width: '40px',
          height: '60px',
          background: 'radial-gradient(circle at center, #6B7280, #374151)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          bottom: '120px',
          position: 'absolute'
        }}
      />
    </motion.div>
  );
};

export const LavenderSprig = ({ scale = 1, rotation = 0, delay = 0, zIndex = 1 }) => {
  const buds = Array.from({ length: 8 }, (_, i) => ({
    y: -i * 12,
    x: (i % 2 === 0 ? 5 : -5),
    d: i * 0.1
  }));

  return (
    <motion.div
      style={{ zIndex, scale, rotate: rotation, bottom: '120px', transformOrigin: 'bottom center' }}
      className="absolute flex items-center justify-center w-12 h-64 pointer-events-none"
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 180 }}
        transition={{ duration: 2, delay }}
        className="absolute bottom-0 w-0.5 bg-green-900 rounded-full"
      />
      <div className="absolute bottom-[100px]">
        {buds.map((b, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.5 + b.d, duration: 0.8 }}
            style={{
              position: 'absolute',
              width: '8px',
              height: '12px',
              backgroundColor: '#A855F7',
              borderRadius: '50%',
              left: `${b.x}px`,
              top: `${b.y}px`,
              boxShadow: '0 0 5px rgba(168, 85, 247, 0.5)'
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};
