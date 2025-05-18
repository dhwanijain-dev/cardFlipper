import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlashcardProps {
  front: string;
  back: string;
  onFlip?: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ front, back, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setIsFlipped(!isFlipped);
    onFlip?.();

    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  return (
    <div 
      className="w-full max-w-md h-64 cursor-pointer"
      onClick={handleFlip}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full rounded-xl p-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          <p className="text-white text-xl font-medium text-center">{front}</p>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full rounded-xl p-6 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className="text-white text-xl font-medium text-center">{back}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Flashcard; 