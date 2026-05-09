import React from 'react';
import { motion } from 'framer-motion';

const Peony = ({ scale = 1, rotation = 0, delay = 0, zIndex = 1, xOffset = 0 }) => {
  // 15+ petal layers with varying shapes and depths
  const petalCount = 18;
  const petals = Array.from({ length: petalCount }, (_, i) => ({
    rot: (i * (360 / 6)) + (Math.random() * 20),
    s: 1 - (Math.floor(i / 6) * 0.2),
    d: i * 0.1,
    z: petalCount - i,
    borderRadius: `${40 + Math.random() * 20}% ${40 + Math.random() * 20}% ${30 + Math.random() * 20}% ${30 + Math.random() * 20}% / ${60 + Math.random() * 20}% ${60 + Math.random() * 20}% ${20 + Math.random() * 20}% ${20 + Math.random() * 20}%`
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: scale }}
      transition={{ delay, duration: 2, ease: "easeOut" }}
      style={{ 
        zIndex, 
        rotate: rotation, 
        bottom: '0px', 
        left: `calc(50% + ${xOffset}px)`,
        transformOrigin: 'bottom center',
        position: 'absolute'
      }}
      className="flex items-center justify-center w-32 h-96 group"
    >
      {/* Stem with fade out at bottom */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 300 }}
        transition={{ duration: 3, delay }}
        className="absolute bottom-0 w-1 bg-gradient-to-t from-transparent via-green-900 to-green-700 opacity-60"
        style={{ maskImage: 'linear-gradient(to top, transparent, black 20%)' }}
      />

      {/* Flower Head */}
      <div className="absolute bottom-[300px] w-32 h-32 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
        {petals.map((p, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0, rotate: p.rot }}
            animate={{ scale: p.s, opacity: 1, rotate: p.rot }}
            transition={{ duration: 4, delay: delay + p.d, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: 'absolute',
              width: `${60 + i}px`,
              height: `${60 + i}px`,
              background: `radial-gradient(circle at center, #FBCFE8, #DB2777)`,
              borderRadius: p.borderRadius,
              transformOrigin: 'bottom center',
              bottom: '15px',
              zIndex: p.z,
              boxShadow: 'inset 0 0 15px rgba(0,0,0,0.1), 0 2px 10px rgba(0,0,0,0.05)',
              border: '1px solid rgba(251, 207, 232, 0.3)'
            }}
          />
        ))}
        {/* Ethereal Core */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 0.6 }}
          transition={{ delay: delay + 2, duration: 2 }}
          className="absolute w-10 h-10 bg-[#701a75] rounded-full z-[20] blur-[4px] opacity-40"
        />
      </div>
    </motion.div>
  );
};

export default Peony;
