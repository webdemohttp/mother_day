import React from 'react';
import { motion } from 'framer-motion';

const Envelope = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center cursor-pointer group" onClick={onClick}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-64 h-40 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-pink-100"
      >
        {/* Envelope Flap */}
        <div className="absolute top-0 left-0 w-full h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-t-[80px] border-t-pink-200 z-10 transition-transform duration-500 group-hover:-translate-y-2"></div>
        
        {/* Envelope Body */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-pink-50"></div>
        
        {/* Heart Seal */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-4xl"
        >
          ❤️
        </motion.div>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 text-xl font-sans-ui text-pink-400 font-light tracking-wide"
      >
        Senin için küçük bir sürprizim var...
      </motion.p>
      
      <p className="mt-2 text-sm text-pink-300 italic opacity-60">
        (Açmak için dokun)
      </p>
    </div>
  );
};

export default Envelope;
