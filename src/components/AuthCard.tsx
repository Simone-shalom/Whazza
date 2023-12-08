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
         <Card className="flex items-center justify-center
                flex-col z-50 rounded mx-2 shadow-xl hover:shadow-2xl transition opacity-90 hover:opacity-100 duration-500">
                <CardContent className='flex w-[440px] my-10 md:w-[720px] lg:w-[800px] xl:w-[900px]  flex-col md:flex-row space-y-3 md:space-y-0 p-0'>
                  {/* Login part  */}
                  <div className='w-full  flex flex-col items-center justify-center  rounded-xl'>
                    {/* /images/5640746.jpg */}
                    <div className='w-full h-full flex flex-col' style={{ backgroundImage: `url('/images/6272.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      <CardTitle className='flex justify-center md:pt-10 items-center flex-col
                        space-y-2 pb-2 pt-3'>
                        <div className='flex items-center gap-x-2 font-bold text-3xl py-1'>
                        Became a member
                        </div>
                      </CardTitle>
                      <div className='flex flex-col pb-20'>
                        <h1 className="text-center text-xl">Test credentials</h1>
                        <div className="flex pb-12 space-x-3 text-center items-center justify-center ">
                        <p>
                        wellsimon89@gmail.com
                        </p>
                        <p>
                        12wellsimon89
                        </p>
                        </div>  
                      </div>
                      <SiginBtn />
                      <SiginEmailBtn />
                      <p className="text-sm font-italic pt-6 text-black text-center pb-10">
                        First time? dont be shy, show yourself
                      </p>
                      </div>
                  </div>
                  {/* Design part  */}
    
                   {/* <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
                  <Image src='/images/event.jpg' alt='image' width={500} height={200} className='object-cover '/> */}
                  {/* <div className='w-full h-full flex flex-col items-center justify-center' style={{ backgroundImage: `url('/images/6272.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                   
                    </div>  */}
                  {/* </div> */}
                
                </CardContent>
              </Card>
    </div>
  )
}
