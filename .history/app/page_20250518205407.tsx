import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-4">
      <div className="card flex flex-col gap-6 p-10 border-1 border-gray-300 rounded-3xl">
        <h1 className='text-3xl font-bold *: text-center'><span className=' bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  bg-clip-text text-transparent'>Neuro</span> Card</h1>
        <p>Master anything with our futuristic spaced repetition flashcard app</p>
        <div className='px-3 py-2 border-1 border-gray-300 rounded-lg'>
          <h1 className="text-center">Smart Learning Algorithm  </h1>
          <p>Based on the proven Leitner System for efficient memory retention</p>
        </div>
        <div className='px-3 py-2 border-1 border-gray-300 rounded-lg'>
          <h1 className="text-center">Track Your Progress  </h1>
          <p>Visual stats, streaks, and XP to keep you motivated</p>
        </div>
        <div className='px-3 py-2 border-1 border-gray-300 rounded-lg'>
          <h1 className="text-center">Customize Your Decks </h1>
          <p>Create multiple decks for all your learning needs</p>
        </div>  

        
        <button className="button flex items-center just">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default page
