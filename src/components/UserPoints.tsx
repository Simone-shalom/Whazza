"use client";

import { Check } from "lucide-react";

interface UserPointsProps {
  userPoints: number | null;
}

const UserPoints = ({ userPoints }: UserPointsProps) => {
  return (
    <div className="flex items-center justify-center px-4 py-3 max-w-xl bg-orange-700 rounded-md text-white ">
      <h1 className="font-semibold text-lg">Your points:</h1>
      <p className="ml-2 font-bold text-xl rounded-full px-3 py-1 ring- ring-white">
        {userPoints}
      </p>
      <Check size={24} />
    </div>
  );
};

export default UserPoints;
