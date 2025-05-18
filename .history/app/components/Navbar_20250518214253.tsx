import { Progress } from '@/components/ui/progress'
import { IdCardIcon } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex  justify-between items-center px-3 py-2'>
        <div className="logo flex flex-row gap-2">
            <IdCardIcon className='text-3xl text-orange-500' />
              <h1 className='text-3xl font-bold *: text-center'><span className=' bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  bg-clip-text text-transparent'>Neuro</span> Card</h1>
        </div>

        <div className="xp-level flex ">
            <div className='flex' >
                <div className='w-8 h-8 rounded-full bg-orange-500 flex justify-center items-center'>XP</div>
                <h1 className='text-2xl font-bold'>0 Xp</h1>
            </div>
            <div className="progressBar">
                <Progress value={}/>
            </div>

        </div>


      
    </div>
  )
}

export default Navbar
