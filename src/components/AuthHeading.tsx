import { SparkleIcon } from 'lucide-react'
import React from 'react'

export const AuthHeading = () => {
  return (
    <div className='flex flex-col items-center justify-center relative z-50'>
        <p className='text-center text-3xl lg:text-4xl text-black font-bold pb-3 '>
              Our Leaderboards are waiting for you to join 
            </p>
            <div className="flex">
            <p className='text-center text-2xl lg:text-3xl text-black pb-8 '>
              Special prizes every month
            </p>
            <SparkleIcon size={32}/>
            </div>
    </div>
  )
}
