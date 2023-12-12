"use client";
import React from "react";
import NumberCounter from "./animations/numberCounter";

export const Statistics = () => {
  return (
    <div className="flex flex-col border-t border-b pt-5 border-collapse border-black space-y-5 lg:space-y-0 lg:flex-row items-center justify-between xl:px-32 lg:px-20 md:px-10 pb-5 mb-5">
      <StatisticsCard value={56} duration={5} text={"Events created"} />
      <StatisticsCard value={127} duration={6} text={"Users joined"} />
      <StatisticsCard value={1062} duration={5} text={"Points given"} />
    </div>
  );
};

interface StatisticsCardProps {
  text: string;
  value: number;
  duration: number;
}

const StatisticsCard = ({ text, value, duration }: StatisticsCardProps) => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <NumberCounter value={value} duration={duration} />
      <p className="text-xl font-semibold font-mono ">{text}</p>
    </div>
  );
};
