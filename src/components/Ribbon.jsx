import React from 'react';
import { motion } from 'framer-motion';

const Ribbon = ({ delay = 5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="absolute bottom-0 z-[100] flex flex-col items-center"
    >
      {/* Silk Ribbon Knot */}
      <div className="relative w-28 h-12 flex items-center justify-center">
         {/* Left Loop */}
         <div className="absolute left-0 w-16 h-12 bg-gradient-to-br from-[#DB2777] to-[#BE185D] rounded-[50%_50%_40%_40%] border-b-4 border-r-4 border-[#9D174D] -translate-x-1/2 rotate-12 shadow-xl skew-x-6"></div>
         {/* Right Loop */}
         <div className="absolute right-0 w-16 h-12 bg-gradient-to-bl from-[#DB2777] to-[#BE185D] rounded-[50%_50%_40%_40%] border-b-4 border-l-4 border-[#9D174D] translate-x-1/2 -rotate-12 shadow-xl -skew-x-6"></div>
         {/* Center Silk Knot */}
         <div className="w-10 h-10 bg-[#BE185D] rounded-[50%_50%_40%_40%] z-10 shadow-inner border border-[#9D174D]"></div>
      </div>
      
      {/* Flowing Tails */}
      <div className="flex gap-14 mt-[-8px]">
        <motion.div 
          animate={{ rotate: [-25, -28, -25] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-28 bg-gradient-to-b from-[#BE185D] to-[#9D174D] origin-top -rotate-[25deg] rounded-b-3xl border-l-2 border-[#9D174D] shadow-2xl skew-y-6"
        />
        <motion.div 
          animate={{ rotate: [25, 28, 25] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-7 h-28 bg-gradient-to-b from-[#BE185D] to-[#9D174D] origin-top rotate-[25deg] rounded-b-3xl border-r-2 border-[#9D174D] shadow-2xl -skew-y-6"
        />
      </div>
    </motion.div>
  );
};

export default Ribbon;
