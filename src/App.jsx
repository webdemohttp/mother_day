import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlowerBouquet from './components/FlowerBouquet';
import Envelope from './components/Envelope';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const playerRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
    if (playerRef.current) {
      const iframe = playerRef.current;
      const src = iframe.src;
      iframe.src = src + "&autoplay=1";
    }
  };

  const message = "Hayatımdaki tüm güzelliklerin mimarı, düştüğümde elimi tutan ilk el, kalbimdeki bitmeyen huzur... Senin sevgin, bu dünyadaki en güvenli limanım oldu. Varlığınla hayatıma kattığın her renk için sana minnettarım. Sadece bugün değil, her gün başımın tacısın. Anneler Günün kutlu olsun canım annem!";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 4, // Synchronized with bouquet bloom
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div className="min-h-screen bg-soft-gradient flex items-center justify-center p-4 overflow-hidden relative">
      {/* Hidden YouTube Player */}
      <iframe
        ref={playerRef}
        width="0"
        height="0"
        src="https://www.youtube.com/embed/T9u3xpOp0aQ?enablejsapi=1&mute=0"
        title="Background Music"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        className="absolute opacity-0 pointer-events-none"
      ></iframe>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
          >
            <Envelope onClick={handleOpen} />
          </motion.div>
        ) : (
          <div className="relative flex flex-col items-center w-full max-w-5xl text-center z-10">
            {/* Bouquet & Heart Rain */}
            <FlowerBouquet active={isOpen} />
            
            {/* Poem Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 px-4 md:px-10"
            >
              <h1 className="font-serif-heart text-2xl md:text-3xl lg:text-4xl text-pink-600 leading-relaxed drop-shadow-sm">
                {message.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 10, duration: 2 }}
                className="mt-8 font-sans-ui text-pink-400 font-medium tracking-widest uppercase text-xs md:text-sm"
              >
                — Senin sevgin hayatın en güzel hediyesi
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
