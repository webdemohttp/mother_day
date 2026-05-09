import React from 'react';
import { motion } from 'framer-motion';

const Rose = ({ scale = 1, rotation = 0, delay = 0, zIndex = 1 }) => {
  const petals = Array.from({ length: 18 }, (_, i) => ({
    r: (i * 25),
    s: 1 - (i * 0.04),
    d: i * 0.08,
    z: 20 - i
  }));

  const bounceTransition = {
    duration: 3,
    delay,
    ease: [0.34, 1.56, 0.64, 1]
  };

  return (
    <motion.div
      style={{ zIndex, scale, rotate: rotation, bottom: '120px', transformOrigin: 'bottom center' }}
      className="absolute flex items-center justify-center w-32 h-64 group"
    >
      {/* Stem */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 180 }}
        transition={{ duration: 2, delay }}
        className="absolute bottom-0 w-1.5 bg-gradient-to-t from-green-900 to-green-600 rounded-full shadow-sm"
      />

      {/* Flower Head */}
      <div className="absolute bottom-[180px] w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
        {petals.map((p, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0, rotate: p.r }}
            animate={{ scale: p.s, opacity: 1, rotate: p.r }}
            transition={{ ...bounceTransition, delay: delay + p.d }}
            className="absolute petal-organic"
            style={{
              width: `${40 + i*2}px`,
              height: `${50 + i*2}px`,
              background: `radial-gradient(circle at center, #E11D48, #881337)`,
              borderRadius: '60% 40% 70% 30% / 70% 30% 60% 40%',
              transformOrigin: 'bottom center',
              zIndex: p.z,
              boxShadow: 'inset -2px -2px 10px rgba(0,0,0,0.3), 0 2px 5px rgba(0,0,0,0.1)'
            }}
          />
        ))}
        {/* Core */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 0.4 }}
          transition={{ delay: delay + 1.5, duration: 2 }}
          className="absolute w-8 h-8 bg-rose-950 rounded-full z-[21] blur-[1px]"
        />
      </div>
    </motion.div>
  );
};

export default Rose;
