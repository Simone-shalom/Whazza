import Image from 'next/image'
import React from 'react'

export const LogoComp = () => {
  return (
    <div className='flex'>
        {/* <Image  src='/images/Logo-sportify.png' width={100} height={100} alt='logo-sportify' className='opacity-50'/> */}
        <h1 className='hover:scale-110 transition duration-300'>
            Sportify
        </h1>
    </div>
  )
}
