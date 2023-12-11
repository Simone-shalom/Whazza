import React from "react";
import { ArrowRight } from "lucide-react";
import ScrollSlider from "./animations/scrollSlider";

export const Steps = [
  {
    number: 1,
    step: "Step 1",
    name: "Authentication",
    text: "First authenticate yourself by clicking on get started or directly event",
  },
  {
    number: 2,
    step: "Step 2",
    name: "Join events",
    text: "Then choose event and join, by adding time to leaderboard, get your points",
  },
  {
    number: 3,
    step: "Step 3",
    name: "Subscribe",
    text: "If u dont have an subscription yet, click subscribe button in the dashboard",
  },
  {
    number: 4,
    step: "Step 4",
    name: "Collect prizes",
    text: "Choose one from available badges and collect them, you are now heroo",
  },
];

export const HowItWorks = () => {
  return (
    <div className="px-10 pb-10">
      <ScrollSlider>
        <h2 className="text-center text-4xl text-black font-extrabold mb-10">
          How it works
        </h2>
        <h3 className="text-center text-2xl text-black font-bold mb-10">
          See the proccess step by step
        </h3>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-3 
        xl:grid-cols-4 gap-10 px-10 "
        >
          {Steps.map((item) => (
            <div
              key={item.name}
              className="bg-transparent shadow-md border-none text-black hover:translate-x-5 transition
                hover:scale-110 duration-500 p-3"
            >
              <div className="flex items-center gap-x-2">
                <div className="w-full space-y-2">
                  <div>
                    <ArrowRight />
                  </div>
                  <h3 className="text-xl font-semibold">{item.step}</h3>
                  <div className="flex w-full justify-between">
                    <div className="px-3 py-1 rounded-lg bg-purple-300">
                      {item.name}
                    </div>
                  </div>
                  <p className=" leading-tight px-2 font-thin text-black-600">
                    {item.text}
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </ScrollSlider>
    </div>
  );
};
