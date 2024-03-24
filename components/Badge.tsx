"use client";

import { BadgeProps } from "@/types";
import CountUp from "react-countup";

export default function Badge({
  containerStyles,
  endCountNum,
  endCountText,
}: BadgeProps) {
  return (
    <div className={`${containerStyles}`}>
      <div className="flex items-center justify-center gap-x-2">
        <div className="text-4xl leading-none font-bold">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
      </div>
    </div>
  );
}
