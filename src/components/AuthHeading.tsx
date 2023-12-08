import { SparkleIcon } from 'lucide-react'
import React from 'react'

export const AuthHeading = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-center text-4xl text-black font-bold  '>
              Our Leaderboards are waiting for you to join 
            </p>
            <div className="flex">
            <p className='text-center text-3xl text-black pb-8 '>
              Special prizes every month
            </p>
            <SparkleIcon size={32}/>
            </div>
    </div>
  )
}
