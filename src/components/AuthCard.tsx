import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { LogoComp } from './LogoComp'
import SiginEmailBtn from './SiginEmailBtn'
import SiginBtn from './SiginBtn'
import Image from 'next/image'
import { Separator } from './ui/separator'

export const AuthCard = () => {
  return (
    <div>
         <Card className="flex items-center justify-center  bg-gradient-to-r border-black  from-purple-50 to-purple-50/50
                flex-col z-50  rounded-xl shadow-xl hover:shadow-2xl transition">
                <CardContent className='flex flex-col md:flex-row space-y-3'>
                  {/* Login part  */}
                  <div className='w-full md:w-1/2 min-h-[400px] flex flex-col items-center justify-center  rounded-xl'>
                      <CardTitle className='flex justify-center items-center flex-col
                        space-y-2 pb-6'>
                        <div className='flex items-center gap-x-2 font-bold text-3xl py-1'>
                        Became a member
                        </div>
                      </CardTitle>
                      <h1 className="text-center text-xl">Test credentials</h1>
                      <div className="flex pb-5 space-x-3 text-center items-center justify-center ">
                      <p>
                      wellsimon89@gmail.com
                      </p>
                      <p>
                      12wellsimon89
                      </p>
                      </div>
                      <SiginBtn />
                      <SiginEmailBtn />
                      <p className="text-sm font-italic pt-1 text-black text-center">
                        First time? dont be shy, show yourself
                      </p>
                  </div>
                  {/* Design part  */}
                  <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
                  <Image src='/images/Raoul-Paoli.png' alt='image' width={600} height={500}/>
                  </div>
                
                </CardContent>
              </Card>
    </div>
  )
}
