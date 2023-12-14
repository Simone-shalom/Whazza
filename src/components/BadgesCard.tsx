"use client";

import { Badge, UserBadge } from "@prisma/client";
import Image from "next/image";
import { XIcon } from "lucide-react";
import CardSlider from "./animations/cardSlidder";

export interface ExtendedBadge extends Badge, UserBadge {}

interface BadgesCardProps {
  userBadges: ExtendedBadge[];
}

const BadgesCard = ({ userBadges }: BadgesCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold">Your badges</h1>
      {userBadges.length === 0 ? (
        <div className="flex items-center justify-center">
          <XIcon size={32} />
          <p>no badges yet, collect one</p>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap  justify-center gap-3">
            {userBadges.map((badge: ExtendedBadge, index) => (
              <CardSlider index={index} key={badge.id}>
                <div
                  key={badge.id}
                  className="flex flex-col items-center justify-center"
                >
                  <div
                    className="flex flex-col items-center justify-center pt-2 hover:scale-110
                    transition duration-500 hover:opacity-100 focus:opacity-100 w-[160px] "
                  >
                    <p className="font-semibold text-xl pb-1">{badge.name}</p>
                    <Image
                      src={badge.src}
                      alt="badge"
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardSlider>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BadgesCard;
