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
      <Card className="mt-5 md:pt-5 rounded-2xl shadow-md relative overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-300 via-emerald-300 to-emerald-400 mix-blend-multiply filter blur-xl opacity-60 absolute inset-0"></div>
        <div className="relative z-20 flex items-center justify-center px-5 pt-10 pb-5 md:pt-0">
          <BadgesCard userBadges={extendedBadges} />
        </div>
      </Card>
    </Draggable>
  );
};
