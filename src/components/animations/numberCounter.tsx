import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface NumberCounterProps {
  value: number;
  duration: number;
}

const NumberCounter = ({ value, duration }: NumberCounterProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="text-5xl font-bold">
      {inView && <CountUp end={value} duration={duration} />}
    </div>
  );
};

export default NumberCounter;
