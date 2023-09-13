

import HeaderClient from '@/components/Header'
import MobileSidebar from '@/components/MobileSidebar'
import Link from 'next/link'
import React from 'react'

const RoutesLayout = ({children}: {children: React.ReactNode}) => {



  return (
    <div className=''>
      <div className='hidden md:block'>
        <HeaderClient />
      </div>
      <div className='fixed w-full z-50'>
        <div className={`md:hidden flex bg-zinc-100 justify-between py-4 px-4 rounded-b-xl`}>
        <Link href={"/"} className="text-2xl  font-semibold text-black hover:opacity-90">
            Logo
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