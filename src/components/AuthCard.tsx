import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { LogoComp } from './LogoComp'
import SiginEmailBtn from './SiginEmailBtn'
import SiginBtn from './SiginBtn'

export const AuthCard = () => {
  return (
    <div>
         <Card className="relative flex items-center justify-center bg-gradient-to-r border-black  from-purple-100 to-purple-50/50
                flex-col z-50 px-10 pt-8 pb-4 rounded-xl shadow-xl hover:shadow-2xl transition">
              <div className="text-black font-extrabold text-xl absolute right-2 top-2">
                <LogoComp />
              </div>
                <CardContent>
                  <CardTitle className='flex justify-center items-center flex-col
                    space-y-2 pb-6'>
                    <div className='flex items-center gap-x-2 font-bold text-2xl py-1'>
                    Became a member
                    </div>
                  </CardTitle>
                  <h1 className="text-center text-xl">Test credentials</h1>
                  <div className="flex pb-5 space-x-3 ">
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
                </CardContent>
              </Card>
    </div>
  )
}
