import React from 'react';
import { motion } from 'framer-motion';

const Petal = ({ rotate, delay, scale = 1, color, animationDelay }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0, rotate }}
    animate={{ scale, opacity: 1, rotate }}
    transition={{ 
      duration: 1.5, 
      delay: animationDelay + delay,
      ease: [0.16, 1, 0.3, 1] 
    }}
    style={{
      position: 'absolute',
      width: '40px',
      height: '70px',
      backgroundColor: color,
      borderRadius: '50% 50% 50% 50% / 80% 80% 20% 20%',
      transformOrigin: 'bottom center',
      bottom: '100%', // Sits right on top of the connection point
      left: 'calc(50% - 20px)',
      boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
    }}
  />
);

const Sepal = ({ delay }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: delay + 0.5, duration: 1 }}
    className="absolute z-10"
    style={{ bottom: '100%', left: 'calc(50% - 10px)' }}
  >
    {/* Small green leaves under the flower */}
    {[ -30, 0, 30 ].map((rot, i) => (
      <div 
        key={i}
        style={{
          position: 'absolute',
          width: '20px',
          height: '25px',
          backgroundColor: '#166534',
          borderRadius: '0 100% 0 100%',
          transform: `rotate(${rot}deg) translateY(5px)`,
          transformOrigin: 'bottom center'
        }}
      />
    ))}
  </motion.div>
);

const Flower = ({ scale = 1, rotation = 0, delay = 0, zIndex = 1, xOffset = 0, stemHeight = 180 }) => {
  const outerPetals = [0, 45, 90, 135, 180, 225, 270, 315];
  const innerPetals = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      style={{ 
        zIndex, 
        rotate: rotation, 
        bottom: '0px', 
        left: `calc(50% + ${xOffset}px)`,
        transformOrigin: 'bottom center',
        position: 'absolute'
      }}
      className="flex items-center justify-center w-32"
    >
      {/* Stem - Connected Perfectly */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: stemHeight }}
        transition={{ duration: 1.5, delay }}
        className="absolute bottom-0 w-1 bg-gradient-to-t from-transparent via-green-700 to-green-600 rounded-full"
        style={{ transformOrigin: 'bottom center' }}
      >
        {/* Sepal & Flower Head at the tip of the stem */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <Sepal delay={delay} />
          
          <div className="relative flex items-center justify-center">
            {outerPetals.map((deg, i) => (
              <Petal 
                key={`outer-${i}`} 
                rotate={deg} 
                delay={0.6 + (i * 0.05)} 
                color="#ff8fa3" 
                animationDelay={delay}
              />
            ))}
            {innerPetals.map((deg, i) => (
              <Petal 
                key={`inner-${i}`} 
                rotate={deg} 
                delay={1.0 + (i * 0.05)} 
                scale={0.7} 
                color="#ffb3c1" 
                animationDelay={delay}
              />
            ))}
            {/* Center */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 1.8, duration: 0.5 }}
              className="absolute w-6 h-6 rounded-full z-20 bg-[#ffea00] shadow-sm -translate-y-[35px]"
              style={{ left: 'calc(50% - 12px)' }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Flower;
