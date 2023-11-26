

import { LogoComp } from '@/components/LogoComp'
import MobileSidebar from '@/components/MobileSidebar'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const RoutesLayout = ({children}: {children: React.ReactNode}) => {



  return (
    <div className=''>
      <div className='hidden md:block'>
        <Navbar />
      </div>
      <div className='fixed w-full z-50'>
        <div className={`md:hidden flex bg-gradient-to-b from-purple-100 to-purple-50  justify-between py-4 px-4 rounded-b-xl`}>
        <Link href={"/"} className="text-2xl  font-semibold text-black hover:opacity-90">
            <LogoComp />
          </Link>
          <MobileSidebar />
        </div>
      </div>
      <main className=''>
        {children}
      </main>
    </div>
  )
}

export default RoutesLayout