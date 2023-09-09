
import MobileSidebar from '@/components/MobileSidebar'
import HeaderClient from '@/components/Header'
import Link from 'next/link'
import React from 'react'

const RoutesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className=''>
      <div className='hidden md:block'>
      <HeaderClient />
      </div>
      <div className='md:hidden flex justify-between py-6 px-4'>
       <Link href={"/"} className="text-2xl font-semibold text-black hover:opacity-90">
          Logo
        </Link>
        <MobileSidebar />
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default RoutesLayout