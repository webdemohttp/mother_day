import React from 'react';
import { motion } from 'framer-motion';

const Tulip = ({ scale = 1, rotation = 0, delay = 0, zIndex = 1 }) => {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    rot: (i * 30),
    s: 1 - (i * 0.02),
    d: i * 0.05
  }));

  return (
    <motion.div
      style={{ zIndex, scale, rotate: rotation, bottom: '120px', transformOrigin: 'bottom center' }}
      className="absolute flex items-center justify-center w-24 h-72 group"
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 220 }}
        transition={{ duration: 2, delay }}
        className="absolute bottom-0 w-2 bg-gradient-to-t from-green-800 to-green-500 rounded-full"
      />

      <div className="absolute bottom-[220px] w-16 h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        {petals.map((p, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0, rotate: p.rot }}
            animate={{ scale: p.s, opacity: 1, rotate: p.rot }}
            transition={{ duration: 3, delay: delay + p.d, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              position: 'absolute',
              width: '40px',
              height: '70px',
              background: `radial-gradient(circle at bottom, #FEF9C3, #FACC15)`,
              borderRadius: '50% 50% 40% 40% / 80% 80% 20% 20%',
              transformOrigin: 'bottom center',
              zIndex: 10 - i,
              border: '1px solid rgba(254, 240, 138, 0.5)'
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Tulip;
