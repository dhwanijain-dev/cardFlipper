'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Flashcard from '../../components/Flashcard';
import ProgressBar from '../../components/ProgressBar';
import StreakTracker from '../../components/StreakTracker';
import { motion } from 'framer-motion';

// Sample flashcards data
const sampleCards = [
  { id: 1, front: 'What is React?', back: 'A JavaScript library for building user interfaces' },
  { id: 2, front: 'What is TypeScript?', back: 'A typed superset of JavaScript that compiles to plain JavaScript' },
  { id: 3, front: 'What is Tailwind CSS?', back: 'A utility-first CSS framework for rapidly building custom designs' },
];

const Home = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [cardsReviewed, setCardsReviewed] = useState(0);

  const handleCardFlip = () => {
    // Award XP for reviewing a card
    setXp(prev => prev + 10);
    setCardsReviewed(prev => prev + 1);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % sampleCards.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Stats */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <StreakTracker currentStreak={streak} />
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Daily Progress</h3>
              <ProgressBar current={xp} total={100} label="XP Progress" />
            </div>
          </div>

          {/* Middle Column - Flashcard */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Flashcard
                front={sampleCards[currentCardIndex].front}
                back={sampleCards[currentCardIndex].back}
                onFlip={handleCardFlip}
              />
            </motion.div>
            <button
              onClick={handleNextCard}
              className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full 
                       text-white font-medium hover:from-purple-600 hover:to-pink-600 
                       transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              Next Card
            </button>
          </div>

          {/* Right Column - Progress */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Today's Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Cards Reviewed</p>
                  <p className="text-2xl font-bold">{cardsReviewed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total XP Earned</p>
                  <p className="text-2xl font-bold">{xp}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
