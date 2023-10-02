'use client'

import React from 'react'
import { PuffLoader } from 'react-spinners'


const Loader = () => {
  return (
    <div className='h-[40vh] flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold pb-2'>
          No Events found
        </h1>
        <PuffLoader size={120} color='orange'/>
    </div>
  )
}

export default Loader