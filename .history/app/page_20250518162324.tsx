import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-4">
      <div className="card p-10 border-1 border-gray-300 rounded-3xl">
        <h1 className='text-3xl text-center'><span className=' bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  bg-clip-text'>Neuro</span> Card</h1>
        <p>Master anything with our futuristic spaced repetition flashcard app</p>
        <div>
          <h1>Smart Learning Algorithm  </h1>
          <p>Based on the proven Leitner System for efficient memory retention</p>
        </div>
        <div>

        </div>
        <div>

        </div>
        <button className="button">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default page
