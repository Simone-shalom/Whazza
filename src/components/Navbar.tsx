'use client'

import Link from "next/link";
import { useSession } from 'next-auth/react';
import { useEffect, useState } from "react";

 const Navbar = ()=> {
  const { data: session } = useSession();
  const [showBackground, setShowBackground] = useState(false)
 
  const generateDashboardLink = () => {
    const callbackUrl = '/dashboard'; // Specify your desired dashboard URL
    const customSignInPage = '/auth'; // Path to your custom sign-in page

    if (session) {
      return callbackUrl;
    } else {
      // Generate the link to your custom sign-in page with callbackUrl
      return `${customSignInPage}?callbackUrl=${encodeURIComponent(callbackUrl)}`;
    }
  };

  const TOP_OFFSET = 66

  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > TOP_OFFSET) {
            setShowBackground(true)
    }else {
        setShowBackground(false)
    }
}
window.addEventListener('scroll', handleScroll)

return() =>{
    window.removeEventListener('scroll', handleScroll)
}

},[])


  return (
    <nav className=" w-full px-4 fixed z-50">
      <div className={`flex  items-center gap-8 px-5 rounded-xl justify-between 
        py-6 max-w-5xl m-auto transition duration-500 
        ${showBackground ? 'bg-zinc-100' : ''}`}>
        <Link href={"/"} className="text-2xl font-semibold text-black hover:opacity-80">
          Logo
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/events" className="font-medium text-lg  hover:scale-110 transition duration-200 text-black hover:opacity-80">
            Events
          </Link>
          <Link href="/pricing" className="font-medium text-lg  hover:scale-110 transition duration-200 text-black hover:opacity-90">
            Pricing
          </Link>
          <Link href={generateDashboardLink()} className="font-medium text-sm text-white bg-black px-4 py-2 
            rounded-lg hover:opacity-90  hover:scale-110 transition duration-200">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
