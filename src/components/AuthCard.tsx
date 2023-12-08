import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { LogoComp } from './LogoComp'
import SiginEmailBtn from './SiginEmailBtn'
import SiginBtn from './SiginBtn'
import Image from 'next/image'
import { Separator } from './ui/separator'
import Link from 'next/link'


export const AuthCard = () => {
  return (
    <div className="relative z-10 mt-[calc(25vh)] h-fit w-full max-w-md overflow-hidden border border-gray-100 sm:rounded-2xl sm:shadow-xl">
    <a
      
      target="_blank"
      className="absolute right-3 top-3 rounded-full border border-gray-300 px-4 py-1 text-xs font-medium shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-500 hover:bg-white/50"
    >
     In development
    </a>
    <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
      <Link href='/'>
        <LogoComp  />
      </Link>
      <h3 className="text-xl font-semibold">Sign in Now</h3>
      <p className="text-sm text-gray-500">
      Engage: Join or create sports events!
        </p>
      <div className='flex flex-col '>
        <h1 className="text-center text-lg">Test credentials</h1>
          <div className="flex space-x-3 text-center items-center justify-center ">
          <p>wellsimon89@gmail.com</p>
          <p>12wellsimon89</p>
          </div>  
      </div>
    </div>
    <div className="flex flex-col space-y-3 bg-gray-50 px-4 py-8 sm:px-16">
       <SiginBtn/>
       <SiginEmailBtn />
    </div>
  </div>
    )
}
