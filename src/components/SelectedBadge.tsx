'use client'

import { Badge } from "@prisma/client"
import Image from "next/image"

interface SelectedBadgeProps {
    selectedBadge: Badge
}

const SelectedBadge = ({selectedBadge}: SelectedBadgeProps) => {
  return (
    <div className="flex flex-col items-center justify-center hover:scale-110 transition duration-500 cursor-pointer">
        <div className="text-orange-700  font-bold text-lg">
            {selectedBadge.name}
        </div>
        <Image src={selectedBadge.src} alt="selected badge" width={40} height={10} 
            className="object-cover"/>
    </div>
  )
}

export default SelectedBadge