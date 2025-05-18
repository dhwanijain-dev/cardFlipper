import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FlashcardProps {
  front: string;
  back: string;
  onFlip?: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ front, back, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    if (isFlipping) return; // Prevent multiple flips while animation is in progress
    
    setIsFlipping(true);
    setIsFlipped(!isFlipped);
    onFlip?.();

    // Reset flipping state after animation completes
    setTimeout(() => {
      setIsFlipping(false);
    }, 600); // Match this with the animation duration
  };

  return (
    <div className="perspective-1000 w-full max-w-md h-64 cursor-pointer" onClick={handleFlip}>
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className={`absolute w-full h-full backface-hidden rounded-xl p-6 flex items-center justify-center
          ${isFlipped ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gradient-to-br from-blue-500 to-cyan-500'}
          shadow-lg shadow-purple-500/20`}>
          <p className="text-white text-xl font-medium text-center">{isFlipped ? back : front}</p>
        </div>
        <div className={`absolute w-full h-full backface-hidden rounded-xl p-6 flex items-center justify-center rotate-y-180
          ${isFlipped ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}
          shadow-lg shadow-purple-500/20`}>
          <p className="text-white text-xl font-medium text-center">{isFlipped ? front : back}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Flashcard; 