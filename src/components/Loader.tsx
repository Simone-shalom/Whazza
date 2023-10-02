'use client'

import Link from 'next/link'
import React from 'react'
import { PuffLoader } from 'react-spinners'
import { Button } from './ui/button'


const Loader = () => {
  return (
    <div className=' pt-12 flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold'>
      No events found
      </h1>
      <Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank"
          className='text-2xl font-semibold pb-2 pt-3 hover:scale-110 transition duration-300'>
            <Button variant='link'>
              Well
            </Button>
        </Link>
        <PuffLoader size={160} color='orange'/>
    </div>
  )
}

export default Loader