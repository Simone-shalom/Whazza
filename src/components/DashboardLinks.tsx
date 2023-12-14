"use client";
import React from "react";
import Draggable from "react-draggable";
import { Button } from "./ui/button";
import PrizesButton from "./PrizesButton";
import Link from "next/link";
import { Card } from "./ui/card";
import BadgesButton from "./BadgesButton";
import LogoutBtn from "./LogoutBtn";
import { PrizesModal } from "./modals/PrizesModal";
import { BadgesModal } from "./modals/BadgesModal";
import { ExtendedBadge } from "./BadgesCard";
import { Badge } from "@prisma/client";

interface DashboardLinksProps {
  hasSub: boolean;
  customerPortal: string | undefined;
  checkoutLink: string | null;
  totalPoints: number;
  extendedBadges: ExtendedBadge[];
  badges: Badge[];
}

export const DashboardLinks = ({
  hasSub,
  customerPortal,
  checkoutLink,
  totalPoints,
  extendedBadges,
  badges,
}: DashboardLinksProps) => {
  return (
    <Draggable>
      <div className="w-full rounded-2xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden border-separate border-orange-500 h-[300px] md:h-[200px]">
        <div className="  mix-blend-multiply filter blur-xl opacity-60 absolute inset-0"></div>
        {hasSub ? (
          <div className="rounded-md  px-4 py-2 max-w-xl bg-orange-700  font-semibold text-white">
            You have a subscription!
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center rounded-lg pb-5 gap-4 ">
            <div className="rounded-md px-4 py-2 max-w-xl bg-orange-700 opacity-70  font-semibold text-white">
              You are on free mode!
            </div>
          </div>
        )}
        <div className="relative z-20 flex flex-col items-center justify-center md:flex-row md:gap-8 pt-5">
          <main className="w-full md:w-1/2 flex flex-col items-center">
            {hasSub ? (
              <div className="flex flex-col gap-4 w-full items-center justify-center pb-5">
                <Button
                  variant="outline"
                  className="opacity-90 max-w-xl hover:scale-110 transition duration-500 border-orange-500"
                >
                  <Link href={String(customerPortal)}>Manage subscription</Link>
                </Button>
                <PrizesButton sub={hasSub} />
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center rounded-lg pb-5 gap-4 ">
                <Button
                  variant="secondary"
                  className="opacity-90 max-w-xl hover:scale-110 transition duration-500 border-orange-500"
                >
                  <Link href={String(checkoutLink)}>
                    Get subscription, checkout now!
                  </Link>
                </Button>
                <PrizesButton />
              </div>
            )}
          </main>
          <div className="w-full md:w-1/2 flex flex-col items-center gap-4 pb-5">
            <BadgesButton sub={hasSub} />
            <LogoutBtn />
            <PrizesModal
              userPoints={totalPoints}
              badges={badges}
              userBadges={extendedBadges}
            />
            <BadgesModal badges={extendedBadges} />
          </div>
        </div>
      </div>
    </Draggable>
  );
};
