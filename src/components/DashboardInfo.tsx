"use client";

import React from "react";
import { Card } from "./ui/card";
import Scoring from "./Scoring";
import Draggable from "react-draggable";

export const DashboardInfo = () => {
  return (
    <Draggable>
      <Card
        data-testid="draggable-component"
        className="w-full rounded-2xl shadow-md relative overflow-hidden border-separate border-orange-500 h-[240px] md:h-[200px] flex flex-col items-center justify-center "
      >
        <div className="bg-gradient-to-r from-purple-200 to-purple-100  mix-blend-multiply filter blur-3xl opacity-80 absolute inset-0"></div>
        <div className="relative z-20 flex flex-col items-center justify-center  bg-opacity-80 text-black">
          <Scoring />
        </div>
      </Card>
    </Draggable>
  );
};
