"use client";

import React from "react";
import { Card } from "./ui/card";
import Scoring from "./Scoring";
import { useSession } from "next-auth/react";
import Draggable from "react-draggable";

export const DashboardInfo = () => {
  const { data: session } = useSession();

  return (
    <Draggable>
      <Card
        data-testid="draggable-component"
        className="mt-5 rounded-2xl shadow-md relative overflow-hidden"
      >
        <div className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 mix-blend-multiply filter blur-3xl opacity-80 absolute inset-0"></div>
        <div className="relative z-20 flex flex-col items-center justify-center p-10 bg-opacity-80 text-black">
          <p className="text-3xl xl:text-4xl font-bold text-center">
            Hello {session?.user?.name}
          </p>
          <Scoring />
        </div>
      </Card>
    </Draggable>
  );
};
