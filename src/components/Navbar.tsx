'use client'

import Link from "next/link";
import { useSession } from 'next-auth/react';
import { useEffect, useMemo, useState } from "react";
import SelectedBadge from "./SelectedBadge";

 const Navbar = ()=> {
  const { data: session } = useSession();
  const [showBackground, setShowBackground] = useState(false)

  // const selectedBadge = useBadgeStore((state) => state.selectedBadge); // Get the selected badge from the global state
  const storedSelectedBadge = localStorage.getItem('selectedBadge');
  const selectedBadge = storedSelectedBadge ? JSON.parse(storedSelectedBadge) : null;

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

console.log(selectedBadge)


  return (
    <nav className= {`  ${showBackground ? ' bg-gradient-to-b from-white to-purple-100' : ''} 
      w-full px-4 fixed z-50 shadow-md  `}>
      <div className={`flex  items-center gap-8 px-5 rounded-xl justify-between 
        py-3 max-w-7xl m-auto transition duration-500`}>
        <Link href={"/"} className="text-2xl font-semibold text-black hover:opacity-80">
          Logo
        </Link>
        <div className="flex items-center gap-4">
        {selectedBadge && (
           <SelectedBadge selectedBadge={selectedBadge}/>
          )}
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
