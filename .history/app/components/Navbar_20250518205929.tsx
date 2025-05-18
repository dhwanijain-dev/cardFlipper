import { IdCardIcon } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center px-3 py-2'>
        <div className="logo flex gap-2">
            <IdCardIcon className='text-3xl text-orange-500' />
            <h1 className='text-3xl font-bold text-orange-500'>Neuro Card</h1>
        </div>
        
      
    </div>
  )
}

export default Navbar
