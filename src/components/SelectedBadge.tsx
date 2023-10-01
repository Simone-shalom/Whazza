'use client'

import Image from "next/image"


const SelectedBadge = () => {
 
  // Get the selected badge from localStorage
  const storedSelectedBadge = typeof window !== 'undefined' ? localStorage.getItem('selectedBadge') : null;
    const selectedBadge = storedSelectedBadge ? JSON.parse(storedSelectedBadge) : null;
 
  return (
    <>
    <div className="flex flex-col items-center justify-center hover:scale-110 transition duration-1000 w-[150px] ">
        <div className="text-orange-700  font-bold text-lg">
            {selectedBadge.name}
        </div>
        <Image src={selectedBadge.src} alt="selected badge" width={40} height={10} 
            className="object-cover"/>
    </div>
    </>
  )
}

export default SelectedBadge