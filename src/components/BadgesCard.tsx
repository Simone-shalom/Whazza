'use client'

import { Badge, UserBadge } from "@prisma/client"
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { XIcon } from "lucide-react";

export interface ExtendedBadge extends Badge, UserBadge {}

interface BadgesCardProps {
  userBadges: ExtendedBadge[];
}


const BadgesCard = ({userBadges}: BadgesCardProps) => {
  
  console.log(userBadges)

  return (
  <div className="flex flex-col justify-center items-center">
     <h1 className="text-2xl font-semibold">
        Your badges
      </h1>
      {userBadges.length === 0 ? (
        <div className="flex items-center justify-center">
          <XIcon size={32}/>
          <p>
            subscribe to get access to your badges
          </p>
        </div>
      ): (
        <div className="flex items-center justify-center">
      <div className="grid grid-flow-col  justify-center gap-8">
          {userBadges.map((badge: ExtendedBadge) => (
              <div key={badge.id} className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center pt-5 hover:scale-110
                    transition duration-500 hover:opacity-100 focus:opacity-100 ">
                    <p className="font-semibold text-xl pb-1">{badge.name}</p>
                    <Image src={badge.src} alt="badge" width={100} height={100} 
                      className="object-cover"/>
                  </div>
              </div>
          ))}
      </div>
      </div>
      )}
    </div>
  )
}

export default BadgesCard