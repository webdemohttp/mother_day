import React from 'react';
import { motion } from 'framer-motion';
import Flower from './Flower';
import HeartRain from './HeartRain';

const FlowerBouquet = ({ active }) => {
  // 18 flowers in a dense, natural cluster
  const flowerData = Array.from({ length: 18 }, (_, i) => ({
    scale: 0.85 + Math.random() * 0.35,
    rotation: -28 + Math.random() * 56, // Natural V-shape spread
    delay: Math.random() * 3, // Faster bloom for V7.0
    zIndex: Math.floor(Math.random() * 50),
    xOffset: (Math.random() - 0.5) * 160, 
    stemHeight: 200 + Math.random() * 80
  }));

  return (
    <div className="relative w-full h-[550px] flex items-end justify-center mb-10 scale-[0.75] lg:scale-100 transition-all duration-1000">
      {/* Heart Rain Particles emerging from bouquet center */}
      <div className="absolute bottom-[250px] left-1/2 -translate-x-1/2">
        <HeartRain active={active} />
      </div>

      {/* Main Bouquet Swaying */}
      <motion.div
        animate={active ? { 
          rotate: [-1.2, 1.2, -1.2],
          y: [0, -4, 0],
        } : {}}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative flex justify-center w-full h-full"
      >
        {flowerData.map((f, i) => (
          <Flower 
            key={i}
            scale={f.scale}
            rotation={f.rotation}
            delay={f.delay}
            zIndex={f.zIndex}
            xOffset={f.xOffset}
            stemHeight={f.stemHeight}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FlowerBouquet;
