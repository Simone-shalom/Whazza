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
            <div key={badge.id} className="pt-5">
                <Image src={badge.src} alt="badge" width={100} height={100} className="object-cover"/>
            </div>
        ))}
    </div>
  )
}

export default BadgesCard