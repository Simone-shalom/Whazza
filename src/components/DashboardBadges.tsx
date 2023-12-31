"use client";
import React from "react";
import { Card } from "./ui/card";
import BadgesCard, { ExtendedBadge } from "./BadgesCard";
import Draggable from "react-draggable";

interface DashboardBadgesProps {
  extendedBadges: ExtendedBadge[];
}

export const DashboardBadges = ({ extendedBadges }: DashboardBadgesProps) => {
  return (
    <Draggable>
      <div className=" md:pt-2 rounded-2xl  relative overflow-hidden shadow-2xl border-orange-500  md:h-[220px] ">
        <div className=" mix-blend-multiply filter blur-xl opacity-60 absolute inset-0"></div>
        <div className="relative z-20 flex items-center justify-center px-5 pt-10 pb-5 md:pt-0">
          <BadgesCard userBadges={extendedBadges} />
        </div>
      </div>
    </Draggable>
  );
};
