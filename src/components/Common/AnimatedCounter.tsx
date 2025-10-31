"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function AnimatedCounter({
  target,
  duration = 2000,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (!inView) {
      // Reset when out of view
      setCount(0);
      return;
    }

    let start = 0;
    const end = target;
    const incrementTime = 30;
    const steps = Math.ceil(duration / incrementTime);
    const increment = end / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [inView, target, duration]);

  return (
    <span
      ref={ref}
      className="tabular-nums text-5xl font-extrabold text-red-dark text-slate-900"
    >
      {count}
      {suffix}
    </span>
  );
}
