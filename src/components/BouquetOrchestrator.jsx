import React from 'react';
import { motion } from 'framer-motion';
import Rose from './Rose';
import Tulip from './Tulip';
import Peony from './Peony';
import Hydrangea from './Hydrangea';

const BouquetOrchestrator = () => {
  const flowers = [
    { type: Rose, scale: 1.2, rotation: 0, delay: 0, zIndex: 50 },
    { type: Tulip, scale: 1.0, rotation: -25, delay: 15, zIndex: 40 },
    { type: Peony, scale: 1.1, rotation: 25, delay: 30, zIndex: 30 },
    { type: Hydrangea, scale: 0.9, rotation: -40, delay: 45, zIndex: 10 },
    { type: Rose, scale: 1.0, rotation: 15, delay: 60, zIndex: 45 },
    { type: Tulip, scale: 0.9, rotation: -15, delay: 75, zIndex: 35 },
    { type: Peony, scale: 1.0, rotation: -35, delay: 90, zIndex: 25 },
    { type: Hydrangea, scale: 1.1, rotation: 40, delay: 105, zIndex: 5 },
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-end justify-center mb-10 mt-10 scale-[0.7] md:scale-100 transition-transform duration-500">
      {/* Swaying Container */}
      <motion.div
        animate={{ 
          rotate: [-1.5, 1.5, -1.5],
          transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }}
        className="relative flex justify-center w-64 h-full"
      >
        {flowers.map((f, i) => (
          <f.type 
            key={i}
            scale={f.scale}
            rotation={f.rotation}
            delay={f.delay}
            zIndex={f.zIndex}
          />
        ))}

        {/* Ribbon (Kurdele) */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="absolute bottom-0 z-[100] flex flex-col items-center"
        >
          {/* Ribbon Bow */}
          <div className="relative w-24 h-12 flex items-center justify-center">
             <div className="absolute left-0 w-14 h-12 bg-[#BE185D] rounded-full border-b-4 border-r-4 border-[#9D174D] -translate-x-1/2 rotate-12 shadow-md"></div>
             <div className="absolute right-0 w-14 h-12 bg-[#BE185D] rounded-full border-b-4 border-l-4 border-[#9D174D] translate-x-1/2 -rotate-12 shadow-md"></div>
             <div className="w-10 h-10 bg-[#9D174D] rounded-lg z-10 shadow-inner"></div>
          </div>
          <div className="flex gap-12 mt-[-5px]">
            <div className="w-6 h-20 bg-[#BE185D] origin-top -rotate-[25deg] rounded-b-xl border-l-2 border-[#9D174D]"></div>
            <div className="w-6 h-20 bg-[#BE185D] origin-top rotate-[25deg] rounded-b-xl border-r-2 border-[#9D174D]"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BouquetOrchestrator;
