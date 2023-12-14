"use client";
import { ArrowBigDownDash } from "lucide-react";
import AnimatedBlob from "./AnimatedBlob";
import { useSession } from "next-auth/react";
import UserPoints from "./UserPoints";

interface DashboardHeroProps {
  userPoints: number;
}

export const DashboardHero = ({ userPoints }: DashboardHeroProps) => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center pt-20">
      <AnimatedBlob>
        <div className="m-8 relative space-y-4">
          <div className="flex items-center text-center justify-center text-4xl xl:text-5xl font-semibold pb-2">
            Your Dashboard
          </div>
          {session && (
            <div className="flex items-center text-center justify-center text-3xl xl:text-4xl font-semibold text-orange-700">
              Hello {session.user?.name}
            </div>
          )}

          <div className="flex flex-col items-center justify-center text-2xl xl:text-3xl font-semibold text-gray-900">
            <div className="flex pb-2">
              Drag it as you want
              <ArrowBigDownDash size={40} className="text-black ml-2" />
            </div>
            <UserPoints userPoints={userPoints} />
          </div>
        </div>
      </AnimatedBlob>
    </div>
  );
};
