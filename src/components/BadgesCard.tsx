'use client'

import { Badge, UserBadge } from "@prisma/client"
import Image from "next/image";

export interface ExtendedBadge extends Badge, UserBadge {}

interface BadgesCardProps {
  userBadges: ExtendedBadge[];
}

const BadgesCard = ({userBadges}: BadgesCardProps) => {
  return (
    <div>
        {userBadges.map((badge: ExtendedBadge) => (
            <div key={badge.id} className="flex flex-col items-center">
              <h1 className="text-center font-semibold text-2xl">You badges</h1>
                <div className="flex flex-col items-center pt-5 hover:scale-110
                  transition duration-500 hover:opacity-100 focus:opacity-100 ">
                  <p className="font-semibold text-xl pb-1">{badge.name}</p>
                  <Image src={badge.src} alt="badge" width={100} height={100} 
                    className="object-cover"/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BadgesCard